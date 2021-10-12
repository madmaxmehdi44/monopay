"use strict";(self.webpackChunkpolypay_docs=self.webpackChunkpolypay_docs||[]).push([[272],{3150:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return y},metadata:function(){return f},toc:function(){return g}});var n=a(7462),i=a(3366),r=a(7294),o=a(3905),l=a(9443);var s=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=a(6010),m="tabItem_1uMI",d="tabItemActive_2DSg";var c=function(e){var t,a=e.lazy,n=e.block,i=e.defaultValue,o=e.values,l=e.groupId,c=e.className,u=r.Children.toArray(e.children),h=null!=o?o:u.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=i?i:null==(t=u.find((function(e){return e.props.default})))?void 0:t.props.value,y=s(),k=y.tabGroupChoices,f=y.setTabGroupChoices,g=(0,r.useState)(v),N=g[0],b=g[1],w=[];if(null!=l){var x=k[l];null!=x&&x!==N&&h.some((function(e){return e.value===x}))&&b(x)}var C=function(e){var t=e.currentTarget,a=w.indexOf(t),n=h[a].value;b(n),null!=l&&(f(l,n),setTimeout((function(){var e,a,n,i,r,o,l,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,s=o.innerWidth,a>=0&&r<=s&&i<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d),setTimeout((function(){return t.classList.remove(d)}),2e3))}),150))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case"ArrowLeft":var i=w.indexOf(e.target)-1;a=w[i]||w[w.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":n},c)},h.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,p.Z)("tabs__item",m,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:P,onFocus:C,onClick:C},null!=a?a:t)}))),a?(0,r.cloneElement)(u.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},u.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))};var u=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},h=a(6213),v=["components"],y={sidebar_position:6,title:"Usage"},k=void 0,f={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Usage",description:"If you don't know how payment gateways work, please take a look at Payment Procedure first.",source:"@site/docs/usage.mdx",sourceDirName:".",slug:"/usage",permalink:"/polypay.js/docs/usage",editUrl:"https://github.com/alitnk/polypay.js/edit/main/documentation/docs/usage.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Usage"},sidebar:"tutorialSidebar",previous:{title:"Supported Drivers",permalink:"/polypay.js/docs/supported-drivers"},next:{title:"Exceptions",permalink:"/polypay.js/docs/exceptions"}},g=[{value:"Request For Payment",id:"request-for-payment",children:[]},{value:"Send User to Payment Page",id:"send-user-to-payment-page",children:[]},{value:"Verify The Payment",id:"verify-the-payment",children:[]},{value:"Example",id:"example",children:[]}],N={toc:g};function b(e){var t=e.components,a=(0,i.Z)(e,v);return(0,o.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you don't know how payment gateways work, please take a look at ",(0,o.kt)("a",{parentName:"p",href:"/docs/payment-procedure"},"Payment Procedure")," first."),(0,o.kt)("h2",{id:"request-for-payment"},"Request For Payment"),(0,o.kt)("p",null,"Get the driver using ",(0,o.kt)("inlineCode",{parentName:"p"},"getPaymentDriver")," and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"requestPayment")," method. This method accepts an object with ",(0,o.kt)("inlineCode",{parentName:"p"},"callbackUrl"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"amount"),", and driver-specific fields. "),(0,o.kt)(c,{mdxType:"Tabs"},(0,o.kt)(u,{value:"typescript",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,o.kt)(h.Z,{className:"language-ts",title:"index.ts",mdxType:"CodeBlock"},'import { getPaymentDriver, Zarinpal } from "polypay";\n\nconst driver = getPaymentDriver<Zarinpal>("zarinpal", {\n  merchantId: "zarinpal-merchant",\n});\n\nconst paymentInfo = await driver.requestPayment({\n  amount: 50000,\n  callbackUrl: "https://my-site.com/callback",\n  description: "Description about the transaction",\n});\n')),(0,o.kt)(u,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)(h.Z,{className:"language-js",title:"index.js",mdxType:"CodeBlock"},'import { getPaymentDriver } from "polypay";\n\nconst driver = getPaymentDriver("zarinpal", {\n  merchantId: "zarinpal-merchant",\n});\n\nconst paymentInfo = await driver.requestPayment({\n  amount: 50000,\n  callbackUrl: "https://my-site.com/callback",\n  description: "Description about the transaction",\n});\n'))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"the ",(0,o.kt)("inlineCode",{parentName:"p"},"requestPayment")," function might throw ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestPaymentException")))),(0,o.kt)("p",null,"The returned value of ",(0,o.kt)("inlineCode",{parentName:"p"},"requestPayment"),", is a class containing the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Details about the payment"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"referenceId"),": The ID that references the ongoing payment, you probably want to store it in your database."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Details about the payment Page"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url"),": The url that you should send the form to"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"method"),": Can be ",(0,o.kt)("inlineCode",{parentName:"li"},"GET")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"POST")," depending on the driver"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params"),": An object that you should send with your form")))),(0,o.kt)("h2",{id:"send-user-to-payment-page"},"Send User to Payment Page"),(0,o.kt)("p",null,"In this step you should send the user to the payment page by submiting a form on the client-side using the data you got back from the ",(0,o.kt)("inlineCode",{parentName:"p"},"requestPayment")," method."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you serve your pages from backend (not using a SPA), you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"getScript")," method on ",(0,o.kt)("inlineCode",{parentName:"p"},"paymentInfo")," and get a generate you a JS code that will automatically create and submit the form. Like so:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"res.send(\n  `<html>\n    <body>\n        <h1> We're redirecting you to the payment gateway... </h1>\n        <script>${paymentInfo.getScript()}<\/script>\n    </body>\n  </html>`\n);\n")))),(0,o.kt)("h2",{id:"verify-the-payment"},"Verify The Payment"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"verifyPayment")," method accepts 2 arguments:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"an object, containing ",(0,o.kt)("inlineCode",{parentName:"li"},"amount")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"referenceId")," of transaction."),(0,o.kt)("li",{parentName:"ol"},"the express/fastify/koa/etc. Request object. (It must have a ",(0,o.kt)("inlineCode",{parentName:"li"},"query")," field on it.)")),(0,o.kt)(c,{mdxType:"Tabs"},(0,o.kt)(u,{value:"typescript",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,o.kt)(h.Z,{className:"language-ts",title:"index.ts",mdxType:"CodeBlock"},'import { getPaymentDriver, Zarinpal } from "polypay";\n\nconst driver = getPaymentDriver<Zarinpal>("zarinpal", {\n  merchantId: "zarinpal-merchant",\n});\n\nconst receipt = await driver.verifyPayment(\n  {\n    amount: 5000,\n    referenceId: 1234,\n  },\n  request\n);\n')),(0,o.kt)(u,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)(h.Z,{className:"language-js",title:"index.js",mdxType:"CodeBlock"},'import { getPaymentDriver } from "polypay";\n\nconst driver = getPaymentDriver("zarinpal", {\n  merchantId: "zarinpal-merchant",\n});\n\nconst receipt = await driver.verifyPayment(\n  {\n    amount: 5000,\n    referenceId: 1234,\n  },\n  request\n);\n'))),(0,o.kt)("p",null,"This method returns you a ",(0,o.kt)("inlineCode",{parentName:"p"},"receipt")," that will contain a ",(0,o.kt)("inlineCode",{parentName:"p"},"referenceId")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"panCard")," and some other info about the payment.\nAt this point the payment process is finished and you can provide your service/product to the user."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"the ",(0,o.kt)("inlineCode",{parentName:"p"},"verify")," function might throw ",(0,o.kt)("inlineCode",{parentName:"p"},"VerificationException")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"A example with inclusive API and express.js can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alitnk/polypay.js/blob/main/examples/inclusive-example/index.js"}," API example")))}b.isMDXComponent=!0}}]);