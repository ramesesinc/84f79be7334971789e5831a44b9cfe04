const CHANNEL = '/gdx';

this.findService = function(serviceName) {
    let result = $.ajax({
        type  : "GET", 				
        url   : '/service/' + serviceName, 
        async : false, 
        error : function( xhr ) { 
            err = xhr.responseText; 
        } 				
    }).responseText;
    return this.JSON.parse(result);
};

this.findServiceAsync = async function(name) {
    let socket = io(CHANNEL);
    socket.connect();
    return new Promise((resolve, reject) =>  {
        socket.emit('get_service', name, (service) => {
            resolve(service);
        });
    });
};

this.RemoteProxy = function(name, channel) {
    this.name = name;
    this.channel = channel;
    this.socket = io(CHANNEL);
    this.socket.connect();
    
	this.invoke = async function( method, args, handler ) {
        let promise = new Promise((resolve, reject) => {
            let params = {
                service: name,
                method: method,
                channel: channel,
                args: args
            }
            this.socket.emit('invoke', params, (res) => {
                if (res.status === 'OK') {
                    handler({status: res.status}, res.data);
                    resolve({status: res.status});
                } else {
                    handler(res, {});
                    reject(res);
                }
            });
        });
        return await promise;
	};
};

this.LocalProxy = function(name, connection, mod) {
    this.name = name;
    this.module = mod;
    this.connection = connection;
    
    var convertResult = function( result ) {
        if (result==null) return null;

        var datatype = (typeof result); 
        if ( datatype == 'string') { 
            result = unescape( result ); 
            try {
                if ( result.indexOf('[') == 0 && result.lastIndexOf(']') > 1 ) {
                    return JSON.parse(result); 
                } 

                var idx0 = result.indexOf('{'); 
                var idx1 = result.lastIndexOf('}'); 
                if ( idx0 >= 0 && idx1 > idx0 ) { 
                    result = result.substring(idx0, idx1+1); 
                } 
                return JSON.parse(result); 
            } 
            catch(e) { 
                console.log( e ); 
            } 
        } 
        return eval(result);
    } 

    var guid = function() { 
        function s4() { return ''+ Math.floor(Math.random()*1000000001); } 
        return s4() +'-'+ s4() +'-'+ s4(); 
    } 

    var getDomain = function() { 
        var href = window.location.href;
        href = href.substring( href.indexOf('://') + 3);
        href = href.split('/')[0];
        return href.split(':')[0];
    } 

    this.invoke = function( action, args, handler ) {
        var urlaction = '/js-invoke'+ (this.module? '/'+this.module:'');
        urlaction += '/'+ this.connection +'/'+ this.name +'.'+ action; 
        var err = null; 
        var data = []; 
        if( args ) { 
            if (args.length == 0 || !args[0]) {
                //do nothing
            } else { 
                var _args = [(args? args[0]: null)];
                data.push('args=' + encodeURIComponent(JSON.stringify( _args ))); 
            } 
        }
        data = data.join('&');

        // this is a default connection 
        if (handler == null) { 
            var result = $.ajax({
                type  : "POST",                 
                url   : urlaction, 
                data  : data, 
                async : false, 
                error : function( xhr ) { 
                    err = xhr.responseText; 
                }               
            }).responseText;

            if ( err!=null ) {
                throw new Error(err);
            }
            return convertResult( result );
        }
        else {
            $.ajax({ 
                type    : "POST",   
                url     : urlaction, 
                data    : data, 
                async   : true, 
                success : function( data ) { 
                    var r = convertResult(data);
                    handler(r); 
                },
                error   : function( xhr ) { 
                    handler( null, new Error(xhr.responseText) ); 
                }               
            });
        }
    }
};



this.Service2 = new function() {
    this.debug = false;
    this.serviceCache = {};
    this.module = null;

    this.lookup = function(name, connection, mod) { 
        let idx = name.indexOf(':');
        let isRemote = (idx > 0); 
        let serviceName = name;
        let channel = '';
        let module = this.module;
        if(connection == null) connection = "default";
        if( mod ) module = mod;

        if (isRemote) {
            channel = name.substring(0, idx);
            serviceName = name.substring(idx + 1);
        }

		if ( this.serviceCache[serviceName] == null ) {
            const sinfo = findService(serviceName);
            const service = {
                name: serviceName
            };

            if (isRemote) {
                service.proxy = new RemoteProxy(serviceName, channel)
            } else  {
                service.proxy = new LocalProxy(serviceName, connection, module)
            }

            sinfo.methods.forEach(method => {
                service[method.name] = async function(arg, handler) {
                    return await this.proxy.invoke(method.name, arg, handler);
                };
            });

            this.serviceCache[serviceName] = service;
        } 
        return this.serviceCache[serviceName];
	}
};
