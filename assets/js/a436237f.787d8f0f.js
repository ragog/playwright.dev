"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3115],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),o=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=o(r),m=n,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||s;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<s;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){var a=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return p}});var a=r(67294),n=r(79443);var s=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(86010),i="tabItem_1uMI",u="tabItemActive_2DSg";var o=37,c=39;var p=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=s(),h=f.tabGroupChoices,k=f.setTabGroupChoices,v=(0,a.useState)(n),b=v[0],y=v[1],g=a.Children.toArray(e.children),N=[];if(null!=d){var x=h[d];null!=x&&x!==b&&p.some((function(e){return e.value===x}))&&y(x)}var S=function(e){var t=e.currentTarget,r=N.indexOf(t),a=p[r].value;y(a),null!=d&&(k(d,a),setTimeout((function(){var e,r,a,n,s,l,i,o;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,s=e.right,l=window,i=l.innerHeight,o=l.innerWidth,r>=0&&s<=o&&n<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case c:var a=N.indexOf(e.target)+1;r=N[a]||N[0];break;case o:var n=N.indexOf(e.target)-1;r=N[n]||N[N.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},m)},p.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:S,onClick:S},r)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,r){var a=(0,r(67294).createContext)(void 0);t.Z=a},61798:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return o},default:function(){return p}});var a=r(22122),n=r(19756),s=(r(67294),r(3905)),l=(r(55064),r(58215),{id:"class-testresult",title:"TestResult"}),i=void 0,u={unversionedId:"api/class-testresult",id:"api/class-testresult",isDocsHomePage:!1,title:"TestResult",description:"A result of a single [TestCase] run.",source:"@site/docs/api/class-testresult.mdx",sourceDirName:"api",slug:"/api/class-testresult",permalink:"/docs/next/api/class-testresult",version:"current",frontMatter:{id:"class-testresult",title:"TestResult"},sidebar:"api",previous:{title:"TestCase",permalink:"/docs/next/api/class-testcase"},next:{title:"Android",permalink:"/docs/next/api/class-android"}},o=[{value:"testResult.attachments",id:"test-result-attachments",children:[]},{value:"testResult.duration",id:"test-result-duration",children:[]},{value:"testResult.error",id:"test-result-error",children:[]},{value:"testResult.retry",id:"test-result-retry",children:[]},{value:"testResult.startTime",id:"test-result-start-time",children:[]},{value:"testResult.status",id:"test-result-status",children:[]},{value:"testResult.stderr",id:"test-result-stderr",children:[]},{value:"testResult.stdout",id:"test-result-stdout",children:[]},{value:"testResult.workerIndex",id:"test-result-worker-index",children:[]}],c={toc:o};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A result of a single ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-testcase",title:"TestCase"},"TestCase")," run."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult#test-result-attachments"},"testResult.attachments")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult#test-result-duration"},"testResult.duration")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult#test-result-error"},"testResult.error")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult#test-result-retry"},"testResult.retry")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult#test-result-start-time"},"testResult.startTime")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult#test-result-status"},"testResult.status")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult#test-result-stderr"},"testResult.stderr")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult#test-result-stdout"},"testResult.stdout")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult#test-result-worker-index"},"testResult.workerIndex"))),(0,s.kt)("h2",{id:"test-result-attachments"},"testResult.attachments"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Attachment name."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"contentType")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Content type of this attachment to properly present in the report, for example ",(0,s.kt)("inlineCode",{parentName:"li"},"'application/json'")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"'image/png'"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"path")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional path on the filesystem to the attached file."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"body")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">"," Optional attachment body used instead of a file.")))),(0,s.kt)("p",null,"The list of files or buffers attached during the test execution through ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo#test-info-attachments"},"testInfo.attachments"),"."),(0,s.kt)("h2",{id:"test-result-duration"},"testResult.duration"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,s.kt)("p",null,"Running time in milliseconds."),(0,s.kt)("h2",{id:"test-result-error"},"testResult.error"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-testerror",title:"TestError"},"TestError"),">")),(0,s.kt)("p",null,"An error thrown during the test execution, if any."),(0,s.kt)("h2",{id:"test-result-retry"},"testResult.retry"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,s.kt)("p",null,"When test is retries multiple times, each retry attempt is given a sequential number."),(0,s.kt)("p",null,"Learn more about ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/test-retries"},"test retries"),"."),(0,s.kt)("h2",{id:"test-result-start-time"},"testResult.startTime"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<","[Date]",">")),(0,s.kt)("p",null,"Start time of this particular test run."),(0,s.kt)("h2",{id:"test-result-status"},"testResult.status"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",'"passed"|"failed"|"timedOut"|"skipped"',">")),(0,s.kt)("p",null,"The status of this test result. See also ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-testcase#test-case-expected-status"},"testCase.expectedStatus"),"."),(0,s.kt)("h2",{id:"test-result-stderr"},"testResult.stderr"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">",">")),(0,s.kt)("p",null,"Anything written to the standard error during the test run."),(0,s.kt)("h2",{id:"test-result-stdout"},"testResult.stdout"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">",">")),(0,s.kt)("p",null,"Anything written to the standard output during the test run."),(0,s.kt)("h2",{id:"test-result-worker-index"},"testResult.workerIndex"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,s.kt)("p",null,"Index of the worker where the test was run."),(0,s.kt)("p",null,"Learn more about ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/test-parallel"},"parallelism and sharding")," with Playwright Test."))}p.isMDXComponent=!0},86010:function(e,t,r){function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);