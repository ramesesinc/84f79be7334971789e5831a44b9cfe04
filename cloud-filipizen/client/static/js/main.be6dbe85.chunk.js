(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{307:function(e,t,n){e.exports=n(513)},312:function(e,t,n){},313:function(e,t,n){},489:function(e,t){},499:function(e,t,n){e.exports=n.p+"static/media/filipizen.5fd85b9e.svg"},500:function(e,t,n){},502:function(e,t,n){},513:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"RealtyTaxClearanceWebController",(function(){return I.a})),n.d(a,"RptBillingWebController",(function(){return I.b})),n.d(a,"BplsBillingWebController",(function(){return P.a})),n.d(a,"WaterworksBillingWebController",(function(){return N.a})),n.d(a,"getModules",(function(){return R}));var r=n(0),c=n.n(r),i=n(12),l=n.n(i),o=(n(312),n(45)),s=n(15),m=(n(313),n(1)),u=function(e){return c.a.createElement(m.p,Object.assign({src:n(499)},e))},p=n(83),d=(n(500),function(e){var t=function(e){var t=e.children,n={header:null,left:null,center:null,right:null,footer:null};return c.a.Children.forEach(t,(function(e){if(e){var t=e.props.target||"center",a="string"===typeof e.type?e.type:e.type.name;/header/i.test(a)?t="header":/footer/i.test(a)&&(t="footer"),n[t]||(n[t]=[]),n[t].push(e)}})),n}(e),n=t.header,a=t.center,r=t.footer;return c.a.createElement("div",{className:"template"},c.a.createElement("div",{className:"row header"},n),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"panel"},c.a.createElement("div",{className:"main"},a," "))),c.a.createElement("div",{className:"row footer"},r))}),f=function(e){return c.a.createElement("div",{style:g.header},c.a.createElement(o.b,{to:"/partners"},c.a.createElement(u,null)))},h=function(e){return c.a.createElement("div",{target:"footer",style:g.footer},c.a.createElement("span",{style:g.footerText},"@2020  Sitemap | Privacy | Legal | Feedback"))},g={header:{height:"50",backgroundColor:"#ecf0f1",padding:"8px 8px",paddingLeft:"50px"},footer:{position:"absolute",bottom:0,width:"98%",padding:"8px",backgroundColor:"#ecf0f1",borderTop:"3px solid #2c3e50",textAlign:"center"},footerText:{fontSize:"14px",color:"#4d4d4d"}},v=function(e){var t=e.children,n=Object(p.a)(e,["children"]),a=void 0===n.showHeader||n.showHeader;return c.a.createElement(d,{logo:u},a&&c.a.createElement(f,null),t,c.a.createElement(h,null))},E={actions:{display:"flex",flexDirection:"row",justifyContent:"center"}},b=function(e){return c.a.createElement(v,{showHeader:!1},c.a.createElement(m.A,null,c.a.createElement(m.G,{height:60}),c.a.createElement(u,{width:200}),c.a.createElement(m.G,{height:30}),c.a.createElement(m.s,{labelStyle:{fontSize:42,fontWeight:"bold"}},"Experience ease of doing business with the government"),c.a.createElement(m.s,{labelStyle:{fontSize:20}},"Over 50 local government units participating all over the Philippines."),c.a.createElement(m.G,{height:40}),c.a.createElement(m.B,{style:E.actions},c.a.createElement(m.d,{style:{paddingLeft:50,paddingRight:50},caption:"Start Here",size:"large",onClick:function(){e.history.push("/partners")}}))))},y=n(281),O=n(37),w=(n(502),m.F.lookup("CloudPartnerService","partner")),x=Object(m.Q)(),j=function(e){var t=e.partners,n=t[0].group;return c.a.createElement("div",null,c.a.createElement(m.I,null,n.title),c.a.createElement(m.v,{items:t},(function(e){var t=e.item;return"0"!==t.isonline?c.a.createElement("div",{key:t.id,style:{paddingBottom:2}},c.a.createElement(m.u,{component:o.b,to:{pathname:"/partner/".concat(n.objid,"_").concat(t.name,"/services"),state:{partner:t}},caption:"".concat(t.title," (").concat(t.id,")")})):c.a.createElement(m.s,{key:t.id,style:{color:"#a9a7a7",paddingTop:0}},"".concat(t.title," (").concat(t.id,")"))})))},k=function(e){var t=e.partners,n=Object(m.S)(t,"clusterid");return c.a.createElement("div",{className:"PartnerList_group"},Object.keys(n).map((function(e){return c.a.createElement(j,{key:e,partners:n[e]})})))},B=function(e){var t=Object(r.useState)(!0),n=Object(O.a)(t,2),a=n[0],i=n[1],l=Object(r.useState)([]),o=Object(O.a)(l,2),s=o[0],u=o[1],p=function(e,t){var n=s.findIndex((function(t){return t.id===e}));if(n>=0){var a=s[n];if(a.isonline!==t){a.isonline=t;var r=Object(y.a)(s);r[n]=a,u(r)}}};return x.register("activate",(function(e){p(e,"1")})),x.register("deactivate",(function(e){p(e,"0")})),c.a.useEffect((function(){i(!0),w.getActivePartners((function(e,t){e?console.log("Error loading partners ",e):u(t),i(!1)}))}),[]),c.a.createElement(v,null,c.a.createElement("div",{className:"PartnerList"},a&&c.a.createElement(m.t,null),!a&&c.a.createElement(c.a.Fragment,null,c.a.createElement(m.G,{height:20}),c.a.createElement(m.N,null,"Select a Partner Agency"),c.a.createElement(k,{partners:s}))))},C={container:{padding:"4px 50px"},title:{color:"#ddd",paddingLeft:5}},S=function(e){var t=e.partner,n=e.Logo;return c.a.createElement(m.b,null,c.a.createElement(m.B,{style:C.container},c.a.createElement(o.b,{to:{pathname:"/partner/".concat(t.name,"/services"),state:{partner:t}}},c.a.createElement(m.B,{row:!0},c.a.createElement("div",null,n)))))},W=function(e){var t,n=e.children,a=Object(p.a)(e,["children"]);return c.a.createElement(v,{logo:u},c.a.createElement(S,Object.assign({Logo:(t=a.partner,c.a.createElement(m.p,{style:{height:"40px"},src:"/assets/".concat(t.name,".png"),height:"30px"}))},a)),n)},I=n(267),P=n(268),N=n(269),T=[{name:"bpls",title:"Business",services:[{name:"businessbilling",title:"Business Online Billing",component:"BplsBillingWebController"},{name:"newbusiness",title:"Apply New Business",component:"NewBusinessWebController"}]},{name:"rpt",title:"Real Property",services:[{name:"rptbilling",title:"Realty Tax Online Billing",component:"RptBillingWebController"},{name:"rpttaxclearance",title:"Online Realty Tax Clearance",component:"RealtyTaxClearanceWebController"}]},{name:"waterworks",title:"Waterworks",services:[{name:"waterworksbilling",title:"Waterworks Billing",component:"WaterworksBillingWebController"}]}],R=function(e){var t=e.includeservices;if(!t)return[];var n=new RegExp("(".concat(t,")"),"i"),a=e.excludeservices?new RegExp("(".concat(e.excludeservices,")"),"i"):null,r=[].concat(T);return r.forEach((function(e){var t=e.services.filter((function(e){return n.test(e.name)&&(!a||!a.test(e.name))}));e.services=t})),r.filter((function(e){return e.services.length>0}))},L=function(e){var t=e.modules,n=e.onSelect;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement(m.B,{key:e.name},c.a.createElement(m.I,null,e.title),c.a.createElement(m.v,{items:e.services,style:F.list},(function(t){var a=t.item;return c.a.createElement(m.u,{key:a.name,component:"button",onClick:function(){return n(e,a)}},a.title)})))})))},F={list:{display:"flex",flexDirection:"column",alignItems:"flex-start"},maintenanceContainer:{display:"flex",marginTop:20},maintenanceInfo:{},maintenanceImage:{width:350},maintenanceTitle:{fontSize:"3rem",fontWeight:800}},z=function(e){var t=Object(r.useState)(),n=Object(O.a)(t,2),a=n[0],i=n[1],l=Object(r.useState)([]),o=Object(O.a)(l,2),s=o[0],u=o[1];Object(r.useEffect)((function(){var t,n=e.location.state?e.location.state.partner:null;n?(i(n),u(R(n))):(t=e.location,new Promise((function(e,n){var a=t.pathname.match("/partner/(.*)_(.*)/services");(!a||a.length<3)&&n("Invalid path");var r=a[1],c=a[2];m.F.lookup("CloudPartnerService","partner").findByGroupAndName({groupname:r,name:c},(function(t,a){t?n("Partner ".concat(c," does not exist. ").concat(t)):"0"!==a.isonline?e(a):n("Partner is offline.")}))}))).then((function(e){i(e),u(R(e))})).catch((function(t){return e.history.push("/partners")}))}),[]);return a?c.a.createElement(W,{partner:a,location:e.location,history:e.history},c.a.createElement(m.A,null,c.a.createElement(m.G,{height:20}),s.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(m.N,null,"Select Transaction"),c.a.createElement(m.G,{height:20}),c.a.createElement(L,{modules:s,onSelect:function(t,n){e.history.push({pathname:"/partner/".concat(a.name,"/").concat(t.name,"/").concat(n.name),state:{partner:a,module:t,service:n}})}})),0==s.length&&c.a.createElement("div",{style:F.maintenanceContainer},c.a.createElement("div",{style:F.maintenanceInfo},c.a.createElement("label",{style:F.maintenanceTitle},"Website under maintenance"),c.a.createElement("p",null,"This website is currently undergoing a scheduled maintenance. Will return shortly. Our apologies for the inconvenience.")),c.a.createElement("img",{style:F.maintenanceImage,src:"/assets/filipizen.png"})))):c.a.createElement(v,null,c.a.createElement(m.w,{caption:"Loading partner information",color:"primary"}))},A=function(e){var t=function(e){return e&&e.state?e.state:{}}(Object(s.f)()),n=t.partner,r=(t.module,t.service),i=Object(p.a)(t,["partner","module","service"]);if(!r)return null;var l=function(e){return a[e.component]}(r);return c.a.createElement(W,{partner:n},c.a.createElement(l,Object.assign({},e,{partner:n,service:r},i)))},G=n(82),H=n.n(G),_=n(21),D=[{name:"home",exact:!0,path:"/",component:b},{name:"partners",path:"/partners",component:B},{name:"services",path:"/partner/:partnerId/services",component:z},{name:"service",path:"/partner/:partnerId/:module/:service",component:A},{name:"success",path:"/payment/success",component:function(e){var t=Object(r.useState)({}),n=Object(O.a)(t,2),a=n[0],i=n[1];Object(r.useEffect)((function(){var t=H.a.get("partner");t&&t.name?i(t):function(){var t=Object(m.R)(e.location,"orgcode");m.F.lookup("CloudPartnerService","partner").findById({id:t},(function(e,t){i(e?{}:t)}))}()}),[]);return c.a.createElement(W,{partner:a},c.a.createElement(m.i,{center:!0},c.a.createElement(_.d,Object.assign({onClose:function(){a&&a.name?e.history.replace({pathname:"/partner/".concat(a.name,"/services"),state:{partner:a}}):e.history.replace({pathname:"/partners",state:{partner:a}})}},e))))}},{name:"error",path:"/payment/error",component:function(e){var t=Object(r.useState)({}),n=Object(O.a)(t,2),a=n[0],i=n[1];Object(r.useEffect)((function(){var t=H.a.get("partner");t&&t.name?i(t):function(){var t=Object(m.R)(e.location,"orgcode");m.F.lookup("CloudPartnerService","partner").findById({id:t},(function(e,t){i(e?{}:t)}))}()}),[]);return c.a.createElement(W,{partner:a},c.a.createElement(m.B,null,c.a.createElement(_.c,Object.assign({onClose:function(){a&&a.name?e.history.replace({pathname:"/partner/".concat(a.name,"/services"),state:{partner:a}}):e.history.replace({pathname:"/partners",state:{partner:a}})}},e,{partner:a}))))}},{name:"systools",exact:!0,path:"/admin/systool",component:b}];var J=function(){return c.a.createElement(o.a,null,c.a.createElement(s.c,null,D.map((function(e){return c.a.createElement(s.a,Object.assign({key:e.name},e))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[307,1,2]]]);
//# sourceMappingURL=main.be6dbe85.chunk.js.map