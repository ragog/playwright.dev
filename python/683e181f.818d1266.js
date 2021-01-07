(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(3),l=a(7),r=(a(0),a(151)),o={id:"class-jshandle",title:"JSHandle"},i={unversionedId:"api/class-jshandle",id:"api/class-jshandle",isDocsHomePage:!1,title:"JSHandle",description:"JSHandle represents an in-page JavaScript object. JSHandles can be created with the page.evaluatehandle(pagefunction, **options) method.",source:"@site/docs/api/class-jshandle.md",slug:"/api/class-jshandle",permalink:"/python/docs/api/class-jshandle",version:"current",sidebar:"api",previous:{title:"Frame",permalink:"/python/docs/api/class-frame"},next:{title:"Keyboard",permalink:"/python/docs/api/class-keyboard"}},p=[{value:"js_handle.as_element()",id:"js_handleas_element",children:[]},{value:"js_handle.dispose()",id:"js_handledispose",children:[]},{value:"js_handle.evaluate(page_function, **options)",id:"js_handleevaluatepage_function-options",children:[]},{value:"js_handle.evaluate_handle(page_function, **options)",id:"js_handleevaluate_handlepage_function-options",children:[]},{value:"js_handle.get_properties()",id:"js_handleget_properties",children:[]},{value:"js_handle.get_property(property_name)",id:"js_handleget_propertyproperty_name",children:[]},{value:"js_handle.json_value()",id:"js_handlejson_value",children:[]}],c={toc:p};function s(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"JSHandle represents an in-page JavaScript object. JSHandles can be created with the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageevaluatehandlepagefunction-options"}),"page.evaluate_handle(page_function, **options)")," method."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const windowHandle = await page.evaluateHandle(() => window);\n// ...\n")),Object(r.b)("p",null,"JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is exposed with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-jshandle#jshandledispose"}),"js_handle.dispose()"),". JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed."),Object(r.b)("p",null,"JSHandle instances can be used as an argument in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageevalselector-pagefunction-options"}),"page.$eval(selector, page_function, **options)"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageevaluatepagefunction-options"}),"page.evaluate(page_function, **options)")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageevaluatehandlepagefunction-options"}),"page.evaluate_handle(page_function, **options)")," methods."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-jshandle#jshandleaselement"}),"js_handle.as_element()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-jshandle#jshandledispose"}),"js_handle.dispose()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-jshandle#jshandleevaluatepagefunction-options"}),"js_handle.evaluate(page_function, **options)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-jshandle#jshandleevaluatehandlepagefunction-options"}),"js_handle.evaluate_handle(page_function, **options)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-jshandle#jshandlegetproperties"}),"js_handle.get_properties()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-jshandle#jshandlegetpropertypropertyname"}),"js_handle.get_property(property_name)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-jshandle#jshandlejsonvalue"}),"js_handle.json_value()"))),Object(r.b)("h2",{id:"js_handleas_element"},"js_handle.as_element()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">")),Object(r.b)("p",null,"Returns either ",Object(r.b)("inlineCode",{parentName:"p"},"null")," or the object handle itself, if the object handle is an instance of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),"."),Object(r.b)("h2",{id:"js_handledispose"},"js_handle.dispose()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"jsHandle.dispose")," method stops referencing the element handle."),Object(r.b)("h2",{id:"js_handleevaluatepage_function-options"},"js_handle.evaluate(page_function, **options)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"page_function")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"> Function to be evaluated in browser context"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"arg")," <","[EvaluationArgument]","> Optional argument to pass to ",Object(r.b)("inlineCode",{parentName:"li"},"pageFunction")),Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">>")),Object(r.b)("p",null,"Returns the return value of ",Object(r.b)("inlineCode",{parentName:"p"},"pageFunction")),Object(r.b)("p",null,"This method passes this handle as the first argument to ",Object(r.b)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"pageFunction")," returns a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(r.b)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),Object(r.b)("p",null,"Examples:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const tweetHandle = await page.$('.tweet .retweets');\nexpect(await tweetHandle.evaluate((node, suffix) => node.innerText, ' retweets')).toBe('10 retweets');\n")),Object(r.b)("h2",{id:"js_handleevaluate_handlepage_function-options"},"js_handle.evaluate_handle(page_function, **options)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"page_function")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Function to be evaluated"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"arg")," <","[EvaluationArgument]","> Optional argument to pass to ",Object(r.b)("inlineCode",{parentName:"li"},"pageFunction")),Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>")),Object(r.b)("p",null,"Returns the return value of ",Object(r.b)("inlineCode",{parentName:"p"},"pageFunction")," as in-page object (JSHandle)."),Object(r.b)("p",null,"This method passes this handle as the first argument to ",Object(r.b)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(r.b)("p",null,"The only difference between ",Object(r.b)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",Object(r.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",Object(r.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns in-page object (JSHandle)."),Object(r.b)("p",null,"If the function passed to the ",Object(r.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(r.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," would wait for the promise to resolve and return its value."),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageevaluatehandlepagefunction-options"}),"page.evaluate_handle(page_function, **options)")," for more details."),Object(r.b)("h2",{id:"js_handleget_properties"},"js_handle.get_properties()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",title:"Map"}),"Map"),"<",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>>")),Object(r.b)("p",null,"The method returns a map with ",Object(r.b)("strong",{parentName:"p"},"own property names")," as keys and JSHandle instances for the property values."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const handle = await page.evaluateHandle(() => ({window, document}));\nconst properties = await handle.getProperties();\nconst windowHandle = properties.get('window');\nconst documentHandle = properties.get('document');\nawait handle.dispose();\n")),Object(r.b)("h2",{id:"js_handleget_propertyproperty_name"},"js_handle.get_property(property_name)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"property_name")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> property to get"),Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>")),Object(r.b)("p",null,"Fetches a single property from the referenced object."),Object(r.b)("h2",{id:"js_handlejson_value"},"js_handle.json_value()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">>")),Object(r.b)("p",null,"Returns a JSON representation of the object. If the object has a ",Object(r.b)("inlineCode",{parentName:"p"},"toJSON")," function, it ",Object(r.b)("strong",{parentName:"p"},"will not be called"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"NOTE")," The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references.")))}s.isMDXComponent=!0},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),s=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=s(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},j=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(a),j=n,u=b["".concat(o,".").concat(j)]||b[j]||d[j]||r;return a?l.a.createElement(u,i(i({ref:t},c),{},{components:a})):l.a.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=j;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);