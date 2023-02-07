"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{6530:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,i,u=t(2791),a=t(9434),o=t(4270),c=t(168),l=t(8789),s=l.ZP.li(r||(r=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),f=l.ZP.p(i||(i=(0,c.Z)(["\n  margin: 0;\n\n  :not(:last-child) {\n    margin-right: 5px;\n  }\n"]))),d=t(3634),p=t(184),m=function(n){var e=n.id,t=n.name,r=n.number,i=(0,a.I0)();return(0,p.jsxs)(s,{children:[(0,p.jsxs)(f,{children:[t,":"]}),(0,p.jsx)(f,{children:r}),(0,p.jsx)("button",{type:"button",onClick:function(){return i((0,d.GK)(e))},children:"Delete"})]},e)},h="NOT_FOUND";var x=function(n,e){return n===e};function v(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?x:r,u=t.maxSize,a=void 0===u?1:u,o=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),l=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:h},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return h}return{get:r,put:function(e,i){r(e)===h&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,c);function s(){var e=l.get(arguments);if(e===h){if(e=n.apply(null,arguments),o){var t=l.getEntries(),r=t.find((function(n){return o(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return s.clearCache=function(){return l.clear()},s}function y(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function g(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var u,a=0,o={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(o=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=o,s=l.memoizeOptions,f=void 0===s?t:s,d=Array.isArray(f)?f:[f],p=y(r),m=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(d)),h=n((function(){for(var n=[],e=p.length,t=0;t<e;t++)n.push(p[t].apply(null,arguments));return u=m.apply(null,n)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:m,dependencies:p,lastResult:function(){return u},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),h};return i}var b,j,Z,w,k,C=g(v),A=function(n){return n.contacts.items},F=function(n){return n.contacts.isLoading},P=C([function(n){return n.filter},A],(function(n,e){var t=n.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))})),z=function(){var n=(0,a.v9)(P);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,p.jsx)(m,{id:e,name:t,number:r},e)}))})})},q=t(9439),E=l.ZP.div(b||(b=(0,c.Z)(["\n  padding: 5px;\n  border: 1px solid;\n  width: 300px;\n  margin-bottom: 10px;\n"]))),S=l.ZP.label(j||(j=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  font-weight: 500;\n"]))),I=l.ZP.input(Z||(Z=(0,c.Z)(["\n  width: 200px;\n"]))),N=t(5218),O=function(){var n=(0,u.useState)(""),e=(0,q.Z)(n,2),t=e[0],r=e[1],i=(0,u.useState)(""),o=(0,q.Z)(i,2),c=o[0],l=o[1],s=(0,a.v9)(A),f=(0,a.I0)(),m=function(n){var e=n.target,t=e.name,i=e.value;switch(t){case"name":r(i);break;case"number":l(i);break;default:return}},h=function(){r(""),l("")};return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("form",{onSubmit:function(n){n.preventDefault();var e=n.target.elements.name.value,t=n.target.elements.number.value;s.find((function(n){return n.name===e}))?N.ZP.error("".concat(e," is already in contacts")):(f((0,d.uK)({name:e,number:t})),h())},children:(0,p.jsxs)(E,{children:[(0,p.jsxs)(S,{children:["Name",(0,p.jsx)(I,{value:t,onChange:m,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,p.jsxs)(S,{children:["Number",(0,p.jsx)(I,{value:c,onChange:m,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,p.jsx)("button",{type:"submit",children:"Add contact"})]})})})},_=t(1614),D=t(4554),R=l.ZP.label(w||(w=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  font-weight: 500;\n"]))),L=l.ZP.input(k||(k=(0,c.Z)(["\n  width: 200px;\n"]))),K=t(4808),M=function(){var n=(0,a.I0)();return(0,p.jsxs)(R,{children:["Find contacts by name",(0,p.jsx)(L,{type:"text",onChange:function(e){var t=e.currentTarget.value;n((0,K.M)(t))}})]})};function T(){var n=(0,a.I0)(),e=(0,a.v9)(F);return(0,u.useEffect)((function(){n((0,d.yF)())}),[n]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.q,{children:(0,p.jsx)("title",{children:"Your contacts"})}),(0,p.jsx)(_.Z,{component:"main",children:(0,p.jsxs)(D.Z,{sx:{mt:"64px",display:"flex",justifyContent:"space-between"},children:[(0,p.jsx)(O,{}),(0,p.jsxs)(D.Z,{sx:{display:"flex",border:"1px solid",padding:"5px",flexDirection:"column"},children:[(0,p.jsx)(M,{}),(0,p.jsx)("div",{children:e&&"Request in progress..."}),(0,p.jsx)(z,{})]})]})})]})}}}]);
//# sourceMappingURL=530.81f4b60d.chunk.js.map