"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[598],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(67294),a=r(79443);var l=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=r(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,p=e.values,m=e.groupId,f=e.className,d=l(),h=d.tabGroupChoices,g=d.setTabGroupChoices,k=(0,n.useState)(a),v=k[0],y=k[1],b=n.Children.toArray(e.children),w=[];if(null!=m){var N=h[m];null!=N&&N!==v&&p.some((function(e){return e.value===N}))&&y(N)}var x=function(e){var t=e.currentTarget,r=w.indexOf(t),n=p[r].value;y(n),null!=m&&(g(m,n),setTimeout((function(){var e,r,n,a,l,o,i,u;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,l=e.right,o=window,i=o.innerHeight,u=o.innerWidth,r>=0&&l<=u&&a<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case c:var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case u:var a=w.indexOf(e.target)-1;r=w[a]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:x,onClick:x},r)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},30232:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),o=r(55064),i=r(58215),s={id:"test-parallel",title:"Parallelism and sharding"},u=void 0,c={unversionedId:"test-parallel",id:"version-1.12/test-parallel",isDocsHomePage:!1,title:"Parallelism and sharding",description:"Playwright Test runs tests in parallel by default, using multiple worker processes.",source:"@site/versioned_docs/version-1.12/test-parallel.mdx",sourceDirName:".",slug:"/test-parallel",permalink:"/docs/1.12/test-parallel",version:"1.12",frontMatter:{id:"test-parallel",title:"Parallelism and sharding"},sidebar:"version-1.12/docs",previous:{title:"Configuration",permalink:"/docs/1.12/test-configuration"},next:{title:"Visual comparisons",permalink:"/docs/1.12/test-snapshots"}},p=[{value:"Workers",id:"workers",children:[]},{value:"Shards",id:"shards",children:[]}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright Test runs tests in parallel by default, using multiple worker processes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#workers"},"Workers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#shards"},"Shards"))),(0,l.kt)("h2",{id:"workers"},"Workers"),(0,l.kt)("p",null,"Each worker process creates a new environment to run tests. By default, Playwright Test reuses the worker as much as it can to make testing faster."),(0,l.kt)("p",null,"Should any test fail, Playwright will discard entire worker process along with the browsers used and will start a new one. That way failing tests can't affect healthy ones."),(0,l.kt)("p",null,"You can control the maximum number of parallel worker processes via ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12/test-cli"},"command line")," or in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12/test-configuration"},"configuration file"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run in parallel by default"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Disable parallelization"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers 1\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Control the number of workers"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers 4\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In the configuration file"),(0,l.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n};\nexport default config;\n"))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nmodule.exports = {\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n};\n")))))),(0,l.kt)("p",null,"Each worker process is assigned a unique sequential index that is accessible through the ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12/test-advanced#workerinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"workerInfo"))," object. Since each worker is a process, there also is a process-wide environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"process.env.TEST_WORKER_INDEX")," that has the same value."),(0,l.kt)("h2",{id:"shards"},"Shards"),(0,l.kt)("p",null,"Playwright Test can shard a test suite, so that it can be executed on multiple machines. For that,  pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--shard=x/y")," to the command line. For example, to split the suite into three shards, each running one third of the tests:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --shard=1/3\nnpx playwright test --shard=2/3\nnpx playwright test --shard=3/3\n")),(0,l.kt)("p",null,"That way your test suite completes 3 times faster."))}f.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);