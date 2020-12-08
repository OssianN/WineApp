(this["webpackJsonptest-api"]=this["webpackJsonptest-api"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(16),o=n.n(s),i=(n(22),n(2)),u=n.n(i),d=n(4),l=n(6),p=(n(24),n(5)),h=n.n(p),j=function(e){var t="".concat(e.x,":").concat(e.y),n=function(){var t=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.stopPropagation(),!window.confirm("Do you want to delete ".concat(e.title))){t.next=13;break}return t.prev=2,t.next=5,h.a.delete("/wines",{data:{shelf:e.x,row:e.y}});case 5:e.setUpdateOnPost(e.updateOnPost+1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),alert("A server error occured.",t.t0);case 11:t.next=14;break;case 13:return t.abrupt("return");case 14:case 15:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),a=function(){var t=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setPosition([e.x,e.y]),e.setPickedCard({title:e.title,country:e.country,year:e.year}),e.setShowEditModal({display:"flex"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"card",id:t,onClick:a,children:[Object(r.jsx)("button",{className:"removeButton",onClick:n,children:"\u2715"}),Object(r.jsx)("p",{className:"cardPosition",children:"".concat(e.x+1,":").concat(e.y+1)}),Object(r.jsx)("h1",{children:e.title}),Object(r.jsx)("h4",{children:e.country}),Object(r.jsx)("p",{className:"wineYear",children:e.year})]})},b=function(e){var t=function(t,a,c,s){var o=!1;if(null===t||void 0===t||t.map((function(t){return"".concat(t.shelf,":").concat(t.row)==="".concat(c,":").concat(s)?(o=!0,a.push(function(t,n,a){return Object(r.jsx)(j,{title:t.title,country:t.country,year:t.year,x:t.shelf,y:t.row,setPosition:e.setPosition,updateOnPost:e.updateOnPost,setUpdateOnPost:e.setUpdateOnPost,setShowEditModal:e.setShowEditModal,showEditModal:e.showEditModal,setPickedCard:e.setPickedCard},"".concat(n,":").concat(a))}(t,c,s))):null})),!o)return a.push(function(e,t){return Object(r.jsxs)("div",{className:"showForm",id:"".concat(e,":").concat(t),children:[Object(r.jsx)("p",{className:"cardPosition",children:"".concat(e+1,":").concat(t+1)}),Object(r.jsx)("button",{onClick:n,children:"+"})]},"".concat(e,":").concat(t))}(c,s))},n=function(t){e.setShowAddModal({display:"flex"}),e.setPosition(t.target.parentElement.id.split(":"))};return Object(r.jsx)("div",{className:"wineGrid",children:function(){for(var n=e.cardArr,r=[],a=0;a<15;a++)for(var c=0;c<8;c++)t(n,r,a,c);return r}()})},f=function(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(null),c=Object(a.useRef)(null);return Object(a.useEffect)((function(){!function(){var r=e.pickedCard||"",a=r.title,s=r.country,o=r.year;(a||s||o)&&(t.current.value=a||"",n.current.value=s||"",c.current.value=o||"")}(),t.current.focus()})),Object(r.jsxs)("form",{onSubmit:function(r){if(r.preventDefault(),isNaN(c.current.value))alert("The year must be entered as a number.");else{var a={};a.title=r.target.children[2].value,a.country=r.target.children[4].value,a.year=r.target.children[6].value,a.shelf=e.position[0],a.row=e.position[1],e.method(a),e.show({display:"none"}),t.current.value="",n.current.value="",c.current.value=""}},className:"wineForm",children:[Object(r.jsx)("button",{type:"reset",onClick:function(){e.show({display:"none"})},className:"cancelButton",children:"\u2715"}),Object(r.jsx)("label",{htmlFor:"newWineName",children:"Wine Name"}),Object(r.jsx)("input",{type:"text",id:"newWineName",ref:t}),Object(r.jsx)("label",{htmlFor:"newWineCountry",children:"Country"}),Object(r.jsx)("input",{type:"text",id:"newWineCountry",ref:n}),Object(r.jsx)("label",{htmlFor:"newWineDesc",children:"Year"}),Object(r.jsx)("input",{type:"text",id:"newWineDesc",ref:c}),Object(r.jsx)("button",{type:"submit",id:"editWineButton",children:e.buttonName})]})},O=function(e){var t=function(){var t=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.post("/wines",n);case 3:e.setUpdateOnPost(e.updateOnPost+1),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert("A server error occured.",t.t0);case 9:case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"wineModal",style:e.showAddModal,children:Object(r.jsx)(f,{method:t,buttonName:"Add Wine",show:e.setShowAddModal,position:e.position})})},w=function(e){var t=function(){var t=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.put("/wines",n);case 3:e.setUpdateOnPost(e.updateOnPost+1),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert("A server error occured.",t.t0);case 9:case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"wineModal",style:e.showEditModal,children:Object(r.jsx)(f,{method:t,buttonName:"Change Wine",show:e.setShowEditModal,position:e.position,pickedCard:e.pickedCard})})};var x=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),o=Object(l.a)(s,2),i=o[0],p=o[1],j=Object(a.useState)(0),f=Object(l.a)(j,2),x=f[0],v=f[1],m=Object(a.useState)({display:"none"}),y=Object(l.a)(m,2),P=y[0],k=y[1],M=Object(a.useState)({display:"none"}),N=Object(l.a)(M,2),C=N[0],S=N[1],A=Object(a.useState)({}),E=Object(l.a)(A,2),W=E[0],g=E[1],U=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/wines");case 3:return t=e.sent,e.next=6,t.data;case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0,"getWines error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){U()}),[x]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{className:"header",children:"This is the wine we whine about"}),Object(r.jsx)(O,{setCardArr:c,position:i,updateOnPost:x,setUpdateOnPost:v,showAddModal:P,setShowAddModal:k}),Object(r.jsx)(w,{showEditModal:C,setShowEditModal:S,updateOnPost:x,setUpdateOnPost:v,position:i,pickedCard:W}),Object(r.jsx)(b,{cardArr:n,setCardArr:c,setPosition:p,updateOnPost:x,setUpdateOnPost:v,showAddModal:P,setShowAddModal:k,showEditModal:C,setShowEditModal:S,setPickedCard:g})]})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b207c234.chunk.js.map