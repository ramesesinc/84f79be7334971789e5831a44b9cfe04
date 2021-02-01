(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{526:function(e,t,n){"use strict";n.r(t),n.d(t,"RealtyTaxClearanceWebController",(function(){return v})),n.d(t,"RptBillingWebController",(function(){return d}));var a=n(0),r=n.n(a),l=n(2),i=(n(117),n(85));function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e){var t=e.initialValue,n=e.open,i=e.onAccept,o=e.onCancel,c=Object(a.useState)(void 0===t?{}:t),u=c[0],m=c[1],p=Object(l.gb)(e.initialValue.fromyear,Object(l.ab)()+3);return r.a.createElement(l.G,{open:n,caption:"Pay Options",onAccept:function(){i(u)},onCancel:o,maxWidth:100},r.a.createElement(l.t,{context:u,handler:m},r.a.createElement(l.j,{caption:"Year to Bill",name:"billtoyear",items:p}),r.a.createElement(l.N,{caption:"Quarter to Bill",name:"billtoqtr",items:[1,2,3,4]})))},u=function(e){var t=e.title,n=e.partner,i=e.onCancel,u=e.onSubmit,m=e.error,p=Object(l.jb)()[0],s=p.refno,d=p.txntype,b=p.contact,f=Object(a.useState)(p.bill),y=f[0],E=f[1],v=Object(a.useState)(m),O=v[0],S=v[1],h=Object(a.useState)(!1),j=h[0],g=h[1],x=Object(a.useState)(!1),P=x[0],C=x[1],T=(Object(a.useState)(),Object(a.useState)(),Object(a.useState)()),W=T[0],B=T[1],N=!!b.email&&b.email===y.email;return r.a.createElement(l.f,{style:{maxWidth:500}},r.a.createElement(l.X,null,t),r.a.createElement(l.S,null,"Billing Information"),r.a.createElement(l.P,null),r.a.createElement(l.s,{msg:O}),r.a.createElement(l.t,{context:y,handler:E},r.a.createElement(l.J,{row:!0},r.a.createElement(l.W,{name:"billno",caption:"Bill No.",readOnly:!0}),r.a.createElement(l.W,{name:"billdate",caption:"Bill Date",readOnly:!0})),r.a.createElement(l.W,{name:"tdno",caption:"TD No.",readOnly:!0}),r.a.createElement(l.W,{name:"fullpin",caption:"PIN",readOnly:!0}),r.a.createElement(l.W,{name:"taxpayer.name",caption:"Property Owner",readOnly:!0,visibleWhen:N}),r.a.createElement(l.W,{name:"taxpayer.address",caption:"Owner Address",readOnly:!0,visibleWhen:N}),r.a.createElement(l.W,{name:"billperiod",caption:"Bill Period",readOnly:!0}),r.a.createElement(l.m,{name:"amount",caption:"Amount Due",readOnly:!0,textAlign:"left"})),r.a.createElement(l.a,{disabled:j},r.a.createElement(l.c,{caption:"Back",action:function(){i(0)}}),r.a.createElement(l.J,{row:!0},r.a.createElement(l.e,{caption:"Pay Option",action:function(){return C(!0)},variant:"outlined"}),r.a.createElement(l.e,{caption:"Confirm Payment",action:function(){var e=o({},y,{barcode:W}),t=e.items;delete e.items,u({refno:s,txntype:d,origin:"filipizen",orgcode:n.id,billtoyear:y.billtoyear,billtoqtr:y.billtoqtr,paidby:y.paidby,paidbyaddress:y.paidbyaddress,amount:y.amount,particulars:"Real Property TD No. "+y.tdno+" "+y.billperiod,items:t,info:{data:e}})},disableWhen:0===y.amount}))),r.a.createElement(c,{initialValue:y&&{billtoyear:y.billtoyear,billtoqtr:y.billtoqtr,fromyear:y.fromyear},open:P,onAccept:function(e){var t;C(!1),void 0===(t=e)&&(t={}),g(!0),S(null),function(e){void 0===e&&(e={});try{return Promise.resolve(l.O.lookupAsync(n.id+":OnlineLandTaxBillingService","rpt")).then((function(t){var n=o({txntype:d,refno:s},e);return Promise.resolve(t.invoke("getBilling",n))}))}catch(e){return Promise.reject(e)}}(t).then((function(e){E(e.info),B(e.info.billno),g(!1)})).catch((function(e){S(e.toString()),g(!1)}))},onCancel:function(){return C(!1)}}))},m={txntype:"rptcol",refno:null,bill:{},contact:{}},p=function(e,t){switch(t.type){case"SET_BILL":return e.refno=t.refno,void(e.bill=t.bill);case"SET_CONTACT":return void(e.contact=t.contact)}},s=[{step:1,name:"verification",caption:"Verification",Component:i.b},{step:2,name:"initial",caption:"Initial Information",Component:function(e){var t=e.title,n=e.partner,i=e.moveNextStep,c=e.movePrevStep,u=Object(l.jb)(),m=u[1],p=u[0].txntype,s=(new Date).getFullYear(),d=Object(a.useState)(),b=d[0],f=d[1],y=Object(a.useState)(!1),E=y[0],v=y[1],O=Object(a.useState)(),S=O[0],h=O[1],j=Object(a.useState)(s+1),g=j[0],x=j[1],P=Object(a.useState)("initial"),C=P[0],T=P[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.f,null,r.a.createElement(l.X,null,t),r.a.createElement(l.S,null,"Initial Information"),r.a.createElement(l.P,null),r.a.createElement(l.s,{msg:b}),r.a.createElement(l.J,{visibleWhen:"initial"===C},r.a.createElement(l.W,{caption:"Tax Declaration No.",name:"refno",value:S,onChange:h,readOnly:E,autoFocus:!0})),r.a.createElement(l.J,{visibleWhen:"initial-advance"===C},r.a.createElement("p",null,"The associated ledger is fully paid for the current year.",r.a.createElement("br",null),"To pay in advance, specify the year and click Next button."),r.a.createElement(l.P,null),r.a.createElement(l.J,null,r.a.createElement(l.W,{caption:"Tax Declaration No.",name:"refno",value:S,onChange:h,readOnly:!0}),r.a.createElement(l.w,{caption:"Advance Year to Pay",name:"billtoyear",value:g,onChange:x,thousandSeparator:!1,autoFocus:!0}))),r.a.createElement(l.a,null,r.a.createElement(l.c,{caption:"Back",variant:"text",action:c}),r.a.createElement(l.e,{caption:"Next",action:function(){"initial-advance"===C&&g<=s?f("Advance year to pay should be greater than "+s):(v(!0),f(null),function(e){void 0===e&&(e={});try{return Promise.resolve(l.O.lookupAsync(n.id+":OnlineLandTaxBillingService","rpt")).then((function(t){var n=o({txntype:p,refno:S},e);return"initial-advance"===C&&(n.billtoyear=g),Promise.resolve(t.invoke("getBilling",n))}))}catch(e){return Promise.reject(e)}}().then((function(e){m({type:"SET_BILL",refno:S,bill:e.info}),i()})).catch((function(e){/unpaid|full/gi.test(e)?T("initial-advance"):f(e.toString()),v(!1)})))},loading:E,disabled:E}))))}},{step:3,name:"payment",caption:"Payment",Component:function(e){var t=Object(l.jb)();return r.a.createElement(i.d,o({module:{title:"Realty Tax Online Billing",component:u}},e,{contact:t[0].contact,initialStep:1,cancelPayment:e.cancelPayment}))}}],d=function(e){var t=e.partner,n=e.service,i=e.location,c=e.history,u=e.initialStep,d=Object(a.useState)(void 0===u?0:u),b=d[0],f=d[1],y=s[b];return r.a.createElement(l.Q,{initialState:m,reducer:p},r.a.createElement(l.I,null,r.a.createElement(l.k,{center:!0},r.a.createElement(y.Component,o({page:y},{partner:t,service:n,location:i,history:c,moveNextStep:function(){f((function(e){return e+1}))},movePrevStep:function(){0===b?c.goBack():f((function(e){return e-1}))},cancelPayment:function(){f(1)},title:"Realty Tax Online Billing"})))))},b=function(e){var t=e.title,n=e.partner,i=e.onCancel,c=e.onSubmit,u=e.error,m=Object(l.jb)()[0],p=m.refno,s=m.txntype,d=Object(a.useState)(m.bill),b=d[0],f=d[1],y=Object(a.useState)(u)[0],E=Object(a.useState)(!1)[0],v=(Object(a.useState)(!1),Object(a.useState)(),Object(a.useState)(),Object(a.useState)()[0]);return r.a.createElement(l.f,{style:{maxWidth:500}},r.a.createElement(l.X,null,t),r.a.createElement(l.S,null,"Billing Information"),r.a.createElement(l.P,null),r.a.createElement(l.s,{msg:y}),r.a.createElement(l.t,{context:b,handler:f},r.a.createElement(l.W,{name:"tdno",caption:"TD No.",readOnly:!0}),r.a.createElement(l.W,{name:"pin",caption:"PIN",readOnly:!0}),r.a.createElement(l.W,{name:"owner.name",caption:"Property Owner",readOnly:!0}),r.a.createElement(l.W,{name:"owner.address",caption:"Owner Address",readOnly:!0}),r.a.createElement(l.W,{name:"purpose",caption:"Purpose",readOnly:!0}),r.a.createElement(l.P,null),r.a.createElement(l.m,{name:"amount",caption:"Amount Due",readOnly:!0,textAlign:"left"})),r.a.createElement(l.a,{disabled:E},r.a.createElement(l.c,{caption:"Back",action:function(){i(0)}}),r.a.createElement(l.e,{caption:"Confirm Payment",action:function(){delete o({},b,{barcode:v}).items,c({refno:p,txntype:s,origin:"filipizen",orgcode:n.id,paidby:b.paidby,paidbyaddress:b.paidbyaddress,amount:b.amount,particulars:"Realty Tax Clearance for TD No. "+b.tdno,items:b.billitems,info:{data:b}})},disableWhen:0===b.amount})))},f={txntype:"rpttaxclearance",refno:null,bill:{},contact:{}},y=function(e,t){switch(t.type){case"SET_BILL":return e.refno=t.refno,void(e.bill=t.bill);case"SET_CONTACT":return void(e.contact=t.contact)}},E=[{step:1,name:"verification",caption:"Verification",Component:i.b},{step:2,name:"initial",caption:"Initial Information",Component:function(e){var t=e.title,n=e.partner,i=e.moveNextStep,c=e.movePrevStep,u=Object(l.jb)(),m=u[1],p=u[0].txntype,s=Object(a.useState)(),d=s[0],b=s[1],f=Object(a.useState)({}),y=f[0],E=f[1],v=Object(a.useState)(!1),O=v[0],S=v[1],h=Object(a.useState)(),j=h[0],g=h[1],x=Object(a.useState)(),P=x[0],C=x[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.f,null,r.a.createElement(l.X,null,t),r.a.createElement(l.S,null,"Initial Information"),r.a.createElement(l.P,null),r.a.createElement(l.s,{msg:d}),r.a.createElement(l.W,{caption:"Tax Declaration No.",name:"refno",value:j,onChange:g,readOnly:O,autoFocus:!0,error:y.refno,helperText:y.refno}),r.a.createElement(l.W,{caption:"Purpose",name:"purpose",value:P,onChange:C,readOnly:O,error:y.purpose,helperText:y.purpose}),r.a.createElement(l.a,null,r.a.createElement(l.c,{caption:"Back",variant:"text",action:c}),r.a.createElement(l.e,{caption:"Next",action:function(){j||E(o({},y,{refno:"Tax Declaration No. is required."})),P||E(o({},y,{purpose:"Purpose is required."})),0===Object.keys(y).length&&(S(!0),b(null),function(){try{return Promise.resolve(l.O.lookupAsync(n.id+":OnlineRealtyTaxClearanceService","rpt")).then((function(e){return Promise.resolve(e.invoke("getBilling",{txntype:p,refno:j,purpose:P}))}))}catch(e){return Promise.reject(e)}}().then((function(e){m({type:"SET_BILL",refno:j,bill:e}),i()})).catch((function(e){b(e.toString()),S(!1)})))},loading:O,disabled:O}))))}},{step:3,name:"payment",caption:"Payment",Component:function(e){var t=Object(l.jb)();return r.a.createElement(i.d,o({module:{title:"Online Realty Tax Clearance",component:b}},e,{contact:t[0].contact,initialStep:1,cancelPayment:e.cancelPayment}))}}],v=function(e){var t=e.partner,n=e.service,i=e.location,c=e.history,u=e.initialStep,m=Object(a.useState)(void 0===u?0:u),p=m[0],s=m[1],d=E[p];return r.a.createElement(l.Q,{initialState:f,reducer:y},r.a.createElement(l.I,null,r.a.createElement(l.k,{center:!0},r.a.createElement(d.Component,o({page:d},{partner:t,service:n,location:i,history:c,moveNextStep:function(){s((function(e){return e+1}))},movePrevStep:function(){0===p?c.goBack():s((function(e){return e-1}))},cancelPayment:function(){s(1)},emailRequired:!0,title:"Online Realty Tax Clearance"})))))}}}]);