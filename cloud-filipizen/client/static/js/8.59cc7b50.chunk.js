(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[8],{38:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(36);t.a=function(e){return a.a.createElement(o.v,Object.assign({src:n(43)},e))}},40:function(e,t,n){"use strict";var r=n(48),a=n(0),o=n.n(a),c=(n(44),function(e){var t=function(e){var t=e.children,n={header:null,left:null,center:null,right:null,footer:null};return o.a.Children.forEach(t,(function(e){if(e){var t=e.props.target||"center",r="string"===typeof e.type?e.type:e.type.name;/header/i.test(r)?t="header":/footer/i.test(r)&&(t="footer"),n[t]||(n[t]=[]),n[t].push(e)}})),n}(e),n=t.header,r=t.center,a=t.footer;return o.a.createElement("div",{className:"template"},o.a.createElement("div",{className:"row header"},n),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"panel"},o.a.createElement("div",{className:"main"},r," "))),o.a.createElement("div",{className:"row footer"},a))}),i=n(38),l=n(15),u=(n(18),function(e){return o.a.createElement("div",{style:f.header},o.a.createElement(l.b,{to:"/partners"},o.a.createElement(i.a,null)))}),s=function(e){return o.a.createElement("div",{target:"footer",style:f.footer},o.a.createElement("span",{style:f.footerText},"@2020  Sitemap | Privacy | Legal | Feedback"))},f={header:{height:"50",backgroundColor:"#ecf0f1",padding:"8px 8px",paddingLeft:"50px"},footer:{position:"absolute",bottom:0,width:"100%",padding:"8px",backgroundColor:"#ecf0f1",borderTop:"3px solid #2c3e50",textAlign:"center"},footerText:{fontSize:"14px",color:"#4d4d4d"}};t.a=function(e){var t=e.children,n=Object(r.a)(e,["children"]),a=void 0===n.showHeader||n.showHeader;return o.a.createElement(c,{logo:i.a},a&&o.a.createElement(u,null),t,o.a.createElement(s,null))}},43:function(e,t,n){e.exports=n.p+"static/media/filipizen.5fd85b9e.svg"},44:function(e,t,n){},513:function(e,t,n){"use strict";n.r(t);var r=n(58),a=n(0),o=n.n(a),c=n(36),i=n(80),l=n(66);t.default=function(e){var t=Object(a.useState)({}),n=Object(r.a)(t,2),u=n[0],s=n[1];Object(a.useEffect)((function(){!function(){var t=Object(c.db)(e.location,"orgcode");c.O.lookup("CloudPartnerService","partner").invoke("findById",{id:t},(function(e,t){s(e?{}:t)}))}()}),[]);return o.a.createElement(l.a,{partner:u},o.a.createElement(c.J,null,o.a.createElement(i.e,Object.assign({onClose:function(){u&&u.name?e.history.replace({pathname:"/partner/".concat(u.name,"/services"),state:{partner:u}}):e.history.replace({pathname:"/partners",state:{partner:u}})}},e,{partner:u}))))}},54:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(54);function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(55);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},65:function(e,t){},66:function(e,t,n){"use strict";var r=n(48),a=n(0),o=n.n(a),c=n(36),i=n(15),l={container:{padding:"4px 50px"},title:{color:"#ddd",paddingLeft:5}},u=function(e){var t=e.partner,n=e.Logo;return o.a.createElement(c.b,null,o.a.createElement(c.J,{style:l.container},o.a.createElement(i.b,{to:{pathname:"/partner/".concat(t.name,"/services"),state:{partner:t}}},o.a.createElement(c.J,{row:!0},o.a.createElement("div",null,n)))))},s=n(38),f=n(40);n(18),t.a=function(e){var t,n=e.children,a=Object(r.a)(e,["children"]);return o.a.createElement(f.a,{logo:s.a},o.a.createElement(u,Object.assign({Logo:(t=a.partner,o.a.createElement(c.v,{style:{height:"40px"},src:"/assets/".concat(t.name,".png"),height:"30px"}))},a)),n)}}}]);
//# sourceMappingURL=8.59cc7b50.chunk.js.map