(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),o=a(4),l=a.n(o),r=a(2),s=a(0),i=function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)};var b=function(e){return e.alert&&Object(s.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(s.jsxs)("strong",{children:[i(e.alert.type),": "]}),e.alert.currentMessage]})},d=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active",href:"#",children:e.aboutText})})]}),Object(s.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(s.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:["".concat("light"===e.mode?"Enable":"Disable")," Dark Mode"]})]})]})]})})})};d.defaultProps={title:"Enter title",aboutText:"Enter About"};var h=d,u={backgroundColor:"white",color:"black"},j=function(e){var t=Object(c.useState)("Enter the Text"),a=Object(r.a)(t,2),n=a[0],o=a[1],l=Object(c.useState)(u),i=Object(r.a)(l,2),b=i[0],d=i[1],h=Object(c.useState)("Enable Light Mode"),j=Object(r.a)(h,2),m=j[0],x=j[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{style:"dark"===e.mode?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"},children:[Object(s.jsx)("h1",{className:"text-center my-2",children:e.heading}),Object(s.jsxs)("div",{className:"form-floating my-3",children:[Object(s.jsx)("textarea",{value:n,onClick:function(){"Enter the Text"!==n&&n!=="Enter the Text".toUpperCase()||o("")},onChange:function(e){o(e.target.value)},className:"form-control",placeholder:"Leave a comment here",id:"myBox",style:"dark"===e.mode?{backgroundColor:"black",color:"white",height:"100px"}:{backgroundColor:"white",color:"black",height:"100px"}}),Object(s.jsx)("label",{htmlFor:"myBox",children:"Add Text"})]}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-2 my-2",onClick:function(){o(n.toUpperCase()),e.setAlert("Changed to Upper case","success")},children:"Covert to UpperCase"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-2 my-2",onClick:function(){o(n.toLowerCase()),e.setAlert("Changed to Lower case","success")},children:"Covert to LowerCase"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-2 my-2",onClick:function(){o(n.toUpperCase()),e.setAlert("Changed to Camel case","success")},children:"Covert to CamelCase"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-2 my-2",onClick:function(){var t=document.getElementById("myBox");t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value),e.setAlert("Text copied!!","success")},children:"Copy"}),Object(s.jsx)("button",{type:"button",className:"btn btn-danger mx-2 my-2",onClick:function(){o("")},children:"CLEAR"}),Object(s.jsx)("button",{type:"button",className:"btn btn-danger mx-2 my-2",onClick:function(){e.toggleMode(),"black"===b.backgroundColor?(d({backgroundColor:"white",color:"black"}),x("Enable Dark Mode")):(d({backgroundColor:"black",color:"white"}),x("Enable Light Mode"))},children:m})]}),Object(s.jsxs)("div",{className:"my-2",style:"dark"===e.mode?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"},children:[Object(s.jsx)("h4",{className:"text-center",children:"YOUR FINAL TEXT"}),Object(s.jsx)("p",{children:n}),Object(s.jsxs)("h4",{children:["Your text has ",n.split(" ").length," words and ",n.length," ","characters"]})]})]})};var m=function(){var e=Object(c.useState)("light"),t=Object(r.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(null),l=Object(r.a)(o,2),i=l[0],d=l[1],u=function(e,t){d({currentMessage:e,type:t}),setTimeout((function(){d(null)}),2e3)},m=function(){"light"===a?(n("dark"),document.body.style.backgroundColor="black",u("Dark Mode has been Enabled","success")):(n("light"),document.body.style.backgroundColor="white",u("Light Mode has been Enabled","success"))};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(h,{title:"TextUtils",aboutText:"About Us",mode:a,toggleMode:m}),Object(s.jsx)(b,{alert:i}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(j,{setAlert:u,heading:"Enter Text to Anaylze",mode:a,toggleMode:m})})]})};l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ecd21cf2.chunk.js.map