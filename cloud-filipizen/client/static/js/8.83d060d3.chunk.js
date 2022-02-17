(this["webpackJsonpfilipizen-client"]=this["webpackJsonpfilipizen-client"]||[]).push([[8],{745:function(e,t,n){"use strict";n.r(t),n.d(t,"WaterworksBillingWebController",(function(){return d}));var a=n(0),i=n.n(a),r=n(2),l=(n(117),n(118));function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e){var t=e.title,n=e.partner,l=e.onCancel,o=e.onSubmit,c=e.error,u=Object(r.ob)()[0],p=u.refno,s=u.txntype,d=Object(a.useState)(u.bill),f=d[0],E=d[1],b=Object(a.useState)(c)[0],y=Object(a.useState)(!1)[0];return i.a.createElement(r.e,{style:{maxWidth:500}},i.a.createElement(r.ab,null,t),i.a.createElement(r.U,null,"Billing Information"),i.a.createElement(r.R,null),i.a.createElement(r.t,{msg:b}),i.a.createElement(r.u,{context:f,handler:E},i.a.createElement(r.Z,{name:"acctno",caption:"Account No.",readOnly:!0}),i.a.createElement(r.Z,{name:"acctname",caption:"Account Name",readOnly:!0}),i.a.createElement(r.Z,{name:"address.text",caption:"Address",readOnly:!0}),i.a.createElement(r.Z,{name:"classificationid",caption:"Classification",readOnly:!0}),i.a.createElement(r.Z,{name:"billno",caption:"Last Bill Period",readOnly:!0}),i.a.createElement(r.K,{row:!0},i.a.createElement(r.Z,{name:"monthname",caption:"Bill Month",readOnly:!0}),i.a.createElement(r.Z,{name:"year",caption:"Bill Year",readOnly:!0})),i.a.createElement(r.K,{row:!0},i.a.createElement(r.Z,{name:"meter.size.title",caption:"Meter Size",readOnly:!0}),i.a.createElement(r.Z,{name:"consumption.prev.reading",caption:"Previous Reading",readOnly:!0}),i.a.createElement(r.Z,{name:"consumption.reading",caption:"Current Reading",readOnly:!0}),i.a.createElement(r.Z,{name:"consumption.volume",caption:"Consumption",readOnly:!0})),i.a.createElement(r.R,null),i.a.createElement("h4",null,"Bill Details"),i.a.createElement(r.X,{items:f.items,showPagination:!1},i.a.createElement(r.Y,{expr:"item.title",caption:"Account"}),i.a.createElement(r.Y,{expr:"remarks",caption:"Particulars"}),i.a.createElement(r.Y,{expr:function(e){return Object(r.cb)(e.amount)},caption:"Amount Due",type:"decimal",align:"right"})),i.a.createElement(r.K,{style:m.totalContainer},i.a.createElement("h4",{style:m.total},"TOTAL"),i.a.createElement("h4",{style:m.amount},Object(r.cb)(f.amount)))),i.a.createElement(r.a,{disabled:y},i.a.createElement(r.b,{caption:"Back",action:function(){l(0)}}),i.a.createElement(r.c,{caption:"Confirm Payment",action:function(){o({refno:p,txntype:s,origin:"filipizen",orgcode:n.id,billtoyear:f.billtoyear,billtoqtr:f.billtoqtr,paidby:f.paidby,paidbyaddress:f.paidbyaddress,amount:f.amount,info:{data:f},particulars:"Wateworks Account "+f.acctno+" Bill No. "+f.billno})},disableWhen:0===f.amount})))},m={subtitle:{fontSize:16,fontWeight:400,opacity:.8,color:"green"},totalContainer:{display:"flex",justifyContent:"flex-end",marginTop:-10},total:{fontWeight:800,marginRight:40},amount:{marginRight:20}},u={txntype:"waterworks",refno:null,bill:{},contact:{}},p=function(e,t){switch(t.type){case"SET_BILL":return e.refno=t.refno,void(e.bill=t.bill);case"SET_CONTACT":return void(e.contact=t.contact)}},s=[{step:1,name:"verification",caption:"Verification",Component:l.b},{step:2,name:"initial",caption:"Initial Information",Component:function(e){var t=e.title,n=e.partner,l=e.moveNextStep,c=e.movePrevStep,m=Object(r.ob)(),u=m[1],p=m[0].txntype,s=Object(a.useState)(),d=s[0],f=s[1],E=Object(a.useState)(!1),b=E[0],y=E[1],g=Object(a.useState)(),v=g[0],O=g[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.e,null,i.a.createElement(r.ab,null,t),i.a.createElement(r.U,null,"Initial Information"),i.a.createElement(r.R,null),i.a.createElement(r.t,{msg:d}),i.a.createElement(r.Z,{caption:"Account No.",name:"refno",value:v,onChange:O,readOnly:b,autoFocus:!0}),i.a.createElement(r.a,null,i.a.createElement(r.b,{caption:"Back",variant:"text",action:c}),i.a.createElement(r.c,{caption:"Next",action:function(e){void 0===e&&(e={}),y(!0),f(null),function(e){void 0===e&&(e={});try{return Promise.resolve(r.Q.lookupAsync(n.id+":OnlineWaterworksBillingService","waterworks")).then((function(t){var n=o({txntype:p,refno:v},e);return Promise.resolve(t.invoke("getBilling",n))}))}catch(e){return Promise.reject(e)}}(e).then((function(e){u({type:"SET_BILL",refno:v,bill:e}),l()})).catch((function(e){f(e.toString()),y(!1)}))},loading:b,disabled:b}))))}},{step:3,name:"payment",caption:"Payment",Component:function(e){var t=Object(r.ob)();return i.a.createElement(l.d,o({module:{title:"Waterworks Online Billing",component:c}},e,{contact:t[0].contact,initialStep:1,cancelPayment:e.cancelPayment}))}}],d=function(e){var t=e.partner,n=e.service,l=e.location,c=e.history,m=e.initialStep,d=Object(a.useState)(void 0===m?0:m),f=d[0],E=d[1],b=s[f];return i.a.createElement(r.S,{initialState:u,reducer:p},i.a.createElement(r.J,null,i.a.createElement(r.j,{center:!0},i.a.createElement(b.Component,o({page:b},{partner:t,service:n,location:l,history:c,moveNextStep:function(){E((function(e){return e+1}))},movePrevStep:function(){0===f?c.goBack():E((function(e){return e-1}))},cancelPayment:function(){E(1)},title:"Waterworks Online Billing"})))),i.a.createElement(r.R,{height:50}))}}}]);