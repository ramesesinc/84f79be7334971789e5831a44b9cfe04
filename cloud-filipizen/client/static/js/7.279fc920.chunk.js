(this["webpackJsonpfilipizen-client"]=this["webpackJsonpfilipizen-client"]||[]).push([[7],{1384:function(e,t,n){"use strict";n.r(t),n.d(t,"RealtyTaxClearanceWebController",(function(){return O})),n.d(t,"RptBillingWebController",(function(){return d}));var a=n(0),r=n.n(a),l=n(2),i=(n(117),n(118));function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e){var t=e.initialValue,n=void 0===t?{}:t,i=e.open,c=e.onAccept,u=e.onCancel,m=Object(a.useState)(n),p=m[0],s=m[1],d=Object(a.useState)(Object(l.hb)(n.fromyear,Object(l.cb)()+3))[0],b=Object(a.useState)([1,2,3,4]),f=b[0],y=b[1];return Object(a.useEffect)((function(){var e=n.fromqtr;p.billtoyear===n.fromyear&&1!==e?y(Object(l.hb)(e,4)):(y([1,2,3,4]),s(o({},p,{billtoqtr:4})))}),[p.billtoyear]),r.a.createElement(l.F,{open:i,caption:"Pay Options",onAccept:function(){c(p)},onCancel:u,maxWidth:100},r.a.createElement(l.s,{context:p,handler:s,style:{width:"250px"}},r.a.createElement(l.h,{caption:"Year to Bill",name:"billtoyear",items:d}),r.a.createElement(l.N,{caption:"Quarter to Bill",name:"billtoqtr",items:f})))},u=function(e){var t=e.title,n=e.partner,i=e.onCancel,u=e.onSubmit,m=e.error,p=Object(l.lb)()[0],s=p.refno,d=p.txntype,b=p.contact,f=Object(a.useState)(p.bill),y=f[0],E=f[1],O=Object(a.useState)(m),v=O[0],S=O[1],h=Object(a.useState)(!1),g=h[0],x=h[1],j=Object(a.useState)(!1),P=j[0],T=j[1],C=(Object(a.useState)(),Object(a.useState)(),Object(a.useState)()),B=C[0],I=C[1],N=!!b.email&&b.email===y.email;return r.a.createElement(l.d,{style:{maxWidth:500}},r.a.createElement(l.Y,null,t),r.a.createElement(l.S,null,"Billing Information"),r.a.createElement(l.P,null),r.a.createElement(l.r,{msg:v}),r.a.createElement(l.s,{context:y,handler:E},r.a.createElement(l.I,{row:!0},r.a.createElement(l.X,{name:"billno",caption:"Bill No.",readOnly:!0}),r.a.createElement(l.X,{name:"billdate",caption:"Bill Date",readOnly:!0})),r.a.createElement(l.X,{name:"tdno",caption:"TD No.",readOnly:!0}),r.a.createElement(l.X,{name:"fullpin",caption:"PIN",readOnly:!0}),r.a.createElement(l.X,{name:"taxpayer.name",caption:"Property Owner",readOnly:!0,visibleWhen:N}),r.a.createElement(l.X,{name:"taxpayer.address",caption:"Owner Address",readOnly:!0,visibleWhen:N}),r.a.createElement(l.X,{name:"billperiod",caption:"Bill Period",readOnly:!0}),r.a.createElement(l.l,{name:"amount",caption:"Amount Due",readOnly:!0,textAlign:"left"})),r.a.createElement(l.a,{disabled:g},r.a.createElement(l.b,{caption:"Back",action:function(){i(0)}}),r.a.createElement(l.I,{row:!0},r.a.createElement(l.c,{caption:"Pay Option",action:function(){return T(!0)},variant:"outlined"}),r.a.createElement(l.c,{caption:"Confirm Payment",action:function(){var e=o({},y,{barcode:B}),t=e.items;delete e.items,u({refno:s,txntype:d,origin:"filipizen",orgcode:n.id,billtoyear:y.billtoyear,billtoqtr:y.billtoqtr,paidby:y.paidby,paidbyaddress:y.paidbyaddress,amount:y.amount,particulars:"Real Property Tax TD No. "+y.tdno+" Payment for: "+y.billperiod,items:t,info:{data:e}})},disableWhen:0===y.amount}))),r.a.createElement(c,{initialValue:y&&{billtoyear:y.billtoyear,billtoqtr:y.billtoqtr,fromyear:y.fromyear,fromqtr:y.fromqtr},open:P,onAccept:function(e){var t;T(!1),void 0===(t=e)&&(t={}),x(!0),S(null),function(e){void 0===e&&(e={});try{return Promise.resolve(l.O.lookupAsync(n.id+":OnlineLandTaxBillingService","rpt")).then((function(t){var n=o({txntype:d,refno:s},e);return Promise.resolve(t.invoke("getBilling",n))}))}catch(e){return Promise.reject(e)}}(t).then((function(e){E(e.info),I(e.info.billno),x(!1)})).catch((function(e){S(e.toString()),x(!1)}))},onCancel:function(){return T(!1)}}))},m={txntype:"rptcol",refno:null,bill:{},contact:{}},p=function(e,t){switch(t.type){case"SET_BILL":return e.refno=t.refno,void(e.bill=t.bill);case"SET_CONTACT":return void(e.contact=t.contact)}},s=[{step:1,name:"verification",caption:"Verification",Component:i.b},{step:2,name:"initial",caption:"Initial Information",Component:function(e){var t=e.title,n=e.partner,i=e.moveNextStep,c=e.movePrevStep,u=Object(l.lb)(),m=u[1],p=u[0].txntype,s=(new Date).getFullYear(),d=Object(a.useState)(),b=d[0],f=d[1],y=Object(a.useState)(!1),E=y[0],O=y[1],v=Object(a.useState)(),S=v[0],h=v[1],g=Object(a.useState)(s+1),x=g[0],j=g[1],P=Object(a.useState)("initial"),T=P[0],C=P[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.d,null,r.a.createElement(l.Y,null,t),r.a.createElement(l.S,null,"Initial Information"),r.a.createElement(l.P,null),r.a.createElement(l.r,{msg:b}),r.a.createElement(l.I,{visibleWhen:"initial"===T},r.a.createElement(l.X,{caption:"Tax Declaration No.",name:"refno",value:S,onChange:h,readOnly:E,autoFocus:!0})),r.a.createElement(l.I,{visibleWhen:"initial-advance"===T},r.a.createElement("p",null,"The associated ledger is fully paid for the current year.",r.a.createElement("br",null),"To pay in advance, specify the year and click Next button."),r.a.createElement(l.P,null),r.a.createElement(l.I,null,r.a.createElement(l.X,{caption:"Tax Declaration No.",name:"refno",value:S,onChange:h,readOnly:!0}),r.a.createElement(l.u,{caption:"Advance Year to Pay",name:"billtoyear",value:x,onChange:j,thousandSeparator:!1,autoFocus:!0}))),r.a.createElement(l.a,null,r.a.createElement(l.b,{caption:"Back",variant:"text",action:c}),r.a.createElement(l.c,{caption:"Next",action:function(){"initial-advance"===T&&x<=s?f("Advance year to pay should be greater than "+s):(O(!0),f(null),function(e){void 0===e&&(e={});try{return Promise.resolve(l.O.lookupAsync(n.id+":OnlineLandTaxBillingService","rpt")).then((function(t){var n=o({txntype:p,refno:S},e);return"initial-advance"===T&&(n.billtoyear=x),Promise.resolve(t.invoke("getBilling",n))}))}catch(e){return Promise.reject(e)}}().then((function(e){m({type:"SET_BILL",refno:S,bill:e.info}),i()})).catch((function(e){/unpaid|full/gi.test(e)?C("initial-advance"):f(e.toString()),O(!1)})))},loading:E,disabled:E}))))}},{step:3,name:"payment",caption:"Payment",Component:function(e){var t=Object(l.lb)();return r.a.createElement(i.d,o({module:{title:"Realty Tax Online Billing",component:u}},e,{contact:t[0].contact,initialStep:1,cancelPayment:e.cancelPayment}))}}],d=function(e){var t=e.partner,n=e.service,i=e.location,c=e.history,u=e.initialStep,d=Object(a.useState)(void 0===u?0:u),b=d[0],f=d[1],y=s[b];return r.a.createElement(l.Q,{initialState:m,reducer:p},r.a.createElement(l.H,null,r.a.createElement(l.i,{center:!0},r.a.createElement(y.Component,o({page:y},{partner:t,service:n,location:i,history:c,moveNextStep:function(){f((function(e){return e+1}))},movePrevStep:function(){0===b?c.goBack():f((function(e){return e-1}))},cancelPayment:function(){f(1)},title:"Realty Tax Online Billing"})))),r.a.createElement(l.P,{height:50}))},b=function(e){var t=e.title,n=e.partner,i=e.onCancel,c=e.onSubmit,u=e.error,m=Object(l.lb)()[0],p=m.refno,s=m.txntype,d=Object(a.useState)(m.bill),b=d[0],f=d[1],y=Object(a.useState)(u)[0],E=Object(a.useState)(!1)[0],O=(Object(a.useState)(!1),Object(a.useState)(),Object(a.useState)(),Object(a.useState)()[0]);return r.a.createElement(l.d,{style:{maxWidth:500}},r.a.createElement(l.Y,null,t),r.a.createElement(l.S,null,"Billing Information"),r.a.createElement(l.P,null),r.a.createElement(l.r,{msg:y}),r.a.createElement(l.s,{context:b,handler:f},r.a.createElement(l.X,{name:"tdno",caption:"TD No.",readOnly:!0}),r.a.createElement(l.X,{name:"pin",caption:"PIN",readOnly:!0}),r.a.createElement(l.X,{name:"owner.name",caption:"Property Owner",readOnly:!0}),r.a.createElement(l.X,{name:"owner.address",caption:"Owner Address",readOnly:!0}),r.a.createElement(l.X,{name:"purpose",caption:"Purpose",readOnly:!0}),r.a.createElement(l.P,null),r.a.createElement(l.l,{name:"amount",caption:"Amount Due",readOnly:!0,textAlign:"left"})),r.a.createElement(l.a,{disabled:E},r.a.createElement(l.b,{caption:"Back",action:function(){i(0)}}),r.a.createElement(l.c,{caption:"Confirm Payment",action:function(){delete o({},b,{barcode:O}).items,c({refno:p,txntype:s,origin:"filipizen",orgcode:n.id,paidby:b.paidby,paidbyaddress:b.paidbyaddress,amount:b.amount,particulars:"Realty Tax Clearance for TD No. "+b.tdno,items:b.billitems,info:{data:b}})},disableWhen:0===b.amount})))},f={txntype:"rpttaxclearance",refno:null,bill:{},contact:{}},y=function(e,t){switch(t.type){case"SET_BILL":return e.refno=t.refno,void(e.bill=t.bill);case"SET_CONTACT":return void(e.contact=t.contact)}},E=[{step:1,name:"verification",caption:"Verification",Component:i.b},{step:2,name:"initial",caption:"Initial Information",Component:function(e){var t=e.title,n=e.partner,i=e.moveNextStep,c=e.movePrevStep,u=Object(l.lb)(),m=u[1],p=u[0].txntype,s=Object(a.useState)(),d=s[0],b=s[1],f=Object(a.useState)({}),y=f[0],E=f[1],O=Object(a.useState)(!1),v=O[0],S=O[1],h=Object(a.useState)(),g=h[0],x=h[1],j=Object(a.useState)(),P=j[0],T=j[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.d,null,r.a.createElement(l.Y,null,t),r.a.createElement(l.S,null,"Initial Information"),r.a.createElement(l.P,null),r.a.createElement(l.r,{msg:d}),r.a.createElement(l.X,{caption:"Tax Declaration No.",name:"refno",value:g,onChange:x,readOnly:v,autoFocus:!0,error:y.refno,helperText:y.refno}),r.a.createElement(l.X,{caption:"Purpose",name:"purpose",value:P,onChange:T,readOnly:v,error:y.purpose,helperText:y.purpose}),r.a.createElement(l.a,null,r.a.createElement(l.b,{caption:"Back",variant:"text",action:c}),r.a.createElement(l.c,{caption:"Next",action:function(){g||E(o({},y,{refno:"Tax Declaration No. is required."})),P||E(o({},y,{purpose:"Purpose is required."})),0===Object.keys(y).length&&(S(!0),b(null),function(){try{return Promise.resolve(l.O.lookupAsync(n.id+":OnlineRealtyTaxClearanceService","rpt")).then((function(e){return Promise.resolve(e.invoke("getBilling",{txntype:p,refno:g,purpose:P}))}))}catch(e){return Promise.reject(e)}}().then((function(e){m({type:"SET_BILL",refno:g,bill:e}),i()})).catch((function(e){b(e.toString()),S(!1)})))},loading:v,disabled:v}))))}},{step:3,name:"payment",caption:"Payment",Component:function(e){var t=Object(l.lb)();return r.a.createElement(i.d,o({module:{title:"Online Realty Tax Clearance",component:b}},e,{contact:t[0].contact,initialStep:1,cancelPayment:e.cancelPayment}))}}],O=function(e){var t=e.partner,n=e.service,i=e.location,c=e.history,u=e.initialStep,m=Object(a.useState)(void 0===u?0:u),p=m[0],s=m[1],d=E[p];return r.a.createElement(l.Q,{initialState:f,reducer:y},r.a.createElement(l.H,null,r.a.createElement(l.i,{center:!0},r.a.createElement(d.Component,o({page:d},{partner:t,service:n,location:i,history:c,moveNextStep:function(){s((function(e){return e+1}))},movePrevStep:function(){0===p?c.goBack():s((function(e){return e-1}))},cancelPayment:function(){s(1)},emailRequired:!0,title:"Online Realty Tax Clearance"})))),r.a.createElement(l.P,{height:50}))}}}]);