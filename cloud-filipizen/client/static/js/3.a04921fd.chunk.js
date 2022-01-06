(this["webpackJsonpfilipizen-client"]=this["webpackJsonpfilipizen-client"]||[]).push([[3],{742:function(e,t,n){"use strict";n.r(t),n.d(t,"BplsBillingWebController",(function(){return E})),n.d(t,"NewBusinessWebController",(function(){return B})),n.d(t,"RenewBusinessWebController",(function(){return N}));var a=n(0),c=n.n(a),r=n(2),i=(n(116),n(117));function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o=function(e){var t=e.initialValue,n=e.open,i=e.onAccept,l=e.onCancel,o=Object(a.useState)(void 0===t?{billtoqtr:4}:t),p=o[0];return c.a.createElement(r.H,{open:n,caption:"Pay Options",onAccept:function(){i(p)},onCancel:l,maxWidth:100},c.a.createElement(r.u,{context:p,handler:o[1]},c.a.createElement(r.P,{caption:"Quarter to Bill",name:"billtoqtr",items:[1,2,3,4]})))},p=function(e){var t=e.title,n=e.partner,i=e.onCancel,l=e.onSubmit,p=e.error,m=Object(r.ob)()[0],u=m.refno,s=m.txntype,E=m.contact,d=Object(a.useState)(m.bill),f=d[0],b=d[1],h=Object(a.useState)(p),v=h[0],y=h[1],g=Object(a.useState)(!1),O=g[0],S=g[1],j=Object(a.useState)(!1),w=j[0],N=j[1],A=Object(a.useState)(4),x=A[0],k=A[1],C=Object(a.useState)()[1];Object(a.useEffect)((function(){u&&(S(!0),y(null),function(){try{var e={txntype:s,refno:u,qtr:x,showdetails:!0},t=r.Q.lookupAsync(n.id+":OnlineBusinessBillingService","bpls");return Promise.resolve(t.invoke("getBilling",e))}catch(e){return Promise.reject(e)}}().then((function(e){var t=e.info;t.qtr=4,0==t.amount&&(t.items=[]),b(t),C("51001:"+t.billno),S(!1)})).catch((function(e){y(e.toString()),S(!1)})))}),[x]);var T=E&&E.email===f.email;return c.a.createElement(r.e,{style:{maxWidth:800}},c.a.createElement(r.ab,null,t),c.a.createElement(r.U,null,"Billing Information"),c.a.createElement(r.R,null),c.a.createElement(r.t,{msg:v}),c.a.createElement(r.K,null,c.a.createElement(r.y,{context:f,caption:"Application No.",expr:"appno"}),c.a.createElement(r.y,{context:f,caption:"Application Type",expr:"apptype"}),c.a.createElement(r.y,{context:f,caption:"Date Filed",expr:"appdate"}),c.a.createElement(r.y,{context:f,caption:"BIN",expr:"bin"}),c.a.createElement(r.y,{context:f,caption:"Trade Name",expr:"tradename",visibleWhen:T}),c.a.createElement(r.y,{context:f,caption:"Owner Name",expr:"ownername",visibleWhen:T}),c.a.createElement(r.y,{context:f,caption:"Business Address",expr:"address",visibleWhen:T}),c.a.createElement(r.R,null),c.a.createElement(r.K,{style:{display:"flex",justifyContent:"flex-start"}},c.a.createElement(r.c,{variant:"outlined",caption:"Pay Option",action:function(){return N(!0)}})),c.a.createElement(r.X,{items:f?f.items:[],size:"small",showPagination:!1},c.a.createElement(r.Y,{caption:"Particulars",expr:function(e){return(e.lobname?e.lobname:"")+" -"+e.account}}),c.a.createElement(r.Y,{caption:"Amount",expr:"amount",align:"right",format:"currency"}),c.a.createElement(r.Y,{caption:"Surcharge",expr:"surcharge",align:"right",format:"currency"}),c.a.createElement(r.Y,{caption:"Interest",expr:"interest",align:"right",format:"currency"}),c.a.createElement(r.Y,{caption:"Total",expr:"total",align:"right",format:"currency"})),c.a.createElement(r.K,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",paddingRight:15}},c.a.createElement(r.y,{context:f,caption:"Bill Amount:",expr:function(e){return Object(r.cb)(e.amount)}}))),c.a.createElement(r.a,{disabled:O},c.a.createElement(r.b,{caption:"Back",action:function(){i(0)}}),c.a.createElement(r.c,{caption:"Confirm Payment",action:function(){l({refno:u,txntype:s,origin:"filipizen",orgcode:n.id,qtr:x,info:{data:f,qtr:x},paidby:f.paidby,paidbyaddress:f.paidbyaddress,amount:f.amount,particulars:"Business Tax for Application No. "+f.appno})},disableWhen:0===f.amount})),c.a.createElement(o,{initialValue:f&&{qtr:x},open:w,onAccept:function(e){N(!1),k(e.billtoqtr)},onCancel:function(){return N(!1)}}))},m={txntype:"bpls",refno:null,bill:{},contact:{}},u=function(e,t){switch(t.type){case"SET_BILL":return e.refno=t.refno,void(e.bill=t.bill);case"SET_CONTACT":return void(e.contact=t.contact)}},s=[{step:1,name:"verification",caption:"Verification",Component:i.b},{step:2,name:"initial",caption:"Initial Information",Component:function(e){var t=e.title,n=e.partner,i=e.moveNextStep,l=e.movePrevStep,o=Object(r.ob)(),p=o[1],m=o[0].txntype,u=Object(a.useState)(),s=u[0],E=u[1],d=Object(a.useState)(!1),f=d[0],b=d[1],h=Object(a.useState)(),v=h[0],y=h[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.e,null,c.a.createElement(r.ab,null,t),c.a.createElement(r.U,null,"Initial Information"),c.a.createElement(r.R,null),c.a.createElement(r.t,{msg:s}),c.a.createElement(r.Z,{name:"appno",caption:"BIN or Application No.",value:v,onChange:y,autoFocus:!0}),c.a.createElement(r.a,null,c.a.createElement(r.b,{caption:"Back",variant:"text",action:l}),c.a.createElement(r.c,{caption:"Next",action:function(){b(!0),E(null),function(){try{var e={txntype:m,refno:v,qtr:4,showdetails:!0},t=r.Q.lookupAsync(n.id+":OnlineBusinessBillingService","bpls");return Promise.resolve(t.invoke("getBilling",e))}catch(e){return Promise.reject(e)}}().then((function(e){var t=e.info;t.qtr=4,0==t.amount&&(t.items=[]),p({type:"SET_BILL",refno:v,bill:t}),i()})).catch((function(e){E(e.toString()),b(!1)}))},loading:f,disabled:f}))))}},{step:3,name:"payment",caption:"Payment",Component:function(e){var t=Object(r.ob)();return c.a.createElement(i.d,l({module:{title:e.title,component:p}},e,{contact:t[0].contact,initialStep:1,cancelPayment:e.cancelPayment}))}}],E=function(e){var t=e.partner,n=e.service,i=e.location,o=e.history,p=e.initialStep,E=Object(a.useState)(void 0===p?0:p),d=E[0],f=E[1],b=s[d];return c.a.createElement(r.S,{initialState:m,reducer:u},c.a.createElement(r.J,null,c.a.createElement(r.j,{center:!0},c.a.createElement(r.K,null,c.a.createElement(b.Component,l({page:b},{partner:t,service:n,location:i,history:o,moveNextStep:function(){f((function(e){return e+1}))},movePrevStep:function(){0===d?o.goBack():f((function(e){return e-1}))},cancelPayment:function(){f(1)},title:"Business Online Billing"}))))),c.a.createElement(r.R,{height:50}))},d={bin:null,app:{objid:"",lobs:[],infos:[],newinfos:[],redflags:[]},contact:{}},f=function(e,t){var n;switch(t.type){case"SET_APP":return e.app=t.app,void(e.bin=t.app.bin);case"UPDATE_APP_INFOS":return e.app=t.app,(n=e.app.newinfos).push.apply(n,t.infos),void(e.bin=t.app.bin);case"SET_CONTACT":return void(e.contact=t.contact);default:return e}},b=function(e){var t=e.partner,n=e.title,i=void 0===n?"New Permit Application":n,l=e.cancelCaption,o=void 0===l?"Cancel":l,p=e.onCancel,m=e.onContinue,u=e.error,s=Object(a.useState)(!1),E=s[0],d=s[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.U,null,i),c.a.createElement(r.R,{height:30}),c.a.createElement(r.t,{msg:u}),c.a.createElement(r.V,null,"Please read thoroughly before proceeding"),c.a.createElement("p",{style:{opacity:.8}},"This online service will require personal information from the applicant, lot owner(s) and professionals involved in this transaction. In compliance with the Data Privacy Act, we are securing your consent that you have been authorized by the aforementioned parties to act on their behalf. The data collected will be stored, processed and used for effectively carrying out legitimate transactions with the local government of ",t.title,". If you do not agree to these terms, you can cancel out by click on the Back button. If you agree to these terms, tick on the checkbox and click Continue."),c.a.createElement(r.h,{caption:"Yes, I have read and agree to the terms and conditions",value:E,name:"agreeDisclaimer",onChange:d}),c.a.createElement(r.a,null,c.a.createElement(r.b,{caption:o,action:p}),c.a.createElement(r.c,{caption:"Continue",action:m,disableWhen:!E})))},h=function(e){var t=e.title,n=e.buttonCaption,a=void 0===n?"Continue":n,i=e.appno,l=e.onContinue;return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.U,null,void 0===t?"New Permit Application":t),c.a.createElement(r.R,{height:30}),c.a.createElement(r.V,null,"Application created"),c.a.createElement("p",null,"Please take note of the tracking number for this application. This will be your tracking reference for completing and follow up for this application."),c.a.createElement(r.V,null,i),c.a.createElement(r.a,null,c.a.createElement(r.c,{caption:a,action:l})))},v=function(e){var t=e.isPreviousInfo,n=void 0===t||t;return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.X,{items:e.lobs,showPagination:!1},c.a.createElement(r.Y,{caption:"Line of Business",width:400,expr:"lob.name"}),c.a.createElement(r.Y,{caption:n?"Previous Gross (Php)":"Gross (Php)",expr:function(e){return Object(r.cb)(n?e.prevgross:e.gross)},type:"decimal",align:"right"})))},y=[{name:"contact",caption:"Contact Information"},{name:"enter-bin",caption:"Business Identification Number"},{name:"app-notice",caption:"Business Renewal Notice"},{name:"verify-info",caption:"Business Verify Information"},{name:"confirmation",caption:"Confirmation"},{name:"newapp",caption:"New Application "}],g={decimal:r.m,integer:r.w},O=function(e){var t=e.dataType,n=e.name,a=e.autoFocus,r=void 0!==a&&a,i=e.error,l=void 0!==i&&i,o=e.helperText,p=e.allowNegative,m=void 0!==p&&p,u=g[void 0===t?"integer":t];return c.a.createElement("div",{className:"_1WWgR"},c.a.createElement("label",{style:{width:350}},e.caption),c.a.createElement(u,{className:"_zFpAi",name:n,fullWidth:!1,variant:"outlined",size:"small",required:!0,autoFocus:r,helperText:o,error:l,allowNegative:m}))},S={lobTitles:{display:"flex",justifyContent:"space-between"}},j=function(e){var t=e.app,n=e.requirements,i=e.deleteRequirement,l=e.onUpload,o=Object(a.useState)({ref:{},attachment:{}})[1],p=Object(a.useState)(-1),m=p[0],u=p[1];return Object(a.useEffect)((function(){n.length>0&&m<0&&(o(n[0]),u(0))}),[n]),c.a.createElement("div",{className:"_2TeAB"},c.a.createElement("table",{className:"_30N21"},n.map((function(e){var n=t.objid.replace(/\W/g,""),a=e.attachment.location?c.a.createElement("td",{key:e.objid},c.a.createElement("div",{className:"_hWy1N"},c.a.createElement(r.d,{href:e.attachment.location,target:"_blank"},"View"),c.a.createElement(r.n,{attachment:e.attachment,action:function(){return i(e)}}))):c.a.createElement("td",{key:e.objid,colspan:"2"},c.a.createElement(r.bb,{key:e.objid,fileId:"attachments/"+n,data:e,onUpload:function(t){return l(t,e)},uploadedFile:e.attachment}));return c.a.createElement("tr",{key:e.objid},c.a.createElement("td",{className:"_vaLwg"},e.ref.title),a)}))))},w=[{step:0,name:"select",caption:"Select Application Type",component:function(e){var t=e.service,n=e.history,i=e.appService,l=e.moveNextStep,o=Object(a.useState)(),p=o[0],m=o[1],u=Object(a.useState)("new"),s=u[0],E=u[1],d=Object(a.useState)(),f=d[0],b=d[1],h=Object(a.useState)(!1),v=h[0],y=h[1],g=Object(r.ob)()[1];return c.a.createElement(r.e,null,c.a.createElement(r.ab,null,t.title),c.a.createElement(r.U,null,"Select an action"),c.a.createElement(r.R,{height:30}),c.a.createElement(r.O,{value:s,onChange:E},c.a.createElement(r.x,{caption:"Create New Application",value:"new"}),c.a.createElement(r.x,{caption:"Resume Pending Application",value:"resume"})),c.a.createElement(r.Z,{caption:"Application Tracking No.",value:f,onChange:b,visibleWhen:"resume"===s,variant:"outlined",fullWidth:!1,required:!0,style:{marginLeft:40},error:p,helperText:p,size:"small",autoFocus:!0}),c.a.createElement(r.a,null,c.a.createElement(r.b,{caption:"Cancel",action:function(){return n.goBack()}}),c.a.createElement(r.c,{caption:"Next",action:function(){"new"===s?l():f?(y(!0),i.invoke("getApplication",{controlno:f},(function(e,t){e?m(e):(t.infos=[],t.lobs=[],g({type:"SET_APP",app:t}),l(t.step+1)),y(!1)}))):m("Tracking No. is required.")},disabled:v,processing:v})))}},{step:1,name:"initial",caption:"Initial",component:function(e){var t=e.partner,n=e.history,o=e.title,p=e.appService,m=e.moveNextStep,u=Object(r.ob)(),s=u[1],E=u[0].contact,d=Object(a.useState)(),f=d[0],g=d[1],O=Object(a.useState)(!1),S=O[0],j=O[1],w=(Object(a.useState)(!1),Object(a.useState)({})),N=w[0],A=w[1],x=Object(a.useState)(0),k=x[1],C=y[x[0]],T=function(){g(null),k((function(e){return e+1}))},B=function(){g(null),k((function(e){return e-1}))};return c.a.createElement(c.a.Fragment,null,"contact"===C.name?c.a.createElement(i.b,{partner:t,showName:!0,moveNextStep:T,movePrevStep:B,title:o,subtitle:"Contact Verification",emailRequired:!0}):c.a.createElement(r.e,null,c.a.createElement(r.R,null),c.a.createElement(r.u,{context:N,handler:A,visibleWhen:"enter-bin"===C.name},c.a.createElement(r.ab,null,o),c.a.createElement(r.U,null,C.caption),c.a.createElement(r.R,null),c.a.createElement(r.t,{msg:f}),c.a.createElement(r.Z,{caption:"Enter BIN",name:"bin",required:!0,autoFocus:!0}),c.a.createElement(r.a,null,c.a.createElement(r.b,{caption:"Cancel",action:function(){return n.goBack()}}),c.a.createElement(r.c,{caption:"Next",action:function(){g(null),j(!0),p.invoke("validateBin",l({},N,{contact:E}),(function(e,t){var n;e?g(e):(n=y.findIndex(0==t.redflags.length?function(e){return"verify-info"===e.name}:function(e){return"app-notice"===e.name}),t.step=1,A(t),k(n)),j(!1)}))},processing:S,disableWhen:!N.bin}))),c.a.createElement(r.u,{visibleWhen:"app-notice"===C.name,context:N,handler:A},c.a.createElement(r.ab,null,o),c.a.createElement(r.U,null,C.caption),c.a.createElement(r.R,{height:30}),c.a.createElement(r.K,{row:!0},c.a.createElement(r.Z,{caption:"BIN",name:"bin",readOnly:!0}),c.a.createElement(r.Z,{caption:"Application No.",name:"prevapp.appno",readOnly:!0})),c.a.createElement(r.K,{row:!0},c.a.createElement(r.Z,{caption:"Application Year",name:"prevapp.appyear",readOnly:!0}),c.a.createElement(r.Z,{caption:"Application Type",name:"prevapp.apptype",readOnly:!0})),c.a.createElement(r.Z,{caption:"Trade Name",name:"tradename",readOnly:!0}),c.a.createElement(r.Z,{caption:"Owner Name",name:"owner.name",readOnly:!0}),c.a.createElement(r.Z,{caption:"Business Address",name:"businessaddress",readOnly:!0}),c.a.createElement("p",null,"You cannot renew business due to the following issues. Please settle it with the corresponding offices. You can contact our helpdesk at ",t.phoneno,"."),c.a.createElement(r.X,{items:N.redflags,showPagination:!1},c.a.createElement(r.Y,{caption:"Issue",width:300,expr:"issue"}),c.a.createElement(r.Y,{caption:"Office/Department",expr:"office"})),c.a.createElement(r.a,null,c.a.createElement(r.b,{caption:"Cancel",action:function(){return n.goBack()}}))),c.a.createElement(r.u,{visibleWhen:"verify-info"===C.name,context:N,handler:A},c.a.createElement(r.ab,null,o),c.a.createElement(r.U,null,C.caption),c.a.createElement(r.R,{height:30}),c.a.createElement(r.K,{row:!0},c.a.createElement(r.Z,{caption:"BIN",name:"bin",readOnly:!0}),c.a.createElement(r.Z,{caption:"Application No.",name:"prevapp.appno",readOnly:!0})),c.a.createElement(r.K,{row:!0},c.a.createElement(r.Z,{caption:"Application Year",name:"prevapp.appyear",readOnly:!0}),c.a.createElement(r.Z,{caption:"Application Type",name:"prevapp.apptype",readOnly:!0})),c.a.createElement(r.Z,{caption:"Trade Name",name:"tradename",readOnly:!0}),c.a.createElement(r.Z,{caption:"Owner Name",name:"owner.name",readOnly:!0}),c.a.createElement(r.Z,{caption:"Business Address",name:"businessaddress",readOnly:!0}),c.a.createElement(r.R,null),c.a.createElement("h3",null,"Line of Businesses Operated"),c.a.createElement(v,{lobs:N.lobs}),c.a.createElement(r.a,null,c.a.createElement(r.b,{caption:"Back",action:function(){return k(1)}}),c.a.createElement(r.c,{caption:"Next",action:T}))),c.a.createElement(r.K,{visibleWhen:"confirmation"===C.name},c.a.createElement(r.ab,null,o),c.a.createElement(b,{title:"Business Renewal Application",partner:t,error:f,onCancel:B,onContinue:function(){p.invoke("create",l({},N,{partner:t}),(function(e,t){e?g(e):(t.redflags=[],s({type:"SET_APP",app:t}),A(t),T())}))}})),c.a.createElement(r.K,{visibleWhen:"newapp"===C.name,width:400},c.a.createElement(r.ab,null,o),c.a.createElement(h,{appno:N.controlno,onContinue:m}))))}},{step:2,name:"info",caption:"General Information",component:function(e){var t=e.moveNextStep,n=e.appService,i=e.title,l=Object(r.ob)()[0].app,o=Object(a.useState)(),p=o[0],m=o[1],u=Object(a.useState)(!1)[1],s=Object(a.useState)(l),E=s[0],d=s[1];return Object(a.useEffect)((function(){u(!0),n.invoke("getInfos",{objid:E.objid},(function(e,t){e?m(e):d(t),u(!1)}))}),[]),c.a.createElement(r.e,null,c.a.createElement(r.t,{msg:p}),c.a.createElement(r.u,{context:E,handler:d},c.a.createElement(r.ab,null,i),c.a.createElement(r.V,null,"Tracking No. ",E.controlno),c.a.createElement(r.U,null,"General Information"),c.a.createElement(r.R,{height:30}),c.a.createElement(r.K,{row:!0},c.a.createElement(r.Z,{caption:"BIN",name:"bin",readOnly:!0}),c.a.createElement(r.Z,{caption:"Application No.",name:"controlno",readOnly:!0})),c.a.createElement(r.K,{row:!0},c.a.createElement(r.Z,{caption:"Application Year",name:"appyear",readOnly:!0}),c.a.createElement(r.Z,{caption:"Application Type",name:"apptype",readOnly:!0})),c.a.createElement(r.Z,{caption:"Trade Name",name:"tradename",readOnly:!0}),c.a.createElement(r.Z,{caption:"Owner Name",name:"owner.name",readOnly:!0}),c.a.createElement(r.Z,{caption:"Business Address",name:"businessaddress",readOnly:!0}),c.a.createElement(r.R,null),E.infos.map((function(e){return c.a.createElement(r.y,{key:e.name,caption:e.caption,captionStyle:{width:350}},e.value)})),c.a.createElement(r.R,null),c.a.createElement(v,{lobs:E.lobs,isPreviousInfo:!1}),c.a.createElement(r.a,null,c.a.createElement(r.c,{caption:"Next",action:t}))))}},{step:3,name:"edit-info",caption:"Edit Information",component:function(e){var t=e.appService,n=e.moveNextStep,i=e.movePrevStep,l=e.title,o=Object(r.ob)(),p=o[1],m=o[0].app,u=Object(a.useState)([])[0],s=Object(a.useState)(),E=s[0],d=s[1],f=Object(a.useState)(!1),b=f[0],h=f[1],v=Object(a.useState)(m),y=v[0],g=v[1];return Object(a.useEffect)((function(){h(!0),t.invoke("getInfos",y,(function(e,t){e?d(e):(g(t),p({type:"SET_APP",app:t})),h(!1)}))}),[]),c.a.createElement(r.e,null,c.a.createElement(r.t,{msg:E}),c.a.createElement(r.u,{context:y,handler:g},c.a.createElement(r.ab,null,l),c.a.createElement(r.V,null,"Tracking No. ",y.controlno),c.a.createElement(r.U,null,"Edit Information"),c.a.createElement(r.R,{height:30}),c.a.createElement(r.K,{row:!0},c.a.createElement(r.Z,{caption:"BIN",name:"bin",readOnly:!0}),c.a.createElement(r.Z,{caption:"Application No.",name:"controlno",readOnly:!0})),c.a.createElement(r.K,{row:!0},c.a.createElement(r.Z,{caption:"Application Year",name:"appyear",readOnly:!0}),c.a.createElement(r.Z,{caption:"Application Type",name:"apptype",readOnly:!0})),c.a.createElement(r.Z,{caption:"Trade Name",name:"tradename",readOnly:!0}),c.a.createElement(r.Z,{caption:"Owner Name",name:"owner.name",readOnly:!0}),c.a.createElement(r.Z,{caption:"Business Address",name:"businessaddress",readOnly:!0}),c.a.createElement(r.R,null),c.a.createElement("h4",null,"Business Information"),y.infos.map((function(e,t){return c.a.createElement(O,{key:e.name+":"+t,name:"infos["+t+"].value",dataType:e.datatype,caption:e.caption,autoFocus:0===t})})),c.a.createElement(r.R,null),c.a.createElement(r.K,{style:S.lobTitles},c.a.createElement("h4",null,"Line of Businesses"),c.a.createElement("h4",null,"Last Year Gross (Php)")),y.lobs.map((function(e,t){return c.a.createElement(O,{key:e.name+":"+t,name:"lobs["+t+"].gross",dataType:"decimal",caption:e.lob.name,error:u[t],helperText:u[t]})})),c.a.createElement(r.a,null,c.a.createElement(r.b,{caption:"Back",action:i}),c.a.createElement(r.c,{caption:"Next",action:function(){d(null),h(!0),t.invoke("saveInfos",{objid:y.objid,step:4,lobs:y.lobs,infos:y.infos},(function(e,t){e?d(e):n(),h(!1)}))},loading:b,disableWhen:b}))))}},{step:4,name:"requirements",caption:"Requirements",component:function(e){var t=e.appService,n=e.moveNextStep,i=e.movePrevStep,o=e.title,p=Object(r.ob)(),m=p[1],u=p[0].app,s=Object(a.useState)(),E=s[0],d=s[1],f=Object(a.useState)(!1),b=f[0],h=f[1],v=Object(a.useState)([]),y=v[0],g=v[1];Object(a.useEffect)((function(){h(!0),t.invoke("getRequirements",u,(function(e,t){e?d(e):(t.forEach((function(e){e.attachment||(e.attachment={})})),m({type:"SET_APP",app:l({},u,{step:4})}),g(t)),h(!1)}))}),[]);var O=function(e){t.invoke("update",{objid:u.objid,requirements:e},(function(e,t){e&&d(e)}))},S=-1==y.findIndex((function(e){return void 0===e.attachment}));return c.a.createElement(r.e,null,c.a.createElement(r.t,{msg:E}),c.a.createElement(r.ab,null,o),c.a.createElement(r.V,null,"Tracking No. "+u.controlno),c.a.createElement(r.U,null,"Requirements"),c.a.createElement("h4",null,"Please attach the following documents:"),c.a.createElement(j,{app:u,requirements:y,onUpload:function(e,t){var n=y.findIndex((function(e){return e.objid===t.objid})),a=[].concat(y);a[n].attachment=e,g(a),O(a)},deleteRequirement:function(e){var t=y.findIndex((function(t){return t.objid===e.objid})),n=[].concat(y);n[t].attachment={},g(n),O(n)}}),c.a.createElement(r.a,null,c.a.createElement(r.b,{caption:"Back",action:i}),c.a.createElement(r.c,{caption:"Next",action:function(){h(!0),t.invoke("update",{objid:u.objid,step:u.step+1},(function(e,t){e?d(e):n(),h(!1)}))},processing:b,disableWhen:!S})))}},{step:5,name:"confirm",caption:"Confirm",component:function(e){var t=e.moveNextStep,n=e.movePrevStep,i=e.appService,l=e.title,o=Object(r.ob)()[0].app,p=Object(a.useState)(),m=p[0],u=p[1],s=(Object(a.useState)(!1),Object(a.useState)(o)),E=s[0],d=s[1],f=Object(a.useState)(!1),b=f[0],h=f[1];return Object(a.useEffect)((function(){i.invoke("getInfos",{objid:E.objid},(function(e,t){e?u(e):d(t)}))}),[]),c.a.createElement(r.e,null,c.a.createElement(r.t,{msg:m}),c.a.createElement(r.u,{context:E,handler:d},c.a.createElement(r.ab,null,l),c.a.createElement(r.V,null,"Tracking No. ",E.controlno),c.a.createElement(r.U,null,"Confirmation"),c.a.createElement(r.R,{height:30}),c.a.createElement(r.K,{row:!0},c.a.createElement(r.Z,{caption:"BIN",name:"bin",readOnly:!0}),c.a.createElement(r.Z,{caption:"Application No.",name:"prevapp.appno",readOnly:!0})),c.a.createElement(r.K,{row:!0},c.a.createElement(r.Z,{caption:"Application Year",name:"prevapp.appyear",readOnly:!0}),c.a.createElement(r.Z,{caption:"Application Type",name:"prevapp.apptype",readOnly:!0})),c.a.createElement(r.Z,{caption:"Trade Name",name:"tradename",readOnly:!0}),c.a.createElement(r.Z,{caption:"Owner Name",name:"owner.name",readOnly:!0}),c.a.createElement(r.Z,{caption:"Business Address",name:"businessaddress",readOnly:!0}),c.a.createElement(r.R,null),E.infos.map((function(e){return c.a.createElement(r.y,{key:e.name,caption:e.caption,captionStyle:{width:300}},e.value)})),c.a.createElement(r.R,null),c.a.createElement(v,{lobs:E.lobs,isPreviousInfo:!1}),c.a.createElement(r.a,null,c.a.createElement(r.b,{caption:"Back",action:n}),c.a.createElement(r.c,{caption:"Next",action:function(){return h(!0)}}))),c.a.createElement(r.I,{open:b,title:"New Application Confirmation",type:"confirm",onAccept:function(){i.invoke("submit",{objid:E.objid,step:6},(function(e,n){e?(u(e),h(!1)):t()}))},acceptCaption:"Submit Application",onCancel:function(){return h(!1)}},c.a.createElement("p",null,"Verify that all information in your application are correct and then click on Submit Application.")))}},{step:6,name:"completed",caption:"Completed",component:function(e){var t=e.history,n=e.partner,a=e.title,i=Object(r.ob)()[0].app;return c.a.createElement(r.e,null,c.a.createElement(r.K,null,c.a.createElement(r.ab,null,a),c.a.createElement(r.V,null,"Tracking No. "+i.controlno),c.a.createElement(r.U,null,"Application Completed"),c.a.createElement(r.R,{height:30}),c.a.createElement("p",null,"Your application has been successfully submitted."),c.a.createElement("p",null,"A notification would be sent on your business email account upon approval of your application for payment."),c.a.createElement("p",null,"Thank you for using this service."),c.a.createElement(r.a,null,c.a.createElement(r.c,{caption:"Return",action:function(){t.replace("/partner/"+n.name+"/services",{partner:n})}}))))}}],N=function(e){var t=e.partner,n=e.service,i=e.location,o=e.history,p=e.initialStep,m=Object(a.useState)(void 0===p?0:p),u=m[0],s=m[1],E=Object(a.useState)({step:0}),b=E[0],h=E[1],v=w[u],y=v.component,g={partner:t,service:n,location:i,history:o,moveNextStep:function(e){"number"==typeof e?s(e==w.length?e-1:e):(e=u+1,s((function(e){return e+1}))),h(l({},b,{step:e}))},movePrevStep:function(){0===u?o.goBack():s((function(e){return e-1}))},appService:r.Q.lookup(t.id+":OnlineBusinessRenewalService","bpls"),stepCompleted:u<b.step,title:"Business Renewal Application"};return c.a.createElement(r.S,{initialState:d,reducer:f},c.a.createElement(r.J,null,u>1&&u<6&&c.a.createElement(r.K,{target:"left",style:A.stepperContainer},c.a.createElement(r.T,{steps:w.filter((function(e){return e.step>1})),completedStep:b.step-1,activeStep:u-2,handleStep:function(e){s(e+2)}})),c.a.createElement(r.j,{center:!0},c.a.createElement(r.K,null,c.a.createElement(y,l({page:v},g)))),c.a.createElement(r.R,{height:40})))},A={stepperContainer:{paddingTop:30,paddingLeft:40}},x=function(e,t){switch(t.type){case"SET_APP":return e.app=t.app,void(e.bin=t.app.bin);case"SET_CONTACT":return void(e.contact=t.contact);case"SET_ATTACHMENTS":return void(e.app.attachments=t.attachments);case"SET_REQUIREMENTS":return void(e.requirements=t.requirements);default:return e}},k=function(e){var t=e.app,n=e.requirements,i=e.deleteRequirement,l=e.onUpload,o=Object(a.useState)({ref:{},attachment:{}})[1],p=Object(a.useState)(-1),m=p[0],u=p[1];return Object(a.useEffect)((function(){n.length>0&&m<0&&(o(n[0]),u(0))}),[n]),c.a.createElement("div",{className:"_1fbZ1"},c.a.createElement("table",{className:"_2QOAk"},n.map((function(e){var n=t.objid.replace(/\W/g,""),a=e.attachment.location?c.a.createElement("td",{key:e.objid},c.a.createElement("div",{className:"_1UGMU"},c.a.createElement(r.d,{href:e.attachment.location,target:"_blank"},"View"),c.a.createElement(r.n,{attachment:e.attachment,action:function(){return i(e)}}))):c.a.createElement("td",{key:e.objid,colspan:"2"},c.a.createElement(r.bb,{key:e.objid,fileId:"attachments/"+n,data:e,onUpload:function(t){return l(t,e)},uploadedFile:e.attachment}));return c.a.createElement("tr",{key:e.objid},c.a.createElement("td",{className:"_2AmsP"},e.ref.title),a)}))))},C=[{name:"uaf",caption:"Unified Application Form"},{name:"contact",caption:"Contact Information"},{name:"business-name",caption:"Business Name Information"},{name:"confirmation",caption:"Confirmation"},{name:"newapp",caption:"New Application "}],T=[{step:0,name:"select",caption:"Select Application Type",component:function(e){var t=e.service,n=e.history,i=e.appService,l=e.partner,o=e.moveNextStep,p=Object(a.useState)(),m=p[0],u=p[1],s=Object(a.useState)("new"),E=s[0],d=s[1],f=Object(a.useState)(),b=f[0],h=f[1],v=Object(a.useState)(!1),y=v[0],g=v[1],O=Object(r.ob)()[1];return c.a.createElement(r.e,null,c.a.createElement(r.ab,null,t.title),c.a.createElement(r.U,null,"Select an action"),c.a.createElement(r.R,{height:30}),c.a.createElement(r.O,{value:E,onChange:d},c.a.createElement(r.x,{caption:"Create New Application",value:"new"}),c.a.createElement(r.x,{caption:"Resume Pending Application",value:"resume"})),c.a.createElement(r.Z,{caption:"Application Tracking No.",value:b,onChange:h,visibleWhen:"resume"===E,variant:"outlined",required:!0,style:{marginLeft:40},error:m,helperText:m,size:"small",autoFocus:!0}),c.a.createElement(r.a,null,c.a.createElement(r.b,{caption:"Cancel",action:function(){return n.push("/partner/"+l.group.name+"_"+l.name+"/services")}}),c.a.createElement(r.c,{caption:"Next",action:function(){"new"===E?o():b?(g(!0),i.invoke("findApp",{controlno:b},(function(e,t){e?u(e):(O({type:"SET_APP",app:t}),o(t.step)),g(!1)}))):u("Tracking No. is required.")},loading:y})))}},{step:1,name:"initial",caption:"Initial",component:function(e){var t=e.partner,n=e.history,o=e.title,p=e.appService,m=Object(r.ob)(),u=m[0],s=m[1],E=Object(a.useState)(),d=E[0],f=E[1],v=Object(a.useState)(!1),y=v[0],g=v[1],O=Object(a.useState)({objid:Object(r.nb)(40),attachments:[],requirements:[]}),S=O[0],j=O[1],w=Object(a.useState)(0),N=w[0],A=w[1],x=Object(a.useState)([{ref:{reftype:"uaf",title:"Unified Application Form"},attachment:{}}]),T=x[0],B=x[1],P=C[N],R=Object(a.useRef)(),I=function(){A((function(e){return e+1}))},Z=function(){A((function(e){return e-1}))};return c.a.createElement(c.a.Fragment,null,"contact"===P.name?c.a.createElement(i.b,{partner:t,showName:!0,moveNextStep:I,movePrevStep:Z,title:o,subtitle:"Contact Verification",emailRequired:!0}):c.a.createElement("form",{ref:R},c.a.createElement(r.e,null,c.a.createElement(r.R,null),c.a.createElement(r.u,{context:S,handler:j,visibleWhen:"uaf"===P.name},c.a.createElement(r.ab,null,o),c.a.createElement(r.U,null,P.caption),c.a.createElement(r.R,null),c.a.createElement(r.t,{msg:d}),c.a.createElement("p",null,"Application for New Business Permit requires the submission of a signed copy of the Unified Application Form."),c.a.createElement("p",null,"Follow the steps below to complete the submission of the application."),c.a.createElement("ol",null,c.a.createElement("li",null,c.a.createElement(r.K,null,c.a.createElement("label",null,"Download the business permit Unified Application Form"),c.a.createElement("div",null,c.a.createElement(r.p,{href:"/attachments/UAF-BPLS.pdf"}))),c.a.createElement(r.R,null)),c.a.createElement("li",null,c.a.createElement("label",null,"Fill-up the application form completely and accurately. Be sure to affix your signature on the spaces provided."),c.a.createElement(r.R,null)),c.a.createElement("li",null,"Click Apply Now to continue with the online application.")),c.a.createElement(r.a,null,c.a.createElement(r.b,{caption:"Cancel",action:function(){return n.push("/partner/"+t.group.name+"_"+t.name+"/services")}}),c.a.createElement(r.c,{caption:"Apply Now",action:I,processing:y}))),c.a.createElement(r.u,{context:S,handler:j,visibleWhen:"business-name"===P.name},c.a.createElement(r.ab,null,o),c.a.createElement(r.U,null,P.caption),c.a.createElement(r.R,null),c.a.createElement(r.t,{msg:d}),c.a.createElement(r.Z,{caption:"Name of Business",name:"businessname",required:!0,autoFocus:!0}),c.a.createElement(r.R,null),c.a.createElement(r.Z,{caption:"Owner Name",name:"appinfo.owner.name",required:!0}),c.a.createElement(r.Z,{caption:"Owner Address",name:"appinfo.owner.address",required:!0}),c.a.createElement(r.R,null),c.a.createElement("p",null,"Attach the following document(s):"),c.a.createElement(k,{app:S,requirements:T,onUpload:function(e,t){var n=T.findIndex((function(e){return e.objid===t.objid})),a=[].concat(T);a[n].attachment=e,B(a)},deleteRequirement:function(e){var t=T.findIndex((function(t){return t.objid===e.objid})),n=[].concat(T);n[t].attachment={},B(n)}}),c.a.createElement(r.a,null,c.a.createElement(r.b,{caption:"Back",action:Z}),c.a.createElement(r.c,{caption:"Next",action:function(){f(null),T[0].attachment.location?I():f("Unified Application Form attachment should be uploaded.")},processing:y}))),c.a.createElement(r.K,{visibleWhen:"confirmation"===P.name},c.a.createElement(r.ab,null,o),c.a.createElement(b,{title:o,partner:t,error:d,onCancel:Z,onContinue:function(){g(!0);var e=l({},S,{apptype:"NEW",orgcode:t.id,partner:t,contact:u.contact,requirements:T});p.invoke("create",e,(function(e,t){e?f(e):(t.redflags=[],s({type:"SET_APP",app:t}),j(t),I()),g(!1)}))},cancelCaption:"Back"})),c.a.createElement(r.K,{visibleWhen:"newapp"===P.name,width:400},c.a.createElement(r.ab,null,o),c.a.createElement(h,{buttonCaption:"Return",appno:S.controlno,onContinue:function(){return n.push("/partner/"+t.group.name+"_"+t.name+"/services")}})))))}},{step:2,name:"completed",caption:"Completed",component:function(e){var t=e.history,n=e.partner,a=e.title,i=Object(r.ob)()[0].app;return c.a.createElement(r.e,null,c.a.createElement(r.K,null,c.a.createElement(r.ab,null,a),c.a.createElement(r.U,null,"Application Completed"),c.a.createElement(r.R,{height:30}),c.a.createElement(r.V,null,"Tracking No. "+i.controlno),c.a.createElement(r.R,{height:30}),c.a.createElement("p",null,"Your application has been successfully submitted."),c.a.createElement("p",null,"A notification would be sent on your business email account upon approval of your application for payment."),c.a.createElement("p",null,"Thank you for using this service."),c.a.createElement(r.a,null,c.a.createElement(r.c,{caption:"Return",action:function(){t.replace("/partner/"+n.group.name+"_"+n.name+"/services",{partner:n})}}))))}}],B=function(e){var t=e.partner,n=e.service,i=e.location,o=e.history,p=e.initialStep,m=void 0===p?0:p,u=Object(a.useState)(m),s=u[0],E=u[1],d=Object(a.useState)(m),f=d[0],b=d[1],h=Object(a.useState)({step:0}),v=h[0],y=h[1],g=Object(a.useState)(),O=g[0],S=g[1],j=Object(a.useState)(!0),w=j[0],N=j[1],A=Object(a.useState)(l({},x.initialState)),k=A[0],C=A[1],B=Object(a.useState)(!1),R=B[0],I=B[1];O!==i.hash&&S(i.hash),Object(a.useEffect)((function(){var e=Object(r.hb)(i,"refid");e&&O&&!R?appService.invoke("findApp",{objid:e},(function(e,t){if(!e&&t)if("completed"!==T.find((function(e){return e.step===t.step})).name){var n=T.find((function(e){return e.name===O.substring(1)}));n&&n.step<=t.step&&E(n.step)}else E(t.step);C(l({},k,{app:t})),N(!1),f<t.step&&b(t.step),I(!0)})):N(!1)}),[O]);var Z=function(e){i.hash="#"+T[e].name,o.push(i)};if(w)return null;var q=T[s],U=q.component,_={partner:t,service:n,location:i,history:o,page:q,moveNextStep:function(e){"number"==typeof e?E(e):e=s+1,y(l({},v,{step:e})),f<e?(b(e),E((function(e){return e+1}))):E(f),Z(e)},movePrevStep:function(){if(0===s)o.goBack();else{var e=s-1;E(e),Z(e)}},appService:r.Q.lookup(t.id+":OnlineBusinessNewApplicationService","bpls"),stepCompleted:s<v.step,title:"New Business Application"};return c.a.createElement(r.S,{initialState:k,reducer:x},c.a.createElement(r.J,null,s>1&&"completed"!==q.name&&c.a.createElement(r.K,{target:"left",style:P.stepperContainer},c.a.createElement(r.T,{steps:T.filter((function(e){return e.step>1})),completedStep:f-1,activeStep:s-2,handleStep:function(e){var t=e+2;E(t),Z(t)}})),c.a.createElement(r.j,{center:!0},c.a.createElement(r.K,null,c.a.createElement(U,l({page:q},_))),c.a.createElement(r.R,{height:50}))))},P={stepperContainer:{paddingLeft:40,paddingBottom:50}}}}]);