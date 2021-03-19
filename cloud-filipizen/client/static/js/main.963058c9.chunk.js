(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{185:function(e,t,n){e.exports=n.p+"static/media/filipizen.5fd85b9e.svg"},322:function(e,t,n){e.exports=n(551)},327:function(e,t,n){},328:function(e,t,n){},540:function(e,t){},544:function(e,t,n){},545:function(e,t,n){},547:function(e,t,n){},550:function(e,t,n){},551:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),l=(n(327),n(45)),o=n(17),s=(n(328),function(e){return r.a.createElement("div",{className:"Footer"},r.a.createElement("span",{className:"Footer__info"},"@2020 Sitemap | Privacy | Legal | Feedback"))}),m=function(e){return r.a.createElement("div",{className:"HomeScreen"},r.a.createElement("div",{className:"HomeScreen__panel"},r.a.createElement("img",Object.assign({className:"HomeScreen__image",src:n(185)},e,{alt:"filipizen logo"})),r.a.createElement("div",{className:"HomeScreen__infoContainer"},r.a.createElement("div",{className:"HomeScreen__information"},r.a.createElement("label",{className:"HomeScreen__title"},"Experience ease of doing business with the government"),r.a.createElement("label",{className:"HomeScreen__description"},"Over 50 local government units participating all over the Philippines.")),r.a.createElement("button",{className:"HomeScreen__button",onClick:function(){e.history.push("/partners")}},"Start Here"),r.a.createElement("div",{className:"Spacer"}),r.a.createElement(s,null))))},u=n(303),p=n(25),f=n(2),d=n(75),v=(n(544),function(e){var t=function(e){var t=e.children,n={header:null,left:null,center:null,right:null,footer:null};return r.a.Children.forEach(t,(function(e){if(e){var t=e.props.target||"center",a="string"===typeof e.type?e.type:e.type.name;/header/i.test(a)?t="header":/footer/i.test(a)&&(t="footer"),n[t]||(n[t]=[]),n[t].push(e)}})),n}(e),n=t.header,a=t.center,c=t.footer;return r.a.createElement("div",{className:"template"},r.a.createElement("div",{className:"row header"},n),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"main"},a," "))),r.a.createElement("div",{className:"row footer"},c))}),b=function(e){return r.a.createElement("img",Object.assign({src:n(185)},e,{alt:"filipizen"}))},g=(n(128),n(545),function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(l.b,{to:"/partners"},r.a.createElement(b,null)))}),h=function(e){var t=e.children,n=Object(d.a)(e,["children"]),a=void 0===n.showHeader||n.showHeader;return r.a.createElement(v,{logo:b},a&&r.a.createElement(g,null),t,r.a.createElement(s,null))},E=(n(547),f.O.lookup("CloudPartnerService","partner")),y=Object(f.cb)(),O=function(e){var t=e.partners,n=t[0].group;return r.a.createElement("div",{className:"PartnerGroup"},r.a.createElement(f.S,null,n.title),r.a.createElement(f.B,{items:t},(function(e){var t=e.item;return r.a.createElement("div",{key:t.id,style:{paddingBottom:2}},r.a.createElement(f.A,{style:"0"!==t.isonline?{}:{color:"#aaa"},component:l.b,to:{pathname:"/partner/".concat(n.objid,"_").concat(t.name,"/services"),state:{partner:t}},caption:"".concat(t.title," (").concat(t.id,")")}))})))},w=function(e){var t=e.partners,n=Object(f.eb)(t,"clusterid");return r.a.createElement("div",{className:"PartnerList_group"},Object.keys(n).map((function(e){return/test/i.test(e)?null:r.a.createElement(O,{key:e,partners:n[e]})})))},j=function(e){var t=Object(a.useState)(!0),n=Object(p.a)(t,2),c=n[0],i=n[1],l=Object(a.useState)([]),o=Object(p.a)(l,2),s=o[0],m=o[1],d=function(e,t){var n=s.findIndex((function(t){return t.id===e}));if(n>=0){var a=s[n];if(a.isonline!==t){a.isonline=t;var r=Object(u.a)(s);r[n]=a,m(r)}}};return y.register("activate",(function(e){d(e,"1")})),y.register("deactivate",(function(e){d(e,"0")})),r.a.useEffect((function(){i(!0),E.invoke("getActivePartners",null,(function(e,t){e?console.log("Error loading partners ",e):m(t),i(!1)}))}),[]),r.a.createElement(h,null,r.a.createElement("div",{className:"PartnerList"},c&&r.a.createElement(f.z,null),!c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f.P,{height:20}),r.a.createElement(f.X,null,"Select a Partner Agency"),r.a.createElement(w,{partners:s}))))},k={container:{padding:"4px 50px"},title:{color:"#ddd",paddingLeft:5}},S=function(e){var t=e.partner,n=e.Logo;return r.a.createElement(f.b,null,r.a.createElement(f.J,{style:k.container},r.a.createElement(l.b,{to:{pathname:"/partner/".concat(t.name,"/services"),state:{partner:t}}},r.a.createElement(f.J,{row:!0},r.a.createElement("div",null,n)))))},C=function(e){var t,n=e.children,a=Object(d.a)(e,["children"]);return r.a.createElement(h,{logo:b},r.a.createElement(S,Object.assign({Logo:(t=a.partner,r.a.createElement(f.v,{style:{height:"40px"},src:"/assets/".concat(t.name,".png"),height:"30px"}))},a)),n)},P=n(88),x=(n(548),n(549),[{name:"bpls",module:"filipizen-bpls",title:"Business",services:[{module:"bpls",name:"businessbilling",title:"Business Online Billing",component:"BplsBillingWebController"},{module:"bpls",name:"renewbusiness",title:"Renew Business Application",component:"RenewBusinessWebController"}]},{name:"rptis",module:"filipizen-rptis",title:"Real Property",services:[{module:"rptis",name:"rptbilling",title:"Realty Tax Online Billing",component:"RptBillingWebController"},{module:"rptis",name:"rpttaxclearance",title:"Online Realty Tax Clearance",component:"RealtyTaxClearanceWebController"}]},{name:"waterworks",module:"filipizen-waterworks",title:"Waterworks",services:[{module:"waterworks",name:"waterworksbilling",title:"Waterworks Billing",component:"WaterworksBillingWebController"}]},{name:"obo",module:"filipizen-obo",title:"Building and Construction",services:[{module:"obo",name:"bldgpermit",title:"Building Permit Application",component:"BuildingPermitWebController"},{module:"obo",name:"occupancypermit",title:"Certificate of Occupancy Application",component:"OccupancyPermitWebController"},{module:"obo",name:"registerprofessionals",title:"Register Professional",component:"ProfessionalWebController"},{module:"obo",name:"updateprofessional",title:"Update Professional",component:"UpdateProfessionalWebController"},{module:"obo",name:"apptracking",title:"Application Tracking",component:"AppTrackingWebController"},{module:"obo",name:"obobilling",title:"Building Online Billing",component:"OboBillingWebController"}]}]),B=function(e){var t=e.includeservices;if(!t)return[];var n=new RegExp("(".concat(t,")"),"i"),a=e.excludeservices?new RegExp("(".concat(e.excludeservices,")"),"i"):null,r=[].concat(x);return r.forEach((function(e){var t=e.services.filter((function(e){return n.test(e.name)&&(!a||!a.test(e.name))}));e.services=t})),r.filter((function(e){return e.services.length>0}))},N={},_=function(e){var t=e.modules,n=e.onSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.J,{style:W.screen},t.map((function(e,t){return r.a.createElement(f.J,{key:"".concat(e.name).concat(t),style:W.moduleContainer},r.a.createElement(f.S,null,e.title),r.a.createElement(f.B,{items:e.services,style:W.list},(function(t){var a=t.item;return r.a.createElement(f.A,{key:a.name,component:"button",onClick:function(){return n(e,a)}},a.title)})))}))))},W={screen:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"flex-start",alignItems:"wrap"},list:{display:"flex",flexDirection:"column",alignItems:"flex-start"},moduleContainer:{width:250},maintenanceContainer:{display:"flex",marginTop:20},maintenanceInfo:{},maintenanceImage:{width:350},maintenanceTitle:{fontSize:"3rem",fontWeight:800}},I=function(e){var t=e.location,n=e.history,c=Object(a.useState)(),i=Object(p.a)(c,2),l=i[0],o=i[1],s=Object(a.useState)([]),m=Object(p.a)(s,2),u=m[0],d=m[1];Object(a.useEffect)((function(){var e=t.state?t.state.partner:null;e?(o(e),d(B(e))):function(e){return new Promise((function(t,n){var a=e.pathname.match("/partner/(.*)_(.*)/services");(!a||a.length<3)&&n("Invalid path");var r=a[1],c=a[2];f.O.lookup("CloudPartnerService","partner").invoke("findByGroupAndName",{groupname:r,name:c},(function(e,a){e?n("Partner ".concat(c," does not exist. ").concat(e)):"0"!==a.isonline?t(a):n("Partner is offline.")}))}))}(t).then((function(e){o(e),d(B(e))})).catch((function(e){return n.push("/partners")}))}),[t,n]);return l?r.a.createElement(C,{partner:l,location:t,history:n},r.a.createElement(f.I,null,r.a.createElement(f.P,{height:20}),u.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f.X,null,"Select Transaction"),r.a.createElement(f.P,{height:20}),r.a.createElement(_,{modules:u,onSelect:function(e,t){n.push({pathname:"/partner/".concat(l.group.name,"_").concat(l.name,"/").concat(e.name,"/").concat(t.name),state:{partner:l,module:e,service:t}})}})),0===u.length&&r.a.createElement("div",{style:W.maintenanceContainer},r.a.createElement("div",{style:W.maintenanceInfo},r.a.createElement("label",{style:W.maintenanceTitle},"Website under maintenance"),r.a.createElement("p",null,"This website is currently undergoing a scheduled maintenance. Will return shortly. Our apologies for the inconvenience.")),r.a.createElement("img",{style:W.maintenanceImage,src:"/assets/filipizen.png",alt:"Under Maintenance"})))):r.a.createElement(h,null)},H=function(e){return function(e){var t=N[e.module];return"undefined"===typeof t&&("bpls"===e.module?t=P.a.lib((function(){return n.e(3).then(n.bind(null,599))})):"rptis"===e.module?t=P.a.lib((function(){return n.e(5).then(n.bind(null,600))})):"waterworks"===e.module?t=P.a.lib((function(){return n.e(6).then(n.bind(null,601))})):"obo"===e.module&&(t=P.a.lib((function(){return n.e(4).then(n.bind(null,602))}))),N[e.module]=t),t}(e)},z=function(e){var t=Object(o.g)(),n=Object(o.f)(),c=function(e){return e&&e.state?e.state:{}}(t),i=c.partner,l=c.service,s=Object(d.a)(c,["partner","service"]),m=Object(a.useState)(i),u=Object(p.a)(m,2),v=u[0],b=u[1],g=Object(a.useState)(l),h=Object(p.a)(g,2),E=h[0],y=h[1];if(Object(a.useEffect)((function(){i||function(e){return new Promise((function(t,n){var a=e.pathname.match("/partner/(.*)_(.*)/(.*)/(.*)");(!a||a.length<5)&&n("Invalid path");var r=a[1],c=a[2],i=a[3],l=a[4];f.O.lookup("CloudPartnerService","partner").invoke("findByGroupAndName",{groupname:r,name:c},(function(e,a){if(e)n("Partner ".concat(c," does not exist. ").concat(e));else if("0"!==a.isonline){var r,o=B(a).find((function(e){return e.name===i})),s=o?o.services.find((function(e){return e.name===l})):null;if(!o||!s)return r="/partner/".concat(a.group.name,"_").concat(a.name,"/services"),void t({redirectUrl:r});t({partner:a,module:o,service:s})}else n("Partner is offline.")}))}))}(t).then((function(e){e.redirectUrl?n.replace(e.redirectUrl):(b(e.partner),y(e.service))})).catch((function(e){return n.replace("/partners")}))}),[n,i,t]),!v||!E)return null;var O=H(E);return r.a.createElement(C,{partner:v},r.a.createElement(O,Object.assign({},e,{partner:v,service:E},s),(function(t){var n=t[E.component];return r.a.createElement(n,Object.assign({},e,{partner:v,service:E},s))})))},A=n(89),R={actions:{display:"flex",flexDirection:"row",justifyContent:"center"},code:{fontSize:120,color:"#686868"},label:{fontSize:36,fontWeight:"bold",color:"#3f51b5",textAlign:"center"}},T=function(e){return r.a.createElement(h,{showHeader:!1},r.a.createElement(f.I,null,r.a.createElement(f.P,{height:60}),r.a.createElement(b,{width:200}),r.a.createElement(f.P,{height:30}),r.a.createElement(f.k,{center:!0},r.a.createElement(f.y,{labelStyle:R.code},"404"),r.a.createElement("label",{style:R.label},"Sorry, the page you tried to access cannot be found."),r.a.createElement(f.P,{height:40}),r.a.createElement(f.J,{style:R.actions},r.a.createElement(f.e,{style:{paddingLeft:50,paddingRight:50},caption:"Start Here",size:"large",onClick:function(){e.history.push("/partners")}})))))},J=[{name:"home",exact:!0,path:"/",component:m},{name:"partners",path:"/partners",component:j},{name:"services",path:"/partner/:partnerId/services",component:I},{name:"service",path:"/partner/:partnerId/:module/:service",component:z},{name:"success",path:"/payment/success",component:function(e){var t=e.location.location,n=Object(a.useState)({}),c=Object(p.a)(n,2),i=c[0],l=c[1];Object(a.useEffect)((function(){t&&function(){var e=Object(f.db)(t,"orgcode");f.O.lookup("CloudPartnerService","partner").invoke("findById",{id:e},(function(e,t){l(e?{}:t)}))}()}),[t]);return r.a.createElement(C,{partner:i},r.a.createElement(f.k,{center:!0},r.a.createElement(A.f,Object.assign({onClose:function(){i&&i.name?e.history.replace({pathname:"/partner/".concat(i.name,"/services"),state:{partner:i}}):e.history.replace({pathname:"/partners",state:{partner:i}})}},e,{partner:i}))))}},{name:"error",path:"/payment/error",component:function(e){var t=e.location,n=e.history,c=Object(a.useState)({}),i=Object(p.a)(c,2),l=i[0],o=i[1];Object(a.useEffect)((function(){t&&function(){var e=Object(f.db)(t,"orgcode");f.O.lookup("CloudPartnerService","partner").invoke("findById",{id:e},(function(e,t){o(e?{}:t)}))}()}),[t]);return r.a.createElement(C,{partner:l},r.a.createElement(f.J,null,r.a.createElement(A.e,Object.assign({onClose:function(){l&&l.name?n.replace({pathname:"/partner/".concat(l.name,"/services"),state:{partner:l}}):n.replace({pathname:"/partners",state:{partner:l}})}},e,{partner:l}))))}},{name:"systools",exact:!0,path:"/admin/systool",component:m},{name:"epayment-monitoring",exact:!0,path:"/admin/monitor/epayment",component:n(301).a},{name:"404",path:"*",component:T}];n(550);var L=function(){return r.a.createElement(l.a,null,r.a.createElement(o.c,null,J.map((function(e){return r.a.createElement(o.a,Object.assign({key:e.name},e))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[322,1,2]]]);