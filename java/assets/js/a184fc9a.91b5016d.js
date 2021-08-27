"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8919],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),n=a(9443);var o=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=o(),h=f.tabGroupChoices,g=f.setTabGroupChoices,w=(0,r.useState)(n),b=w[0],k=w[1],y=r.Children.toArray(e.children),v=[];if(null!=m){var N=h[m];null!=N&&N!==b&&p.some((function(e){return e.value===N}))&&k(N)}var P=function(e){var t=e.currentTarget,a=v.indexOf(t),r=p[a].value;k(r),null!=m&&(g(m,r),setTimeout((function(){var e,a,r,n,o,i,l,u;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,a>=0&&o<=u&&n<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},j=function(e){var t,a;switch(e.keyCode){case c:var r=v.indexOf(e.target)+1;a=v[r]||v[0];break;case u:var n=v.indexOf(e.target)-1;a=v[n]||v[v.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:j,onFocus:P,onClick:P},a)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,a){var r=(0,a(7294).createContext)(void 0);t.Z=r},1505:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i=(a(5064),a(8215),{id:"why-playwright",title:"Why Playwright?"}),l=void 0,s={unversionedId:"why-playwright",id:"version-1.13/why-playwright",isDocsHomePage:!1,title:"Why Playwright?",description:"Playwright enables fast, reliable and capable automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests.",source:"@site/versioned_docs/version-1.13/why-playwright.mdx",sourceDirName:".",slug:"/why-playwright",permalink:"/java/docs/1.13/why-playwright",version:"1.13",frontMatter:{id:"why-playwright",title:"Why Playwright?"},sidebar:"version-1.13/docs",next:{title:"Getting Started",permalink:"/java/docs/1.13/intro"}},u=[{value:"Support for all browsers",id:"support-for-all-browsers",children:[]},{value:"Fast and reliable execution",id:"fast-and-reliable-execution",children:[]},{value:"Powerful automation capabilities",id:"powerful-automation-capabilities",children:[]},{value:"Integrates with your workflow",id:"integrates-with-your-workflow",children:[]}],c={toc:u};function p(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright enables fast, reliable and capable automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#support-for-all-browsers"},"Support for all browsers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#fast-and-reliable-execution"},"Fast and reliable execution")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#powerful-automation-capabilities"},"Powerful automation capabilities")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#integrates-with-your-workflow"},"Integrates with your workflow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#limitations"},"Limitations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/release-notes"},"Release notes"))),(0,o.kt)("h2",{id:"support-for-all-browsers"},"Support for all browsers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Test on Chromium, Firefox and WebKit"),". Playwright has full API coverage for all modern browsers, including Google Chrome and Microsoft Edge (with ",(0,o.kt)("a",{parentName:"li",href:"https://www.chromium.org/"},"Chromium"),"), Apple Safari (with ",(0,o.kt)("a",{parentName:"li",href:"https://webkit.org/"},"WebKit"),") and Mozilla Firefox."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cross-platform WebKit testing"),". With Playwright, test how your app behaves in Apple Safari with WebKit builds for Windows, Linux and macOS. Test locally and on CI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Test for mobile"),". Use ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/emulation"},"device emulation")," to test your responsive web apps in mobile web browsers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Headless and headed"),". Playwright supports headless (without browser UI) and headed (with browser UI) modes for all browsers and all platforms. Headed is great for debugging, and headless is faster and suited for CI/cloud executions.")),(0,o.kt)("h2",{id:"fast-and-reliable-execution"},"Fast and reliable execution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Auto-wait APIs"),". Playwright interactions ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/actionability"},"auto-wait for elements")," to be ready. This improves reliability and simplifies test authoring."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Timeout-free automation"),". Playwright receives browser signals, like network requests, page navigations and page load events to eliminate the need for sleep timeouts that cause flakiness."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Lean parallelization with browser contexts"),". Reuse a single browser instance for multiple parallelized, isolated execution environments with ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/core-concepts"},"browser contexts"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resilient element selectors"),". Playwright can rely on user-facing strings, like text content and accessibility labels to ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/selectors"},"select elements"),". These strings are more resilient than selectors tightly-coupled to the DOM structure.")),(0,o.kt)("h2",{id:"powerful-automation-capabilities"},"Powerful automation capabilities"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multiple domains, pages and frames"),". Playwright is an out-of-process automation driver that is not limited by the scope of in-page JavaScript execution and can automate scenarios with ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/multi-pages"},"multiple pages"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Powerful network control"),". Playwright introduces context-wide ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/network"},"network interception")," to stub and mock network requests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modern web features"),". Playwright supports web components through ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/selectors"},"shadow-piercing selectors"),", ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/emulation"},"geolocation, permissions"),", web workers and other modern web APIs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Capabilities to cover all scenarios"),". Support for ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/downloads"},"file downloads")," and ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/input"},"uploads"),", out-of-process iframes, native ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/input"},"input events"),", and even ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/emulation"},"dark mode"),".")),(0,o.kt)("h2",{id:"integrates-with-your-workflow"},"Integrates with your workflow"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"One-line installation"),". Installing Playwright auto-downloads browser dependencies for your team to be onboarded quickly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TypeScript support"),". Playwright ships with built-in types for auto-completion and other benefits."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Debugging tools"),". Playwright works with the ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/debug"},"editor debugger and browser developer tools")," to pause execution and inspect the web page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Language bindings"),". Playwright is available for ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright"},"Node.js")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"Python"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-dotnet"},".NET")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"Java"),". Learn more about ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/languages"},"supported languages"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Deploy tests to CI"),". First-party ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/docker"},"Docker image")," and ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/ci#github-actions"},"GitHub Actions")," support to deploy tests to ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.13/ci"},"your preferred CI/CD provider"),".")))}p.isMDXComponent=!0},6010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);