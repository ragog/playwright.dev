"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2311],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),p=i,h=d["".concat(u,".").concat(p)]||d[p]||f[p]||o;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:i},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(7294),i=r(9443);var o=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=r(6010),s="tabItem_1uMI",u="tabItemActive_2DSg";var l=37,c=39;var f=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,f=e.values,d=e.groupId,p=e.className,h=o(),m=h.tabGroupChoices,v=h.setTabGroupChoices,x=(0,n.useState)(i),k=x[0],y=x[1],g=n.Children.toArray(e.children),w=[];if(null!=d){var b=m[d];null!=b&&b!==k&&f.some((function(e){return e.value===b}))&&y(b)}var N=function(e){var t=e.currentTarget,r=w.indexOf(t),n=f[r].value;y(n),null!=d&&(v(d,n),setTimeout((function(){var e,r,n,i,o,a,s,l;(e=t.getBoundingClientRect(),r=e.top,n=e.left,i=e.bottom,o=e.right,a=window,s=a.innerHeight,l=a.innerWidth,r>=0&&o<=l&&i<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},C=function(e){var t,r;switch(e.keyCode){case c:var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case l:var i=w.indexOf(e.target)-1;r=w[i]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},p)},f.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,a.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:N,onClick:N},r)}))),t?(0,n.cloneElement)(g.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},9580:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=(r(5064),r(8215),{id:"test-fixtures",title:"Advanced: fixtures"}),s=void 0,u={unversionedId:"test-fixtures",id:"version-1.13/test-fixtures",isDocsHomePage:!1,title:"Advanced: fixtures",description:"- Introduction to fixtures",source:"@site/versioned_docs/version-1.13/test-fixtures.mdx",sourceDirName:".",slug:"/test-fixtures",permalink:"/python/docs/1.13/test-fixtures",version:"1.13",frontMatter:{id:"test-fixtures",title:"Advanced: fixtures"}},l=[{value:"Introduction to fixtures",id:"introduction-to-fixtures",children:[{value:"Without fixtures",id:"without-fixtures",children:[]},{value:"With fixtures",id:"with-fixtures",children:[]}]},{value:"Test fixtures",id:"test-fixtures",children:[]},{value:"Worker fixtures",id:"worker-fixtures",children:[]},{value:"Overriding fixtures",id:"overriding-fixtures",children:[]}],c={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#introduction-to-fixtures"},"Introduction to fixtures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#test-fixtures"},"Test fixtures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#worker-fixtures"},"Worker fixtures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#overriding-fixtures"},"Overriding fixtures"))),(0,o.kt)("h2",{id:"introduction-to-fixtures"},"Introduction to fixtures"),(0,o.kt)("p",null,"Playwright Test is based on the concept of the test fixtures. Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests, which gives Playwright Test following benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Playwright Test runs tests in parallel by default, making your test suite much faster."),(0,o.kt)("li",{parentName:"ul"},"Playwright Test can efficiently retry the flaky failures, instead of re-running the whole suite."),(0,o.kt)("li",{parentName:"ul"},"You can group tests based on their meaning, instead of their common setup.")),(0,o.kt)("p",null,"Here is how typical test environment setup differs between traditional test style and the fixture-based one. We assume a ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoPage"),' class that helps interacting with a "todo list" page of the web app.'),(0,o.kt)("h3",{id:"without-fixtures"},"Without fixtures"),(0,o.kt)("h3",{id:"with-fixtures"},"With fixtures"),(0,o.kt)("p",null,"You declare exact fixtures that the test needs and the runner initializes them for each test individually. Tests can use any combinations of the fixtures to tailor precise environment they need. You no longer need to wrap tests in ",(0,o.kt)("inlineCode",{parentName:"p"},"describe"),"s that set up environment, everything is declarative and typed."),(0,o.kt)("p",null,"There are two types of fixtures: ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"worker"),". Test fixtures are set up for each test and worker fixtures are set up for each process that runs test files."),(0,o.kt)("h2",{id:"test-fixtures"},"Test fixtures"),(0,o.kt)("p",null,"Test fixtures are set up for each test. Consider the following test file:"),(0,o.kt)("p",null,"It uses fixtures ",(0,o.kt)("inlineCode",{parentName:"p"},"hello")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"helloWorld")," that are set up by the framework for each test run."),(0,o.kt)("p",null,"Here is how test fixtures are declared and defined. Fixtures can use other fixtures - note how ",(0,o.kt)("inlineCode",{parentName:"p"},"helloWorld")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"hello"),"."),(0,o.kt)("p",null,"With fixtures, test organization becomes flexible - you can put tests that make sense next to each other based on what they test, not based on the environment they need."),(0,o.kt)("h2",{id:"worker-fixtures"},"Worker fixtures"),(0,o.kt)("p",null,"Playwright Test uses worker processes to run test files. You can specify the maximum number of workers using ",(0,o.kt)("inlineCode",{parentName:"p"},"--workers")," command line option. Similarly to how test fixtures are set up for individual test runs, worker fixtures are set up for each worker process. That's where you can set up services, run servers, etc. Playwright Test will reuse the worker process for as many test files as it can, provided their worker fixtures match and hence environments are identical."),(0,o.kt)("p",null,"Here is how the test looks:"),(0,o.kt)("p",null,"And here is how fixtures are declared and defined:"),(0,o.kt)("h2",{id:"overriding-fixtures"},"Overriding fixtures"),(0,o.kt)("p",null,"In addition to creating your own fixtures, you can also override existing fixtures to fit your needs. Consider the following example which overrides the ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," fixture by navigating to a specified URL:"),(0,o.kt)("p",null,"Notice that in this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," fixture is able to depend on other built in fixtures such as ",(0,o.kt)("inlineCode",{parentName:"p"},"baseURL"),". This allows us to override the ",(0,o.kt)("inlineCode",{parentName:"p"},"baseURL")," used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," fixture in our tests using ",(0,o.kt)("inlineCode",{parentName:"p"},"test.use"),"."),(0,o.kt)("p",null,"Fixtures can also be overridden where the base fixture is completely replaced with something different. For example, we could override the ",(0,o.kt)("inlineCode",{parentName:"p"},"storageState")," fixture to provide our own data."))}f.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);