(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(151)),i={id:"mobile",title:"Experimental support for Chrome for Android"},c={unversionedId:"mobile",id:"mobile",isDocsHomePage:!1,title:"Experimental support for Chrome for Android",description:"- Requirements",source:"@site/docs/mobile.md",slug:"/mobile",permalink:"/python/docs/mobile",version:"current"},l=[{value:"Requirements",id:"requirements",children:[]},{value:"How to run",id:"how-to-run",children:[]},{value:"Known limitations",id:"known-limitations",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#requirements"}),"Requirements")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#how-to-run"}),"How to run")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#known-limitations"}),"Known limitations"))),Object(o.b)("p",null,"You can try Playwright against Chrome for Android today. This support is experimental. Support for devices is tracked in the issue ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/issues/1122"}),"#1122"),"."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/playwright"}),"Playwright 1.6")," or newer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.android.com/studio/command-line/adb"}),"ADB daemon")," running and authenticated with your device.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://play.google.com/store/apps/details?id=com.android.chrome"}),Object(o.b)("inlineCode",{parentName:"a"},"Chrome 87"))," or newer installed on the device")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'"Enable command line on non-rooted devices" enabled in ',Object(o.b)("inlineCode",{parentName:"p"},"chrome://flags"),"."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Playwright will be looking for ADB daemon on the default port ",Object(o.b)("inlineCode",{parentName:"p"},"5037"),". It will use the first device available. Typically running ",Object(o.b)("inlineCode",{parentName:"p"},"adb devices")," is all you need to do.")))),Object(o.b)("h2",{id:"how-to-run"},"How to run"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { _clank } = require('playwright');\n\n(async () => {\n  const context = await _clank.launchPersistentContext('', {\n    viewport: null\n  });\n  const [page] = context.pages();\n  await page.goto('https://webkit.org/');\n  console.log(await page.evaluate(() => window.location.href));\n  await page.screenshot({ path: 'example.png' });\n  await context.close();\n})();\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://chromium.googlesource.com/chromium/src/+/master/docs/memory/android_dev_tips.md"}),"Clank")," is a code name for Chrome for Android.")),Object(o.b)("h2",{id:"known-limitations"},"Known limitations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Raw USB operation is not yet supported, so you need ADB."),Object(o.b)("li",{parentName:"ul"},"Only ",Object(o.b)("inlineCode",{parentName:"li"},"launchPersistentContext")," works, launching ephemeral contexts is not supported."),Object(o.b)("li",{parentName:"ul"},"Passing ",Object(o.b)("inlineCode",{parentName:"li"},"viewport: null")," is necessary to make sure resolution is not emulated."),Object(o.b)("li",{parentName:"ul"},'Device needs to be awake to produce screenshots. Enabling "Stay awake" developer mode will help.'),Object(o.b)("li",{parentName:"ul"},"We didn't run all the tests against the device, so not everything works.")))}b.isMDXComponent=!0}}]);