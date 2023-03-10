(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[452],{3452:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return rn}});var t,o,i,a,s,c,l,d,u,p,m,h,g,x,f,b,w,v,j,y=r(9434),Z=r(168),k=r(6444),P=k.ZP.div(t||(t=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  color: rgb(44, 43, 43);\n"]))),z=(k.ZP.h2(o||(o=(0,Z.Z)(["\n  text-align: center;\n  font-size: 2.4rem;\n"]))),k.ZP.p(i||(i=(0,Z.Z)(["\n  color: orangered;\n"])))),C=k.ZP.div(a||(a=(0,Z.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    justify-content: center;\n    gap: 50px;\n  }\n"]))),L=r(4942),A=r(6429),M=r.n(A),R=r(9126),_=r(8174),V=k.ZP.form(s||(s=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: medium;\n  padding: 50px 40px;\n"]))),q=k.ZP.input(c||(c=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 8px;\n  font-size: medium;\n  text-align: left;\n  color: white;\n  background-color: orangered;\n  border: 1px solid black;\n  border-radius: 5px;\n  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;\n  :hover,\n  :focus {\n    cursor: pointer;\n    border-color: orangered;\n    color: orangered;\n    background-color: white;\n  }\n  :-webkit-autofill {\n    transition: background-color 250s linear;\n  }\n  @media screen and (min-width: 480px) {\n    width: 300px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 400px;\n  }\n"]))),F=k.ZP.button(l||(l=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  margin-top: 16px;\n  margin-bottom: 32px;\n  margin-left: 8px;\n  margin-right: 6px;\n  padding: 8px 16px;\n  font-size: medium;\n  line-height: 20px;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  background-color: orangered;\n  border: 1px solid white;\n  cursor: pointer;\n  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;\n  :hover {\n    border-color: orangered;\n    color: orangered;\n    background-color: white;\n  }\n"]))),I=k.ZP.label(d||(d=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n"]))),N=r(6052),E=r(184),D=function(){var n=(0,y.v9)((function(n){return n.contacts.items})),e=M().generate(),r=M().generate(),t=(0,y.I0)();return(0,E.jsx)("div",{children:(0,E.jsxs)(V,{onSubmit:function(e){var r;e.preventDefault();var o=(r={},(0,L.Z)(r,e.target.elements.name.name,e.target.elements.name.value),(0,L.Z)(r,e.target.elements.number.name,e.target.elements.number.value),r);if(n.find((function(n){return n.name.toLowerCase()===e.target.elements.name.value.toLowerCase()&&n.number===e.target.elements.number.value})))return _.Am.error('"'.concat(e.target.elements.name.value,'" with same number is already in contacts')),void e.target.reset();t((0,N.uK)(o)),e.target.reset()},children:[(0,E.jsxs)(I,{htmlFor:e,children:[(0,E.jsx)(R.cQX,{size:18,style:{marginRight:"5px",marginLeft:"1px"}}),"Name"]}),(0,E.jsx)(q,{id:e,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Adrian Cross"}),(0,E.jsxs)(I,{htmlFor:r,children:[" ",(0,E.jsx)(R.lfG,{size:16,style:{marginRight:"5px",marginLeft:"1px"}}),"Number"]}),(0,E.jsx)(q,{id:r,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"+38 077-777-77-77",minLength:"10",maxLength:"17"}),(0,E.jsx)(F,{type:"submit",children:"Add contact"})]})})},G=k.ZP.div(u||(u=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),K=k.ZP.input(p||(p=(0,Z.Z)(["\n  margin-bottom: 20px;\n  padding: 8px;\n  font-size: medium;\n  text-align: left;\n  color: white;\n  background-color: orangered;\n  border: 1px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;\n  :hover,\n  :focus {\n    border-color: orangered;\n    color: orangered;\n    background-color: white;\n  }\n  @media screen and (min-width: 480px) {\n    width: 300px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 200px;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 400px;\n  }\n"]))),O=k.ZP.label(m||(m=(0,Z.Z)(["\n  font-size: medium;\n  margin-bottom: 5px;\n"]))),T=r(1634),Y=function(){var n=M().generate(),e=(0,y.v9)((function(n){return n.filter.filter})),r=(0,y.I0)();return(0,E.jsxs)(G,{children:[(0,E.jsxs)(O,{htmlFor:n,children:[(0,E.jsx)(R.dVI,{size:18,style:{marginRight:"5px",marginLeft:"1px"}})," Find contacts by name"]}),(0,E.jsx)(K,{id:n,type:"text",value:e,onChange:function(n){r((0,T.m)(n.target.value))}})]})},$=r(7689),B=r(1087),H=k.ZP.ul(h||(h=(0,Z.Z)(["\n  margin: 0;\n  margin-top: 10px;\n  padding: 0;\n  list-style: none;\n"]))),J=k.ZP.button(g||(g=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 36px;\n  width: 71px;\n  font-size: small;\n  border-radius: 5px;\n  color: white;\n  background-color: orangered;\n  border: 1px solid white;\n  cursor: pointer;\n  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;\n  :hover {\n    border-color: orangered;\n    color: orangered;\n    background-color: white;\n  }\n"]))),Q=k.ZP.button(x||(x=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 36px;\n  width: 71px;\n  margin-left: 8px;\n  font-size: small;\n  border-radius: 5px;\n  color: white;\n  background-color: orangered;\n  border: 1px solid white;\n  cursor: pointer;\n  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;\n  :hover {\n    border-color: orangered;\n    color: orangered;\n    background-color: white;\n  }\n"]))),S=(0,k.ZP)(B.OL)(f||(f=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 34px;\n  width: 71px;\n  font-size: small;\n  border-radius: 5px;\n  color: white;\n  background-color: orangered;\n  border: 1px solid white;\n  text-decoration: none;\n  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;\n  :hover {\n    border-color: orangered;\n    color: orangered;\n    background-color: white;\n  }\n"]))),U=k.ZP.li(b||(b=(0,Z.Z)(["\n  align-items: center;\n  font-size: large;\n  justify-content: space-between;\n  @media screen and (min-width: 480px) {\n    display: flex;\n  }\n"]))),X=k.ZP.p(w||(w=(0,Z.Z)(["\n  color: rgba(209, 72, 17);\n  margin-top: 17px;\n"]))),W=k.ZP.p(v||(v=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n"]))),nn=k.ZP.div(j||(j=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n"]))),en=function(){var n=(0,y.I0)(),e=(0,$.TH)(),r=(0,y.v9)((function(n){return n.contacts.items})),t=(0,y.v9)((function(n){return n.filter.filter})),o=r.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})),i=function(n){var e=n.phone,r=n.children;return(0,E.jsx)("a",{href:"tel:".concat(e),children:r})};return(0,E.jsx)("div",{children:0===o.length&&r.length>0?(0,E.jsx)(X,{children:"Not found..."}):(0,E.jsx)(H,{children:o.map((function(r){return(0,E.jsxs)(U,{children:[(0,E.jsxs)(W,{children:[" ",(0,E.jsx)(R.RPM,{size:16,style:{marginRight:"5px",marginLeft:"1px"}}),r.name,": ",r.number]}),(0,E.jsxs)(nn,{children:[" ",(0,E.jsx)(i,{phone:r.number,children:(0,E.jsx)(Q,{children:(0,E.jsx)(R.lfG,{size:16,style:{marginRight:"5px",marginLeft:"1px"}})})}),(0,E.jsxs)(S,{to:"/update/".concat(r.id),state:{from:e},children:[" ","Edit"]}),(0,E.jsx)(J,{onClick:function(){return n((0,N.GK)(r.id))},children:"Delete"})]})]},r.id)}))})})},rn=function(){var n=(0,y.v9)((function(n){return n.contacts.items}));return(0,E.jsxs)(P,{children:[(0,E.jsx)(D,{}),(0,E.jsxs)(C,{children:[" ",n.length>0?(0,E.jsx)(Y,{}):(0,E.jsx)(z,{children:"You don't have any contacts yet"}),(0,E.jsx)(en,{})]})]})}},6429:function(n,e,r){"use strict";n.exports=r(5274)},8857:function(n,e,r){"use strict";var t,o,i,a=r(5408),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){i=!1}function l(n){if(n){if(n!==t){if(n.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+n.length+" characters: "+n);var e=n.split("").filter((function(n,e,r){return e!==r.lastIndexOf(n)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+e.join(", "));t=n,c()}}else t!==s&&(t=s,c())}function d(){return i||(i=function(){t||l(s);for(var n,e=t.split(""),r=[],o=a.nextValue();e.length>0;)o=a.nextValue(),n=Math.floor(o*e.length),r.push(e.splice(n,1)[0]);return r.join("")}())}n.exports={get:function(){return t||s},characters:function(n){return l(n),t},seed:function(n){a.seed(n),o!==n&&(c(),o=n)},lookup:function(n){return d()[n]},shuffled:d}},7098:function(n,e,r){"use strict";var t,o,i=r(2226);r(8857);n.exports=function(n){var e="",r=Math.floor(.001*(Date.now()-1567752802062));return r===o?t++:(t=0,o=r),e+=i(7),e+=i(n),t>0&&(e+=i(t)),e+=i(r)}},2226:function(n,e,r){"use strict";var t=r(8857),o=r(9139),i=r(2483);n.exports=function(n){for(var e,r=0,a="";!e;)a+=i(o,t.get(),1),e=n<Math.pow(16,r+1),r++;return a}},5274:function(n,e,r){"use strict";var t=r(8857),o=r(7098),i=r(6046),a=r(5347)||0;function s(){return o(a)}n.exports=s,n.exports.generate=s,n.exports.seed=function(e){return t.seed(e),n.exports},n.exports.worker=function(e){return a=e,n.exports},n.exports.characters=function(n){return void 0!==n&&t.characters(n),t.shuffled()},n.exports.isValid=i},6046:function(n,e,r){"use strict";var t=r(8857);n.exports=function(n){return!(!n||"string"!==typeof n||n.length<6)&&!new RegExp("[^"+t.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(n)}},9139:function(n){"use strict";var e,r="object"===typeof window&&(window.crypto||window.msCrypto);e=r&&r.getRandomValues?function(n){return r.getRandomValues(new Uint8Array(n))}:function(n){for(var e=[],r=0;r<n;r++)e.push(Math.floor(256*Math.random()));return e},n.exports=e},5408:function(n){"use strict";var e=1;n.exports={nextValue:function(){return(e=(9301*e+49297)%233280)/233280},seed:function(n){e=n}}},5347:function(n){"use strict";n.exports=0},2483:function(n){n.exports=function(n,e,r){for(var t=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*t*r/e.length),i="";;)for(var a=n(o),s=o;s--;)if((i+=e[a[s]&t]||"").length===+r)return i}}}]);
//# sourceMappingURL=452.418cec7e.chunk.js.map