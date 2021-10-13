"use strict";(self.webpackChunkpolypay_docs=self.webpackChunkpolypay_docs||[]).push([[558],{8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,r=e.block,c=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=a.Children.toArray(e.children),v=null!=u?u:d.map((function(e){return{value:e.props.value,label:e.props.label}})),y=null!=c?c:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,f=i(),h=f.tabGroupChoices,g=f.setTabGroupChoices,k=(0,a.useState)(y),b=k[0],N=k[1],w=[];if(null!=p){var x=h[p];null!=x&&x!==b&&v.some((function(e){return e.value===x}))&&N(x)}var C=function(e){var t=e.currentTarget,n=w.indexOf(t),a=v[n].value;N(a),null!=p&&(g(p,a),setTimeout((function(){var e,n,a,r,i,o,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},m)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},5875:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(5064),s=n(8215),l=n(6213),c=["components"],u={sidebar_position:3,title:"Verify Payment"},p=void 0,m={unversionedId:"usage/verify-payment",id:"usage/verify-payment",isDocsHomePage:!1,title:"Verify Payment",description:"The verifyPayment method accepts 2 arguments:",source:"@site/docs/usage/verify-payment.mdx",sourceDirName:"usage",slug:"/usage/verify-payment",permalink:"/polypay.js/docs/usage/verify-payment",editUrl:"https://github.com/alitnk/polypay.js/edit/main/documentation/docs/usage/verify-payment.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Verify Payment"},sidebar:"tutorialSidebar",previous:{title:"Send User to Payment Page",permalink:"/polypay.js/docs/usage/send-user"},next:{title:"Catching Exceptions",permalink:"/polypay.js/docs/usage/catching-exceptions"}},d=[],v={toc:d};function y(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"verifyPayment")," method accepts 2 arguments:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"an object, containing ",(0,i.kt)("inlineCode",{parentName:"li"},"amount")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"referenceId")," of transaction."),(0,i.kt)("li",{parentName:"ol"},"request parameters in the callback route")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"typescript",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-ts",title:"index.ts",mdxType:"CodeBlock"},'import { getPaymentDriver, Zarinpal } from "polypay";\n\nconst driver = getPaymentDriver<Zarinpal>("zarinpal", {\n  merchantId: "zarinpal-merchant",\n});\n\nconst receipt = await driver.verifyPayment(\n  {\n    amount: 5000,\n    referenceId: 1234,\n  },\n  request.params()\n);\n')),(0,i.kt)(s.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-js",title:"index.js",mdxType:"CodeBlock"},'import { getPaymentDriver } from "polypay";\n\nconst driver = getPaymentDriver("zarinpal", {\n  merchantId: "zarinpal-merchant",\n});\n\nconst receipt = await driver.verifyPayment(\n  {\n    amount: 5000,\n    referenceId: 1234,\n  },\n  request.params()\n);\n'))),(0,i.kt)("p",null,"This method returns you a ",(0,i.kt)("inlineCode",{parentName:"p"},"receipt")," that will contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"transactionId")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"panCard")," and some other info about the payment.\nAt this point the payment process is finished and you can provide your service/product to the user."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"the ",(0,i.kt)("inlineCode",{parentName:"p"},"verifyPayment")," function might throw ",(0,i.kt)("inlineCode",{parentName:"p"},"VerificationException")))))}y.isMDXComponent=!0}}]);