"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[911],{2911:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,a,i,s,o,c=t(2791),u=t(9434),l=t(4270),d=t(168),m=t(6444),h=m.ZP.li(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),p=m.ZP.p(a||(a=(0,d.Z)(["\n  margin: 0;\n\n  :not(:last-child) {\n    margin-right: 5px;\n  }\n"]))),x=t(3634),f=t(184),g=function(n){var e=n.id,t=n.name,r=n.phone,a=(0,u.I0)();return(0,f.jsxs)(h,{children:[(0,f.jsxs)(p,{children:[t,":"]}),(0,f.jsx)(p,{children:r}),(0,f.jsx)("button",{type:"button",onClick:function(){return a((0,x.GK)(e))},children:"Delete"})]},e)},j=t(6916),v=function(n){return n.contacts.items},b=function(n){return n.contacts.isLoading},Z=(0,j.P1)([function(n){return n.filter},v],(function(n,e){var t=n.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))})),w=function(){var n=(0,u.v9)(Z);return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{children:n.map((function(n){var e=n.id,t=n.name,r=n.phone;return(0,f.jsx)(g,{id:e,name:t,phone:r},e)}))})})},y=t(9439),k=m.ZP.div(i||(i=(0,d.Z)(["\n  padding: 5px;\n  border: 1px solid;\n  width: 300px;\n  margin-bottom: 10px;\n"]))),C=m.ZP.label(s||(s=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  font-weight: 500;\n"]))),P=m.ZP.input(o||(o=(0,d.Z)(["\n  width: 200px;\n"]))),A=function(){var n=(0,c.useState)(""),e=(0,y.Z)(n,2),t=e[0],r=e[1],a=(0,c.useState)(""),i=(0,y.Z)(a,2),s=i[0],o=i[1],l=(0,u.v9)(v),d=(0,u.I0)(),m=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"phone":o(a);break;default:return}},h=function(){r(""),o("")};return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("form",{onSubmit:function(n){n.preventDefault();var e=n.target.elements.name.value,t=n.target.elements.phone.value;l.find((function(n){return n.name===e}))?alert("".concat(e," is already in contacts")):(d((0,x.uK)({name:e,phone:t})),h())},children:(0,f.jsxs)(k,{children:[(0,f.jsxs)(C,{children:["Name",(0,f.jsx)(P,{value:t,onChange:m,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)(C,{children:["Number",(0,f.jsx)(P,{value:s,onChange:m,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)("button",{type:"submit",children:"Add contact"})]})})})};function F(){var n=(0,u.I0)(),e=(0,u.v9)(b);return(0,c.useEffect)((function(){n((0,x.yF)())}),[n]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.q,{children:(0,f.jsx)("title",{children:"Your contacts"})}),(0,f.jsx)(A,{}),(0,f.jsx)("div",{children:e&&"Request in progress..."}),(0,f.jsx)(w,{})]})}}}]);
//# sourceMappingURL=911.53dc2781.chunk.js.map