(this["webpackJsonpfilipizen-client"]=this["webpackJsonpfilipizen-client"]||[]).push([[0],{221:function(e,t,n){e.exports=n.p+"static/media/filipizen.5fd85b9e.svg"},393:function(e,t,n){e.exports=n(693)},398:function(e,t,n){},588:function(e,t){},592:function(e,t,n){},593:function(e,t,n){},594:function(e,t,n){},595:function(e,t,n){},603:function(e,t){},605:function(e,t){},615:function(e,t){},617:function(e,t){},642:function(e,t){},643:function(e,t){},648:function(e,t){},650:function(e,t){},657:function(e,t){},676:function(e,t){},692:function(e,t,n){},693:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),c=n.n(i),o=(n(398),n(75)),l=n(19),s=function(e){return r.a.createElement("div",{className:"HomeScreen"},r.a.createElement("div",{className:"HomeScreen__panel"},r.a.createElement("img",Object.assign({className:"HomeScreen__image",src:n(221)},e,{alt:"filipizen logo"})),r.a.createElement("div",{className:"HomeScreen__infoContainer"},r.a.createElement("div",{className:"HomeScreen__information"},r.a.createElement("label",{className:"HomeScreen__title"},"Experience ease of doing business with the government"),r.a.createElement("label",{className:"HomeScreen__description"},"Over 50 local government units participating all over the Philippines.")),r.a.createElement("button",{className:"HomeScreen__button",onClick:function(){e.history.push("/partners")}},"Start Here"),r.a.createElement("div",{className:"Spacer"}))))},m=n(369),u=n(22),p=n(2),f=n(96),d=(n(592),function(e){var t=function(e){var t=e.children,n={header:null,left:null,center:null,right:null,footer:null};return r.a.Children.forEach(t,(function(e){if(e){var t=e.props.target||"center",a="string"===typeof e.type?e.type:e.type.name;/header/i.test(a)?t="header":/footer/i.test(a)&&(t="footer"),n[t]||(n[t]=[]),n[t].push(e)}})),n}(e),n=t.header,a=t.center,i=t.footer;return r.a.createElement("div",{className:"template"},r.a.createElement("div",{className:"row header"},n),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"main"},a," "))),r.a.createElement("div",{className:"row footer"},i))}),b=function(e){return r.a.createElement("img",Object.assign({src:n(221)},e,{alt:"filipizen"}))},g=(n(116),n(593),function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("a",{href:"/partners"},r.a.createElement(b,null)))}),v=(n(594),function(e){return r.a.createElement("div",{className:"Footer"},r.a.createElement("span",{className:"Footer__info"},"@2021 Sitemap | Privacy | Legal | Feedback"))}),h=["children"],E=function(e){var t=e.children,n=Object(f.a)(e,h),a=void 0===n.showHeader||n.showHeader;return r.a.createElement(d,{logo:b},a&&r.a.createElement(g,null),t,r.a.createElement(v,null))},y=(n(595),p.U.lookup("CloudPartnerService","partner")),O=Object(p.lb)(),j=function(e){var t=e.partners,n=t[0].group;return r.a.createElement("div",{className:"PartnerGroup"},r.a.createElement(p.Z,null,n.title),r.a.createElement(p.F,{items:t},(function(e){var t=e.item;return r.a.createElement("div",{key:t.id,style:{paddingBottom:2}},r.a.createElement(p.D,{style:"0"!==t.isonline?{}:{color:"#aaa"},component:o.b,to:{pathname:"/partner/".concat(n.objid,"_").concat(t.name,"/services"),state:{partner:t}},caption:"".concat(t.title," (").concat(t.id,")")}))})))},k=function(e){var t=e.partners,n=Object(p.nb)(t,"clusterid");return r.a.createElement("div",{className:"PartnerList_group"},Object.keys(n).map((function(e){return/test/i.test(e)?null:r.a.createElement(j,{key:e,partners:n[e]})})))},S=function(e){var t=Object(a.useState)(!0),n=Object(u.a)(t,2),i=n[0],c=n[1],o=Object(a.useState)([]),l=Object(u.a)(o,2),s=l[0],f=l[1],d=function(e,t){var n=s.findIndex((function(t){return t.id===e}));if(n>=0){var a=s[n];if(a.isonline!==t){a.isonline=t;var r=Object(m.a)(s);r[n]=a,f(r)}}};return O.register("activate",(function(e){d(e,"1")})),O.register("deactivate",(function(e){d(e,"0")})),r.a.useEffect((function(){c(!0),y.invoke("getActivePartners",null,(function(e,t){e?console.log("Error loading partners ",e):f(t),c(!1)}))}),[]),r.a.createElement(E,null,r.a.createElement("div",{className:"PartnerList"},i&&r.a.createElement(p.C,null),!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p.W,{height:20}),r.a.createElement(p.fb,null,"Select a Partner Agency"),r.a.createElement(k,{partners:s}))))},w={container:{background:"#2c3e50",padding:"4px 50px",display:"flex",flexDirection:"row",alignItems:"center"},title:{color:"#ddd",paddingLeft:5,fontSize:"16pt",fontWeight:"bold",textDecoration:"none"}},x=function(e){var t=e.partner,n=e.Logo;return r.a.createElement(p.O,{style:w.container},r.a.createElement(o.b,{to:{pathname:"/partner/".concat(t.name,"/services"),state:{partner:t}}},r.a.createElement("div",null,n)),r.a.createElement("div",{style:w.title},t.title&&t.title.toUpperCase()))},C=["children"],P=function(e){var t,n=e.children,a=Object(f.a)(e,C);return r.a.createElement(E,{logo:b},r.a.createElement(x,Object.assign({Logo:(t=a.partner,r.a.createElement(p.x,{style:{height:"40px"},src:"/assets/".concat(t?t.id:"null",".png"),height:"30px"}))},a)),n)},W=n(97),B=(n(597),n(598),[{name:"bpls",lib:"filipizen-bpls",title:"Business",services:[{module:"bpls",name:"businessbilling",title:"Business Online Billing",component:"BplsBillingWebController"},{module:"bpls",name:"renewbusiness",title:"Renew Business Application",component:"RenewBusinessWebController"}]},{name:"rptis",lib:"filipizen-rptis",title:"Real Property",services:[{module:"rptis",name:"rptbilling",title:"Realty Tax Online Billing",component:"RptBillingWebController"},{module:"rptis",name:"rpttaxclearance",title:"Online Realty Tax Clearance",component:"RealtyTaxClearanceWebController"}]},{name:"waterworks",lib:"filipizen-waterworks",title:"Waterworks",services:[{module:"waterworks",name:"waterworksbilling",title:"Waterworks Billing",component:"WaterworksBillingWebController"}]},{name:"ticketing",title:"Ticketing",services:[{module:"ticketing",name:"terminalpass",title:"Terminal Pass",component:"TerminalTicketWebController"}]},{name:"obo",lib:"filipizen-obo",title:"Building and Construction",services:[{module:"obo",name:"bldgpermit",title:"Building Permit Application",component:"BuildingPermitWebController"},{module:"obo",name:"occupancypermit",title:"Certificate of Occupancy Application",component:"OccupancyPermitWebController"},{module:"obo",name:"registerprofessionals",title:"Register Professional",component:"ProfessionalWebController"},{module:"obo",name:"updateprofessional",title:"Update Professional",component:"UpdateProfessionalWebController"},{module:"obo",name:"apptracking",title:"Application Tracking",component:"AppTrackingWebController"},{module:"obo",name:"obobilling",title:"OSCP Online Billing and Payment",component:"OboBillingWebController"},{module:"obo",name:"ptrbilling",title:"Pay PTR (Professional Tax Receipt)",component:"PtrBillingWebController"}]}]),N=function(e){var t=e.includeservices;if(!t)return[];var n=new RegExp("(".concat(t,")"),"i"),a=e.excludeservices?new RegExp("(".concat(e.excludeservices,")"),"i"):null,r=JSON.parse(JSON.stringify(B));return r.forEach((function(e){var t=e.services.filter((function(e){return n.test(e.name)&&(!a||!a.test(e.name))}));e.services=t})),r.filter((function(e){return e.services.length>0}))},_={},I=function(e){var t=e.modules,n=e.onSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.O,{style:T.screen},t.map((function(e,t){return r.a.createElement(p.O,{key:"".concat(e.name).concat(t),style:T.moduleContainer},r.a.createElement(p.Z,null,e.title),r.a.createElement(p.F,{items:e.services,style:T.list},(function(t){var a=t.item;return r.a.createElement(p.D,{key:a.name,component:"button",onClick:function(){return n(e,a)}},a.title)})))}))))},T={screen:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"flex-start",alignItems:"wrap"},list:{display:"flex",flexDirection:"column",alignItems:"flex-start"},moduleContainer:{width:300},maintenanceContainer:{display:"flex",marginTop:20},maintenanceInfo:{},maintenanceImage:{width:350},maintenanceTitle:{fontSize:"3rem",fontWeight:800}},z=function(e){var t=e.location,n=e.history,i=Object(a.useState)(),c=Object(u.a)(i,2),o=c[0],l=c[1],s=Object(a.useState)([]),m=Object(u.a)(s,2),f=m[0],d=m[1];Object(a.useEffect)((function(){var e=t.state?t.state.partner:null;e?(l(e),d(N(e))):function(e){return new Promise((function(t,n){var a=e.pathname.match("/partner/(.*)_(.*)/services");(!a||a.length<3)&&n("Invalid path");var r=a[1],i=a[2];p.U.lookup("CloudPartnerService","partner").invoke("findByGroupAndName",{groupname:r,name:i},(function(e,a){e?n("Partner ".concat(i," does not exist. ").concat(e)):"0"!==a.isonline?t(a):n("Partner is offline.")}))}))}(t).then((function(e){l(e),d(N(e))})).catch((function(e){return n.push("/partners")}))}),[t,n]);return o?r.a.createElement(P,{partner:o,location:t,history:n},r.a.createElement(p.N,null,r.a.createElement(p.W,{height:20}),f.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p.fb,null,"Select Transaction"),r.a.createElement(p.W,{height:20}),r.a.createElement(I,{modules:f,onSelect:function(e,t){n.push({pathname:"/partner/".concat(o.group.name,"_").concat(o.name,"/").concat(e.name,"/").concat(t.name),state:{partner:o,module:e,service:t}})}}),r.a.createElement(p.W,{height:50})),0===f.length&&r.a.createElement("div",{style:T.maintenanceContainer},r.a.createElement("div",{style:T.maintenanceInfo},r.a.createElement("label",{style:T.maintenanceTitle},"Website under maintenance"),r.a.createElement("p",null,"This website is currently undergoing a scheduled maintenance. Will return shortly. Our apologies for the inconvenience.")),r.a.createElement("img",{style:T.maintenanceImage,src:"/assets/filipizen.png",alt:"Under Maintenance"})))):r.a.createElement(E,null)},H=["partner","service"],R=function(e){return function(e){var t=_[e.module];return"undefined"===typeof t&&("bpls"===e.module?t=W.a.lib((function(){return n.e(3).then(n.bind(null,742))})):"rptis"===e.module?t=W.a.lib((function(){return n.e(5).then(n.bind(null,743))})):"waterworks"===e.module?t=W.a.lib((function(){return n.e(7).then(n.bind(null,744))})):"obo"===e.module?t=W.a.lib((function(){return n.e(4).then(n.bind(null,745))})):"ticketing"===e.module&&(t=W.a.lib((function(){return n.e(6).then(n.bind(null,746))}))),_[e.module]=t),t}(e)},U=function(e){var t=Object(l.g)(),n=Object(l.f)(),i=function(e){return e&&e.state?e.state:{}}(t),c=i.partner,o=i.service,s=Object(f.a)(i,H),m=Object(a.useState)(c),d=Object(u.a)(m,2),b=d[0],g=d[1],v=Object(a.useState)(o),h=Object(u.a)(v,2),E=h[0],y=h[1];if(Object(a.useEffect)((function(){c||function(e){return new Promise((function(t,n){var a=e.pathname.match("/partner/(.*)_(.*)/(.*)/(.*)");(!a||a.length<5)&&n("Invalid path");var r=a[1],i=a[2],c=a[3],o=a[4];p.U.lookup("CloudPartnerService","partner").invoke("findByGroupAndName",{groupname:r,name:i},(function(e,a){if(e)n("Partner ".concat(i," does not exist. ").concat(e));else if("0"!==a.isonline){var r,l=N(a).find((function(e){return e.name===c})),s=l?l.services.find((function(e){return e.name===o})):null;if(!l||!s)return r="/partner/".concat(a.group.name,"_").concat(a.name,"/services"),void t({redirectUrl:r});t({partner:a,module:l,service:s})}else n("Partner is offline.")}))}))}(t).then((function(e){e.redirectUrl?n.replace(e.redirectUrl):(g(e.partner),y(e.service))})).catch((function(e){return n.replace("/partners")}))}),[n,c,t]),!b||!E)return null;var O=R(E);return r.a.createElement(P,{partner:b},r.a.createElement(O,Object.assign({},e,{partner:b,service:E},s),(function(t){var n=t[E.component];return r.a.createElement(n,Object.assign({},e,{partner:b,service:E},s))})))},A=n(117),D=function(e){var t=e.location.location,n=Object(a.useState)({}),i=Object(u.a)(n,2),c=i[0],o=i[1];Object(a.useEffect)((function(){t&&function(){var e=Object(p.mb)(t,"orgcode");p.U.lookup("CloudPartnerService","partner").invoke("findById",{id:e},(function(e,t){o(e?{}:t)}))}()}),[t]);return r.a.createElement(P,{partner:c},r.a.createElement(p.l,{center:!0},r.a.createElement(A.f,Object.assign({onClose:function(){c&&c.name?e.history.replace({pathname:"/partner/".concat(c.name,"/services"),state:{partner:c}}):e.history.replace({pathname:"/partners",state:{partner:c}})}},e,{partner:c}))))},F=function(e){var t=e.location,n=e.history,i=Object(a.useState)({}),c=Object(u.a)(i,2),o=c[0],l=c[1];Object(a.useEffect)((function(){t&&function(){var e=Object(p.mb)(t,"orgcode");p.U.lookup("CloudPartnerService","partner").invoke("findById",{id:e},(function(e,t){l(e?{}:t)}))}()}),[t]);return r.a.createElement(P,{partner:o},r.a.createElement(p.O,null,r.a.createElement(A.e,Object.assign({onClose:function(){o&&o.name?n.replace({pathname:"/partner/".concat(o.name,"/services"),state:{partner:o}}):n.replace({pathname:"/partners",state:{partner:o}})}},e,{partner:o}))))},L=n(207),J=n.n(L),G=n(367),Q=p.U.lookup("CloudPartnerService","partner"),Z=p.U.lookup("CloudQrCodeInfoService","partner"),q=function(){var e=Object(G.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.U.lookupAsync("".concat(t.orgcode,":OnlineQrCodeInfoService"),t.connection,t.module);case 2:return n=e.sent,e.next=5,n.invoke("getInfos",t);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){var t=e.msg;return r.a.createElement("div",{style:V.container},r.a.createElement(p.g,null,r.a.createElement("div",{style:{maxWidth:450}},r.a.createElement(b,{width:200}),r.a.createElement("h2",null,"Document Validation"),r.a.createElement(p.v,{msg:t}))))},V={container:{padding:"0px",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#f5f5f5",minHeight:"100%",paddingLeft:20,paddingRight:20,paddingBottom:20},caption:{width:200,fontWeight:600}},$=function(e){var t=e.location,n=Object(a.useState)(!0),i=Object(u.a)(n,2),c=i[0],o=i[1],l=Object(a.useState)({}),s=Object(u.a)(l,2),m=s[0],f=s[1],d=Object(a.useState)([]),g=Object(u.a)(d,2),v=g[0],h=g[1],E=Object(a.useState)(),y=Object(u.a)(E,2),O=y[0],j=y[1],k=Object(a.useState)(!1),S=Object(u.a)(k,2),w=S[0],x=S[1],C=Object(a.useState)(),P=Object(u.a)(C,2),W=P[0],B=P[1];return Object(a.useEffect)((function(){Q.invoke("findById",{id:m.orgcode},(function(e,t){B(t)}))}),[m]),Object(a.useEffect)((function(){var e={};e.data=Object(p.mb)(t,"data"),x(!0),Z.invoke("decode",e,(function(e,t){e?(j(e),x(!1),o(!1)):(f(t),q(t).then((function(e){h(e),x(!1),o(!1)})).catch((function(e){j(e.toString()),x(!1),o(!1)})))}))}),[t]),c||w||!W?null:O?r.a.createElement(M,{msg:O}):0===v.length?r.a.createElement(M,{msg:"QR Code or document is invalid"}):r.a.createElement("div",{style:V.container},r.a.createElement(p.g,null,r.a.createElement("div",{style:{maxWidth:450}},r.a.createElement(b,{width:200}),r.a.createElement("h2",null,"Document Validation"),v.map((function(e,t){return e.title?r.a.createElement(p.Z,{key:t},e.title):r.a.createElement(p.O,null,r.a.createElement(p.B,{style:V.caption},e.caption),r.a.createElement(p.B,null,e.value))})))))},K={actions:{display:"flex",flexDirection:"row",justifyContent:"center"},code:{fontSize:120,color:"#686868"},label:{fontSize:36,fontWeight:"bold",color:"#3f51b5",textAlign:"center"}},X=function(e){return r.a.createElement(E,{showHeader:!1},r.a.createElement(p.N,null,r.a.createElement(p.W,{height:60}),r.a.createElement(b,{width:200}),r.a.createElement(p.W,{height:30}),r.a.createElement(p.l,{center:!0},r.a.createElement(p.B,{labelStyle:K.code},"404"),r.a.createElement("label",{style:K.label},"Sorry, the page you tried to access cannot be found."),r.a.createElement(p.W,{height:40}),r.a.createElement(p.O,{style:K.actions},r.a.createElement(p.e,{style:{paddingLeft:50,paddingRight:50},caption:"Start Here",size:"large",onClick:function(){e.history.push("/partners")}})))))},Y=n(208),ee=[{name:"home",exact:!0,path:"/",component:s},{name:"partners",path:"/partners",component:S},{name:"services",path:"/partner/:partnerId/services",component:z},{name:"service",path:"/partner/:partnerId/:module/:service",component:U},{name:"success",path:"/payment/success",component:D},{name:"error",path:"/payment/error",component:F},{name:"systools",exact:!0,path:"/admin/systool",component:s},{name:"epayment-monitoring",exact:!0,path:"/admin/epayment/monitor",component:Y.b},{name:"epayment-monitoring",exact:!0,path:"/admin/epayment/billing",component:Y.a},{name:"qrcode",exact:!0,path:"/qr",component:$},{name:"404",path:"*",component:X}];n(692);var te=function(){return r.a.createElement(o.a,null,r.a.createElement(l.c,null,ee.map((function(e){return r.a.createElement(l.a,Object.assign({key:e.name},e))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[393,1,2]]]);