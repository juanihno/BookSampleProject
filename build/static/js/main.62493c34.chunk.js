(this["webpackJsonpsample-project"]=this["webpackJsonpsample-project"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(14),r=n.n(s),o=(n(21),n.p,n(22),n(8)),l=n(1);function i(e){var t=e.navigation.map((function(e){return Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{to:e.link,className:"nav-link",activeClassName:"active",children:e.name})})}));return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.name}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:t}),Object(l.jsxs)("form",{className:"d-flex",children:[Object(l.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(l.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}var j=n(2),b=n(16);function d(e){var t=Object(a.useState)([]),n=Object(b.a)(t,2),c=n[0],s=n[1];if(Object(a.useEffect)((function(){c||fetch("http://johannes.oa4.info/php/book.php").then((function(e){e.json()})).then((function(e){s(e)})).catch((function(e){console.log(e)}))})),c){console.log(c);var r=c.map((function(e){return Object(l.jsx)("h3",{children:e.book_title})}));return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)("h2",{children:"Books"}),r]})}return Object(l.jsx)("div",{className:"home",children:Object(l.jsx)("h2",{children:"Getting data ..."})})}function h(e){return Object(l.jsx)("div",{className:"about",children:Object(l.jsx)("h2",{children:"About"})})}function u(e){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Hello Content"}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",children:Object(l.jsx)(d,{})}),Object(l.jsx)(j.a,{path:"/about",children:Object(l.jsx)(h,{})})]})]})}function m(e){return Object(l.jsx)("footer",{className:"footer bg-dark",children:Object(l.jsx)("div",{className:"container-fluid text-light",children:Object(l.jsx)("h1",{children:"Hello Footer"})})})}var x=[{name:"Home",link:"/"},{name:"About",link:"/about"}];var O=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(i,{name:"Heart Books",navigation:x}),Object(l.jsx)(u,{}),Object(l.jsx)(m,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(O,{})})}),document.getElementById("root")),p()}},[[32,1,2]]]);
//# sourceMappingURL=main.62493c34.chunk.js.map