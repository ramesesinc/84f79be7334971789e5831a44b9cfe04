(this["webpackJsonpfilipizen-client"]=this["webpackJsonpfilipizen-client"]||[]).push([[7],{747:function(e,t,n){"use strict";n.r(t),n.d(t,"TerminalTicketWebController",(function(){return E}));var a=n(0),i=n.n(a),r=n(2),o=(n(117),n(118));function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e){return i.a.createElement(r.H,{caption:"Privacy Policy Statement",open:e.open,onAccept:e.onAccept,showCancel:!1},i.a.createElement("div",{style:s.container},i.a.createElement("p",{style:s.text},"The Provincial Government of Aklan (PGA) is committed in protecting and respecting the privacy of the personal data it collects in compliance with Republic Act No. 10173 or the Data Privacy Act of 2012, and its implementing rules and regulations. This Privacy Policy statement applies to the following end users of the"),i.a.createElement("p",{style:s.section},"1. Personal Data Collected"),i.a.createElement("p",{style:s.text},"PGA collects the following personal information:"),i.a.createElement("ul",{style:s.text},i.a.createElement("li",null,"Email address"),i.a.createElement("li",null,"Passport/Valid ID and Number"),i.a.createElement("li",null,"Mobile Number"),i.a.createElement("li",null,"Full Name"),i.a.createElement("li",null,"Residence Address"),i.a.createElement("li",null,"Birthdate"),i.a.createElement("li",null,"Personal Health Information"),i.a.createElement("li",null,"Nationality"),i.a.createElement("li",null,"Scanning History including scanning station, timestamp")),i.a.createElement("p",{style:s.section},"2. Legal Basis for Personal Data Processing"),i.a.createElement("p",{style:s.text},"PGA process data with Republic Act No. 10173 or the Data Privacy Act of 2012, and its implementing rules and regulations as its legal basis. In addition, Department of Interior and Local Government (DILG) Memorandum Circular 2020-077, under Section 3.7 mandates that, \u201c... The LGU may make use of any available technology or application that could assist it in its actions relative to contact tracing\u2026.\u201d Further, Department of Health (DOH) Administrative Order No. 2020-0015, under Section VII-C, directs local government units \u201cto implement non-pharmaceutical interventions (NPIs) as minimum public health standards to mitigate the threat of COVID-19\u201d which includes physical distancing, contactless transactions, and limited face-to-face interactions."),i.a.createElement("p",{style:s.text},"Data is collected primarily for contact tracing of individuals who are suspect, probable or confirmed for COVID-19 and other infectious diseases as well as the people they came in contact with."),i.a.createElement("p",{style:s.section},"3. Data Collection"),i.a.createElement("p",{style:s.text},"Data collection happens when the user encodes their personal data in the online health declaration form; and when the QR Code of the user is scanned in the scanning stations which both uses a secure connection to the PGA Servers."),i.a.createElement("p",{style:s.section},"4. Information Security"),i.a.createElement("p",{style:s.text},"PGA implements appropriate security protocols to prevent unauthorized access to personal data. These include encryption of data transmission, validation of user credentials before granting of access, password requirements for login access, user level access and functionality depending on user category and backup procedures. These security protocols are continuously evaluated and updated as the need arises."),i.a.createElement("p",{style:s.section},"5. Data Sharing"),i.a.createElement("p",{style:s.text},"PGA may share data in so far as the Republic Act No. 10173 or the Data Privacy Act of 2012, and its implementing rules and regulations, issuances of the National Privacy Commission (NPC) and other relevant laws allow it."),i.a.createElement("p",{style:s.section},"6. Retention and Deletion"),i.a.createElement("p",{style:s.text},"PGA retains personal data as long as necessary for processing in accordance to purposes stated herein and in compliance with other relevant and applicable laws particularly its obligations under Republic Act No. 9470 or the National Archives of the Philippines Act of 2007."),i.a.createElement("p",{style:s.section},"7. Access, and Correction of Personal Database"),i.a.createElement("p",{style:s.text},"Users have the right to access their personal data and any personal profile information that may be incorrect can be changed by the user or requested to be changed."),i.a.createElement("p",{style:s.section},"8. Right to Complain"),i.a.createElement("p",{style:s.text},"If users believe that their data is processed in violation of their rights, they can send their complaint to touristboracay@gmail.com to resolve or clarify the issue before formally filing with the National Privacy Commission (NPC). 9. Controller and Contact Information This system is owned, developed and managed by the Provincial Government of Aklan located at Provincial Capitol, Barangay Estancia, Municipality of Kalibo, Province of Aklan as the personal information controller. For questions or clarifications about this Privacy Policy Statement, please contact: touristboracay@gmail.com.")))},s={container:{height:"250px",overflow:"auto",paddingLeft:10,paddingRight:10},section:{fontSize:14,fontWeight:550,opacity:.8},text:{fontSize:14,opacity:.8}},u=function(e){return i.a.createElement(r.H,{caption:"Terms and Conditions",open:e.open,onAccept:e.onAccept,showCancel:!1},i.a.createElement("div",{style:m.container},i.a.createElement("ol",null,i.a.createElement("li",{style:m.text},"This application requires you to provide information that will require consent."),i.a.createElement("li",{style:m.text},"The information will be used for this transaction and for tourism purposes. In compliance with RA 10173 or Data Privacy Act of the Philippines, your data will not be used for other purposes except for the above mentioned."),i.a.createElement("li",{style:m.text},"No refunds and discounts will be provided for any online transactions."))))},m={container:{height:"250px",overflow:"auto",paddingLeft:10,paddingRight:10},text:{fontSize:12,opacity:.8,marginBottom:10}},p={container:{display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:350,padding:15,border:"1px solid #aaa",borderRadius:5,borderShadow:"5px 0px 7px -7px rgba(0,0,0,0.8)"},text:{textAlign:"left",opacity:.75,marginTop:0},link:{color:"blue",cursor:"pointer",textDecoration:"underline",marginLeft:5}},d={itineraryContainer:{display:"flex",justifyContent:"space-between",border:"1px solid #aaa",padding:"0px 15px",marginBottom:5,borderRadius:5},text:{fontWeight:800,marginRight:15}},f={txntype:"ticketing",txntypename:"ticketing",origin:"filipizen",bill:{},po:{},entity:{guestInfo:{total:0,numadult:null,numchildren:null,numnonfil:null},routes:[]},contact:{}},h=function(e,t){switch(t.type){case"SET_ENTITY":return void(e.entity=t.entity);case"SET_GUESTINFO":return void(e.entity.guestInfo=t.guestInfo);case"SET_ROUTES":return void(e.entity.routes=t.routes);case"SET_PO":return void(e.po=t.po);case"SET_BILL":return void(e.bill=t.bill);case"SET_CONTACT":return void(e.contact=t.contact)}},y=[{step:1,name:"disclaimer",caption:"Disclaimer",Component:function(e){var t=e.history,n=e.moveNextStep,o=e.title,l=Object(a.useState)(!1),s=l[0],m=l[1],d=Object(a.useState)(!1),f=d[0],h=d[1],y=Object(a.useState)(!1),E=y[0],g=y[1],b=Object(a.useState)(!1),v=b[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{open:b[0],onAccept:function(){return v(!1)}}),i.a.createElement(c,{open:E,onAccept:function(){return g(!1)}}),i.a.createElement(r.I,{open:f,msg:"Kindly click on the check box to agree on the terms and conditions",onAccept:function(){return h(!1)}}),i.a.createElement(r.e,null,i.a.createElement(r.ab,null,o),i.a.createElement(r.U,null,"Caticlan and Cagban Passenger Terminals"),i.a.createElement(r.R,null),i.a.createElement(r.K,{style:p.container},i.a.createElement("p",{style:p.text},"Thank you for your interest in availing this service application."),i.a.createElement("p",{style:p.text},"By using this service, you agree to these",i.a.createElement("span",{onClick:function(){return v(!0)},style:p.link},"terms and conditions"),"."),i.a.createElement("p",{style:p.text},"We value your privacy. Please read our privacy statement",i.a.createElement("span",{onClick:function(){return g(!0)},style:p.link},"here"),"."),i.a.createElement(r.R,{height:30}),i.a.createElement(r.K,{style:{padding:"0px 30px"}},i.a.createElement(r.h,{caption:"I have read and agree with the terms and conditions",value:s,onChange:m}))),i.a.createElement(r.a,null,i.a.createElement(r.b,{action:function(){return t.goBack()}}),i.a.createElement(r.c,{caption:"Next",action:function(){s?n():h(!0)}}))))}},{step:2,name:"verification",caption:"Verification",Component:function(e){return i.a.createElement(o.b,l({},e,{showName:!0,emailRequired:!0}))}},{step:3,name:"itinerary",caption:"Travel Itinerary",Component:function(e){var t=e.title,n=e.partner,o=e.moveNextStep,c=e.movePrevStep,s=Object(r.ob)(),u=s[1],m=Object(a.useState)(l({},s[0].entity)),p=m[0],f=m[1],h=Object(a.useState)(),y=h[0],E=h[1],g=Object(a.useState)(!1),b=g[0],v=g[1],x=Object(a.useState)([{},{}]),S=x[0],P=x[1];return Object(a.useEffect)((function(){v(!0),r.Q.lookup(n.id+":OnlineTicketingService","ticketing").invoke("getRoutes",{},(function(e,t){e?E(e.toString()):(u({type:"SET_ROUTES",routes:t}),f(l({},p,{routes:t}))),v(!1)}))}),[]),b?null:i.a.createElement(r.e,null,i.a.createElement(r.ab,null,t),i.a.createElement(r.U,null,"Travel Itinerary"),i.a.createElement(r.R,null),i.a.createElement(r.u,{context:p,handler:f},i.a.createElement(r.W,null,"Issue QR Code for use in:"),i.a.createElement(r.t,{msg:y}),i.a.createElement(r.R,{height:10}),p.routes.map((function(e,t){return i.a.createElement(r.K,{style:d.itineraryContainer,key:e.objid},i.a.createElement(r.h,{caption:""+e.name,name:"routes["+t+"].selected"}),i.a.createElement(r.l,{name:"routes["+t+"].traveldate",fullWidth:!1,style:{width:200},placeholder:"mm/dd/yyyy",variant:"filled",error:S[t].error,helperText:S[t].error,readOnly:!p.routes[t].selected}))}))),i.a.createElement(r.a,null,i.a.createElement(r.b,{action:c}),i.a.createElement(r.c,{caption:"Next",action:function(){try{!function(){if(E(null),p.routes.findIndex((function(e){return e.selected}))<0)throw"Kindly select at least one (1) travel destination";var e=!1,t=p.routes.map((function(t,n){if(t.selected){if(!t.traveldate)return e=!0,{error:"Travel date is required"};if(0==n&&!Object(r.lb)(t.traveldate,Object(r.db)(-1)))return e=!0,{error:"Date must be on or after current date"};if(1==n&&!Object(r.lb)(t.traveldate,Object(r.db)(-1)))return e=!0,{error:"Date must be on or after departure date"};if(1==n&&p.routes[0].selected&&p.routes[0].traveldate){var a=p.routes[0].traveldate;if(Object(r.mb)(t.traveldate,a))return e=!0,{error:"Date must be after "+a}}}return{error:null}}));if(e)throw P(t),null}(),u({type:"SET_ENTITY",entity:p}),o()}catch(e){E(e)}}})))}},{step:4,name:"guest",caption:"Guest Profile",Component:function(e){var t=e.title,n=e.partner,o=e.moveNextStep,c=e.movePrevStep,s=Object(r.ob)(),u=s[0],m=s[1],p=Object(a.useState)(),d=p[0],f=p[1],h=Object(a.useState)(!1),y=h[0],E=h[1],g=Object(a.useState)(l({},u.entity.guestInfo)),b=g[0],v=g[1],x=Object(a.useRef)(),S=function(){var e=0;return b.numadult&&(e+=parseInt(b.numadult)),b.numchildren&&(e+=parseInt(b.numchildren)),e},P=function(e){var t=u.entity,a=t.routes.filter((function(e){return e.selected})),i="Terminal Fee for";i+=" "+a.map((function(e){return""+e.name})).join(" and "),i+=" "+function(e){return e.map((function(e){return Object(r.eb)(e.traveldate)})).join(" and ")}(a),i+=". With "+S()+" Guest(s)";var o=l({},b,{routes:t.routes.filter((function(e){return e.selected}))});return{refno:e.billno,txntype:u.txntype,origin:u.origin,txntypename:"TERMINAL FEE",orgcode:n.id,paidby:e.paidby,paidbyaddress:e.paidbyaddress,amount:e.amount,paymentdetails:i,particulars:i,info:o,items:e.items}};return i.a.createElement("form",{ref:x},i.a.createElement(r.e,null,i.a.createElement(r.ab,null,t),i.a.createElement(r.U,null,"Guest Profile"),i.a.createElement(r.R,null),i.a.createElement(r.K,{width:400},i.a.createElement(r.t,{msg:d}),i.a.createElement(r.R,{height:10}),i.a.createElement(r.u,{context:b,handler:v},i.a.createElement(r.w,{caption:"No. of Adults",name:"numadult",allowNegative:!1,autoFocus:!0}),i.a.createElement(r.w,{caption:"No. of Children (5 years and below)",name:"numchildren",allowNegative:!1}),i.a.createElement(r.w,{caption:"No. of Tourists (above 5 years old)",name:"numnonfil",allowNegative:!1})),i.a.createElement(r.R,null),i.a.createElement("p",{style:{color:"red",fontSize:12,opacity:.8}},"* Children 5 years old and below are exempted from paying terminal fee")),i.a.createElement(r.a,null,i.a.createElement(r.b,{caption:"Back",variant:"text",action:c}),i.a.createElement(r.c,{caption:"Next",action:function(){var e=S();if(0!==e){if(e>25)f("Total no. of guests should not exceed 25.");else if(b.numnonfil&&b.numnonfil>b.numadult)f("Number of Tourists must not exceed "+b.numadult+".");else if(1===e||x.current.reportValidity()){var t=r.Q.lookup(n.id+":OnlineTicketingService","ticketing"),a=l({},b,{total:e,contact:u.contact,routes:u.entity.routes,tag:"TOURIST"});E(!0),t.invoke("getBilling",{info:a},(function(e,t){e?(f(e.toString()),E(!1)):(m({type:"SET_BILL",bill:P(t)}),m({type:"SET_GUESTINFO",guestInfo:l({},b,{total:S()})}),E(!1),o())}))}}else f("At least one (1) guest should be specified.")},loading:y,disabled:y}))))}},{step:5,name:"epayment",caption:"Payment",Component:function(e){var t=Object(r.ob)()[0];return i.a.createElement(o.d,l({module:{title:"Online Terminal Pass Issuance"}},e,{contact:t.contact,bill:t.bill,po:t.po,initialStep:3,cancelPayment:e.cancelPayment,payee:{paidby:t.contact.name,paidbyaddress:t.contact.address},showExpiry:!1}))}}],E=function(e){var t=e.partner,n=e.service,o=e.location,c=e.history,s=e.initialStep,u=Object(a.useState)(void 0===s?0:s),m=u[0],p=u[1],d=y[m];return i.a.createElement(r.S,{initialState:f,reducer:h},i.a.createElement(r.J,null,i.a.createElement(r.j,{center:!0},i.a.createElement(d.Component,l({page:d},{partner:t,service:n,location:o,history:c,moveNextStep:function(){p((function(e){return e+1}))},movePrevStep:function(){0===m?c.goBack():p((function(e){return e-1}))},cancelPayment:function(){p(1)},title:"Online Terminal Pass Issuance"}))),i.a.createElement(r.R,{height:40})))}}}]);