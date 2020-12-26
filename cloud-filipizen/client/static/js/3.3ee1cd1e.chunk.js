(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{525:function(e,t,n){"use strict";n.r(t),n.d(t,"BplsBillingWebController",(function(){return E})),n.d(t,"RenewBusinessWebController",(function(){return N}));var a=n(0),c=n.n(a),r=n(2),i=(n(116),n(85));function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o=function(e){var t=e.initialValue,n=e.open,i=e.onAccept,l=e.onCancel,o=Object(a.useState)(void 0===t?{billtoqtr:4}:t),p=o[0];return c.a.createElement(r.F,{open:n,caption:"Pay Options",onAccept:function(){i(p)},onCancel:l,maxWidth:100},c.a.createElement(r.t,{context:p,handler:o[1]},c.a.createElement(r.M,{caption:"Quarter to Bill",name:"billtoqtr",items:[1,2,3,4]})))},p=function(e){var t=e.title,n=e.partner,i=e.onCancel,l=e.onSubmit,p=e.error,m=Object(r.ib)()[0],u=m.refno,s=m.txntype,E=m.contact,d=Object(a.useState)(m.bill),f=d[0],b=d[1],v=Object(a.useState)(p),y=v[0],h=v[1],O=Object(a.useState)(!1),g=O[0],S=O[1],j=Object(a.useState)(!1),x=j[0],N=j[1],w=Object(a.useState)(4),I=w[0],k=w[1],A=Object(a.useState)()[1];Object(a.useEffect)((function(){u&&(S(!0),h(null),function(){try{var e={txntype:s,refno:u,qtr:I,showdetails:!0},t=r.N.lookupAsync(n.id+":OnlineBusinessBillingService","bpls");return Promise.resolve(t.invoke("getBilling",e))}catch(e){return Promise.reject(e)}}().then((function(e){var t=e.info;t.qtr=4,0==t.amount&&(t.items=[]),b(t),A("51001:"+t.billno),S(!1)})).catch((function(e){h(e.toString()),S(!1)})))}),[I]);var B=E&&E.email===f.email;return c.a.createElement(r.f,{style:{maxWidth:800}},c.a.createElement(r.W,null,t),c.a.createElement(r.R,null,"Billing Information"),c.a.createElement(r.O,null),c.a.createElement(r.s,{msg:y}),c.a.createElement(r.I,null,c.a.createElement(r.y,{context:f,caption:"Application No.",expr:"appno"}),c.a.createElement(r.y,{context:f,caption:"Application Type",expr:"apptype"}),c.a.createElement(r.y,{context:f,caption:"Date Filed",expr:"appdate"}),c.a.createElement(r.y,{context:f,caption:"BIN",expr:"bin"}),c.a.createElement(r.y,{context:f,caption:"Trade Name",expr:"tradename",visibleWhen:B}),c.a.createElement(r.y,{context:f,caption:"Owner Name",expr:"ownername",visibleWhen:B}),c.a.createElement(r.y,{context:f,caption:"Business Address",expr:"address",visibleWhen:B}),c.a.createElement(r.O,null),c.a.createElement(r.I,{style:{display:"flex",justifyContent:"flex-start"}},c.a.createElement(r.e,{variant:"outlined",caption:"Pay Option",action:function(){return N(!0)}})),c.a.createElement(r.T,{items:f?f.items:[],size:"small",showPagination:!1},c.a.createElement(r.U,{caption:"Particulars",expr:function(e){return(e.lobname?e.lobname:"")+" -"+e.account}}),c.a.createElement(r.U,{caption:"Amount",expr:"amount",align:"right",format:"currency"}),c.a.createElement(r.U,{caption:"Surcharge",expr:"surcharge",align:"right",format:"currency"}),c.a.createElement(r.U,{caption:"Interest",expr:"interest",align:"right",format:"currency"}),c.a.createElement(r.U,{caption:"Total",expr:"total",align:"right",format:"currency"})),c.a.createElement(r.I,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",paddingRight:15}},c.a.createElement(r.y,{context:f,caption:"Bill Amount:",expr:function(e){return Object(r.Y)(e.amount)}}))),c.a.createElement(r.a,{disabled:g},c.a.createElement(r.c,{caption:"Back",action:function(){i(0)}}),c.a.createElement(r.e,{caption:"Confirm Payment",action:function(){l({refno:u,txntype:s,origin:"filipizen",orgcode:n.id,qtr:I,info:{data:f,qtr:I},paidby:f.paidby,paidbyaddress:f.paidbyaddress,amount:f.amount,particulars:"Business Tax for Application No. "+f.appno})},disableWhen:0===f.amount})),c.a.createElement(o,{initialValue:f&&{qtr:I},open:x,onAccept:function(e){N(!1),k(e.billtoqtr)},onCancel:function(){return N(!1)}}))},m={txntype:"bpls",refno:null,bill:{},contact:{}},u=function(e,t){switch(t.type){case"SET_BILL":return e.refno=t.refno,void(e.bill=t.bill);case"SET_CONTACT":return void(e.contact=t.contact)}},s=[{step:1,name:"verification",caption:"Verification",Component:i.a},{step:2,name:"initial",caption:"Initial Information",Component:function(e){var t=e.title,n=e.partner,i=e.moveNextStep,l=e.movePrevStep,o=Object(r.ib)(),p=o[1],m=o[0].txntype,u=Object(a.useState)(),s=u[0],E=u[1],d=Object(a.useState)(!1),f=d[0],b=d[1],v=Object(a.useState)(),y=v[0],h=v[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.f,null,c.a.createElement(r.W,null,t),c.a.createElement(r.R,null,"Initial Information"),c.a.createElement(r.O,null),c.a.createElement(r.s,{msg:s}),c.a.createElement(r.V,{name:"appno",caption:"BIN or Application No.",value:y,onChange:h,autoFocus:!0}),c.a.createElement(r.a,null,c.a.createElement(r.c,{caption:"Back",variant:"text",action:l}),c.a.createElement(r.e,{caption:"Next",action:function(){b(!0),E(null),function(){try{var e={txntype:m,refno:y,qtr:4,showdetails:!0},t=r.N.lookupAsync(n.id+":OnlineBusinessBillingService","bpls");return Promise.resolve(t.invoke("getBilling",e))}catch(e){return Promise.reject(e)}}().then((function(e){var t=e.info;t.qtr=4,0==t.amount&&(t.items=[]),p({type:"SET_BILL",refno:y,bill:t}),i()})).catch((function(e){E(e.toString()),b(!1)}))},loading:f,disabled:f}))))}},{step:3,name:"payment",caption:"Payment",Component:function(e){var t=Object(r.ib)();return c.a.createElement(i.c,l({module:{title:e.title,component:p}},e,{contact:t[0].contact,initialStep:1,cancelPayment:e.cancelPayment}))}}],E=function(e){var t=e.partner,n=e.service,i=e.location,o=e.history,p=e.initialStep,E=Object(a.useState)(void 0===p?0:p),d=E[0],f=E[1],b=s[d];return c.a.createElement(r.P,{initialState:m,reducer:u},c.a.createElement(r.H,null,c.a.createElement(r.k,{center:!0},c.a.createElement(r.I,null,c.a.createElement(b.Component,l({page:b},{partner:t,service:n,location:i,history:o,moveNextStep:function(){f((function(e){return e+1}))},movePrevStep:function(){0===d?o.goBack():f((function(e){return e-1}))},cancelPayment:function(){f(1)},title:"Business Online Billing"}))))))},d={bin:null,app:{objid:"0001",lobs:[],infos:[],newinfos:[],redflags:[]},contact:{}},f=function(e,t){var n;switch(t.type){case"SET_APP":return e.app=t.app,void(e.bin=t.app.bin);case"UPDATE_APP_INFOS":return e.app=t.app,(n=e.app.newinfos).push.apply(n,t.infos),void(e.bin=t.app.bin);case"SET_CONTACT":return void(e.contact=t.contact);default:return e}},b=function(e){var t=e.partner,n=e.title,i=void 0===n?"New Permit Application":n,l=e.onCancel,o=e.onContinue,p=e.error,m=Object(a.useState)(!1),u=m[0],s=m[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.R,null,i),c.a.createElement(r.O,{height:30}),c.a.createElement(r.s,{msg:p}),c.a.createElement(r.S,null,"Please read thoroughly before proceeding"),c.a.createElement("p",{style:{opacity:.8}},"This online service will require personal information from the applicant, lot owner(s) and professionals involved in this transaction. In compliance with the Data Privacy Act, we are securing your consent that you have been authorized by the aforementioned parties to act on their behalf. The data collected will be stored, processed and used for effectively carrying out legitimate transactions with the local government of ",t.title,". If you do not agree to these terms, you can cancel out by click on the Cancel button. If you agree to these terms, tick on the checkbox and click Continue."),c.a.createElement(r.i,{caption:"Yes, I have read and agree to the terms and conditions",value:u,name:"agreeDisclaimer",onChange:s}),c.a.createElement(r.a,null,c.a.createElement(r.c,{caption:"Cancel",action:l}),c.a.createElement(r.e,{caption:"Continue",action:o,disableWhen:!u})))},v=function(e){var t=e.title,n=e.appno,a=e.onContinue;return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.R,null,void 0===t?"New Permit Application":t),c.a.createElement(r.O,{height:30}),c.a.createElement(r.S,null,"Application created"),c.a.createElement("p",null,"Please take note of the tracking number for this application. This will be your tracking reference for completing and follow up for this application."),c.a.createElement(r.S,null,n),c.a.createElement(r.a,null,c.a.createElement(r.e,{caption:"Continue",action:a})))},y=function(e){var t=e.isPreviousInfo,n=void 0===t||t;return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.T,{items:e.lobs,showPagination:!1},c.a.createElement(r.U,{caption:"Line of Business",width:400,expr:"lob.name"}),c.a.createElement(r.U,{caption:n?"Previous Gross (Php)":"Gross (Php)",expr:function(e){return Object(r.Y)(n?e.prevgross:e.gross)},type:"decimal",align:"right"})))},h=[{name:"contact",caption:"Contact Information"},{name:"enter-bin",caption:"Business Identification Number"},{name:"app-notice",caption:"Business Renewal Notice"},{name:"verify-info",caption:"Business Verify Information"},{name:"confirmation",caption:"Confirmation"},{name:"newapp",caption:"New Application "}],O={decimal:r.m,integer:r.w},g=function(e){var t=e.dataType,n=e.name,a=e.autoFocus,r=void 0!==a&&a,i=e.error,l=void 0!==i&&i,o=e.helperText,p=O[void 0===t?"integer":t];return c.a.createElement("div",{className:"_1WWgR"},c.a.createElement("label",{style:{width:350}},e.caption),c.a.createElement(p,{className:"_zFpAi",name:n,fullWidth:!1,variant:"outlined",size:"small",required:!0,autoFocus:r,helperText:o,error:l}))},S={lobTitles:{display:"flex",justifyContent:"space-between"}},j=function(e){var t=e.app,n=e.requirements,i=e.deleteRequirement,l=e.onUpload,o=Object(a.useState)({ref:{},attachment:{}}),p=o[0],m=o[1],u=Object(a.useState)(-1),s=u[0],E=u[1];return Object(a.useEffect)((function(){n.length>0&&s<0&&(m(n[0]),E(0))}),[n]),c.a.createElement("div",{className:"_2TeAB"},c.a.createElement("div",{className:"_3LmX8"},c.a.createElement("h4",{style:{paddingLeft:20}},"Documents"),n.map((function(e,t){return c.a.createElement("div",{key:e.objid,className:s===t?"_aF9YH _jTxCt":"_aF9YH",onClick:function(){return t=e,E(n.findIndex((function(e){return e.objid===t.objid}))),void m(t);var t}},c.a.createElement("label",null,e.ref.title),e.attachment&&e.attachment.location&&c.a.createElement(r.d,{style:{fontSize:20,color:"green"}}))}))),c.a.createElement("div",{className:"_1SBOI"},c.a.createElement("div",{className:"_1dnjD"},c.a.createElement("label",{className:"_3-PiJ"},p.ref.title),p.attachment&&p.attachment.location&&c.a.createElement(r.e,{caption:"Delete",color:"secondary",action:function(){return i(p)}})),c.a.createElement("div",{className:"_1R5wv"},p.attachment&&p.attachment.location?c.a.createElement("img",{className:"_2iwMt",src:"/filipizen/attachment/download?key="+p.attachment.key,alt:p.attachment.name}):c.a.createElement(r.X,{key:p.objid,fileId:t.objid+"/"+p.objid,data:p,onUpload:function(e){return l(e,p)},uploadedFile:p.attachment}))))},x=[{step:0,name:"select",caption:"Select Application Type",component:function(e){var t=e.service,n=e.history,i=e.appService,l=e.moveNextStep,o=Object(a.useState)(),p=o[0],m=o[1],u=Object(a.useState)("new"),s=u[0],E=u[1],d=Object(a.useState)(),f=d[0],b=d[1],v=Object(r.ib)()[1];return c.a.createElement(r.f,null,c.a.createElement(r.W,null,t.title),c.a.createElement(r.R,null,"Select an action"),c.a.createElement(r.O,{height:30}),c.a.createElement(r.L,{value:s,onChange:E},c.a.createElement(r.x,{caption:"Create New Application",value:"new"}),c.a.createElement(r.x,{caption:"Resume Pending Application",value:"resume"})),c.a.createElement(r.V,{caption:"Application Tracking No.",value:f,onChange:b,visibleWhen:"resume"===s,variant:"outlined",fullWidth:!1,required:!0,style:{marginLeft:40},error:p,helperText:p,size:"small",autoFocus:!0}),c.a.createElement(r.a,null,c.a.createElement(r.c,{caption:"Cancel",action:function(){return n.goBack()}}),c.a.createElement(r.e,{caption:"Next",action:function(){"new"===s?l():f?i.invoke("getApplication",{controlno:f},(function(e,t){e?m(e):(t.infos=[],t.lobs=[],v({type:"SET_APP",app:t}),l(t.step+1))})):m("Tracking No. is required.")}})))}},{step:1,name:"initial",caption:"Initial",component:function(e){var t=e.partner,n=e.history,o=e.title,p=e.appService,m=e.moveNextStep,u=Object(r.ib)(),s=u[1],E=u[0].contact,d=Object(a.useState)(),f=d[0],O=d[1],g=Object(a.useState)(!1),S=g[0],j=g[1],x=(Object(a.useState)(!1),Object(a.useState)({})),N=x[0],w=x[1],I=(Object(a.useState)(),Object(a.useState)(),Object(a.useState)(0)),k=I[0],A=I[1],B=h[k],T=function(){A((function(e){return e+1}))},P=function(){0===k?n.goBack():A((function(e){return e-1}))};return c.a.createElement(c.a.Fragment,null,"contact"===B.name?c.a.createElement(i.a,{partner:t,showName:!0,moveNextStep:T,movePrevStep:P,title:o,subtitle:"Contact Verification",emailRequired:!0}):c.a.createElement(r.f,null,c.a.createElement(r.O,null),c.a.createElement(r.t,{context:N,handler:w,visibleWhen:"enter-bin"===B.name},c.a.createElement(r.W,null,o),c.a.createElement(r.R,null,B.caption),c.a.createElement(r.O,null),c.a.createElement(r.s,{msg:f}),c.a.createElement(r.V,{caption:"Enter BIN",name:"bin",required:!0,autoFocus:!0}),c.a.createElement(r.a,null,c.a.createElement(r.c,{caption:"Cancel",action:function(){return n.goBack()}}),c.a.createElement(r.e,{caption:"Next",action:function(){O(null),j(!0),p.invoke("validateBin",l({},N,{contact:E}),(function(e,t){var n;e?O(e):(n=h.findIndex(t.redflags&&0!=t.redflags.length?function(e){return"app-notice"===e.name}:function(e){return"verify-info"===e.name}),t.step=1,w(t),A(n)),j(!1)}))},loading:S,disableWhen:!N.bin}))),c.a.createElement(r.t,{visibleWhen:"app-notice"===B.name,context:N,handler:w},c.a.createElement(r.W,null,o),c.a.createElement(r.R,null,B.caption),c.a.createElement(r.O,{height:30}),c.a.createElement(r.I,{row:!0},c.a.createElement(r.V,{caption:"BIN",name:"bin",readOnly:!0}),c.a.createElement(r.V,{caption:"Application No.",name:"prevapp.appno",readOnly:!0})),c.a.createElement(r.I,{row:!0},c.a.createElement(r.V,{caption:"Application Year",name:"prevapp.appyear",readOnly:!0}),c.a.createElement(r.V,{caption:"Application Type",name:"prevapp.apptype",readOnly:!0})),c.a.createElement(r.V,{caption:"Trade Name",name:"tradename",readOnly:!0}),c.a.createElement(r.V,{caption:"Owner Name",name:"owner.name",readOnly:!0}),c.a.createElement(r.V,{caption:"Business Address",name:"businessaddress",readOnly:!0}),c.a.createElement("p",null,"You cannot renew business due to the following issues. Please settle it with the corresponding offices. You can contact our helpdesk at ",t.phoneno,"."),c.a.createElement(r.T,{items:N.redflags,showPagination:!1},c.a.createElement(r.U,{caption:"Issue",width:300,expr:"issue"}),c.a.createElement(r.U,{caption:"Office/Department",expr:"office"})),c.a.createElement(r.a,null,c.a.createElement(r.c,{caption:"Cancel",action:function(){return n.goBack()}}))),c.a.createElement(r.t,{visibleWhen:"verify-info"===B.name,context:N,handler:w},c.a.createElement(r.W,null,o),c.a.createElement(r.R,null,B.caption),c.a.createElement(r.O,{height:30}),c.a.createElement(r.I,{row:!0},c.a.createElement(r.V,{caption:"BIN",name:"bin",readOnly:!0}),c.a.createElement(r.V,{caption:"Application No.",name:"prevapp.appno",readOnly:!0})),c.a.createElement(r.I,{row:!0},c.a.createElement(r.V,{caption:"Application Year",name:"prevapp.appyear",readOnly:!0}),c.a.createElement(r.V,{caption:"Application Type",name:"prevapp.apptype",readOnly:!0})),c.a.createElement(r.V,{caption:"Trade Name",name:"tradename",readOnly:!0}),c.a.createElement(r.V,{caption:"Owner Name",name:"owner.name",readOnly:!0}),c.a.createElement(r.V,{caption:"Business Address",name:"businessaddress",readOnly:!0}),c.a.createElement(r.O,null),c.a.createElement("h3",null,"Line of Businesses Operated"),c.a.createElement(y,{lobs:N.lobs}),c.a.createElement(r.a,null,c.a.createElement(r.c,{caption:"Back",action:function(){return A(1)}}),c.a.createElement(r.e,{caption:"Next",action:T}))),c.a.createElement(r.I,{visibleWhen:"confirmation"===B.name},c.a.createElement(r.W,null,o),c.a.createElement(b,{title:"Business Renewal Application",partner:t,error:f,onCancel:P,onContinue:function(){p.invoke("create",l({},N,{partner:t}),(function(e,t){e?O(e):(t.redflags=[],s({type:"SET_APP",app:t}),w(t),T())}))}})),c.a.createElement(r.I,{visibleWhen:"newapp"===B.name,width:400},c.a.createElement(r.W,null,o),c.a.createElement(v,{appno:N.controlno,onContinue:m}))))}},{step:2,name:"info",caption:"General Information",component:function(e){var t=e.moveNextStep,n=e.appService,i=e.title,l=Object(r.ib)()[0].app,o=Object(a.useState)(),p=o[0],m=o[1],u=Object(a.useState)(!1)[1],s=Object(a.useState)(l),E=s[0],d=s[1];return Object(a.useEffect)((function(){u(!0),n.invoke("getInfos",{objid:E.objid},(function(e,t){e?m(e):d(t),u(!1)}))}),[]),c.a.createElement(r.f,null,c.a.createElement(r.s,{msg:p}),c.a.createElement(r.t,{context:E,handler:d},c.a.createElement(r.W,null,i),c.a.createElement(r.S,null,"Tracking No. ",E.controlno),c.a.createElement(r.R,null,"General Information"),c.a.createElement(r.O,{height:30}),c.a.createElement(r.I,{row:!0},c.a.createElement(r.V,{caption:"BIN",name:"bin",readOnly:!0}),c.a.createElement(r.V,{caption:"Application No.",name:"controlno",readOnly:!0})),c.a.createElement(r.I,{row:!0},c.a.createElement(r.V,{caption:"Application Year",name:"appyear",readOnly:!0}),c.a.createElement(r.V,{caption:"Application Type",name:"apptype",readOnly:!0})),c.a.createElement(r.V,{caption:"Trade Name",name:"tradename",readOnly:!0}),c.a.createElement(r.V,{caption:"Owner Name",name:"owner.name",readOnly:!0}),c.a.createElement(r.V,{caption:"Business Address",name:"businessaddress",readOnly:!0}),c.a.createElement(r.O,null),E.infos.map((function(e){return c.a.createElement(r.y,{key:e.name,caption:e.caption,captionStyle:{width:350}},e.value)})),c.a.createElement(r.O,null),c.a.createElement(y,{lobs:E.lobs,isPreviousInfo:!1}),c.a.createElement(r.a,null,c.a.createElement(r.e,{caption:"Next",action:t}))))}},{step:3,name:"edit-info",caption:"Edit Information",component:function(e){var t=e.appService,n=e.moveNextStep,i=e.movePrevStep,l=e.title,o=Object(r.ib)(),p=o[1],m=o[0].app,u=Object(a.useState)([]),s=u[0],E=u[1],d=Object(a.useState)(),f=d[0],b=d[1],v=Object(a.useState)(!1),y=v[0],h=v[1],O=Object(a.useState)(m),j=O[0],x=O[1];return Object(a.useEffect)((function(){h(!0),t.invoke("getInfos",j,(function(e,t){e?b(e):(x(t),p({type:"SET_APP",app:t})),h(!1)}))}),[]),c.a.createElement(r.f,null,c.a.createElement(r.s,{msg:f}),c.a.createElement(r.t,{context:j,handler:x},c.a.createElement(r.W,null,l),c.a.createElement(r.S,null,"Tracking No. ",j.controlno),c.a.createElement(r.R,null,"Edit Information"),c.a.createElement(r.O,{height:30}),c.a.createElement(r.I,{row:!0},c.a.createElement(r.V,{caption:"BIN",name:"bin",readOnly:!0}),c.a.createElement(r.V,{caption:"Application No.",name:"controlno",readOnly:!0})),c.a.createElement(r.I,{row:!0},c.a.createElement(r.V,{caption:"Application Year",name:"appyear",readOnly:!0}),c.a.createElement(r.V,{caption:"Application Type",name:"apptype",readOnly:!0})),c.a.createElement(r.V,{caption:"Trade Name",name:"tradename",readOnly:!0}),c.a.createElement(r.V,{caption:"Owner Name",name:"owner.name",readOnly:!0}),c.a.createElement(r.V,{caption:"Business Address",name:"businessaddress",readOnly:!0}),c.a.createElement(r.O,null),c.a.createElement("h4",null,"Business Information"),j.infos.map((function(e,t){return c.a.createElement(g,{key:e.name+":"+t,name:"infos["+t+"].value",dataType:e.datatype,caption:e.caption,autoFocus:0===t})})),c.a.createElement(r.O,null),c.a.createElement(r.I,{style:S.lobTitles},c.a.createElement("h4",null,"Line of Businesses"),c.a.createElement("h4",null,"Last Year Gross (Php)")),j.lobs.map((function(e,t){return c.a.createElement(g,{key:e.name+":"+t,name:"lobs["+t+"].gross",dataType:"decimal",caption:e.lob.name,error:s[t],helperText:s[t]})})),c.a.createElement(r.a,null,c.a.createElement(r.c,{caption:"Back",action:i}),c.a.createElement(r.e,{caption:"Next",action:function(){(function(){var e=[];return j.lobs.forEach((function(t,n){e.push(t.gross?null:"Gross is required")})),E(e),e.findIndex((function(e){return null!=e}))<0})()&&(b(null),h(!0),t.invoke("saveInfos",{objid:j.objid,step:4,lobs:j.lobs,infos:j.infos},(function(e,t){e?b(e):n(),h(!1)})))},loading:y,disableWhen:y}))))}},{step:4,name:"requirements",caption:"Requirements",component:function(e){var t=e.appService,n=e.moveNextStep,i=e.movePrevStep,o=e.title,p=Object(r.ib)(),m=p[1],u=p[0].app,s=Object(a.useState)(),E=s[0],d=s[1],f=Object(a.useState)(!1)[1],b=Object(a.useState)([]),v=b[0],y=b[1];Object(a.useEffect)((function(){f(!0),t.invoke("getRequirements",u,(function(e,t){e?d(e):(t.forEach((function(e){e.attachment||(e.attachment={})})),m({type:"SET_APP",app:l({},u,{step:4})}),y(t)),f(!1)}))}),[]);var h=function(e){t.invoke("update",{objid:u.objid,requirements:e},(function(e,t){e&&d(e)}))},O=-1==v.findIndex((function(e){return void 0===e.attachment}));return c.a.createElement(r.f,null,c.a.createElement(r.s,{msg:E}),c.a.createElement(r.W,null,o),c.a.createElement(r.S,null,"Tracking No. "+u.controlno),c.a.createElement(r.R,null,"Requirements"),c.a.createElement("h4",null,"Please attach the following documents:"),c.a.createElement(j,{app:u,requirements:v,onUpload:function(e,t){var n=v.findIndex((function(e){return e.objid===t.objid})),a=[].concat(v);a[n].attachment=e,y(a),h(a)},deleteRequirement:function(e){var t=v.findIndex((function(t){return t.objid===e.objid})),n=[].concat(v);n[t].attachment={},y(n),h(n)}}),c.a.createElement(r.a,null,c.a.createElement(r.c,{caption:"Back",action:i}),c.a.createElement(r.e,{caption:"Next",action:function(){f(!1),t.invoke("update",{objid:u.objid,step:u.step+1},(function(e,t){e?d(e):n(),f(!1)}))},disableWhen:!O})))}},{step:5,name:"confirm",caption:"Confirm",component:function(e){var t=e.moveNextStep,n=e.movePrevStep,i=e.appService,l=e.title,o=Object(r.ib)()[0].app,p=Object(a.useState)(),m=p[0],u=p[1],s=Object(a.useState)(!1)[1],E=Object(a.useState)(o),d=E[0],f=E[1];return Object(a.useEffect)((function(){s(!0),i.invoke("getInfos",{objid:d.objid},(function(e,t){e?u(e):f(t),s(!1)}))}),[]),c.a.createElement(r.f,null,c.a.createElement(r.s,{msg:m}),c.a.createElement(r.t,{context:d,handler:f},c.a.createElement(r.W,null,l),c.a.createElement(r.S,null,"Tracking No. ",d.controlno),c.a.createElement(r.R,null,"Confirmation"),c.a.createElement(r.O,{height:30}),c.a.createElement(r.I,{row:!0},c.a.createElement(r.V,{caption:"BIN",name:"bin",readOnly:!0}),c.a.createElement(r.V,{caption:"Application No.",name:"prevapp.appno",readOnly:!0})),c.a.createElement(r.I,{row:!0},c.a.createElement(r.V,{caption:"Application Year",name:"prevapp.appyear",readOnly:!0}),c.a.createElement(r.V,{caption:"Application Type",name:"prevapp.apptype",readOnly:!0})),c.a.createElement(r.V,{caption:"Trade Name",name:"tradename",readOnly:!0}),c.a.createElement(r.V,{caption:"Owner Name",name:"owner.name",readOnly:!0}),c.a.createElement(r.V,{caption:"Business Address",name:"businessaddress",readOnly:!0}),c.a.createElement(r.O,null),d.infos.map((function(e){return c.a.createElement(r.y,{key:e.name,caption:e.caption,captionStyle:{width:300}},e.value)})),c.a.createElement(r.O,null),c.a.createElement(y,{lobs:d.lobs,isPreviousInfo:!1}),c.a.createElement(r.a,null,c.a.createElement(r.c,{caption:"Back",action:n}),c.a.createElement(r.e,{caption:"Submit",action:function(){i.invoke("submit",{objid:d.objid,step:2},(function(e,n){e?u(e):t()}))}}))))}},{step:6,name:"completed",caption:"Completed",component:function(e){var t=e.history,n=e.partner,a=e.title,i=Object(r.ib)()[0].app;return c.a.createElement(r.f,null,c.a.createElement(r.I,null,c.a.createElement(r.W,null,a),c.a.createElement(r.S,null,"Tracking No. "+i.controlno),c.a.createElement(r.R,null,"Application Completed"),c.a.createElement(r.O,{height:30}),c.a.createElement("p",null,"Your application has been successfully submitted."),c.a.createElement("p",null,"A notification would be sent on your business email account upon approval of your application for payment."),c.a.createElement("p",null,"Thank you for using this service."),c.a.createElement(r.a,null,c.a.createElement(r.e,{caption:"Return",action:function(){t.replace("/partner/"+n.name+"/services",{partner:n})}}))))}}],N=function(e){var t=e.partner,n=e.service,i=e.location,o=e.history,p=e.initialStep,m=Object(a.useState)(void 0===p?0:p),u=m[0],s=m[1],E=Object(a.useState)({step:0}),b=E[0],v=E[1],y=x[u],h=y.component,O={partner:t,service:n,location:i,history:o,moveNextStep:function(e){"number"==typeof e?s(e):(e=u+1,s((function(e){return e+1}))),v(l({},b,{step:e}))},movePrevStep:function(){0===u?o.goBack():s((function(e){return e-1}))},appService:r.N.lookup(t.id+":OnlineBusinessRenewalService","bpls"),stepCompleted:u<b.step,title:"Business Renewal Application"};return c.a.createElement(r.P,{initialState:d,reducer:f},c.a.createElement(r.H,null,u>1&&c.a.createElement(r.I,{target:"left",style:w.stepperContainer},c.a.createElement(r.Q,{steps:x.filter((function(e){return e.step>1})),completedStep:b.step-1,activeStep:u-2,handleStep:function(e){s(e+2)}})),c.a.createElement(r.k,{center:!0},c.a.createElement(r.I,null,c.a.createElement(h,l({page:y},O))))),"}")},w={stepperContainer:{paddingTop:30,paddingLeft:40}}}}]);