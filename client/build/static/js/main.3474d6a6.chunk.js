(this["webpackJsonptest-api"]=this["webpackJsonptest-api"]||[]).push([[0],{22:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),s=a(16),u=a.n(s),o=(a(22),a(2)),l=a.n(o),i=a(5),d=a(4),h=(a(24),a(6)),j=a.n(h),p=function(e){var t="".concat(e.x,":").concat(e.y),a=function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setPosition([e.x,e.y]),e.setPickedCard({title:e.title,country:e.country,year:e.year}),e.setShowEditModal({display:"flex"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"card",id:t,onClick:a,children:[Object(n.jsx)("div",{className:"cardHeader",children:Object(n.jsx)("p",{className:"cardPosition",children:"".concat(e.x+1,":").concat(e.y+1)})}),Object(n.jsx)("h1",{children:e.title}),Object(n.jsx)("h4",{children:e.country}),Object(n.jsx)("p",{className:"wineYear",children:e.year})]})},b=function(e){var t=function(t,c,r,s){var u=!1;if(null===t||void 0===t||t.map((function(t){return"".concat(t.shelf,":").concat(t.row)==="".concat(r,":").concat(s)?(u=!0,c.push(function(t,a,c){return Object(n.jsx)(p,{title:t.title,country:t.country,year:t.year,x:t.shelf,y:t.row,setPosition:e.setPosition,updateOnPost:e.updateOnPost,setUpdateOnPost:e.setUpdateOnPost,setShowEditModal:e.setShowEditModal,showEditModal:e.showEditModal,setPickedCard:e.setPickedCard},"".concat(a,":").concat(c))}(t,r,s))):null})),!u)return c.push(function(e,t){return Object(n.jsxs)("div",{className:"showForm",id:"".concat(e,":").concat(t),children:[Object(n.jsx)("div",{className:"cardHeader",children:Object(n.jsx)("p",{className:"cardPosition",children:"".concat(e+1,":").concat(t+1)})}),Object(n.jsx)("button",{onClick:a,children:"+"})]},"".concat(e,":").concat(t))}(r,s))},a=function(t){e.setShowAddModal({display:"flex"}),e.setPosition(t.target.parentElement.id.split(":")),e.setPickedCard({})};return Object(n.jsx)("div",{className:"wineGrid",children:function(){for(var a=e.cardArr,n=[],c=0;c<15;c++)for(var r=0;r<8;r++)t(a,n,c,r);return n}()})},O=function(e){var t=Object(c.useState)("none"),a=Object(d.a)(t,2),r=a[0],s=a[1],u=Object(c.useRef)(null),o=Object(c.useRef)(null),l=Object(c.useRef)(null),i=Object(c.useRef)(null),h=function(){i.current.checked?(e.setTitleValue(u.current.value),e.setCountryValue(o.current.value),e.setYearValue(l.current.value),e.setCheckedValue(i.current.checked)):(e.setTitleValue(""),e.setCountryValue(""),e.setYearValue(""),e.setCheckedValue(i.current.checked))};return Object(c.useEffect)((function(){u.current.value=e.titleValue,o.current.value=e.countryValue,l.current.value=e.yearValue,i.current.checked=e.checkedValue,function(){var t=e.pickedCard||"",a=t.title,n=t.country,c=t.year;if(!(a||n||c))return!1;u.current.value=a,o.current.value=n,l.current.value=c}(),"Change Wine"===e.buttonName?s("block"):s("none"),u.current.focus()})),Object(n.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),isNaN(l.current.value))alert("The year must be entered as a number.");else{var a={};a.title=t.target.children[2].value,a.country=t.target.children[4].value,a.year=t.target.children[6].value,a.shelf=e.position[0],a.row=e.position[1],e.method(a),e.show({display:"none"}),h()}},className:"wineForm",children:[Object(n.jsx)("button",{type:"button",onClick:function(){h(),e.show({display:"none"})},className:"cancelButton",children:"\u2715"}),Object(n.jsx)("label",{htmlFor:"newWineName",children:"Wine Name"}),Object(n.jsx)("input",{type:"text",id:"newWineName",ref:u}),Object(n.jsx)("label",{htmlFor:"newWineCountry",children:"Country"}),Object(n.jsx)("input",{type:"text",id:"newWineCountry",ref:o}),Object(n.jsx)("label",{htmlFor:"newWineDesc",children:"Year"}),Object(n.jsx)("input",{type:"text",id:"newWineDesc",ref:l}),Object(n.jsx)("button",{type:"submit",id:"editWineButton",children:e.buttonName}),Object(n.jsx)("button",{style:{display:r},className:"removeButton",onClick:e.handleRemove,children:"Delete Wine"}),Object(n.jsxs)("div",{className:"saveFormContainer",children:[Object(n.jsx)("input",{ref:i,defaultChecked:e.checkedValue,type:"checkbox",id:"saveForm"}),Object(n.jsx)("label",{htmlFor:"saveForm",children:"Keep Info"})]})]})},f=function(e){var t=function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.post("/wines",a);case 3:e.setUpdateOnPost(e.updateOnPost+1),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert("A server error occured.",t.t0);case 9:case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"wineModal",style:e.showAddModal,children:Object(n.jsx)(O,{method:t,buttonName:"Add Wine",show:e.setShowAddModal,position:e.position,titleValue:e.titleValue,setTitleValue:e.setTitleValue,countryValue:e.countryValue,setCountryValue:e.setCountryValue,yearValue:e.yearValue,setYearValue:e.setYearValue,checkedValue:e.checkedValue,setCheckedValue:e.setCheckedValue})})},y=function(e){var t=function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.put("/wines",a);case 3:e.setUpdateOnPost(e.updateOnPost+1),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert("A server error occured.",t.t0);case 9:case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}(),a=function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Do you want to delete ".concat(e.pickedCard.title))){t.next=10;break}return t.prev=1,t.next=4,j.a.delete("/wines",{data:{shelf:e.position[0],row:e.position[1]}});case 4:e.setUpdateOnPost(e.updateOnPost+1),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),alert("A server error occured.",t.t0);case 10:case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"wineModal",style:e.showEditModal,children:Object(n.jsx)(O,{method:t,buttonName:"Change Wine",show:e.setShowEditModal,position:e.position,pickedCard:e.pickedCard,handleRemove:a,titleValue:e.titleValue,setTitleValue:e.setTitleValue,countryValue:e.countryValue,setCountryValue:e.setCountryValue,yearValue:e.yearValue,setYearValue:e.setYearValue,checkedValue:e.checkedValue,setCheckedValue:e.setCheckedValue})})};var v=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(null),u=Object(d.a)(s,2),o=u[0],h=u[1],p=Object(c.useState)(0),O=Object(d.a)(p,2),v=O[0],x=O[1],V=Object(c.useState)({display:"none"}),w=Object(d.a)(V,2),m=w[0],k=w[1],C=Object(c.useState)({display:"none"}),P=Object(d.a)(C,2),N=P[0],S=P[1],M=Object(c.useState)({}),A=Object(d.a)(M,2),E=A[0],W=A[1],T=Object(c.useState)(""),Y=Object(d.a)(T,2),g=Y[0],F=Y[1],U=Object(c.useState)(""),R=Object(d.a)(U,2),D=R[0],B=R[1],H=Object(c.useState)(""),I=Object(d.a)(H,2),J=I[0],G=I[1],K=Object(c.useState)(!1),q=Object(d.a)(K,2),z=q[0],L=q[1],Q=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("/wines");case 3:return t=e.sent,e.next=6,t.data;case 6:a=e.sent,r(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0,"getWines error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){Q()}),[v]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{className:"header",children:"This is the wine we whine about"}),Object(n.jsx)(f,{setCardArr:r,position:o,updateOnPost:v,setUpdateOnPost:x,showAddModal:m,setShowAddModal:k,titleValue:g,setTitleValue:F,countryValue:D,setCountryValue:B,yearValue:J,setYearValue:G,checkedValue:z,setCheckedValue:L}),Object(n.jsx)(y,{showEditModal:N,setShowEditModal:S,updateOnPost:v,setUpdateOnPost:x,position:o,pickedCard:E,titleValue:g,setTitleValue:F,countryValue:D,setCountryValue:B,yearValue:J,setYearValue:G,checkedValue:z,setCheckedValue:L}),Object(n.jsx)(b,{cardArr:a,setCardArr:r,setPosition:h,updateOnPost:v,setUpdateOnPost:x,showAddModal:m,setShowAddModal:k,showEditModal:N,setShowEditModal:S,setPickedCard:W})]})};u.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.3474d6a6.chunk.js.map