(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4321],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(o,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";a(7294)},1395:function(e,t,a){"use strict";a(7294),a(944)},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){"use strict";var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8436:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return o},default:function(){return d}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),s=(a(1395),a(8215),{id:"class-jshandle",title:"JSHandle"}),i={unversionedId:"api/class-jshandle",id:"api/class-jshandle",isDocsHomePage:!1,title:"JSHandle",description:"JSHandle represents an in-page JavaScript object. JSHandles can be created with the Page.EvaluateHandleAsync(expression, arg) method.",source:"@site/docs/api/class-jshandle.mdx",sourceDirName:"api",slug:"/api/class-jshandle",permalink:"/dotnet/docs/api/class-jshandle",version:"current",frontMatter:{id:"class-jshandle",title:"JSHandle"},sidebar:"api",previous:{title:"Frame",permalink:"/dotnet/docs/api/class-frame"},next:{title:"Keyboard",permalink:"/dotnet/docs/api/class-keyboard"}},o=[{value:"JsHandle.AsElement()",id:"jshandleaselement",children:[]},{value:"JsHandle.DisposeAsync()",id:"jshandledisposeasync",children:[]},{value:"JsHandle.EvaluateAsync(expression, arg)",id:"jshandleevaluateasyncexpression-arg",children:[]},{value:"JsHandle.EvaluateHandleAsync(expression, arg)",id:"jshandleevaluatehandleasyncexpression-arg",children:[]},{value:"JsHandle.GetPropertiesAsync()",id:"jshandlegetpropertiesasync",children:[]},{value:"JsHandle.GetPropertyAsync(propertyName)",id:"jshandlegetpropertyasyncpropertyname",children:[]},{value:"JsHandle.JsonValueAsync()",id:"jshandlejsonvalueasync",children:[]}],p={toc:o};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"JSHandle represents an in-page JavaScript object. JSHandles can be created with the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#pageevaluatehandleasyncexpression-arg"},"Page.EvaluateHandleAsync(expression, arg)")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var windowHandle = await page.EvaluateHandleAsync("() => window");\n')),(0,l.kt)("p",null,"JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is exposed with ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-jshandle#jshandledisposeasync"},"JsHandle.DisposeAsync()"),". JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed."),(0,l.kt)("p",null,"JSHandle instances can be used as an argument in ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#pageevalonselectorasyncselector-expression-arg"},"Page.EvalOnSelectorAsync(selector, expression, arg)"),", ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#pageevaluateasyncexpression-arg"},"Page.EvaluateAsync(expression, arg)")," and ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#pageevaluatehandleasyncexpression-arg"},"Page.EvaluateHandleAsync(expression, arg)")," methods."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle#jshandleaselement"},"JsHandle.AsElement()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle#jshandledisposeasync"},"JsHandle.DisposeAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle#jshandleevaluateasyncexpression-arg"},"JsHandle.EvaluateAsync(expression, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle#jshandleevaluatehandleasyncexpression-arg"},"JsHandle.EvaluateHandleAsync(expression, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle#jshandlegetpropertiesasync"},"JsHandle.GetPropertiesAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle#jshandlegetpropertyasyncpropertyname"},"JsHandle.GetPropertyAsync(propertyName)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle#jshandlejsonvalueasync"},"JsHandle.JsonValueAsync()"))),(0,l.kt)("h2",{id:"jshandleaselement"},"JsHandle.AsElement()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">")),(0,l.kt)("p",null,"Returns either ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," or the object handle itself, if the object handle is an instance of ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),"."),(0,l.kt)("h2",{id:"jshandledisposeasync"},"JsHandle.DisposeAsync()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.dispose")," method stops referencing the element handle."),(0,l.kt)("h2",{id:"jshandleevaluateasyncexpression-arg"},"JsHandle.EvaluateAsync(expression, arg)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expression")," <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arg")," <",(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),"> Optional argument to pass to ",(0,l.kt)("inlineCode",{parentName:"li"},"expression"),"."),(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"object"),">")),(0,l.kt)("p",null,"Returns the return value of ",(0,l.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,l.kt)("p",null,"This method passes this handle as the first argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"expression")," returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,l.kt)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var tweetHandle = await page.QuerySelectorAsync(".tweet .retweets");\nAssert.Equals("10 retweets", await tweetHandle.EvaluateAsync("node => node.innerText"));\n')),(0,l.kt)("h2",{id:"jshandleevaluatehandleasyncexpression-arg"},"JsHandle.EvaluateHandleAsync(expression, arg)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expression")," <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arg")," <",(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),"> Optional argument to pass to ",(0,l.kt)("inlineCode",{parentName:"li"},"expression"),"."),(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle"),">")),(0,l.kt)("p",null,"Returns the return value of ",(0,l.kt)("inlineCode",{parentName:"p"},"expression")," as a ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("p",null,"This method passes this handle as the first argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,l.kt)("p",null,"The only difference between ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("p",null,"If the function passed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," would wait for the promise to resolve and return its value."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#pageevaluatehandleasyncexpression-arg"},"Page.EvaluateHandleAsync(expression, arg)")," for more details."),(0,l.kt)("h2",{id:"jshandlegetpropertiesasync"},"JsHandle.GetPropertiesAsync()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",title:"Map"},"Map"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle"),">>")),(0,l.kt)("p",null,"The method returns a map with ",(0,l.kt)("strong",{parentName:"p"},"own property names")," as keys and JSHandle instances for the property values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var handle = await page.EvaluateHandleAsync("() => ({window, document}");\nvar properties = await handle.GetPropertiesAsync();\nvar windowHandle = properties["window"];\nvar documentHandle = properties["document"];\nawait handle.DisposeAsync();\n')),(0,l.kt)("h2",{id:"jshandlegetpropertyasyncpropertyname"},"JsHandle.GetPropertyAsync(propertyName)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"propertyName")," <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> property to get"),(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle"),">")),(0,l.kt)("p",null,"Fetches a single property from the referenced object."),(0,l.kt)("h2",{id:"jshandlejsonvalueasync"},"JsHandle.JsonValueAsync()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"object"),">")),(0,l.kt)("p",null,"Returns a JSON representation of the object. If the object has a ",(0,l.kt)("inlineCode",{parentName:"p"},"toJSON")," function, it ",(0,l.kt)("strong",{parentName:"p"},"will not be called"),"."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references."))))}d.isMDXComponent=!0}}]);