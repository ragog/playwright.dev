"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8213],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(n),d=a,h=g["".concat(l,".").concat(d)]||g[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},5064:function(e,t,n){n(7294),n(9443)},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},1441:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=(n(5064),n(8215),{id:"class-tracing",title:"Tracing"}),c=void 0,l={unversionedId:"api/class-tracing",id:"version-1.12/api/class-tracing",isDocsHomePage:!1,title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened using the Playwright CLI after Playwright script runs.",source:"@site/versioned_docs/version-1.12/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/dotnet/docs/1.12/api/class-tracing",version:"1.12",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"version-1.12/api",previous:{title:"Touchscreen",permalink:"/dotnet/docs/1.12/api/class-touchscreen"},next:{title:"Video",permalink:"/dotnet/docs/1.12/api/class-video"}},s=[{value:"Tracing.StartAsync(options)",id:"tracing-start",children:[]},{value:"Tracing.StopAsync(options)",id:"tracing-stop",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened using the Playwright CLI after Playwright script runs."),(0,i.kt)("p",null,"Start with specifying the folder traces will be stored in:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'await using var browser = playwright.Chromium.LaunchAsync();\nawait using var context = await browser.NewContextAsync();\nawait context.Tracing.StartAsync(new TracingStartOptions\n{\n  Screenshots: true,\n  Snapshots: true\n});\nvar page = context.NewPageAsync();\nawait page.GotoAsync("https://playwright.dev");\nawait context.Tracing.StopAsync(new TracingStopOptions\n{\n  Path: "trace.zip"\n});\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-tracing#tracing-start"},"Tracing.StartAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-tracing#tracing-stop"},"Tracing.StopAsync(options)"))),(0,i.kt)("h2",{id:"tracing-start"},"Tracing.StartAsync(options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"TracingStartOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"?",">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"tracesDir")," folder specified in ",(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-browsertype#browser-type-launch"},"BrowserType.LaunchAsync(options)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Screenshots")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),"?",">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Snapshots")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),"?",">"," Whether to capture DOM snapshot on every action."))),(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">")),(0,i.kt)("p",null,"Start tracing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'await using var browser = playwright.Chromium.LaunchAsync();\nawait using var context = await browser.NewContextAsync();\nawait context.Tracing.StartAsync(new TracingStartOptions\n{\n  Screenshots: true,\n  Snapshots: true\n});\nvar page = context.NewPageAsync();\nawait page.GotoAsync("https://playwright.dev");\nawait context.Tracing.StopAsync(new TracingStopOptions\n{\n  Path: "trace.zip"\n});\n')),(0,i.kt)("h2",{id:"tracing-stop"},"Tracing.StopAsync(options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"TracingStopOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Path")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"?",">"," Export trace into the file with the given name."))),(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">")),(0,i.kt)("p",null,"Stop tracing."))}u.isMDXComponent=!0}}]);