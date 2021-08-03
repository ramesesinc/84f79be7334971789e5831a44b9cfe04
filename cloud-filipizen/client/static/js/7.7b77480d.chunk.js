(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{614:function(e,t,n){"use strict";n.r(t),n.d(t,"WaterworksBillingWebController",(function(){return d}));var a=n(0),r=n.n(a),i=n(2),o=(n(108),n(109));function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e){var t=e.title,n=e.partner,o=e.onCancel,l=e.onSubmit,c=e.error,u=Object(i.Z)()[0],s=u.refno,p=u.txntype,d=Object(a.useState)(u.bill),E=d[0],f=d[1],y=Object(a.useState)(c)[0],O=Object(a.useState)(!1)[0];return r.a.createElement(i.e,{style:{maxWidth:500}},r.a.createElement(i.P,null,t),r.a.createElement(i.K,null,"Billing Information"),r.a.createElement(i.H,null),r.a.createElement(i.m,{msg:y}),r.a.createElement(i.n,{context:E,handler:f},r.a.createElement(i.O,{name:"acctno",caption:"Account No.",readOnly:!0}),r.a.createElement(i.O,{name:"acctname",caption:"Account Name",readOnly:!0}),r.a.createElement(i.O,{name:"address.text",caption:"Address",readOnly:!0}),r.a.createElement(i.O,{name:"classificationid",caption:"Classification",readOnly:!0}),r.a.createElement(i.O,{name:"billno",caption:"Last Bill Period",readOnly:!0}),r.a.createElement(i.C,{row:!0},r.a.createElement(i.O,{name:"monthname",caption:"Bill Month",readOnly:!0}),r.a.createElement(i.O,{name:"year",caption:"Bill Year",readOnly:!0})),r.a.createElement(i.C,{row:!0},r.a.createElement(i.O,{name:"meter.size.title",caption:"Meter Size",readOnly:!0}),r.a.createElement(i.O,{name:"consumption.prev.reading",caption:"Previous Reading",readOnly:!0}),r.a.createElement(i.O,{name:"consumption.reading",caption:"Current Reading",readOnly:!0}),r.a.createElement(i.O,{name:"consumption.volume",caption:"Consumption",readOnly:!0})),r.a.createElement(i.H,null),r.a.createElement("h4",null,"Bill Details"),r.a.createElement(i.M,{items:E.items,showPagination:!1},r.a.createElement(i.N,{expr:"item.title",caption:"Account"}),r.a.createElement(i.N,{expr:"remarks",caption:"Particulars"}),r.a.createElement(i.N,{expr:function(e){return Object(i.R)(e.amount)},caption:"Amount Due",type:"decimal",align:"right"})),r.a.createElement(i.C,{style:m.totalContainer},r.a.createElement("h4",{style:m.total},"TOTAL"),r.a.createElement("h4",{style:m.amount},Object(i.R)(E.amount)))),r.a.createElement(i.a,{disabled:O},r.a.createElement(i.b,{caption:"Back",action:function(){o(0)}}),r.a.createElement(i.d,{caption:"Confirm Payment",action:function(){l({refno:s,txntype:p,origin:"filipizen",orgcode:n.id,billtoyear:E.billtoyear,billtoqtr:E.billtoqtr,paidby:E.paidby,paidbyaddress:E.paidbyaddress,amount:E.amount,info:{data:E},particulars:"Wateworks Account No. "+E.acctno})},disableWhen:0===E.amount})))},m={subtitle:{fontSize:16,fontWeight:400,opacity:.8,color:"green"},totalContainer:{display:"flex",justifyContent:"flex-end",marginTop:-10},total:{fontWeight:800,marginRight:40},amount:{marginRight:20}},u={txntype:"waterworks",refno:null,bill:{},contact:{}},s=function(e,t){switch(t.type){case"SET_BILL":return e.refno=t.refno,void(e.bill=t.bill);case"SET_CONTACT":return void(e.contact=t.contact)}},p=[{step:1,name:"verification",caption:"Verification",Component:o.b},{step:2,name:"initial",caption:"Initial Information",Component:function(e){var t=e.title,n=e.partner,o=e.moveNextStep,c=e.movePrevStep,m=Object(i.Z)(),u=m[1],s=m[0].txntype,p=Object(a.useState)(),d=p[0],E=p[1],f=Object(a.useState)(!1),y=f[0],O=f[1],b=Object(a.useState)(),g=b[0],v=b[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.e,null,r.a.createElement(i.P,null,t),r.a.createElement(i.K,null,"Initial Information"),r.a.createElement(i.H,null),r.a.createElement(i.m,{msg:d}),r.a.createElement(i.O,{caption:"Account No.",name:"refno",value:g,onChange:v,readOnly:y,autoFocus:!0}),r.a.createElement(i.a,null,r.a.createElement(i.b,{caption:"Back",variant:"text",action:c}),r.a.createElement(i.d,{caption:"Next",action:function(e){void 0===e&&(e={}),O(!0),E(null),function(e){void 0===e&&(e={});try{return Promise.resolve(i.G.lookupAsync(n.id+":OnlineWaterworksBillingService","waterworks")).then((function(t){var n=l({txntype:s,refno:g},e);return Promise.resolve(t.invoke("getBilling",n))}))}catch(e){return Promise.reject(e)}}(e).then((function(e){u({type:"SET_BILL",refno:g,bill:e}),o()})).catch((function(e){E(e.toString()),O(!1)}))},loading:y,disabled:y}))))}},{step:3,name:"payment",caption:"Payment",Component:function(e){var t=Object(i.Z)();return r.a.createElement(o.d,l({module:{title:"Waterworks Online Billing",component:c}},e,{contact:t[0].contact,initialStep:1,cancelPayment:e.cancelPayment}))}}],d=function(e){var t=e.partner,n=e.service,o=e.location,c=e.history,m=e.initialStep,d=Object(a.useState)(void 0===m?0:m),E=d[0],f=d[1],y=p[E];return r.a.createElement(i.I,{initialState:u,reducer:s},r.a.createElement(i.B,null,r.a.createElement(i.i,{center:!0},r.a.createElement(y.Component,l({page:y},{partner:t,service:n,location:o,history:c,moveNextStep:function(){f((function(e){return e+1}))},movePrevStep:function(){0===E?c.goBack():f((function(e){return e-1}))},cancelPayment:function(){f(1)},title:"Waterworks Online Billing"})))))}}}]);