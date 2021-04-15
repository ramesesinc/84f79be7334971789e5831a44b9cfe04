(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{168:function(e,t,n){e.exports=n.p+"static/media/filipizen.5fd85b9e.svg"},278:function(e,t,n){e.exports=n(486)},283:function(e,t,n){},474:function(e,t){},478:function(e,t,n){},479:function(e,t,n){},481:function(e,t,n){},482:function(e,t,n){},485:function(e,t,n){},486:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),c=n.n(i),o=(n(283),n(43)),l=n(15),s=function(e){return r.a.createElement("div",{className:"HomeScreen"},r.a.createElement("div",{className:"HomeScreen__panel"},r.a.createElement("img",Object.assign({className:"HomeScreen__image",src:n(168)},e,{alt:"filipizen logo"})),r.a.createElement("div",{className:"HomeScreen__infoContainer"},r.a.createElement("div",{className:"HomeScreen__information"},r.a.createElement("label",{className:"HomeScreen__title"},"Experience ease of doing business with the government"),r.a.createElement("label",{className:"HomeScreen__description"},"Over 50 local government units participating all over the Philippines.")),r.a.createElement("button",{className:"HomeScreen__button",onClick:function(){e.history.push("/partners")}},"Start Here"),r.a.createElement("div",{className:"Spacer"}))))},m=n(259),u=n(24),p=n(2),f=n(73),d=(n(478),function(e){var t=function(e){var t=e.children,n={header:null,left:null,center:null,right:null,footer:null};return r.a.Children.forEach(t,(function(e){if(e){var t=e.props.target||"center",a="string"===typeof e.type?e.type:e.type.name;/header/i.test(a)?t="header":/footer/i.test(a)&&(t="footer"),n[t]||(n[t]=[]),n[t].push(e)}})),n}(e),n=t.header,a=t.center,i=t.footer;return r.a.createElement("div",{className:"template"},r.a.createElement("div",{className:"row header"},n),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"main"},a," "))),r.a.createElement("div",{className:"row footer"},i))}),b=function(e){return r.a.createElement("img",Object.assign({src:n(168)},e,{alt:"filipizen"}))},g=(n(86),n(479),function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(o.b,{to:"/partners"},r.a.createElement(b,null)))}),v=(n(481),function(e){return r.a.createElement("div",{className:"Footer"},r.a.createElement("span",{className:"Footer__info"},"@2020 Sitemap | Privacy | Legal | Feedback"))}),h=function(e){var t=e.children,n=Object(f.a)(e,["children"]),a=void 0===n.showHeader||n.showHeader;return r.a.createElement(d,{logo:b},a&&r.a.createElement(g,null),t,r.a.createElement(v,null))},E=(n(482),p.N.lookup("CloudPartnerService","partner")),y=Object(p.ab)(),O=function(e){var t=e.partners,n=t[0].group;return r.a.createElement("div",{className:"PartnerGroup"},r.a.createElement(p.R,null,n.title),r.a.createElement(p.A,{items:t},(function(e){var t=e.item;return r.a.createElement("div",{key:t.id,style:{paddingBottom:2}},r.a.createElement(p.z,{style:"0"!==t.isonline?{}:{color:"#aaa"},component:o.b,to:{pathname:"/partner/".concat(n.objid,"_").concat(t.name,"/services"),state:{partner:t}},caption:"".concat(t.title," (").concat(t.id,")")}))})))},j=function(e){var t=e.partners,n=Object(p.cb)(t,"clusterid");return r.a.createElement("div",{className:"PartnerList_group"},Object.keys(n).map((function(e){return/test/i.test(e)?null:r.a.createElement(O,{key:e,partners:n[e]})})))},w=function(e){var t=Object(a.useState)(!0),n=Object(u.a)(t,2),i=n[0],c=n[1],o=Object(a.useState)([]),l=Object(u.a)(o,2),s=l[0],f=l[1],d=function(e,t){var n=s.findIndex((function(t){return t.id===e}));if(n>=0){var a=s[n];if(a.isonline!==t){a.isonline=t;var r=Object(m.a)(s);r[n]=a,f(r)}}};return y.register("activate",(function(e){d(e,"1")})),y.register("deactivate",(function(e){d(e,"0")})),r.a.useEffect((function(){c(!0),E.invoke("getActivePartners",null,(function(e,t){e?console.log("Error loading partners ",e):f(t),c(!1)}))}),[]),r.a.createElement(h,null,r.a.createElement("div",{className:"PartnerList"},i&&r.a.createElement(p.y,null),!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p.O,{height:20}),r.a.createElement(p.W,null,"Select a Partner Agency"),r.a.createElement(j,{partners:s}))))},k={container:{background:"#2c3e50",padding:"4px 50px"},title:{color:"#ddd",paddingLeft:5}},S=function(e){var t=e.partner,n=e.Logo;return r.a.createElement(p.I,{style:k.container},r.a.createElement(o.b,{to:{pathname:"/partner/".concat(t.name,"/services"),state:{partner:t}}},r.a.createElement(p.I,{row:!0},r.a.createElement("div",null,n))))},x=function(e){var t,n=e.children,a=Object(f.a)(e,["children"]);return r.a.createElement(h,{logo:b},r.a.createElement(S,Object.assign({Logo:(t=a.partner,r.a.createElement(p.u,{style:{height:"40px"},src:"/assets/".concat(t.name,".png"),height:"30px"}))},a)),n)},C=n(85),P=(n(483),n(484),[{name:"bpls",lib:"filipizen-bpls",title:"Business",services:[{module:"bpls",name:"businessbilling",title:"Business Online Billing",component:"BplsBillingWebController"},{module:"bpls",name:"renewbusiness",title:"Renew Business Application",component:"RenewBusinessWebController"}]},{name:"rptis",lib:"filipizen-rptis",title:"Real Property",services:[{module:"rptis",name:"rptbilling",title:"Realty Tax Online Billing",component:"RptBillingWebController"},{module:"rptis",name:"rpttaxclearance",title:"Online Realty Tax Clearance",component:"RealtyTaxClearanceWebController"}]},{name:"waterworks",lib:"filipizen-waterworks",title:"Waterworks",services:[{module:"waterworks",name:"waterworksbilling",title:"Waterworks Billing",component:"WaterworksBillingWebController"}]},{name:"obo",lib:"filipizen-obo",title:"Building and Construction",services:[{module:"obo",name:"bldgpermit",title:"Building Permit Application",component:"BuildingPermitWebController"},{module:"obo",name:"occupancypermit",title:"Occupancy Permit Application",component:"OccupancyPermitWebController"},{module:"obo",name:"registerprofessionals",title:"Register Professional",component:"ProfessionalWebController"},{module:"obo",name:"updateprofessional",title:"Update Professional",component:"UpdateProfessionalWebController"},{module:"obo",name:"apptracking",title:"Application Tracking",component:"AppTrackingWebController"},{module:"obo",name:"obobilling",title:"Building Permit Online Billing",component:"OboBillingWebController"},{module:"obo",name:"ptrbilling",title:"Pay PTR (Professional Tax Receipt)",component:"PtrBillingWebController"}]}]),N=function(e){var t=e.includeservices;if(!t)return[];var n=new RegExp("(".concat(t,")"),"i"),a=e.excludeservices?new RegExp("(".concat(e.excludeservices,")"),"i"):null,r=[].concat(P);return r.forEach((function(e){var t=e.services.filter((function(e){return n.test(e.name)&&(!a||!a.test(e.name))}));e.services=t})),r.filter((function(e){return e.services.length>0}))},B={},W=function(e){var t=e.modules,n=e.onSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.I,{style:_.screen},t.map((function(e,t){return r.a.createElement(p.I,{key:"".concat(e.name).concat(t),style:_.moduleContainer},r.a.createElement(p.R,null,e.title),r.a.createElement(p.A,{items:e.services,style:_.list},(function(t){var a=t.item;return r.a.createElement(p.z,{key:a.name,component:"button",onClick:function(){return n(e,a)}},a.title)})))}))))},_={screen:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"flex-start",alignItems:"wrap"},list:{display:"flex",flexDirection:"column",alignItems:"flex-start"},moduleContainer:{width:300},maintenanceContainer:{display:"flex",marginTop:20},maintenanceInfo:{},maintenanceImage:{width:350},maintenanceTitle:{fontSize:"3rem",fontWeight:800}},I=function(e){var t=e.location,n=e.history,i=Object(a.useState)(),c=Object(u.a)(i,2),o=c[0],l=c[1],s=Object(a.useState)([]),m=Object(u.a)(s,2),f=m[0],d=m[1];Object(a.useEffect)((function(){var e=t.state?t.state.partner:null;e?(l(e),d(N(e))):function(e){return new Promise((function(t,n){var a=e.pathname.match("/partner/(.*)_(.*)/services");(!a||a.length<3)&&n("Invalid path");var r=a[1],i=a[2];p.N.lookup("CloudPartnerService","partner").invoke("findByGroupAndName",{groupname:r,name:i},(function(e,a){e?n("Partner ".concat(i," does not exist. ").concat(e)):"0"!==a.isonline?t(a):n("Partner is offline.")}))}))}(t).then((function(e){l(e),d(N(e))})).catch((function(e){return n.push("/partners")}))}),[t,n]);return o?r.a.createElement(x,{partner:o,location:t,history:n},r.a.createElement(p.H,null,r.a.createElement(p.O,{height:20}),f.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p.W,null,"Select Transaction"),r.a.createElement(p.O,{height:20}),r.a.createElement(W,{modules:f,onSelect:function(e,t){n.push({pathname:"/partner/".concat(o.group.name,"_").concat(o.name,"/").concat(e.name,"/").concat(t.name),state:{partner:o,module:e,service:t}})}}),r.a.createElement(p.O,{height:50})),0===f.length&&r.a.createElement("div",{style:_.maintenanceContainer},r.a.createElement("div",{style:_.maintenanceInfo},r.a.createElement("label",{style:_.maintenanceTitle},"Website under maintenance"),r.a.createElement("p",null,"This website is currently undergoing a scheduled maintenance. Will return shortly. Our apologies for the inconvenience.")),r.a.createElement("img",{style:_.maintenanceImage,src:"/assets/filipizen.png",alt:"Under Maintenance"})))):r.a.createElement(h,null)},H=function(e){return function(e){var t=B[e.module];return"undefined"===typeof t&&("bpls"===e.module?t=C.a.lib((function(){return n.e(3).then(n.bind(null,534))})):"rptis"===e.module?t=C.a.lib((function(){return n.e(5).then(n.bind(null,535))})):"waterworks"===e.module?t=C.a.lib((function(){return n.e(6).then(n.bind(null,536))})):"obo"===e.module&&(t=C.a.lib((function(){return n.e(4).then(n.bind(null,537))}))),B[e.module]=t),t}(e)},R=function(e){var t=Object(l.g)(),n=Object(l.f)(),i=function(e){return e&&e.state?e.state:{}}(t),c=i.partner,o=i.service,s=Object(f.a)(i,["partner","service"]),m=Object(a.useState)(c),d=Object(u.a)(m,2),b=d[0],g=d[1],v=Object(a.useState)(o),h=Object(u.a)(v,2),E=h[0],y=h[1];if(Object(a.useEffect)((function(){c||function(e){return new Promise((function(t,n){var a=e.pathname.match("/partner/(.*)_(.*)/(.*)/(.*)");(!a||a.length<5)&&n("Invalid path");var r=a[1],i=a[2],c=a[3],o=a[4];p.N.lookup("CloudPartnerService","partner").invoke("findByGroupAndName",{groupname:r,name:i},(function(e,a){if(e)n("Partner ".concat(i," does not exist. ").concat(e));else if("0"!==a.isonline){var r,l=N(a).find((function(e){return e.name===c})),s=l?l.services.find((function(e){return e.name===o})):null;if(!l||!s)return r="/partner/".concat(a.group.name,"_").concat(a.name,"/services"),void t({redirectUrl:r});t({partner:a,module:l,service:s})}else n("Partner is offline.")}))}))}(t).then((function(e){e.redirectUrl?n.replace(e.redirectUrl):(g(e.partner),y(e.service))})).catch((function(e){return n.replace("/partners")}))}),[n,c,t]),!b||!E)return null;var O=H(E);return r.a.createElement(x,{partner:b},r.a.createElement(O,Object.assign({},e,{partner:b,service:E},s),(function(t){var n=t[E.component];return r.a.createElement(n,Object.assign({},e,{partner:b,service:E},s))})))},z=n(87),A={actions:{display:"flex",flexDirection:"row",justifyContent:"center"},code:{fontSize:120,color:"#686868"},label:{fontSize:36,fontWeight:"bold",color:"#3f51b5",textAlign:"center"}},T=function(e){return r.a.createElement(h,{showHeader:!1},r.a.createElement(p.H,null,r.a.createElement(p.O,{height:60}),r.a.createElement(b,{width:200}),r.a.createElement(p.O,{height:30}),r.a.createElement(p.j,{center:!0},r.a.createElement(p.x,{labelStyle:A.code},"404"),r.a.createElement("label",{style:A.label},"Sorry, the page you tried to access cannot be found."),r.a.createElement(p.O,{height:40}),r.a.createElement(p.I,{style:A.actions},r.a.createElement(p.d,{style:{paddingLeft:50,paddingRight:50},caption:"Start Here",size:"large",onClick:function(){e.history.push("/partners")}})))))},L=[{name:"home",exact:!0,path:"/",component:s},{name:"partners",path:"/partners",component:w},{name:"services",path:"/partner/:partnerId/services",component:I},{name:"service",path:"/partner/:partnerId/:module/:service",component:R},{name:"success",path:"/payment/success",component:function(e){var t=e.location.location,n=Object(a.useState)({}),i=Object(u.a)(n,2),c=i[0],o=i[1];Object(a.useEffect)((function(){t&&function(){var e=Object(p.bb)(t,"orgcode");p.N.lookup("CloudPartnerService","partner").invoke("findById",{id:e},(function(e,t){o(e?{}:t)}))}()}),[t]);return r.a.createElement(x,{partner:c},r.a.createElement(p.j,{center:!0},r.a.createElement(z.f,Object.assign({onClose:function(){c&&c.name?e.history.replace({pathname:"/partner/".concat(c.name,"/services"),state:{partner:c}}):e.history.replace({pathname:"/partners",state:{partner:c}})}},e,{partner:c}))))}},{name:"error",path:"/payment/error",component:function(e){var t=e.location,n=e.history,i=Object(a.useState)({}),c=Object(u.a)(i,2),o=c[0],l=c[1];Object(a.useEffect)((function(){t&&function(){var e=Object(p.bb)(t,"orgcode");p.N.lookup("CloudPartnerService","partner").invoke("findById",{id:e},(function(e,t){l(e?{}:t)}))}()}),[t]);return r.a.createElement(x,{partner:o},r.a.createElement(p.I,null,r.a.createElement(z.e,Object.assign({onClose:function(){o&&o.name?n.replace({pathname:"/partner/".concat(o.name,"/services"),state:{partner:o}}):n.replace({pathname:"/partners",state:{partner:o}})}},e,{partner:o}))))}},{name:"systools",exact:!0,path:"/admin/systool",component:s},{name:"epayment-monitoring",exact:!0,path:"/admin/monitor/epayment",component:n(257).a},{name:"404",path:"*",component:T}];n(485);var F=function(){return r.a.createElement(o.a,null,r.a.createElement(l.c,null,L.map((function(e){return r.a.createElement(l.a,Object.assign({key:e.name},e))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[278,1,2]]]);