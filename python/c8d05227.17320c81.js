(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{133:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return l}));var o=t(3),a=t(7),n=(t(0),t(151)),c={id:"class-chromiumbrowser",title:"ChromiumBrowser"},s={unversionedId:"api/class-chromiumbrowser",id:"api/class-chromiumbrowser",isDocsHomePage:!1,title:"ChromiumBrowser",description:"* extends: [Browser]",source:"@site/docs/api/class-chromiumbrowser.md",slug:"/api/class-chromiumbrowser",permalink:"/python/docs/api/class-chromiumbrowser",version:"current",sidebar:"api",previous:{title:"CDPSession",permalink:"/python/docs/api/class-cdpsession"},next:{title:"ChromiumBrowserContext",permalink:"/python/docs/api/class-chromiumbrowsercontext"}},i=[{value:"chromium_browser.new_browser_cdp_session()",id:"chromium_browsernew_browser_cdp_session",children:[]},{value:"chromium_browser.start_tracing(**options)",id:"chromium_browserstart_tracingoptions",children:[]},{value:"chromium_browser.stop_tracing()",id:"chromium_browserstop_tracing",children:[]}],b={toc:i};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"extends: ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/api/class-browser",title:"Browser"}),"Browser"))),Object(n.b)("p",null,"Chromium-specific features including Tracing, service worker support, etc. You can use ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/python/docs/api/class-chromiumbrowser#chromiumbrowserstarttracingoptions"}),"chromium_browser.start_tracing(**options)")," and ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/python/docs/api/class-chromiumbrowser#chromiumbrowserstoptracing"}),"chromium_browser.stop_tracing()")," to create a trace file which can be opened in Chrome DevTools or ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://chromedevtools.github.io/timeline-viewer/"}),"timeline viewer"),"."),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"await browser.startTracing(page, {path: 'trace.json'});\nawait page.goto('https://www.google.com');\nawait browser.stopTracing();\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/api/class-chromiumbrowser#chromiumbrowsernewbrowsercdpsession"}),"chromium_browser.new_browser_cdp_session()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/api/class-chromiumbrowser#chromiumbrowserstarttracingoptions"}),"chromium_browser.start_tracing(**options)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/api/class-chromiumbrowser#chromiumbrowserstoptracing"}),"chromium_browser.stop_tracing()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browserondisconnected"}),'browser.on("disconnected")')),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browserclose"}),"browser.close()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsercontexts"}),"browser.contexts()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browserisconnected"}),"browser.is_connected()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernewcontextoptions"}),"browser.new_context(**options)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernewpageoptions"}),"browser.new_page(**options)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browserversion"}),"browser.version()"))),Object(n.b)("h2",{id:"chromium_browsernew_browser_cdp_session"},"chromium_browser.new_browser_cdp_session()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/api/class-cdpsession",title:"CDPSession"}),"CDPSession"),">>")),Object(n.b)("p",null,"Returns the newly created browser session."),Object(n.b)("h2",{id:"chromium_browserstart_tracingoptions"},"chromium_browser.start_tracing(**options)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"page")," <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page"),"> Optional, if specified, tracing includes screenshots of the given page."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"categories")," <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">> specify custom categories to use instead of default."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"path")," <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> A path to write the trace file to."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"screenshots")," <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> captures screenshots in the trace."),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(n.b)("p",null,"Only one trace can be active at a time per browser."),Object(n.b)("h2",{id:"chromium_browserstop_tracing"},"chromium_browser.stop_tracing()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),">>")),Object(n.b)("p",null,"Returns the buffer with trace data."))}l.isMDXComponent=!0},151:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return h}));var o=t(0),a=t.n(o);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),l=function(e){var r=a.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return a.a.createElement(b.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=a.a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=l(t),u=o,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||n;return t?a.a.createElement(h,s(s({ref:r},b),{},{components:t})):a.a.createElement(h,s({ref:r},b))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,c=new Array(n);c[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var b=2;b<n;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);