(this["webpackJsonpfilipizen-client"]=this["webpackJsonpfilipizen-client"]||[]).push([[3],{548:function(e,t,n){"use strict";n.r(t),n.d(t,"BplsBillingWebController",(function(){return d})),n.d(t,"RenewBusinessWebController",(function(){return N}));var a=n(0),r=n.n(a),c=n(2),l=(n(87),n(88));function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o=function(e){var t=e.initialValue,n=e.open,l=e.onAccept,i=e.onCancel,o=Object(a.useState)(void 0===t?{billtoqtr:4}:t),m=o[0];return r.a.createElement(c.H,{open:n,caption:"Pay Options",onAccept:function(){l(m)},onCancel:i,maxWidth:100},r.a.createElement(c.t,{context:m,handler:o[1]},r.a.createElement(c.O,{caption:"Quarter to Bill",name:"billtoqtr",items:[1,2,3,4]})))},m=function(e){var t=e.title,n=e.partner,l=e.onCancel,i=e.onSubmit,m=e.error,p=Object(c.jb)()[0],u=p.refno,s=p.txntype,d=p.contact,E=Object(a.useState)(p.bill),f=E[0],b=E[1],v=Object(a.useState)(m),h=v[0],y=v[1],g=Object(a.useState)(!1),O=g[0],j=g[1],S=Object(a.useState)(!1),x=S[0],N=S[1],w=Object(a.useState)(4),T=w[0],A=w[1],B=Object(a.useState)()[1];Object(a.useEffect)((function(){u&&(j(!0),y(null),function(){try{var e={txntype:s,refno:u,qtr:T,showdetails:!0},t=c.P.lookupAsync(n.id+":OnlineBusinessBillingService","bpls");return Promise.resolve(t.invoke("getBilling",e))}catch(e){return Promise.reject(e)}}().then((function(e){var t=e.info;t.qtr=4,0==t.amount&&(t.items=[]),b(t),B("51001:"+t.billno),j(!1)})).catch((function(e){y(e.toString()),j(!1)})))}),[T]);var k=d&&d.email===f.email;return r.a.createElement(c.e,{style:{maxWidth:800}},r.a.createElement(c.Y,null,t),r.a.createElement(c.T,null,"Billing Information"),r.a.createElement(c.Q,null),r.a.createElement(c.s,{msg:h}),r.a.createElement(c.K,null,r.a.createElement(c.y,{context:f,caption:"Application No.",expr:"appno"}),r.a.createElement(c.y,{context:f,caption:"Application Type",expr:"apptype"}),r.a.createElement(c.y,{context:f,caption:"Date Filed",expr:"appdate"}),r.a.createElement(c.y,{context:f,caption:"BIN",expr:"bin"}),r.a.createElement(c.y,{context:f,caption:"Trade Name",expr:"tradename",visibleWhen:k}),r.a.createElement(c.y,{context:f,caption:"Owner Name",expr:"ownername",visibleWhen:k}),r.a.createElement(c.y,{context:f,caption:"Business Address",expr:"address",visibleWhen:k}),r.a.createElement(c.Q,null),r.a.createElement(c.K,{style:{display:"flex",justifyContent:"flex-start"}},r.a.createElement(c.d,{variant:"outlined",caption:"Pay Option",action:function(){return N(!0)}})),r.a.createElement(c.V,{items:f?f.items:[],size:"small",showPagination:!1},r.a.createElement(c.W,{caption:"Particulars",expr:function(e){return(e.lobname?e.lobname:"")+" -"+e.account}}),r.a.createElement(c.W,{caption:"Amount",expr:"amount",align:"right",format:"currency"}),r.a.createElement(c.W,{caption:"Surcharge",expr:"surcharge",align:"right",format:"currency"}),r.a.createElement(c.W,{caption:"Interest",expr:"interest",align:"right",format:"currency"}),r.a.createElement(c.W,{caption:"Total",expr:"total",align:"right",format:"currency"})),r.a.createElement(c.K,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",paddingRight:15}},r.a.createElement(c.y,{context:f,caption:"Bill Amount:",expr:function(e){return Object(c.ab)(e.amount)}}))),r.a.createElement(c.a,{disabled:O},r.a.createElement(c.b,{caption:"Back",action:function(){l(0)}}),r.a.createElement(c.d,{caption:"Confirm Payment",action:function(){i({refno:u,txntype:s,origin:"filipizen",orgcode:n.id,qtr:T,info:{data:f,qtr:T},paidby:f.paidby,paidbyaddress:f.paidbyaddress,amount:f.amount,particulars:"Business Tax for Application No. "+f.appno})},disableWhen:0===f.amount})),r.a.createElement(o,{initialValue:f&&{qtr:T},open:x,onAccept:function(e){N(!1),A(e.billtoqtr)},onCancel:function(){return N(!1)}}))},p={txntype:"bpls",refno:null,bill:{},contact:{}},u=function(e,t){switch(t.type){case"SET_BILL":return e.refno=t.refno,void(e.bill=t.bill);case"SET_CONTACT":return void(e.contact=t.contact)}},s=[{step:1,name:"verification",caption:"Verification",Component:l.b},{step:2,name:"initial",caption:"Initial Information",Component:function(e){var t=e.title,n=e.partner,l=e.moveNextStep,i=e.movePrevStep,o=Object(c.jb)(),m=o[1],p=o[0].txntype,u=Object(a.useState)(),s=u[0],d=u[1],E=Object(a.useState)(!1),f=E[0],b=E[1],v=Object(a.useState)(),h=v[0],y=v[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.e,null,r.a.createElement(c.Y,null,t),r.a.createElement(c.T,null,"Initial Information"),r.a.createElement(c.Q,null),r.a.createElement(c.s,{msg:s}),r.a.createElement(c.X,{name:"appno",caption:"BIN or Application No.",value:h,onChange:y,autoFocus:!0}),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Back",variant:"text",action:i}),r.a.createElement(c.d,{caption:"Next",action:function(){b(!0),d(null),function(){try{var e={txntype:p,refno:h,qtr:4,showdetails:!0},t=c.P.lookupAsync(n.id+":OnlineBusinessBillingService","bpls");return Promise.resolve(t.invoke("getBilling",e))}catch(e){return Promise.reject(e)}}().then((function(e){var t=e.info;t.qtr=4,0==t.amount&&(t.items=[]),m({type:"SET_BILL",refno:h,bill:t}),l()})).catch((function(e){d(e.toString()),b(!1)}))},loading:f,disabled:f}))))}},{step:3,name:"payment",caption:"Payment",Component:function(e){var t=Object(c.jb)();return r.a.createElement(l.d,i({module:{title:e.title,component:m}},e,{contact:t[0].contact,initialStep:1,cancelPayment:e.cancelPayment}))}}],d=function(e){var t=e.partner,n=e.service,l=e.location,o=e.history,m=e.initialStep,d=Object(a.useState)(void 0===m?0:m),E=d[0],f=d[1],b=s[E];return r.a.createElement(c.R,{initialState:p,reducer:u},r.a.createElement(c.J,null,r.a.createElement(c.j,{center:!0},r.a.createElement(c.K,null,r.a.createElement(b.Component,i({page:b},{partner:t,service:n,location:l,history:o,moveNextStep:function(){f((function(e){return e+1}))},movePrevStep:function(){0===E?o.goBack():f((function(e){return e-1}))},cancelPayment:function(){f(1)},title:"Business Online Billing"}))))))},E={bin:null,app:{objid:"0001",lobs:[],infos:[],newinfos:[],redflags:[]},contact:{}},f=function(e,t){var n;switch(t.type){case"SET_APP":return e.app=t.app,void(e.bin=t.app.bin);case"UPDATE_APP_INFOS":return e.app=t.app,(n=e.app.newinfos).push.apply(n,t.infos),void(e.bin=t.app.bin);case"SET_CONTACT":return void(e.contact=t.contact);default:return e}},b=function(e){var t=e.partner,n=e.title,l=void 0===n?"New Permit Application":n,i=e.onCancel,o=e.onContinue,m=e.error,p=Object(a.useState)(!1),u=p[0],s=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.T,null,l),r.a.createElement(c.Q,{height:30}),r.a.createElement(c.s,{msg:m}),r.a.createElement(c.U,null,"Please read thoroughly before proceeding"),r.a.createElement("p",{style:{opacity:.8}},"This online service will require personal information from the applicant, lot owner(s) and professionals involved in this transaction. In compliance with the Data Privacy Act, we are securing your consent that you have been authorized by the aforementioned parties to act on their behalf. The data collected will be stored, processed and used for effectively carrying out legitimate transactions with the local government of ",t.title,". If you do not agree to these terms, you can cancel out by click on the Cancel button. If you agree to these terms, tick on the checkbox and click Continue."),r.a.createElement(c.h,{caption:"Yes, I have read and agree to the terms and conditions",value:u,name:"agreeDisclaimer",onChange:s}),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Cancel",action:i}),r.a.createElement(c.d,{caption:"Continue",action:o,disableWhen:!u})))},v=function(e){var t=e.title,n=e.appno,a=e.onContinue;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.T,null,void 0===t?"New Permit Application":t),r.a.createElement(c.Q,{height:30}),r.a.createElement(c.U,null,"Application created"),r.a.createElement("p",null,"Please take note of the tracking number for this application. This will be your tracking reference for completing and follow up for this application."),r.a.createElement(c.U,null,n),r.a.createElement(c.a,null,r.a.createElement(c.d,{caption:"Continue",action:a})))},h=function(e){var t=e.isPreviousInfo,n=void 0===t||t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.V,{items:e.lobs,showPagination:!1},r.a.createElement(c.W,{caption:"Line of Business",width:400,expr:"lob.name"}),r.a.createElement(c.W,{caption:n?"Previous Gross (Php)":"Gross (Php)",expr:function(e){return Object(c.ab)(n?e.prevgross:e.gross)},type:"decimal",align:"right"})))},y=[{name:"contact",caption:"Contact Information"},{name:"enter-bin",caption:"Business Identification Number"},{name:"email-verification",caption:"Email Verification"},{name:"app-notice",caption:"Business Renewal Notice"},{name:"verify-info",caption:"Business Verify Information"},{name:"confirmation",caption:"Confirmation"},{name:"newapp",caption:"New Application "}],g={decimal:c.m,integer:c.w},O=function(e){var t=e.dataType,n=e.name,a=e.autoFocus,c=void 0!==a&&a,l=e.error,i=void 0!==l&&l,o=e.helperText,m=g[void 0===t?"integer":t];return r.a.createElement("div",{className:"_1WWgR"},r.a.createElement("label",{style:{width:350}},e.caption),r.a.createElement(m,{className:"_zFpAi",name:n,fullWidth:!1,variant:"outlined",size:"small",required:!0,autoFocus:c,helperText:o,error:i}))},j={lobTitles:{display:"flex",justifyContent:"space-between"}},S=function(e){var t=e.requirements,n=e.deleteRequirement,l=e.onUpload,i=Object(a.useState)({ref:{},attachment:{}}),o=i[0],m=i[1],p=Object(a.useState)(-1),u=p[0],s=p[1];return Object(a.useEffect)((function(){t.length>0&&u<0&&(m(t[0]),s(0))}),[t]),r.a.createElement("div",{className:"_2TeAB"},r.a.createElement("div",{className:"_3LmX8"},r.a.createElement("h4",{style:{paddingLeft:20}},"Documents"),t.map((function(e,n){return r.a.createElement("div",{key:e.objid,className:u===n?"_aF9YH _jTxCt":"_aF9YH",onClick:function(){return n=e,s(t.findIndex((function(e){return e.objid===n.objid}))),void m(n);var n}},r.a.createElement("label",null,e.ref.title),e.attachment&&e.attachment.path&&r.a.createElement(c.c,{style:{fontSize:20,color:"green"}}))}))),r.a.createElement("div",{className:"_1SBOI"},r.a.createElement("div",{className:"_1dnjD"},r.a.createElement("label",{className:"_3-PiJ"},o.ref.title),o.attachment.path&&r.a.createElement(c.d,{caption:"Delete",color:"secondary",action:function(){return n(o)}})),r.a.createElement("div",{className:"_1R5wv"},o.attachment.path?r.a.createElement("img",{className:"_2iwMt",src:o.attachment.path,alt:o.attachment.name}):r.a.createElement(c.Z,{key:o.objid,fileId:o.objid,data:o,onUpload:function(e){return l(e,o)},uploadedFile:o.attachment}))))},x=[{step:0,name:"select",caption:"Select Application Type",component:function(e){var t=e.service,n=e.history,l=e.appService,i=e.moveNextStep,o=Object(a.useState)(),m=o[0],p=o[1],u=Object(a.useState)("new"),s=u[0],d=u[1],E=Object(a.useState)(),f=E[0],b=E[1],v=Object(c.jb)()[1];return r.a.createElement(c.e,null,r.a.createElement(c.Y,null,t.title),r.a.createElement(c.T,null,"Select an action"),r.a.createElement(c.Q,{height:30}),r.a.createElement(c.N,{value:s,onChange:d},r.a.createElement(c.x,{caption:"Create New Application",value:"new"}),r.a.createElement(c.x,{caption:"Resume Pending Application",value:"resume"})),r.a.createElement(c.X,{caption:"Application Tracking No.",value:f,onChange:b,visibleWhen:"resume"===s,variant:"outlined",fullWidth:!1,required:!0,style:{marginLeft:40},error:m,helperText:m,size:"small",autoFocus:!0}),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Cancel",action:function(){return n.goBack()}}),r.a.createElement(c.d,{caption:"Next",action:function(){"new"===s?i():f?l.invoke("getApplication",{controlno:f},(function(e,t){e?p(e):(t.infos=[],t.lobs=[],v({type:"SET_APP",app:t}),i(t.step+1))})):p("Tracking No. is required.")}})))}},{step:1,name:"initial",caption:"Initial",component:function(e){var t=e.partner,n=e.history,o=e.title,m=e.appService,p=e.moveNextStep,u=Object(c.jb)(),s=u[1],d=u[0].contact,E=Object(a.useState)(),f=E[0],g=E[1],O=Object(a.useState)(!1),j=O[0],S=O[1],x=(Object(a.useState)(!1),Object(a.useState)({})),N=x[0],w=x[1],T=(Object(a.useState)(),Object(a.useState)()),A=T[0],B=T[1],k=Object(a.useState)(0),P=k[1],C=y[k[0]],I=function(){P((function(e){return e+1}))},X=function(){P((function(e){return e-1}))};return r.a.createElement(r.a.Fragment,null,"contact"===C.name?r.a.createElement(l.b,{partner:t,showName:!0,moveNextStep:I,movePrevStep:X,title:o,subtitle:"Contact Verification",emailRequired:!0}):r.a.createElement(c.e,null,r.a.createElement(c.Q,null),r.a.createElement(c.t,{context:N,handler:w,visibleWhen:"enter-bin"===C.name},r.a.createElement(c.Y,null,o),r.a.createElement(c.T,null,C.caption),r.a.createElement(c.Q,null),r.a.createElement(c.s,{msg:f}),r.a.createElement(c.X,{caption:"Enter BIN",name:"bin",required:!0,autoFocus:!0}),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Cancel",action:function(){return n.goBack()}}),r.a.createElement(c.d,{caption:"Next",action:function(){g(null),S(!0),m.invoke("validateBin",i({},N,{contact:d}),(function(e,t){e?g(e):(w(t),I()),S(!1)}))},loading:j,disableWhen:!N.bin}))),r.a.createElement(c.K,{visibleWhen:"email-verification"===C.name},r.a.createElement(c.Y,null,o),r.a.createElement(c.T,null,C.caption),r.a.createElement(c.Q,null),r.a.createElement(c.j,{center:!0},r.a.createElement("span",null,"Enter the code sent to your business email"),r.a.createElement("span",null,"address at ",d.email)),r.a.createElement(c.Q,null),r.a.createElement(c.X,{label:"Email Code",placeholder:"Enter code sent to your email",name:"keyCode",value:A,onChange:B,maxLength:6,autoFocus:!0,error:!!f,helperText:f}),r.a.createElement(c.a,null,r.a.createElement(c.d,{label:"Verify",action:function(){g(null),N.key!==A?g("Code is incorrect"):(g(null),S(!0),m.invoke("openBin",N,(function(e,t){var n;e?g(e):(n=y.findIndex(0==t.redflags.length?function(e){return"verify-info"===e.name}:function(e){return"app-notice"===e.name}),t.step=1,w(t),P(n)),S(!1)})))},loading:j,disableWhen:j}))),r.a.createElement(c.t,{visibleWhen:"app-notice"===C.name,context:N,handler:w},r.a.createElement(c.Y,null,o),r.a.createElement(c.T,null,C.caption),r.a.createElement(c.Q,{height:30}),r.a.createElement(c.K,{row:!0},r.a.createElement(c.X,{caption:"BIN",name:"bin",readOnly:!0}),r.a.createElement(c.X,{caption:"Application No.",name:"prevapp.appno",readOnly:!0})),r.a.createElement(c.K,{row:!0},r.a.createElement(c.X,{caption:"Application Year",name:"prevapp.appyear",readOnly:!0}),r.a.createElement(c.X,{caption:"Application Type",name:"prevapp.apptype",readOnly:!0})),r.a.createElement(c.X,{caption:"Trade Name",name:"tradename",readOnly:!0}),r.a.createElement(c.X,{caption:"Owner Name",name:"owner.name",readOnly:!0}),r.a.createElement(c.X,{caption:"Business Address",name:"businessaddress",readOnly:!0}),r.a.createElement("p",null,"You cannot renew business due to the following issues. Please settle it with the corresponding offices. You can contact our helpdesk at ",t.phoneno,"."),r.a.createElement(c.V,{items:N.redflags,showPagination:!1},r.a.createElement(c.W,{caption:"Issue",width:300,expr:"issue"}),r.a.createElement(c.W,{caption:"Office/Department",expr:"office"})),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Cancel",action:function(){return n.goBack()}}))),r.a.createElement(c.t,{visibleWhen:"verify-info"===C.name,context:N,handler:w},r.a.createElement(c.Y,null,o),r.a.createElement(c.T,null,C.caption),r.a.createElement(c.Q,{height:30}),r.a.createElement(c.K,{row:!0},r.a.createElement(c.X,{caption:"BIN",name:"bin",readOnly:!0}),r.a.createElement(c.X,{caption:"Application No.",name:"prevapp.appno",readOnly:!0})),r.a.createElement(c.K,{row:!0},r.a.createElement(c.X,{caption:"Application Year",name:"prevapp.appyear",readOnly:!0}),r.a.createElement(c.X,{caption:"Application Type",name:"prevapp.apptype",readOnly:!0})),r.a.createElement(c.X,{caption:"Trade Name",name:"tradename",readOnly:!0}),r.a.createElement(c.X,{caption:"Owner Name",name:"owner.name",readOnly:!0}),r.a.createElement(c.X,{caption:"Business Address",name:"businessaddress",readOnly:!0}),r.a.createElement(c.Q,null),r.a.createElement("h3",null,"Line of Businesses Operated"),r.a.createElement(h,{lobs:N.lobs}),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Back",action:function(){return P(1)}}),r.a.createElement(c.d,{caption:"Next",action:I}))),r.a.createElement(c.K,{visibleWhen:"confirmation"===C.name},r.a.createElement(c.Y,null,o),r.a.createElement(b,{title:"Business Renewal Application",partner:t,error:f,onCancel:X,onContinue:function(){m.invoke("create",N,(function(e,t){e?g(e):(t.redflags=[],s({type:"SET_APP",app:t}),w(t),I())}))}})),r.a.createElement(c.K,{visibleWhen:"newapp"===C.name,width:400},r.a.createElement(c.Y,null,o),r.a.createElement(v,{appno:N.controlno,onContinue:p}))))}},{step:2,name:"info",caption:"General Information",component:function(e){var t=e.moveNextStep,n=e.appService,l=e.title,i=Object(c.jb)()[0].app,o=Object(a.useState)(),m=o[0],p=o[1],u=Object(a.useState)(!1)[1],s=Object(a.useState)(i),d=s[0],E=s[1];return Object(a.useEffect)((function(){u(!0),n.invoke("getInfos",{objid:d.objid},(function(e,t){e?p(e):E(t),u(!1)}))}),[]),r.a.createElement(c.e,null,r.a.createElement(c.s,{msg:m}),r.a.createElement(c.t,{context:d,handler:E},r.a.createElement(c.Y,null,l),r.a.createElement(c.U,null,"Tracking No. ",d.controlno),r.a.createElement(c.T,null,"General Information"),r.a.createElement(c.Q,{height:30}),r.a.createElement(c.K,{row:!0},r.a.createElement(c.X,{caption:"BIN",name:"bin",readOnly:!0}),r.a.createElement(c.X,{caption:"Application No.",name:"controlno",readOnly:!0})),r.a.createElement(c.K,{row:!0},r.a.createElement(c.X,{caption:"Application Year",name:"appyear",readOnly:!0}),r.a.createElement(c.X,{caption:"Application Type",name:"apptype",readOnly:!0})),r.a.createElement(c.X,{caption:"Trade Name",name:"tradename",readOnly:!0}),r.a.createElement(c.X,{caption:"Owner Name",name:"owner.name",readOnly:!0}),r.a.createElement(c.X,{caption:"Business Address",name:"businessaddress",readOnly:!0}),r.a.createElement(c.Q,null),d.infos.map((function(e){return r.a.createElement(c.y,{key:e.name,caption:e.caption,captionStyle:{width:350}},e.value)})),r.a.createElement(c.Q,null),r.a.createElement(h,{lobs:d.lobs,isPreviousInfo:!1}),r.a.createElement(c.a,null,r.a.createElement(c.d,{caption:"Next",action:t}))),r.a.createElement("pre",null,JSON.stringify(d,null,2)))}},{step:3,name:"edit-info",caption:"Edit Information",component:function(e){var t=e.appService,n=e.moveNextStep,l=e.movePrevStep,i=e.title,o=Object(c.jb)(),m=o[1],p=o[0].app,u=Object(a.useState)([]),s=u[0],d=u[1],E=Object(a.useState)(),f=E[0],b=E[1],v=Object(a.useState)(!1),h=v[0],y=v[1],g=Object(a.useState)(p),S=g[0],x=g[1];return Object(a.useEffect)((function(){y(!0),t.invoke("getInfos",S,(function(e,t){e?b(e):(x(t),m({type:"SET_APP",app:t})),y(!1)}))}),[]),r.a.createElement(c.e,null,r.a.createElement(c.s,{msg:f}),r.a.createElement(c.t,{context:S,handler:x},r.a.createElement(c.Y,null,i),r.a.createElement(c.U,null,"Tracking No. ",S.controlno),r.a.createElement(c.T,null,"Edit Information"),r.a.createElement(c.Q,{height:30}),r.a.createElement(c.K,{row:!0},r.a.createElement(c.X,{caption:"BIN",name:"bin",readOnly:!0}),r.a.createElement(c.X,{caption:"Application No.",name:"controlno",readOnly:!0})),r.a.createElement(c.K,{row:!0},r.a.createElement(c.X,{caption:"Application Year",name:"appyear",readOnly:!0}),r.a.createElement(c.X,{caption:"Application Type",name:"apptype",readOnly:!0})),r.a.createElement(c.X,{caption:"Trade Name",name:"tradename",readOnly:!0}),r.a.createElement(c.X,{caption:"Owner Name",name:"owner.name",readOnly:!0}),r.a.createElement(c.X,{caption:"Business Address",name:"businessaddress",readOnly:!0}),r.a.createElement(c.Q,null),r.a.createElement("h4",null,"Business Information"),S.infos.map((function(e,t){return r.a.createElement(O,{key:e.name+":"+t,name:"infos["+t+"].value",dataType:e.datatype,caption:e.caption,autoFocus:0===t})})),r.a.createElement(c.Q,null),r.a.createElement(c.K,{style:j.lobTitles},r.a.createElement("h4",null,"Line of Businesses"),r.a.createElement("h4",null,"Last Year Gross (Php)")),S.lobs.map((function(e,t){return r.a.createElement(O,{key:e.name+":"+t,name:"lobs["+t+"].gross",dataType:"decimal",caption:e.lob.name,error:s[t],helperText:s[t]})})),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Back",action:l}),r.a.createElement(c.d,{caption:"Next",action:function(){(function(){var e=[];return S.lobs.forEach((function(t,n){e.push(t.gross?null:"Gross is required")})),d(e),e.findIndex((function(e){return null!=e}))<0})()&&(b(null),y(!0),t.invoke("saveInfos",{objid:S.objid,step:4,lobs:S.lobs,infos:S.infos},(function(e,t){e?b(e):n(),y(!1)})))},loading:h,disableWhen:h}))))}},{step:4,name:"requirements",caption:"Requirements",component:function(e){var t=e.appService,n=e.moveNextStep,l=e.movePrevStep,o=e.title,m=Object(c.jb)(),p=m[1],u=m[0].app,s=Object(a.useState)(),d=s[0],E=s[1],f=Object(a.useState)(!1)[1],b=Object(a.useState)([]),v=b[0],h=b[1];Object(a.useEffect)((function(){f(!0),t.invoke("getRequirements",u,(function(e,t){e?E(e):(t.forEach((function(e){return e.attachment={}})),p({type:"SET_APP",app:i({},u,{step:4})}),h(t)),f(!1)}))}),[]);var y=function(e){t.invoke("update",{objid:u.objid,requirements:e},(function(e,t){e&&E(e)}))},g=-1==v.findIndex((function(e){return void 0===e.attachment}));return r.a.createElement(c.e,null,r.a.createElement(c.s,{msg:d}),r.a.createElement(c.Y,null,o),r.a.createElement(c.U,null,"Tracking No. "+u.controlno),r.a.createElement(c.T,null,"Requirements"),r.a.createElement("h4",null,"Please attach the following documents:"),r.a.createElement(S,{requirements:v,onUpload:function(e,t){var n=v.findIndex((function(e){return e.objid===t.objid})),a=[].concat(v);a[n].attachment=e,h(a),y(a)},deleteRequirement:function(e){var t=v.findIndex((function(t){return t.objid===e.objid})),n=[].concat(v);n[t].attachment={},h(n),y(n)}}),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Back",action:l}),r.a.createElement(c.d,{caption:"Next",action:function(){f(!1),t.invoke("update",{objid:u.objid,step:u.step+1},(function(e,t){e?E(e):n(),f(!1)}))},disableWhen:!g})))}},{step:5,name:"confirm",caption:"Confirm",component:function(e){var t=e.moveNextStep,n=e.movePrevStep,l=e.appService,i=e.title,o=Object(c.jb)()[0].app,m=Object(a.useState)(),p=m[0],u=m[1],s=Object(a.useState)(!1)[1],d=Object(a.useState)(o),E=d[0],f=d[1];return Object(a.useEffect)((function(){s(!0),l.invoke("getInfos",{objid:E.objid},(function(e,t){e?u(e):f(t),s(!1)}))}),[]),r.a.createElement(c.e,null,r.a.createElement(c.s,{msg:p}),r.a.createElement(c.t,{context:E,handler:f},r.a.createElement(c.Y,null,i),r.a.createElement(c.U,null,"Tracking No. ",E.controlno),r.a.createElement(c.T,null,"Confirmation"),r.a.createElement(c.Q,{height:30}),r.a.createElement(c.K,{row:!0},r.a.createElement(c.X,{caption:"BIN",name:"bin",readOnly:!0}),r.a.createElement(c.X,{caption:"Application No.",name:"prevapp.appno",readOnly:!0})),r.a.createElement(c.K,{row:!0},r.a.createElement(c.X,{caption:"Application Year",name:"prevapp.appyear",readOnly:!0}),r.a.createElement(c.X,{caption:"Application Type",name:"prevapp.apptype",readOnly:!0})),r.a.createElement(c.X,{caption:"Trade Name",name:"tradename",readOnly:!0}),r.a.createElement(c.X,{caption:"Owner Name",name:"owner.name",readOnly:!0}),r.a.createElement(c.X,{caption:"Business Address",name:"businessaddress",readOnly:!0}),r.a.createElement(c.Q,null),E.infos.map((function(e){return r.a.createElement(c.y,{key:e.name,caption:e.caption,captionStyle:{width:300}},e.value)})),r.a.createElement(c.Q,null),r.a.createElement(h,{lobs:E.lobs,isPreviousInfo:!1}),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Back",action:n}),r.a.createElement(c.d,{caption:"Submit",action:function(){l.invoke("submit",{objid:E.objid,step:2},(function(e,n){e?u(e):t()}))}}))))}},{step:6,name:"completed",caption:"Completed",component:function(e){var t=e.history,n=e.partner,a=e.title,l=Object(c.jb)()[0].app;return r.a.createElement(c.e,null,r.a.createElement(c.K,null,r.a.createElement(c.Y,null,a),r.a.createElement(c.U,null,"Tracking No. "+l.controlno),r.a.createElement(c.T,null,"Application Completed"),r.a.createElement(c.Q,{height:30}),r.a.createElement("p",null,"Your application has been successfully submitted."),r.a.createElement("p",null,"A notification would be sent on your business email account upon approval of your application for payment."),r.a.createElement("p",null,"Thank you for using this service."),r.a.createElement(c.a,null,r.a.createElement(c.d,{caption:"Return",action:function(){t.replace("/partner/"+n.name+"/services",{partner:n})}}))))}}],N=function(e){var t=e.partner,n=e.service,l=e.location,o=e.history,m=e.initialStep,p=Object(a.useState)(void 0===m?0:m),u=p[0],s=p[1],d=Object(a.useState)({step:0}),b=d[0],v=d[1],h=x[u],y=h.component,g={partner:t,service:n,location:l,history:o,moveNextStep:function(e){"number"==typeof e?s(e):(e=u+1,s((function(e){return e+1}))),v(i({},b,{step:e}))},movePrevStep:function(){0===u?o.goBack():s((function(e){return e-1}))},appService:c.P.lookup(t.id+":OnlineBusinessRenewalService","bpls"),stepCompleted:u<b.step,title:"Business Renewal Application"};return r.a.createElement(c.R,{initialState:E,reducer:f},r.a.createElement(c.J,null,u>1&&r.a.createElement(c.K,{target:"left",style:w.stepperContainer},r.a.createElement(c.S,{steps:x.filter((function(e){return e.step>1})),completedStep:b.step-1,activeStep:u-2,handleStep:function(e){s(e+2)}})),r.a.createElement(c.j,{center:!0},r.a.createElement(c.K,null,r.a.createElement(y,i({page:h},g))))),"}")},w={stepperContainer:{paddingTop:30,paddingLeft:40}}}}]);