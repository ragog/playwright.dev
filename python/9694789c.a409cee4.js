(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(151)),c={id:"verification",title:"Verification"},s={unversionedId:"verification",id:"verification",isDocsHomePage:!1,title:"Verification",description:"- Videos",source:"@site/docs/verification.md",slug:"/verification",permalink:"/python/docs/verification",version:"current",sidebar:"docs",previous:{title:"Assertions",permalink:"/python/docs/assertions"},next:{title:"Navigations",permalink:"/python/docs/navigations"}},l=[{value:"Videos",id:"videos",children:[]},{value:"Screenshots",id:"screenshots",children:[]},{value:"Console logs",id:"console-logs",children:[]},{value:"Page errors",id:"page-errors",children:[]},{value:"Page events",id:"page-events",children:[]}],i={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#videos"}),"Videos")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#screenshots"}),"Screenshots")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#console-logs"}),"Console logs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#page-errors"}),"Page errors")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#page-events"}),"Page events"))),Object(o.b)("h2",{id:"videos"},"Videos"),Object(o.b)("p",null,"Playwright can record videos for all pages in a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/core-concepts#browser-contexts"}),"browser context"),". Videos are saved upon context closure, so make sure to await ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/api/class-browsercontext#browsercontextclose"}),"browser_context.close()"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// With browser.newContext()\nconst context = await browser.newContext({ recordVideo: { dir: 'videos/' } });\n// Make sure to await close, so that videos are saved.\nawait context.close();\n\n// With browser.newPage()\nconst page = await browser.newPage({ recordVideo: { dir: 'videos/' } });\n// Make sure to await close, so that videos are saved.\nawait page.close();\n\n// [Optional] Specify video size; defaults to viewport size\nconst context = await browser.newContext({\n  recordVideo: {\n    dir: 'videos/',\n    size: { width: 800, height: 600 },\n  }\n});\n")),Object(o.b)("h4",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernewcontextoptions"}),"browser.new_context(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernewpageoptions"}),"browser.new_page(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browsercontextclose"}),"browser_context.close()"))),Object(o.b)("h2",{id:"screenshots"},"Screenshots"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Save to file\nawait page.screenshot({ path: 'screenshot.png' });\n\n// Capture full page\nawait page.screenshot({ path: 'screenshot.png', fullPage: true });\n\n// Capture into buffer\nconst buffer = await page.screenshot();\nconsole.log(buffer.toString('base64'));\n\n// Capture given element\nconst elementHandle = await page.$('.header');\nawait elementHandle.screenshot({ path: 'screenshot.png' });\n")),Object(o.b)("h4",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page#pagescreenshotoptions"}),"page.screenshot(**options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-elementhandle#elementhandlescreenshotoptions"}),"element_handle.screenshot(**options)"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"console-logs"},"Console logs"),Object(o.b)("p",null,"Console messages logged in the page can be brought into the Node.js context."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Listen for all console logs\npage.on('console', msg => console.log(msg.text()))\n\n// Listen for all console events and handle errors\npage.on('console', msg => {\n  if (msg.type() === 'error')\n    console.log(`Error text: \"${msg.text()}\"`);\n});\n\n// Get the next console log\nconst [msg] = await Promise.all([\n  page.waitForEvent('console'),\n  // Issue console.log inside the page\n  page.evaluate(() => {\n    console.log('hello', 42, { foo: 'bar' });\n  }),\n]);\n\n// Deconstruct console log arguments\nawait msg.args[0].jsonValue() // hello\nawait msg.args[1].jsonValue() // 42\n")),Object(o.b)("h4",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-consolemessage",title:"ConsoleMessage"}),"ConsoleMessage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonconsole"}),'page.on("console")'))),Object(o.b)("br",null),Object(o.b)("h2",{id:"page-errors"},"Page errors"),Object(o.b)("p",null,"Listen for uncaught exceptions in the page with the ",Object(o.b)("inlineCode",{parentName:"p"},"pagerror")," event."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Log all uncaught errors to the terminal\npage.on('pageerror', exception => {\n  console.log(`Uncaught exception: \"${exception}\"`);\n});\n\n// Navigate to a page with an exception.\nawait page.goto('data:text/html,<script>throw new Error(\"Test\")<\/script>');\n")),Object(o.b)("h4",{id:"api-reference-3"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonpageerror"}),'page.on("pageerror")'))),Object(o.b)("br",null),Object(o.b)("h2",{id:"page-events"},"Page events"),Object(o.b)("h4",{id:"requestfailed"},Object(o.b)("inlineCode",{parentName:"h4"},'"requestfailed"')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")),Object(o.b)("h4",{id:"dialog---handle-alert-confirm-prompt"},Object(o.b)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"page.on('dialog', dialog => {\n  dialog.accept();\n});\n")),Object(o.b)("h4",{id:"popup---handle-popup-windows"},Object(o.b)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('#open')\n]);\n")),Object(o.b)("h4",{id:"api-reference-4"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonrequestfailed"}),'page.on("requestfailed")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageondialog"}),'page.on("dialog")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonpopup"}),'page.on("popup")'))))}p.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=p(n),g=a,d=b["".concat(c,".").concat(g)]||b[g]||u[g]||o;return n?r.a.createElement(d,s(s({ref:t},i),{},{components:n})):r.a.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);