"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[354],{7354:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(9439),r=n(2791),s=n(9434),o=n(6351),i=n(6052),c="ContactForm_form__dhl+T",l="ContactForm_form__button__MT1Jk",u=n(3329),m=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],m=t[1],d=(0,r.useState)(""),_=(0,a.Z)(d,2),h=_[0],f=_[1],b=(0,s.v9)(o.Af),p=(0,s.I0)(),x=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":m(a);break;case"number":f(a);break;default:return}},j=function(){alert("".concat(n," is already in contacts list")),m(n),f(h)},v=function(){m(""),f("")};return(0,u.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault(),b.find((function(e){return e.name===n}))?j():(p((0,i.uK)({name:n,number:h})),v())},children:[(0,u.jsx)("label",{htmlFor:"form-name",children:"Name"}),(0,u.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:n,onChange:x,id:"form-name",required:!0}),(0,u.jsx)("label",{htmlFor:"form-number",children:"Number"}),(0,u.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:h,onChange:x,id:"form-number",required:!0}),(0,u.jsx)("button",{className:l,type:"submit",children:"Add contact"})]})},d=n(1634),_="Filter_filter__vxThR",h="Filter_filter__label__ttfPR",f=function(){var e=(0,s.v9)(o.AD),t=(0,s.I0)();return(0,u.jsxs)("div",{className:_,children:[(0,u.jsx)("label",{className:h,htmlFor:"filter",children:"Find contacts by name"}),(0,u.jsx)("input",{type:"text",id:"filter",value:e,onChange:function(e){var n=e.currentTarget.value;t((0,d.q)(n))}})]})},b="ContactListItem_item__button__0acjG",p=function(e){var t=e.transferRenderListItem,n=t.id,a=t.name,r=t.number,o=(0,s.I0)();return(0,u.jsx)("li",{children:(0,u.jsxs)("div",{children:[(0,u.jsxs)("p",{children:[a,":",(0,u.jsx)("span",{children:r})]}),(0,u.jsx)("button",{className:b,type:"button",onClick:function(){return o((0,i.GK)(n))},children:"Delete"})]})})},x="ContactList_contact__list__2jNwc",j=function(){var e=(0,s.v9)(o.Af),t=(0,s.v9)(o.AD),n=function(){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,u.jsx)("ul",{className:x,children:n.map((function(e){return(0,u.jsx)(p,{transferRenderListItem:e},e.id)}))})},v="PhoneBook_phonebook__section__MbW-V",k="PhoneBook_phonebook__title__UnrBS",C="PhoneBook_contacts__title__lCzkl",N=function(){return(0,u.jsxs)("div",{className:v,children:[(0,u.jsx)("h1",{className:k,children:"Phonebook"}),(0,u.jsx)(m,{}),(0,u.jsx)("h2",{className:C,children:"Contacts"}),(0,u.jsx)(f,{}),(0,u.jsx)(j,{})]})}}}]);
//# sourceMappingURL=354.1cb2e582.chunk.js.map