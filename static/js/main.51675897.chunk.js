(this["webpackJsonpdeploy-app"]=this["webpackJsonpdeploy-app"]||[]).push([[0],{39:function(e,a,t){e.exports=t.p+"static/media/nutrition-planner.03d862ba.png"},40:function(e,a,t){e.exports=t.p+"static/media/inStock.ee916ef1.png"},41:function(e,a,t){e.exports=t.p+"static/media/brainFlix.8db137f6.png"},42:function(e,a,t){e.exports=t.p+"static/media/bcblack.bfef1d6d.mp4"},56:function(e,a,t){e.exports=t(74)},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),r=t(17),l=t.n(r),c=(t(61),t(62),t(14)),i=t(6),s=t(21),m=(t(63),t(43)),p=t(77),u=t(78);function d(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1];return o.a.createElement("div",{className:"nav-bar"},o.a.createElement(p.a,{collapseOnSelect:!0,expand:"lg",className:"nav-bar__nav",variant:"dark"},o.a.createElement(c.b,{to:"/portfolio/about",className:"nav-bar__brand"},o.a.createElement("h2",null,"Portfolio")),o.a.createElement(p.a.Toggle,{className:"nav-bar__toggle","aria-controls":"responsive-navbar-nav"},o.a.createElement(m.a,{color:"#FFF",toggled:t,toggle:r})),o.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(u.a,{className:"mr-auto"}),o.a.createElement(u.a,null,o.a.createElement(u.a.Link,null,o.a.createElement(c.b,{to:"/portfolio/about",className:"nav-bar__anchor hover",activeClassName:"nav-bar__anchor-active"},"About")),o.a.createElement(u.a.Link,null,o.a.createElement(c.b,{to:"/portfolio/projects",className:"nav-bar__anchor hover",activeClassName:"nav-bar__anchor-active"},"Projects")),o.a.createElement(u.a.Link,null,o.a.createElement(c.b,{to:"/portfolio/contact",className:"nav-bar__anchor hover",activeClassName:"nav-bar__anchor-active"},"Contact"))))))}t(72);var E=t(0),b=t(24);function v(){return o.a.createElement(E.b.Provider,{value:{size:"36px"}},o.a.createElement("div",{className:"about"},o.a.createElement("h2",{className:"about__name"},"Anton Shtipliyski"),o.a.createElement("p",{className:"about__description"},"FULL-STACK WEB DEVELOPER"),o.a.createElement("div",{className:"about__icons"},o.a.createElement("a",{className:"about__icon",href:"https://github.com/ahshtipliyski",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(b.b,null)),o.a.createElement("a",{className:"about__icon",href:"https://www.linkedin.com/in/anton-shtipliyski/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(b.c,null)),o.a.createElement("a",{className:"about__icon",href:"mailto: antonshtipliyski@yahoo.com"},o.a.createElement(b.a,null)))))}var h=t(15),_=t(29),f=(t(73),t(39)),g=t.n(f),N=t(40),k=t.n(N),y=t(41),j=t.n(y),w=[{image:g.a,title:"Nutrition Planner",description:"Capstone Project from Brainstation. Build with React, Firebase and SASS.",demoURL:"",codeURL:"https://github.com/ahshtipliyski/nutrition-planner",id:0},{image:k.a,title:"InStock",description:"One week project in a team of 4 developers.",demoURL:"",codeURL:"https://github.com/ahshtipliyski/inStock",id:1},{image:j.a,title:"BrainFlix",description:"3 weeks/sprints project. 1 sprint - build react app with multiple components. 2 sprint - get data from api, added functionality. 3 sprint - created server with Node.js",demoURL:"",codeURL:"https://github.com/ahshtipliyski/Brainflix",id:2}];function x(){return o.a.createElement("div",{className:"projects"},w.map((function(e){return o.a.createElement(h.a,{key:e.id,className:"projects__card"},o.a.createElement("div",{className:"projects__overflow"},o.a.createElement(h.a.Img,{className:"projects__image",variant:"top",src:e.image})),o.a.createElement("div",{className:"projects__body"},o.a.createElement(h.a.Body,null,o.a.createElement(h.a.Title,null,e.title),o.a.createElement(h.a.Text,null,e.description),o.a.createElement(h.a.Body,{className:"projects__buttons"},o.a.createElement("a",{className:"projects__button",href:e.demoURL,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(_.a,{variant:"outline-light"},"Demo")),o.a.createElement("a",{className:"projects__button projects__right-button",href:e.codeURL,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(_.a,{variant:"outline-light"},"Code"))))))})))}function L(){return o.a.createElement("div",null,"Page 3")}var S=t(42),R=t.n(S);var B=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("video",{autoPlay:"autoplay",loop:"loop",muted:!0,className:"App__background"},o.a.createElement("source",{src:R.a,type:"video/mp4"})),o.a.createElement("div",{className:"App__overlay"}),o.a.createElement(c.a,null,o.a.createElement(d,null),o.a.createElement(i.d,null,o.a.createElement(i.a,{exact:!0,from:"/portfolio",to:"/portfolio/about"}),o.a.createElement(i.b,{exact:!0,path:"/portfolio/about"},o.a.createElement(v,null)),o.a.createElement(i.b,{exact:!0,path:"/portfolio/projects"},o.a.createElement(x,null)),o.a.createElement(i.b,{exact:!0,path:"/portfolio/contact"},o.a.createElement(L,null)),o.a.createElement(i.a,{to:"/portfolio"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.51675897.chunk.js.map