(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={button:"Button_button__3Gz16"}},12:function(t,e,n){t.exports={form:"ContactForm_form__3brwi"}},13:function(t,e,n){t.exports={app:"App_app__3IDl8"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),o=n(14),s=n(2),u=n(3),l=n(5),d=n(4),b=n(10),m=n(23),p=n(11),j=n.n(p),h=n(0),f=function(t){var e=t.type,n=void 0===e?"button":e,a=t.text,c=void 0===a?"Button":a,r=t.onClick,i=t.id;return Object(h.jsx)("button",{type:n,onClick:r?function(){r(i)}:null,className:j.a.button,children:c})},x=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},C=n(7),O=n.n(C),v=function(t){var e=t.type,n=void 0===e?"text":e,a=t.name,c=void 0===a?"input":a,r=t.pattern,i=t.title,o=void 0===i?"input":i,s=t.onChange,u=x(c);return Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{className:O.a.text,children:u}),Object(h.jsx)("input",{className:O.a.input,type:n,name:c,pattern:r,title:o,required:!0,onChange:s})]})},g=n(12),_=n.n(g),y=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.value,c=n.name;t.setState((function(){return Object(b.a)({},c,a)}))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;(0,t.props.onSubmit)({id:Object(m.a)(),name:a,number:c})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:_.a.form,children:[Object(h.jsx)(v,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:this.handleChange}),Object(h.jsx)(v,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:this.handleChange}),Object(h.jsx)(f,{type:"submit",text:"Add contact"})]})}}]),n}(a.Component),k=n(8),w=n.n(k),A=function(t){var e=t.contact,n=e.name,a=e.number,c=e.id,r=t.onClick;return Object(h.jsxs)("li",{className:w.a.item,children:[Object(h.jsxs)("span",{className:w.a.text,children:[n," : ",a]}),Object(h.jsx)(f,{text:"Delete",onClick:r,id:c})]})},S=function(t){var e=t.contacts,n=t.onClick;return Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)(A,{contact:t,onClick:n},t.id)}))})},N=function(t){var e=t.onChange;return Object(h.jsx)(v,{type:"text",name:"find contacts by name",onChange:e})},I=function(t,e){return t.find((function(t){return t.name===e}))},B=n(13),z=n.n(B),D=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addNewContact=function(e){var n=e.name,a=t.state.contacts;I(a,n)?alert("".concat(n," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[e])}}))},t.deleteContactById=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterHandler=function(e){var n=e.target.value;t.setState((function(){return{filter:n}}))},t.getCurrentContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=new RegExp(n,"gi");return n?a.filter((function(t){return c.test(t.name)})):a},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getCurrentContacts();return Object(h.jsxs)("div",{className:z.a.app,children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(y,{onSubmit:this.addNewContact}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(N,{onChange:this.filterHandler}),Object(h.jsx)(S,{contacts:t,onClick:this.deleteContactById})]})}}]),n}(a.Component);n(20);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={text:"Input_text__1rwXn",input:"Input_input__KYxXY"}},8:function(t,e,n){t.exports={item:"ListItem_item__15rQ1",text:"ListItem_text__2saF5"}}},[[21,1,2]]]);
//# sourceMappingURL=main.8e75890b.chunk.js.map