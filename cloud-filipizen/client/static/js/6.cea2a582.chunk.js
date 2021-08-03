(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{613:function(e,t,n){"use strict";n.r(t),n.d(t,"BplsBillingWebController",(function(){return d})),n.d(t,"RenewBusinessWebController",(function(){return x}));var a=n(0),r=n.n(a),c=n(2),i=(n(108),n(109));function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o=function(e){var t=e.initialValue,n=e.open,i=e.onAccept,l=e.onCancel,o=Object(a.useState)(void 0===t?{billtoqtr:4}:t),m=o[0];return r.a.createElement(c.z,{open:n,caption:"Pay Options",onAccept:function(){i(m)},onCancel:l,maxWidth:100},r.a.createElement(c.n,{context:m,handler:o[1]},r.a.createElement(c.F,{caption:"Quarter to Bill",name:"billtoqtr",items:[1,2,3,4]})))},m=function(e){var t=e.title,n=e.partner,i=e.onCancel,l=e.onSubmit,m=e.error,p=Object(c.Z)()[0],u=p.refno,s=p.txntype,d=p.contact,E=Object(a.useState)(p.bill),f=E[0],b=E[1],v=Object(a.useState)(m),h=v[0],y=v[1],O=Object(a.useState)(!1),g=O[0],S=O[1],j=Object(a.useState)(!1),N=j[0],x=j[1],w=Object(a.useState)(4),C=w[0],P=w[1],B=Object(a.useState)()[1];Object(a.useEffect)((function(){u&&(S(!0),y(null),function(){try{var e={txntype:s,refno:u,qtr:C,showdetails:!0},t=c.G.lookupAsync(n.id+":OnlineBusinessBillingService","bpls");return Promise.resolve(t.invoke("getBilling",e))}catch(e){return Promise.reject(e)}}().then((function(e){var t=e.info;t.qtr=4,0==t.amount&&(t.items=[]),b(t),B("51001:"+t.billno),S(!1)})).catch((function(e){y(e.toString()),S(!1)})))}),[C]);var A=d&&d.email===f.email;return r.a.createElement(c.e,{style:{maxWidth:800}},r.a.createElement(c.P,null,t),r.a.createElement(c.K,null,"Billing Information"),r.a.createElement(c.H,null),r.a.createElement(c.m,{msg:h}),r.a.createElement(c.C,null,r.a.createElement(c.s,{context:f,caption:"Application No.",expr:"appno"}),r.a.createElement(c.s,{context:f,caption:"Application Type",expr:"apptype"}),r.a.createElement(c.s,{context:f,caption:"Date Filed",expr:"appdate"}),r.a.createElement(c.s,{context:f,caption:"BIN",expr:"bin"}),r.a.createElement(c.s,{context:f,caption:"Trade Name",expr:"tradename",visibleWhen:A}),r.a.createElement(c.s,{context:f,caption:"Owner Name",expr:"ownername",visibleWhen:A}),r.a.createElement(c.s,{context:f,caption:"Business Address",expr:"address",visibleWhen:A}),r.a.createElement(c.H,null),r.a.createElement(c.C,{style:{display:"flex",justifyContent:"flex-start"}},r.a.createElement(c.d,{variant:"outlined",caption:"Pay Option",action:function(){return x(!0)}})),r.a.createElement(c.M,{items:f?f.items:[],size:"small",showPagination:!1},r.a.createElement(c.N,{caption:"Particulars",expr:function(e){return(e.lobname?e.lobname:"")+" -"+e.account}}),r.a.createElement(c.N,{caption:"Amount",expr:"amount",align:"right",format:"currency"}),r.a.createElement(c.N,{caption:"Surcharge",expr:"surcharge",align:"right",format:"currency"}),r.a.createElement(c.N,{caption:"Interest",expr:"interest",align:"right",format:"currency"}),r.a.createElement(c.N,{caption:"Total",expr:"total",align:"right",format:"currency"})),r.a.createElement(c.C,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",paddingRight:15}},r.a.createElement(c.s,{context:f,caption:"Bill Amount:",expr:function(e){return Object(c.R)(e.amount)}}))),r.a.createElement(c.a,{disabled:g},r.a.createElement(c.b,{caption:"Back",action:function(){i(0)}}),r.a.createElement(c.d,{caption:"Confirm Payment",action:function(){l({refno:u,txntype:s,origin:"filipizen",orgcode:n.id,qtr:C,info:{data:f,qtr:C},paidby:f.paidby,paidbyaddress:f.paidbyaddress,amount:f.amount,particulars:"Business Tax for Application No. "+f.appno})},disableWhen:0===f.amount})),r.a.createElement(o,{initialValue:f&&{qtr:C},open:N,onAccept:function(e){x(!1),P(e.billtoqtr)},onCancel:function(){return x(!1)}}))},p={txntype:"bpls",refno:null,bill:{},contact:{}},u=function(e,t){switch(t.type){case"SET_BILL":return e.refno=t.refno,void(e.bill=t.bill);case"SET_CONTACT":return void(e.contact=t.contact)}},s=[{step:1,name:"verification",caption:"Verification",Component:i.b},{step:2,name:"initial",caption:"Initial Information",Component:function(e){var t=e.title,n=e.partner,i=e.moveNextStep,l=e.movePrevStep,o=Object(c.Z)(),m=o[1],p=o[0].txntype,u=Object(a.useState)(),s=u[0],d=u[1],E=Object(a.useState)(!1),f=E[0],b=E[1],v=Object(a.useState)(),h=v[0],y=v[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.e,null,r.a.createElement(c.P,null,t),r.a.createElement(c.K,null,"Initial Information"),r.a.createElement(c.H,null),r.a.createElement(c.m,{msg:s}),r.a.createElement(c.O,{name:"appno",caption:"BIN or Application No.",value:h,onChange:y,autoFocus:!0}),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Back",variant:"text",action:l}),r.a.createElement(c.d,{caption:"Next",action:function(){b(!0),d(null),function(){try{var e={txntype:p,refno:h,qtr:4,showdetails:!0},t=c.G.lookupAsync(n.id+":OnlineBusinessBillingService","bpls");return Promise.resolve(t.invoke("getBilling",e))}catch(e){return Promise.reject(e)}}().then((function(e){var t=e.info;t.qtr=4,0==t.amount&&(t.items=[]),m({type:"SET_BILL",refno:h,bill:t}),i()})).catch((function(e){d(e.toString()),b(!1)}))},loading:f,disabled:f}))))}},{step:3,name:"payment",caption:"Payment",Component:function(e){var t=Object(c.Z)();return r.a.createElement(i.d,l({module:{title:e.title,component:m}},e,{contact:t[0].contact,initialStep:1,cancelPayment:e.cancelPayment}))}}],d=function(e){var t=e.partner,n=e.service,i=e.location,o=e.history,m=e.initialStep,d=Object(a.useState)(void 0===m?0:m),E=d[0],f=d[1],b=s[E];return r.a.createElement(c.I,{initialState:p,reducer:u},r.a.createElement(c.B,null,r.a.createElement(c.i,{center:!0},r.a.createElement(c.C,null,r.a.createElement(b.Component,l({page:b},{partner:t,service:n,location:i,history:o,moveNextStep:function(){f((function(e){return e+1}))},movePrevStep:function(){0===E?o.goBack():f((function(e){return e-1}))},cancelPayment:function(){f(1)},title:"Business Online Billing"}))))))},E={bin:null,app:{objid:"0001",lobs:[],infos:[],newinfos:[],redflags:[]},contact:{}},f=function(e,t){var n;switch(t.type){case"SET_APP":return e.app=t.app,void(e.bin=t.app.bin);case"UPDATE_APP_INFOS":return e.app=t.app,(n=e.app.newinfos).push.apply(n,t.infos),void(e.bin=t.app.bin);case"SET_CONTACT":return void(e.contact=t.contact);default:return e}},b=function(e){var t=e.partner,n=e.title,i=void 0===n?"New Permit Application":n,l=e.onCancel,o=e.onContinue,m=e.error,p=Object(a.useState)(!1),u=p[0],s=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.K,null,i),r.a.createElement(c.H,{height:30}),r.a.createElement(c.m,{msg:m}),r.a.createElement(c.L,null,"Please read thoroughly before proceeding"),r.a.createElement("p",{style:{opacity:.8}},"This online service will require personal information from the applicant, lot owner(s) and professionals involved in this transaction. In compliance with the Data Privacy Act, we are securing your consent that you have been authorized by the aforementioned parties to act on their behalf. The data collected will be stored, processed and used for effectively carrying out legitimate transactions with the local government of ",t.title,". If you do not agree to these terms, you can cancel out by click on the Cancel button. If you agree to these terms, tick on the checkbox and click Continue."),r.a.createElement(c.g,{caption:"Yes, I have read and agree to the terms and conditions",value:u,name:"agreeDisclaimer",onChange:s}),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Cancel",action:l}),r.a.createElement(c.d,{caption:"Continue",action:o,disableWhen:!u})))},v=function(e){var t=e.title,n=e.appno,a=e.onContinue;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.K,null,void 0===t?"New Permit Application":t),r.a.createElement(c.H,{height:30}),r.a.createElement(c.L,null,"Application created"),r.a.createElement("p",null,"Please take note of the tracking number for this application. This will be your tracking reference for completing and follow up for this application."),r.a.createElement(c.L,null,n),r.a.createElement(c.a,null,r.a.createElement(c.d,{caption:"Continue",action:a})))},h=function(e){var t=e.isPreviousInfo,n=void 0===t||t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.M,{items:e.lobs,showPagination:!1},r.a.createElement(c.N,{caption:"Line of Business",width:400,expr:"lob.name"}),r.a.createElement(c.N,{caption:n?"Previous Gross (Php)":"Gross (Php)",expr:function(e){return Object(c.R)(n?e.prevgross:e.gross)},type:"decimal",align:"right"})))},y=[{name:"contact",caption:"Contact Information"},{name:"enter-bin",caption:"Business Identification Number"},{name:"app-notice",caption:"Business Renewal Notice"},{name:"verify-info",caption:"Business Verify Information"},{name:"confirmation",caption:"Confirmation"},{name:"newapp",caption:"New Application "}],O={decimal:c.k,integer:c.q},g=function(e){var t=e.dataType,n=e.name,a=e.autoFocus,c=void 0!==a&&a,i=e.error,l=void 0!==i&&i,o=e.helperText,m=O[void 0===t?"integer":t];return r.a.createElement("div",{className:"_1WWgR"},r.a.createElement("label",{style:{width:350}},e.caption),r.a.createElement(m,{className:"_zFpAi",name:n,fullWidth:!1,variant:"outlined",size:"small",required:!0,autoFocus:c,helperText:o,error:l}))},S={lobTitles:{display:"flex",justifyContent:"space-between"}},j=function(e){var t=e.app,n=e.requirements,i=e.deleteRequirement,l=e.onUpload,o=Object(a.useState)({ref:{},attachment:{}}),m=o[0],p=o[1],u=Object(a.useState)(-1),s=u[0],d=u[1];return Object(a.useEffect)((function(){n.length>0&&s<0&&(p(n[0]),d(0))}),[n]),r.a.createElement("div",{className:"_2TeAB"},r.a.createElement("div",{className:"_3LmX8"},r.a.createElement("h4",{style:{paddingLeft:20}},"Documents"),n.map((function(e,t){return r.a.createElement("div",{key:e.objid,className:s===t?"_aF9YH _jTxCt":"_aF9YH",onClick:function(){return t=e,d(n.findIndex((function(e){return e.objid===t.objid}))),void p(t);var t}},r.a.createElement("label",null,e.ref.title),e.attachment&&e.attachment.location&&r.a.createElement(c.c,{style:{fontSize:20,color:"green"}}))}))),r.a.createElement("div",{className:"_1SBOI"},r.a.createElement("div",{className:"_1dnjD"},r.a.createElement("label",{className:"_3-PiJ"},m.ref.title),m.attachment&&m.attachment.location&&r.a.createElement(c.d,{caption:"Delete",color:"secondary",action:function(){return i(m)}})),r.a.createElement("div",{className:"_1R5wv"},m.attachment&&m.attachment.location?r.a.createElement("img",{className:"_2iwMt",src:"/filipizen/attachment/download?key="+m.attachment.key,alt:m.attachment.name}):r.a.createElement(c.Q,{key:m.objid,fileId:t.objid+"/"+m.objid,data:m,onUpload:function(e){return l(e,m)},uploadedFile:m.attachment}))))},N=[{step:0,name:"select",caption:"Select Application Type",component:function(e){var t=e.service,n=e.history,i=e.appService,l=e.moveNextStep,o=Object(a.useState)(),m=o[0],p=o[1],u=Object(a.useState)("new"),s=u[0],d=u[1],E=Object(a.useState)(),f=E[0],b=E[1],v=Object(c.Z)()[1];return r.a.createElement(c.e,null,r.a.createElement(c.P,null,t.title),r.a.createElement(c.K,null,"Select an action"),r.a.createElement(c.H,{height:30}),r.a.createElement(c.E,{value:s,onChange:d},r.a.createElement(c.r,{caption:"Create New Application",value:"new"}),r.a.createElement(c.r,{caption:"Resume Pending Application",value:"resume"})),r.a.createElement(c.O,{caption:"Application Tracking No.",value:f,onChange:b,visibleWhen:"resume"===s,variant:"outlined",fullWidth:!1,required:!0,style:{marginLeft:40},error:m,helperText:m,size:"small",autoFocus:!0}),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Cancel",action:function(){return n.goBack()}}),r.a.createElement(c.d,{caption:"Next",action:function(){"new"===s?l():f?i.invoke("getApplication",{controlno:f},(function(e,t){e?p(e):(t.infos=[],t.lobs=[],v({type:"SET_APP",app:t}),l(t.step+1))})):p("Tracking No. is required.")}})))}},{step:1,name:"initial",caption:"Initial",component:function(e){var t=e.partner,n=e.history,o=e.title,m=e.appService,p=e.moveNextStep,u=Object(c.Z)(),s=u[1],d=u[0].contact,E=Object(a.useState)(),f=E[0],O=E[1],g=Object(a.useState)(!1),S=g[0],j=g[1],N=(Object(a.useState)(!1),Object(a.useState)({})),x=N[0],w=N[1],C=(Object(a.useState)(),Object(a.useState)(),Object(a.useState)(0)),P=C[0],B=C[1],A=y[P],k=function(){B((function(e){return e+1}))},T=function(){0===P?n.goBack():B((function(e){return e-1}))};return r.a.createElement(r.a.Fragment,null,"contact"===A.name?r.a.createElement(i.b,{partner:t,showName:!0,moveNextStep:k,movePrevStep:T,title:o,subtitle:"Contact Verification",emailRequired:!0}):r.a.createElement(c.e,null,r.a.createElement(c.H,null),r.a.createElement(c.n,{context:x,handler:w,visibleWhen:"enter-bin"===A.name},r.a.createElement(c.P,null,o),r.a.createElement(c.K,null,A.caption),r.a.createElement(c.H,null),r.a.createElement(c.m,{msg:f}),r.a.createElement(c.O,{caption:"Enter BIN",name:"bin",required:!0,autoFocus:!0}),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Cancel",action:function(){return n.goBack()}}),r.a.createElement(c.d,{caption:"Next",action:function(){O(null),j(!0),m.invoke("validateBin",l({},x,{contact:d}),(function(e,t){var n;e?O(e):(n=y.findIndex(t.redflags&&0!=t.redflags.length?function(e){return"app-notice"===e.name}:function(e){return"verify-info"===e.name}),t.step=1,w(t),B(n)),j(!1)}))},loading:S,disableWhen:!x.bin}))),r.a.createElement(c.n,{visibleWhen:"app-notice"===A.name,context:x,handler:w},r.a.createElement(c.P,null,o),r.a.createElement(c.K,null,A.caption),r.a.createElement(c.H,{height:30}),r.a.createElement(c.C,{row:!0},r.a.createElement(c.O,{caption:"BIN",name:"bin",readOnly:!0}),r.a.createElement(c.O,{caption:"Application No.",name:"prevapp.appno",readOnly:!0})),r.a.createElement(c.C,{row:!0},r.a.createElement(c.O,{caption:"Application Year",name:"prevapp.appyear",readOnly:!0}),r.a.createElement(c.O,{caption:"Application Type",name:"prevapp.apptype",readOnly:!0})),r.a.createElement(c.O,{caption:"Trade Name",name:"tradename",readOnly:!0}),r.a.createElement(c.O,{caption:"Owner Name",name:"owner.name",readOnly:!0}),r.a.createElement(c.O,{caption:"Business Address",name:"businessaddress",readOnly:!0}),r.a.createElement("p",null,"You cannot renew business due to the following issues. Please settle it with the corresponding offices. You can contact our helpdesk at ",t.phoneno,"."),r.a.createElement(c.M,{items:x.redflags,showPagination:!1},r.a.createElement(c.N,{caption:"Issue",width:300,expr:"issue"}),r.a.createElement(c.N,{caption:"Office/Department",expr:"office"})),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Cancel",action:function(){return n.goBack()}}))),r.a.createElement(c.n,{visibleWhen:"verify-info"===A.name,context:x,handler:w},r.a.createElement(c.P,null,o),r.a.createElement(c.K,null,A.caption),r.a.createElement(c.H,{height:30}),r.a.createElement(c.C,{row:!0},r.a.createElement(c.O,{caption:"BIN",name:"bin",readOnly:!0}),r.a.createElement(c.O,{caption:"Application No.",name:"prevapp.appno",readOnly:!0})),r.a.createElement(c.C,{row:!0},r.a.createElement(c.O,{caption:"Application Year",name:"prevapp.appyear",readOnly:!0}),r.a.createElement(c.O,{caption:"Application Type",name:"prevapp.apptype",readOnly:!0})),r.a.createElement(c.O,{caption:"Trade Name",name:"tradename",readOnly:!0}),r.a.createElement(c.O,{caption:"Owner Name",name:"owner.name",readOnly:!0}),r.a.createElement(c.O,{caption:"Business Address",name:"businessaddress",readOnly:!0}),r.a.createElement(c.H,null),r.a.createElement("h3",null,"Line of Businesses Operated"),r.a.createElement(h,{lobs:x.lobs}),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Back",action:function(){return B(1)}}),r.a.createElement(c.d,{caption:"Next",action:k}))),r.a.createElement(c.C,{visibleWhen:"confirmation"===A.name},r.a.createElement(c.P,null,o),r.a.createElement(b,{title:"Business Renewal Application",partner:t,error:f,onCancel:T,onContinue:function(){m.invoke("create",l({},x,{partner:t}),(function(e,t){e?O(e):(t.redflags=[],s({type:"SET_APP",app:t}),w(t),k())}))}})),r.a.createElement(c.C,{visibleWhen:"newapp"===A.name,width:400},r.a.createElement(c.P,null,o),r.a.createElement(v,{appno:x.controlno,onContinue:p}))))}},{step:2,name:"info",caption:"General Information",component:function(e){var t=e.moveNextStep,n=e.appService,i=e.title,l=Object(c.Z)()[0].app,o=Object(a.useState)(),m=o[0],p=o[1],u=Object(a.useState)(!1)[1],s=Object(a.useState)(l),d=s[0],E=s[1];return Object(a.useEffect)((function(){u(!0),n.invoke("getInfos",{objid:d.objid},(function(e,t){e?p(e):E(t),u(!1)}))}),[]),r.a.createElement(c.e,null,r.a.createElement(c.m,{msg:m}),r.a.createElement(c.n,{context:d,handler:E},r.a.createElement(c.P,null,i),r.a.createElement(c.L,null,"Tracking No. ",d.controlno),r.a.createElement(c.K,null,"General Information"),r.a.createElement(c.H,{height:30}),r.a.createElement(c.C,{row:!0},r.a.createElement(c.O,{caption:"BIN",name:"bin",readOnly:!0}),r.a.createElement(c.O,{caption:"Application No.",name:"controlno",readOnly:!0})),r.a.createElement(c.C,{row:!0},r.a.createElement(c.O,{caption:"Application Year",name:"appyear",readOnly:!0}),r.a.createElement(c.O,{caption:"Application Type",name:"apptype",readOnly:!0})),r.a.createElement(c.O,{caption:"Trade Name",name:"tradename",readOnly:!0}),r.a.createElement(c.O,{caption:"Owner Name",name:"owner.name",readOnly:!0}),r.a.createElement(c.O,{caption:"Business Address",name:"businessaddress",readOnly:!0}),r.a.createElement(c.H,null),d.infos.map((function(e){return r.a.createElement(c.s,{key:e.name,caption:e.caption,captionStyle:{width:350}},e.value)})),r.a.createElement(c.H,null),r.a.createElement(h,{lobs:d.lobs,isPreviousInfo:!1}),r.a.createElement(c.a,null,r.a.createElement(c.d,{caption:"Next",action:t}))))}},{step:3,name:"edit-info",caption:"Edit Information",component:function(e){var t=e.appService,n=e.moveNextStep,i=e.movePrevStep,l=e.title,o=Object(c.Z)(),m=o[1],p=o[0].app,u=Object(a.useState)([]),s=u[0],d=u[1],E=Object(a.useState)(),f=E[0],b=E[1],v=Object(a.useState)(!1),h=v[0],y=v[1],O=Object(a.useState)(p),j=O[0],N=O[1];return Object(a.useEffect)((function(){y(!0),t.invoke("getInfos",j,(function(e,t){e?b(e):(N(t),m({type:"SET_APP",app:t})),y(!1)}))}),[]),r.a.createElement(c.e,null,r.a.createElement(c.m,{msg:f}),r.a.createElement(c.n,{context:j,handler:N},r.a.createElement(c.P,null,l),r.a.createElement(c.L,null,"Tracking No. ",j.controlno),r.a.createElement(c.K,null,"Edit Information"),r.a.createElement(c.H,{height:30}),r.a.createElement(c.C,{row:!0},r.a.createElement(c.O,{caption:"BIN",name:"bin",readOnly:!0}),r.a.createElement(c.O,{caption:"Application No.",name:"controlno",readOnly:!0})),r.a.createElement(c.C,{row:!0},r.a.createElement(c.O,{caption:"Application Year",name:"appyear",readOnly:!0}),r.a.createElement(c.O,{caption:"Application Type",name:"apptype",readOnly:!0})),r.a.createElement(c.O,{caption:"Trade Name",name:"tradename",readOnly:!0}),r.a.createElement(c.O,{caption:"Owner Name",name:"owner.name",readOnly:!0}),r.a.createElement(c.O,{caption:"Business Address",name:"businessaddress",readOnly:!0}),r.a.createElement(c.H,null),r.a.createElement("h4",null,"Business Information"),j.infos.map((function(e,t){return r.a.createElement(g,{key:e.name+":"+t,name:"infos["+t+"].value",dataType:e.datatype,caption:e.caption,autoFocus:0===t})})),r.a.createElement(c.H,null),r.a.createElement(c.C,{style:S.lobTitles},r.a.createElement("h4",null,"Line of Businesses"),r.a.createElement("h4",null,"Last Year Gross (Php)")),j.lobs.map((function(e,t){return r.a.createElement(g,{key:e.name+":"+t,name:"lobs["+t+"].gross",dataType:"decimal",caption:e.lob.name,error:s[t],helperText:s[t]})})),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Back",action:i}),r.a.createElement(c.d,{caption:"Next",action:function(){(function(){var e=[];return j.lobs.forEach((function(t,n){e.push(t.gross?null:"Gross is required")})),d(e),e.findIndex((function(e){return null!=e}))<0})()&&(b(null),y(!0),t.invoke("saveInfos",{objid:j.objid,step:4,lobs:j.lobs,infos:j.infos},(function(e,t){e?b(e):n(),y(!1)})))},loading:h,disableWhen:h}))))}},{step:4,name:"requirements",caption:"Requirements",component:function(e){var t=e.appService,n=e.moveNextStep,i=e.movePrevStep,o=e.title,m=Object(c.Z)(),p=m[1],u=m[0].app,s=Object(a.useState)(),d=s[0],E=s[1],f=Object(a.useState)(!1)[1],b=Object(a.useState)([]),v=b[0],h=b[1];Object(a.useEffect)((function(){f(!0),t.invoke("getRequirements",u,(function(e,t){e?E(e):(t.forEach((function(e){e.attachment||(e.attachment={})})),p({type:"SET_APP",app:l({},u,{step:4})}),h(t)),f(!1)}))}),[]);var y=function(e){t.invoke("update",{objid:u.objid,requirements:e},(function(e,t){e&&E(e)}))},O=-1==v.findIndex((function(e){return void 0===e.attachment}));return r.a.createElement(c.e,null,r.a.createElement(c.m,{msg:d}),r.a.createElement(c.P,null,o),r.a.createElement(c.L,null,"Tracking No. "+u.controlno),r.a.createElement(c.K,null,"Requirements"),r.a.createElement("h4",null,"Please attach the following documents:"),r.a.createElement(j,{app:u,requirements:v,onUpload:function(e,t){var n=v.findIndex((function(e){return e.objid===t.objid})),a=[].concat(v);a[n].attachment=e,h(a),y(a)},deleteRequirement:function(e){var t=v.findIndex((function(t){return t.objid===e.objid})),n=[].concat(v);n[t].attachment={},h(n),y(n)}}),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Back",action:i}),r.a.createElement(c.d,{caption:"Next",action:function(){f(!1),t.invoke("update",{objid:u.objid,step:u.step+1},(function(e,t){e?E(e):n(),f(!1)}))},disableWhen:!O})))}},{step:5,name:"confirm",caption:"Confirm",component:function(e){var t=e.moveNextStep,n=e.movePrevStep,i=e.appService,l=e.title,o=Object(c.Z)()[0].app,m=Object(a.useState)(),p=m[0],u=m[1],s=Object(a.useState)(!1)[1],d=Object(a.useState)(o),E=d[0],f=d[1];return Object(a.useEffect)((function(){s(!0),i.invoke("getInfos",{objid:E.objid},(function(e,t){e?u(e):f(t),s(!1)}))}),[]),r.a.createElement(c.e,null,r.a.createElement(c.m,{msg:p}),r.a.createElement(c.n,{context:E,handler:f},r.a.createElement(c.P,null,l),r.a.createElement(c.L,null,"Tracking No. ",E.controlno),r.a.createElement(c.K,null,"Confirmation"),r.a.createElement(c.H,{height:30}),r.a.createElement(c.C,{row:!0},r.a.createElement(c.O,{caption:"BIN",name:"bin",readOnly:!0}),r.a.createElement(c.O,{caption:"Application No.",name:"prevapp.appno",readOnly:!0})),r.a.createElement(c.C,{row:!0},r.a.createElement(c.O,{caption:"Application Year",name:"prevapp.appyear",readOnly:!0}),r.a.createElement(c.O,{caption:"Application Type",name:"prevapp.apptype",readOnly:!0})),r.a.createElement(c.O,{caption:"Trade Name",name:"tradename",readOnly:!0}),r.a.createElement(c.O,{caption:"Owner Name",name:"owner.name",readOnly:!0}),r.a.createElement(c.O,{caption:"Business Address",name:"businessaddress",readOnly:!0}),r.a.createElement(c.H,null),E.infos.map((function(e){return r.a.createElement(c.s,{key:e.name,caption:e.caption,captionStyle:{width:300}},e.value)})),r.a.createElement(c.H,null),r.a.createElement(h,{lobs:E.lobs,isPreviousInfo:!1}),r.a.createElement(c.a,null,r.a.createElement(c.b,{caption:"Back",action:n}),r.a.createElement(c.d,{caption:"Submit",action:function(){i.invoke("submit",{objid:E.objid,step:2},(function(e,n){e?u(e):t()}))}}))))}},{step:6,name:"completed",caption:"Completed",component:function(e){var t=e.history,n=e.partner,a=e.title,i=Object(c.Z)()[0].app;return r.a.createElement(c.e,null,r.a.createElement(c.C,null,r.a.createElement(c.P,null,a),r.a.createElement(c.L,null,"Tracking No. "+i.controlno),r.a.createElement(c.K,null,"Application Completed"),r.a.createElement(c.H,{height:30}),r.a.createElement("p",null,"Your application has been successfully submitted."),r.a.createElement("p",null,"A notification would be sent on your business email account upon approval of your application for payment."),r.a.createElement("p",null,"Thank you for using this service."),r.a.createElement(c.a,null,r.a.createElement(c.d,{caption:"Return",action:function(){t.replace("/partner/"+n.name+"/services",{partner:n})}}))))}}],x=function(e){var t=e.partner,n=e.service,i=e.location,o=e.history,m=e.initialStep,p=Object(a.useState)(void 0===m?0:m),u=p[0],s=p[1],d=Object(a.useState)({step:0}),b=d[0],v=d[1],h=N[u],y=h.component,O={partner:t,service:n,location:i,history:o,moveNextStep:function(e){"number"==typeof e?s(e):(e=u+1,s((function(e){return e+1}))),v(l({},b,{step:e}))},movePrevStep:function(){0===u?o.goBack():s((function(e){return e-1}))},appService:c.G.lookup(t.id+":OnlineBusinessRenewalService","bpls"),stepCompleted:u<b.step,title:"Business Renewal Application"};return r.a.createElement(c.I,{initialState:E,reducer:f},r.a.createElement(c.B,null,u>1&&r.a.createElement(c.C,{target:"left",style:w.stepperContainer},r.a.createElement(c.J,{steps:N.filter((function(e){return e.step>1})),completedStep:b.step-1,activeStep:u-2,handleStep:function(e){s(e+2)}})),r.a.createElement(c.i,{center:!0},r.a.createElement(c.C,null,r.a.createElement(y,l({page:h},O))))),"}")},w={stepperContainer:{paddingTop:30,paddingLeft:40}}}}]);