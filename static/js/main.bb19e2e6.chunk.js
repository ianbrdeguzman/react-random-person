(this["webpackJsonprandom-person"]=this["webpackJsonprandom-person"]||[]).push([[0],{12:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(6),r=s.n(n),o=(s(12),s(5)),i=s.n(o),l=s(7),j=s(3),u=s(2),b=s(0);var d=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(!0),r=Object(j.a)(n,2),o=r[0],d=r[1],O=Object(a.useState)(null),m=Object(j.a)(O,2),x=m[0],h=m[1],p=Object(a.useState)(null),v=Object(j.a)(p,2),f=v[0],g=v[1],N=function(){var e=Object(l.a)(i.a.mark((function e(){var t,s,a,n,r,o,l,j,u,b,O,m,x,p,v;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,fetch("https://randomuser.me/api/");case 4:if(!((t=e.sent).status>=400)){e.next=7;break}throw new Error(t.statusText);case 7:return e.next=9,t.json();case 9:s=e.sent,a=s.results[0],n=a.phone,r=a.email,o=a.picture.large,l=a.name,j=l.first,u=l.last,b=a.login.password,O=a.location.street,m=O.number,x=O.name,p=a.dob.age,v={image:o,phone:n,email:r,name:"".concat(j," ").concat(u),street:"".concat(m," ").concat(x),age:p,password:b},d(!1),c(v),h("name"),g(v.name),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(0),alert(e.t0),console.error(e.t0);case 28:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){N()}),[]);var k=function(e){if(e.target.classList.contains("icon")){var t=e.target.dataset.id,a=s[t];h(t),g(a)}};return Object(b.jsxs)("main",{children:[Object(b.jsx)("div",{className:"block bcg-black"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("img",{src:s&&s.image,alt:"random user",className:"user-img"}),Object(b.jsxs)("p",{className:"user-title",children:["My ",Object(b.jsx)("span",{children:x})," is"]}),Object(b.jsx)("p",{className:"user-value",children:f}),Object(b.jsxs)("div",{className:"values-list",children:[Object(b.jsx)("button",{className:"icon",onMouseOver:k,"data-id":"name",children:Object(b.jsx)(u.f,{})}),Object(b.jsx)("button",{className:"icon",onMouseOver:k,"data-id":"email",children:Object(b.jsx)(u.b,{})}),Object(b.jsx)("button",{className:"icon",onMouseOver:k,"data-id":"age",children:Object(b.jsx)(u.a,{})}),Object(b.jsx)("button",{className:"icon",onMouseOver:k,"data-id":"street",children:Object(b.jsx)(u.d,{})}),Object(b.jsx)("button",{className:"icon",onMouseOver:k,"data-id":"phone",children:Object(b.jsx)(u.e,{})}),Object(b.jsx)("button",{className:"icon",onMouseOver:k,"data-id":"password",children:Object(b.jsx)(u.c,{})})]}),Object(b.jsx)("button",{className:"btn",onClick:N,children:o?"loading":"random user"})]})})]})};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bb19e2e6.chunk.js.map