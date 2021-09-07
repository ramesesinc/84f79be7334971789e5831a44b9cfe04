(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{171:function(e,t,n){e.exports=n.p+"static/media/filipizen.5fd85b9e.svg"},292:function(e,t,n){e.exports=n(501)},297:function(e,t,n){},488:function(e,t){},492:function(e,t,n){},493:function(e,t,n){},495:function(e,t,n){},496:function(e,t,n){},500:function(e,t,n){},501:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),o=(n(297),n(46)),l=n(16),s=function(e){return r.a.createElement("div",{className:"HomeScreen"},r.a.createElement("div",{className:"HomeScreen__panel"},r.a.createElement("img",Object.assign({className:"HomeScreen__image",src:n(171)},e,{alt:"filipizen logo"})),r.a.createElement("div",{className:"HomeScreen__infoContainer"},r.a.createElement("div",{className:"HomeScreen__information"},r.a.createElement("label",{className:"HomeScreen__title"},"Experience ease of doing business with the government"),r.a.createElement("label",{className:"HomeScreen__description"},"Over 50 local government units participating all over the Philippines.")),r.a.createElement("button",{className:"HomeScreen__button",onClick:function(){e.history.push("/partners")}},"Start Here"),r.a.createElement("div",{className:"Spacer"}))))},m=n(269),u=n(18),p=n(2),d=n(75),f=(n(492),function(e){var t=function(e){var t=e.children,n={header:null,left:null,center:null,right:null,footer:null};return r.a.Children.forEach(t,(function(e){if(e){var t=e.props.target||"center",a="string"===typeof e.type?e.type:e.type.name;/header/i.test(a)?t="header":/footer/i.test(a)&&(t="footer"),n[t]||(n[t]=[]),n[t].push(e)}})),n}(e),n=t.header,a=t.center,c=t.footer;return r.a.createElement("div",{className:"template"},r.a.createElement("div",{className:"row header"},n),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"main"},a," "))),r.a.createElement("div",{className:"row footer"},c))}),b=function(e){return r.a.createElement("img",Object.assign({src:n(171)},e,{alt:"filipizen"}))},v=(n(87),n(493),function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(o.b,{to:"/partners"},r.a.createElement(b,null)))}),g=(n(495),function(e){return r.a.createElement("div",{className:"Footer"},r.a.createElement("span",{className:"Footer__info"},"@2021 Sitemap | Privacy | Legal | Feedback"))}),h=["children"],E=function(e){var t=e.children,n=Object(d.a)(e,h),a=void 0===n.showHeader||n.showHeader;return r.a.createElement(f,{logo:b},a&&r.a.createElement(v,null),t,r.a.createElement(g,null))},y=(n(496),p.P.lookup("CloudPartnerService","partner")),O=Object(p.cb)(),j=function(e){var t=e.partners,n=t[0].group;return r.a.createElement("div",{className:"PartnerGroup"},r.a.createElement(p.T,null,n.title),r.a.createElement(p.C,{items:t},(function(e){var t=e.item;return r.a.createElement("div",{key:t.id,style:{paddingBottom:2}},r.a.createElement(p.A,{style:"0"!==t.isonline?{}:{color:"#aaa"},component:o.b,to:{pathname:"/partner/".concat(n.objid,"_").concat(t.name,"/services"),state:{partner:t}},caption:"".concat(t.title," (").concat(t.id,")")}))})))},w=function(e){var t=e.partners,n=Object(p.eb)(t,"clusterid");return r.a.createElement("div",{className:"PartnerList_group"},Object.keys(n).map((function(e){return/test/i.test(e)?null:r.a.createElement(j,{key:e,partners:n[e]})})))},S=function(e){var t=Object(a.useState)(!0),n=Object(u.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)([]),l=Object(u.a)(o,2),s=l[0],d=l[1],f=function(e,t){var n=s.findIndex((function(t){return t.id===e}));if(n>=0){var a=s[n];if(a.isonline!==t){a.isonline=t;var r=Object(m.a)(s);r[n]=a,d(r)}}};return O.register("activate",(function(e){f(e,"1")})),O.register("deactivate",(function(e){f(e,"0")})),r.a.useEffect((function(){i(!0),y.invoke("getActivePartners",null,(function(e,t){e?console.log("Error loading partners ",e):d(t),i(!1)}))}),[]),r.a.createElement(E,null,r.a.createElement("div",{className:"PartnerList"},c&&r.a.createElement(p.z,null),!c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p.Q,{height:20}),r.a.createElement(p.Y,null,"Select a Partner Agency"),r.a.createElement(w,{partners:s}))))},k={container:{background:"#2c3e50",padding:"4px 50px",display:"flex",flexDirection:"row",alignItems:"center"},title:{color:"#ddd",paddingLeft:5,fontSize:"16pt",fontWeight:"bold",textDecoration:"none"}},x=function(e){var t=e.partner,n=e.Logo;return r.a.createElement(p.K,{style:k.container},r.a.createElement(o.b,{to:{pathname:"/partner/".concat(t.name,"/services"),state:{partner:t}}},r.a.createElement("div",null,n)),r.a.createElement("div",{style:k.title},t.title&&t.title.toUpperCase()))},C=["children"],P=function(e){var t,n=e.children,a=Object(d.a)(e,C);return r.a.createElement(E,{logo:b},r.a.createElement(x,Object.assign({Logo:(t=a.partner,r.a.createElement(p.v,{style:{height:"40px"},src:"/assets/".concat(t.id,".png"),height:"30px"}))},a)),n)},B=n(86),W=(n(497),n(498),[{name:"bpls",lib:"filipizen-bpls",title:"Business",services:[{module:"bpls",name:"businessbilling",title:"Business Online Billing",component:"BplsBillingWebController"},{module:"bpls",name:"renewbusiness",title:"Renew Business Application",component:"RenewBusinessWebController"}]},{name:"rptis",lib:"filipizen-rptis",title:"Real Property",services:[{module:"rptis",name:"rptbilling",title:"Realty Tax Online Billing",component:"RptBillingWebController"},{module:"rptis",name:"rpttaxclearance",title:"Online Realty Tax Clearance",component:"RealtyTaxClearanceWebController"}]},{name:"waterworks",lib:"filipizen-waterworks",title:"Waterworks",services:[{module:"waterworks",name:"waterworksbilling",title:"Waterworks Billing",component:"WaterworksBillingWebController"}]},{name:"obo",lib:"filipizen-obo",title:"Building and Construction",services:[{module:"obo",name:"bldgpermit",title:"Building Permit Application",component:"BuildingPermitWebController"},{module:"obo",name:"occupancypermit",title:"Certificate of Occupancy Application",component:"OccupancyPermitWebController"},{module:"obo",name:"registerprofessionals",title:"Register Professional",component:"ProfessionalWebController"},{module:"obo",name:"updateprofessional",title:"Update Professional",component:"UpdateProfessionalWebController"},{module:"obo",name:"apptracking",title:"Application Tracking",component:"AppTrackingWebController"},{module:"obo",name:"obobilling",title:"OSCP Online Billing and Payment",component:"OboBillingWebController"},{module:"obo",name:"ptrbilling",title:"Pay PTR (Professional Tax Receipt)",component:"PtrBillingWebController"}]}]),N=function(e){var t=e.includeservices;if(!t)return[];var n=new RegExp("(".concat(t,")"),"i"),a=e.excludeservices?new RegExp("(".concat(e.excludeservices,")"),"i"):null,r=[].concat(W);return r.forEach((function(e){var t=e.services.filter((function(e){return n.test(e.name)&&(!a||!a.test(e.name))}));e.services=t})),r.filter((function(e){return e.services.length>0}))},_={},I=function(e){var t=e.modules,n=e.onSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.K,{style:H.screen},t.map((function(e,t){return r.a.createElement(p.K,{key:"".concat(e.name).concat(t),style:H.moduleContainer},r.a.createElement(p.T,null,e.title),r.a.createElement(p.C,{items:e.services,style:H.list},(function(t){var a=t.item;return r.a.createElement(p.A,{key:a.name,component:"button",onClick:function(){return n(e,a)}},a.title)})))}))))},H={screen:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"flex-start",alignItems:"wrap"},list:{display:"flex",flexDirection:"column",alignItems:"flex-start"},moduleContainer:{width:300},maintenanceContainer:{display:"flex",marginTop:20},maintenanceInfo:{},maintenanceImage:{width:350},maintenanceTitle:{fontSize:"3rem",fontWeight:800}},R=function(e){var t=e.location,n=e.history,c=Object(a.useState)(),i=Object(u.a)(c,2),o=i[0],l=i[1],s=Object(a.useState)([]),m=Object(u.a)(s,2),d=m[0],f=m[1];Object(a.useEffect)((function(){var e=t.state?t.state.partner:null;e?(l(e),f(N(e))):function(e){return new Promise((function(t,n){var a=e.pathname.match("/partner/(.*)_(.*)/services");(!a||a.length<3)&&n("Invalid path");var r=a[1],c=a[2];p.P.lookup("CloudPartnerService","partner").invoke("findByGroupAndName",{groupname:r,name:c},(function(e,a){e?n("Partner ".concat(c," does not exist. ").concat(e)):"0"!==a.isonline?t(a):n("Partner is offline.")}))}))}(t).then((function(e){l(e),f(N(e))})).catch((function(e){return n.push("/partners")}))}),[t,n]);return o?r.a.createElement(P,{partner:o,location:t,history:n},r.a.createElement(p.J,null,r.a.createElement(p.Q,{height:20}),d.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p.Y,null,"Select Transaction"),r.a.createElement(p.Q,{height:20}),r.a.createElement(I,{modules:d,onSelect:function(e,t){n.push({pathname:"/partner/".concat(o.group.name,"_").concat(o.name,"/").concat(e.name,"/").concat(t.name),state:{partner:o,module:e,service:t}})}}),r.a.createElement(p.Q,{height:50})),0===d.length&&r.a.createElement("div",{style:H.maintenanceContainer},r.a.createElement("div",{style:H.maintenanceInfo},r.a.createElement("label",{style:H.maintenanceTitle},"Website under maintenance"),r.a.createElement("p",null,"This website is currently undergoing a scheduled maintenance. Will return shortly. Our apologies for the inconvenience.")),r.a.createElement("img",{style:H.maintenanceImage,src:"/assets/filipizen.png",alt:"Under Maintenance"})))):r.a.createElement(E,null)},T=["partner","service"],z=function(e){return function(e){var t=_[e.module];return"undefined"===typeof t&&("bpls"===e.module?t=B.a.lib((function(){return n.e(3).then(n.bind(null,548))})):"rptis"===e.module?t=B.a.lib((function(){return n.e(5).then(n.bind(null,549))})):"waterworks"===e.module?t=B.a.lib((function(){return n.e(6).then(n.bind(null,550))})):"obo"===e.module&&(t=B.a.lib((function(){return n.e(4).then(n.bind(null,551))}))),_[e.module]=t),t}(e)},A=function(e){var t=Object(l.g)(),n=Object(l.f)(),c=function(e){return e&&e.state?e.state:{}}(t),i=c.partner,o=c.service,s=Object(d.a)(c,T),m=Object(a.useState)(i),f=Object(u.a)(m,2),b=f[0],v=f[1],g=Object(a.useState)(o),h=Object(u.a)(g,2),E=h[0],y=h[1];if(Object(a.useEffect)((function(){i||function(e){return new Promise((function(t,n){var a=e.pathname.match("/partner/(.*)_(.*)/(.*)/(.*)");(!a||a.length<5)&&n("Invalid path");var r=a[1],c=a[2],i=a[3],o=a[4];p.P.lookup("CloudPartnerService","partner").invoke("findByGroupAndName",{groupname:r,name:c},(function(e,a){if(e)n("Partner ".concat(c," does not exist. ").concat(e));else if("0"!==a.isonline){var r,l=N(a).find((function(e){return e.name===i})),s=l?l.services.find((function(e){return e.name===o})):null;if(!l||!s)return r="/partner/".concat(a.group.name,"_").concat(a.name,"/services"),void t({redirectUrl:r});t({partner:a,module:l,service:s})}else n("Partner is offline.")}))}))}(t).then((function(e){e.redirectUrl?n.replace(e.redirectUrl):(v(e.partner),y(e.service))})).catch((function(e){return n.replace("/partners")}))}),[n,i,t]),!b||!E)return null;var O=z(E);return r.a.createElement(P,{partner:b},r.a.createElement(O,Object.assign({},e,{partner:b,service:E},s),(function(t){var n=t[E.component];return r.a.createElement(n,Object.assign({},e,{partner:b,service:E},s))})))},Q=n(88),L=function(e){var t=e.location.location,n=Object(a.useState)({}),c=Object(u.a)(n,2),i=c[0],o=c[1];Object(a.useEffect)((function(){t&&function(){var e=Object(p.db)(t,"orgcode");p.P.lookup("CloudPartnerService","partner").invoke("findById",{id:e},(function(e,t){o(e?{}:t)}))}()}),[t]);return r.a.createElement(P,{partner:i},r.a.createElement(p.j,{center:!0},r.a.createElement(Q.f,Object.assign({onClose:function(){i&&i.name?e.history.replace({pathname:"/partner/".concat(i.name,"/services"),state:{partner:i}}):e.history.replace({pathname:"/partners",state:{partner:i}})}},e,{partner:i}))))},D=function(e){var t=e.location,n=e.history,c=Object(a.useState)({}),i=Object(u.a)(c,2),o=i[0],l=i[1];Object(a.useEffect)((function(){t&&function(){var e=Object(p.db)(t,"orgcode");p.P.lookup("CloudPartnerService","partner").invoke("findById",{id:e},(function(e,t){l(e?{}:t)}))}()}),[t]);return r.a.createElement(P,{partner:o},r.a.createElement(p.K,null,r.a.createElement(Q.e,Object.assign({onClose:function(){o&&o.name?n.replace({pathname:"/partner/".concat(o.name,"/services"),state:{partner:o}}):n.replace({pathname:"/partners",state:{partner:o}})}},e,{partner:o}))))},U=n(158),F=n.n(U),K=n(266),J=p.P.lookup("CloudPartnerService","partner"),G=p.P.lookup("CloudQrCodeInfoService","partner"),q=function(){var e=Object(K.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.P.lookupAsync("".concat(t.orgcode,":OnlineQrCodeInfoService"),t.connection,t.module);case 2:return n=e.sent,e.next=5,n.invoke("getInfos",t);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){var t=e.msg;return r.a.createElement("div",{style:V.container},r.a.createElement(p.e,null,r.a.createElement("div",{style:{maxWidth:450}},r.a.createElement(b,{width:200}),r.a.createElement("h2",null,"Document Validation"),r.a.createElement(p.s,{msg:t}))))},V={container:{padding:"0px",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#f5f5f5",minHeight:"100%",paddingLeft:20,paddingRight:20,paddingBottom:20},caption:{width:200,fontWeight:600}},Y=function(e){var t=e.location,n=Object(a.useState)(!0),c=Object(u.a)(n,2),i=c[0],o=c[1],l=Object(a.useState)({}),s=Object(u.a)(l,2),m=s[0],d=s[1],f=Object(a.useState)([]),v=Object(u.a)(f,2),g=v[0],h=v[1],E=Object(a.useState)(),y=Object(u.a)(E,2),O=y[0],j=y[1],w=Object(a.useState)(!1),S=Object(u.a)(w,2),k=S[0],x=S[1],C=Object(a.useState)(),P=Object(u.a)(C,2),B=P[0],W=P[1];return Object(a.useEffect)((function(){J.invoke("findById",{id:m.orgcode},(function(e,t){W(t)}))}),[m]),Object(a.useEffect)((function(){var e={};e.data=Object(p.db)(t,"data"),x(!0),G.invoke("decode",e,(function(e,t){e?(j(e),x(!1),o(!1)):(d(t),q(t).then((function(e){h(e),x(!1),o(!1)})).catch((function(e){j(e.toString()),x(!1),o(!1)})))}))}),[t]),i||k||!B?null:O?r.a.createElement(M,{msg:O}):0===g.length?r.a.createElement(M,{msg:"QR Code or document is invalid"}):r.a.createElement("div",{style:V.container},r.a.createElement(p.e,null,r.a.createElement("div",{style:{maxWidth:450}},r.a.createElement(b,{width:200}),r.a.createElement("h2",null,"Document Validation"),g.map((function(e,t){return e.title?r.a.createElement(p.T,{key:t},e.title):r.a.createElement(p.K,null,r.a.createElement(p.y,{style:V.caption},e.caption),r.a.createElement(p.y,null,e.value))})))))},$={actions:{display:"flex",flexDirection:"row",justifyContent:"center"},code:{fontSize:120,color:"#686868"},label:{fontSize:36,fontWeight:"bold",color:"#3f51b5",textAlign:"center"}},X=function(e){return r.a.createElement(E,{showHeader:!1},r.a.createElement(p.J,null,r.a.createElement(p.Q,{height:60}),r.a.createElement(b,{width:200}),r.a.createElement(p.Q,{height:30}),r.a.createElement(p.j,{center:!0},r.a.createElement(p.y,{labelStyle:$.code},"404"),r.a.createElement("label",{style:$.label},"Sorry, the page you tried to access cannot be found."),r.a.createElement(p.Q,{height:40}),r.a.createElement(p.K,{style:$.actions},r.a.createElement(p.d,{style:{paddingLeft:50,paddingRight:50},caption:"Start Here",size:"large",onClick:function(){e.history.push("/partners")}})))))},Z=[{name:"home",exact:!0,path:"/",component:s},{name:"partners",path:"/partners",component:S},{name:"services",path:"/partner/:partnerId/services",component:R},{name:"service",path:"/partner/:partnerId/:module/:service",component:A},{name:"success",path:"/payment/success",component:L},{name:"error",path:"/payment/error",component:D},{name:"systools",exact:!0,path:"/admin/systool",component:s},{name:"epayment-monitoring",exact:!0,path:"/admin/monitor/epayment",component:n(267).a},{name:"qrcode",exact:!0,path:"/qr",component:Y},{name:"404",path:"*",component:X}];n(500);var ee=function(){return r.a.createElement(o.a,null,r.a.createElement(l.c,null,Z.map((function(e){return r.a.createElement(l.a,Object.assign({key:e.name},e))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[292,1,2]]]);