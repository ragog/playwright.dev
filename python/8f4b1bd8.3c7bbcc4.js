(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return j}));var n=a(3),r=a(7),c=(a(0),a(151)),b={id:"actionability",title:"Actionability"},i={unversionedId:"actionability",id:"actionability",isDocsHomePage:!1,title:"Actionability",description:"Playwright does a range of actionability checks on the elements before performing certain actions. These checks ensure that action behaves as expected, for example Playwright does not click on a disabled button.",source:"@site/docs/actionability.md",slug:"/actionability",permalink:"/python/docs/actionability",version:"current",sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/python/docs/ci"},next:{title:"Advanced installation",permalink:"/python/docs/installation"}},l=[{value:"Visible",id:"visible",children:[]},{value:"Stable",id:"stable",children:[]},{value:"Enabled",id:"enabled",children:[]},{value:"Editable",id:"editable",children:[]},{value:"Receiving events",id:"receiving-events",children:[]},{value:"Attached",id:"attached",children:[]}],O={toc:l};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Playwright does a range of actionability checks on the elements before performing certain actions. These checks ensure that action behaves as expected, for example Playwright does not click on a disabled button."),Object(c.b)("p",null,"Playwright waits until all the relevant actionability checks pass before performing an action. This means that action will fail with the ",Object(c.b)("inlineCode",{parentName:"p"},"TimeoutError")," if checks do not pass within the specified ",Object(c.b)("inlineCode",{parentName:"p"},"timeout"),"."),Object(c.b)("p",null,"Some actions like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-options"}),"page.click(selector, **options)")," support ",Object(c.b)("inlineCode",{parentName:"p"},"force")," option that disables non-essential actionability checks, for example passing truthy ",Object(c.b)("inlineCode",{parentName:"p"},"force")," to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-options"}),"page.click(selector, **options)")," method will not check that the target element actually receives click events."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"#attached",title:"Attached"}),"Attached")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"#visible",title:"Visible"}),"Visible")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"#stable",title:"Stable"}),"Stable")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"#receiving-events",title:"Receiving Events"}),"Receiving Events")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"#enabled",title:"Enabled"}),"Enabled")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"#editable",title:"Editable"}),"Editable")))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"check"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"click"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dblclick"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tap"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"uncheck"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"hover"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"scrollIntoViewIfNeeded"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"screenshot"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fill"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"selectText"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"dispatchEvent"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"focus"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"getAttribute"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"innerText"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"innerHTML"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"press"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setInputFiles"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"selectOption"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"textContent"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"type"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")))),Object(c.b)("br",null),Object(c.b)("h3",{id:"visible"},"Visible"),Object(c.b)("p",null,"Element is considered visible when it has non-empty bounding box and does not have ",Object(c.b)("inlineCode",{parentName:"p"},"visibility:hidden")," computed style. Note that elements of zero size or with ",Object(c.b)("inlineCode",{parentName:"p"},"display:none")," are not considered visible."),Object(c.b)("h3",{id:"stable"},"Stable"),Object(c.b)("p",null,"Element is considered stable when it has maintained the same bounding box for at least two consecutive animation frames."),Object(c.b)("h3",{id:"enabled"},"Enabled"),Object(c.b)("p",null,"Element is considered enabled when it is not a ",Object(c.b)("inlineCode",{parentName:"p"},"<button>"),", ",Object(c.b)("inlineCode",{parentName:"p"},"<select>")," or ",Object(c.b)("inlineCode",{parentName:"p"},"<input>")," with a ",Object(c.b)("inlineCode",{parentName:"p"},"disabled")," property set."),Object(c.b)("h3",{id:"editable"},"Editable"),Object(c.b)("p",null,"Element is considered editable when it does not have ",Object(c.b)("inlineCode",{parentName:"p"},"readonly")," property set."),Object(c.b)("h3",{id:"receiving-events"},"Receiving events"),Object(c.b)("p",null,"Element is considered receiving pointer events when it is the hit target of the pointer event at the action point. For example, when clicking at the point ",Object(c.b)("inlineCode",{parentName:"p"},"(10;10)"),", Playwright checks whether some other element (usually an overlay) will instead capture the click at ",Object(c.b)("inlineCode",{parentName:"p"},"(10;10)"),"."),Object(c.b)("h3",{id:"attached"},"Attached"),Object(c.b)("p",null,"Element is considered attached when it is ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected"}),"connected")," to a Document or a ShadowRoot."),Object(c.b)("p",null,"Attached check differs between selector-based and handle-based actions, like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-options"}),"page.click(selector, **options)")," as opposite to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-elementhandle#elementhandleclickoptions"}),"element_handle.click(**options)"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"For selector-based actions, Playwright first waits for an element matching ",Object(c.b)("inlineCode",{parentName:"li"},"selector")," to be attached to the DOM, and then checks that element is still attached before performing the action. If element was detached, the action is retried from the start."),Object(c.b)("li",{parentName:"ul"},"For handle-based actions, Playwright throws if the element is not attached.")),Object(c.b)("p",null,"For example, consider a scenario where Playwright will click ",Object(c.b)("inlineCode",{parentName:"p"},"Sign Up")," button regardless of when the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-options"}),"page.click(selector, **options)")," call was made:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"page is checking that user name is unique and ",Object(c.b)("inlineCode",{parentName:"li"},"Sign Up")," button is disabled;"),Object(c.b)("li",{parentName:"ul"},"after checking with the server, the disabled ",Object(c.b)("inlineCode",{parentName:"li"},"Sign Up")," button is replaced with another one that is now enabled.")))}j.isMDXComponent=!0},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createContext({}),j=function(e){var t=r.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=j(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,O=l(e,["components","mdxType","originalType","parentName"]),p=j(a),o=n,s=p["".concat(b,".").concat(o)]||p[o]||d[o]||c;return a?r.a.createElement(s,i(i({ref:t},O),{},{components:a})):r.a.createElement(s,i({ref:t},O))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=o;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var O=2;O<c;O++)b[O]=a[O];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);