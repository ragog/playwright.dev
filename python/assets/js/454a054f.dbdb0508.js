"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4506],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(9443);var i=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,c=39;var d=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,d=e.values,u=e.groupId,m=e.className,g=i(),h=g.tabGroupChoices,f=g.setTabGroupChoices,y=(0,n.useState)(r),v=y[0],k=y[1],b=n.Children.toArray(e.children),w=[];if(null!=u){var N=h[u];null!=N&&N!==v&&d.some((function(e){return e.value===N}))&&k(N)}var O=function(e){var t=e.currentTarget,a=w.indexOf(t),n=d[a].value;k(n),null!=u&&(f(u,n),setTimeout((function(){var e,a,n,r,i,l,o,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,p=l.innerWidth,a>=0&&i<=p&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case c:var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case p:var r=w.indexOf(e.target)-1;a=w[r]||w[w.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},d.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:O,onClick:O},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},6551:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=a(5064),o=a(8215),s={id:"class-dialog",title:"Dialog"},p=void 0,c={unversionedId:"api/class-dialog",id:"version-1.12/api/class-dialog",isDocsHomePage:!1,title:"Dialog",description:'Dialog] objects are dispatched by page via the [page.on("dialog") event.',source:"@site/versioned_docs/version-1.12/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/python/docs/1.12/api/class-dialog",version:"1.12",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"version-1.12/api",previous:{title:"ConsoleMessage",permalink:"/python/docs/1.12/api/class-consolemessage"},next:{title:"Download",permalink:"/python/docs/1.12/api/class-download"}},d=[{value:"dialog.accept(**kwargs)",id:"dialog-accept",children:[]},{value:"dialog.default_value",id:"dialog-default-value",children:[]},{value:"dialog.dismiss()",id:"dialog-dismiss",children:[]},{value:"dialog.message",id:"dialog-message",children:[]},{value:"dialog.type",id:"dialog-type",children:[]}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.12/api/class-dialog",title:"Dialog"},"Dialog")," objects are dispatched by page via the ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.12/api/class-page#page-event-dialog"},'page.on("dialog")')," event."),(0,i.kt)("p",null,"An example of using ",(0,i.kt)("inlineCode",{parentName:"p"},"Dialog")," class:"),(0,i.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.sync_api import sync_playwright\n\ndef handle_dialog(dialog):\n    print(dialog.message)\n    dialog.dismiss()\n\ndef run(playwright):\n    chromium = playwright.chromium\n    browser = chromium.launch()\n    page = browser.new_page()\n    page.on("dialog", handle_dialog)\n    page.evaluate("alert(\'1\')")\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),(0,i.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def handle_dialog(dialog):\n    print(dialog.message)\n    await dialog.dismiss()\n\nasync def run(playwright):\n    chromium = playwright.chromium\n    browser = await chromium.launch()\n    page = await browser.new_page()\n    page.on("dialog", handle_dialog)\n    page.evaluate("alert(\'1\')")\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n')))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.12/api/class-page#page-event-dialog"},'page.on("dialog")')," listener. When listener is present, it ",(0,i.kt)("strong",{parentName:"p"},"must")," either ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.12/api/class-dialog#dialog-accept"},"dialog.accept(**kwargs)")," or ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.12/api/class-dialog#dialog-dismiss"},"dialog.dismiss()")," the dialog - otherwise the page will ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"},"freeze")," waiting for the dialog, and actions like click will never finish."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.12/api/class-dialog#dialog-accept"},"dialog.accept(**kwargs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.12/api/class-dialog#dialog-default-value"},"dialog.default_value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.12/api/class-dialog#dialog-dismiss"},"dialog.dismiss()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.12/api/class-dialog#dialog-message"},"dialog.message")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.12/api/class-dialog#dialog-type"},"dialog.type"))),(0,i.kt)("h2",{id:"dialog-accept"},"dialog.accept(**kwargs)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prompt_text")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," A text to enter in prompt. Does not cause any effects if the dialog's ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional."),(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">")),(0,i.kt)("p",null,"Returns when the dialog has been accepted."),(0,i.kt)("h2",{id:"dialog-default-value"},"dialog.default_value"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,i.kt)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),(0,i.kt)("h2",{id:"dialog-dismiss"},"dialog.dismiss()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">")),(0,i.kt)("p",null,"Returns when the dialog has been dismissed."),(0,i.kt)("h2",{id:"dialog-message"},"dialog.message"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,i.kt)("p",null,"A message displayed in the dialog."),(0,i.kt)("h2",{id:"dialog-type"},"dialog.type"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,i.kt)("p",null,"Returns dialog's type, can be one of ",(0,i.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeunload"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"confirm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"prompt"),"."))}m.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);