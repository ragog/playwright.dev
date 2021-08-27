"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1143],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),h=l(n),d=a,g=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(g,o(o({ref:e},p),{},{components:n})):r.createElement(g,o({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8215:function(t,e,n){var r=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},5064:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(7294),a=n(9443);var i=function(){var t=(0,r.useContext)(a.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},o=n(6010),s="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,p=39;var u=function(t){var e=t.lazy,n=t.block,a=t.defaultValue,u=t.values,h=t.groupId,d=t.className,g=i(),m=g.tabGroupChoices,f=g.setTabGroupChoices,y=(0,r.useState)(a),v=y[0],b=y[1],k=r.Children.toArray(t.children),w=[];if(null!=h){var N=m[h];null!=N&&N!==v&&u.some((function(t){return t.value===N}))&&b(N)}var x=function(t){var e=t.currentTarget,n=w.indexOf(e),r=u[n].value;b(r),null!=h&&(f(h,r),setTimeout((function(){var t,n,r,a,i,o,s,l;(t=e.getBoundingClientRect(),n=t.top,r=t.left,a=t.bottom,i=t.right,o=window,s=o.innerHeight,l=o.innerWidth,n>=0&&i<=l&&a<=s&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(c),setTimeout((function(){return e.classList.remove(c)}),2e3))}),150))},T=function(t){var e,n;switch(t.keyCode){case p:var r=w.indexOf(t.target)+1;n=w[r]||w[0];break;case l:var a=w.indexOf(t.target)-1;n=w[a]||w[w.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},u.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":v===e}),key:e,ref:function(t){return w.push(t)},onKeyDown:T,onFocus:x,onClick:x},n)}))),e?(0,r.cloneElement)(k.filter((function(t){return t.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==v})}))))}},9443:function(t,e,n){var r=(0,n(7294).createContext)(void 0);e.Z=r},3620:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(5064),s=n(8215),c={id:"class-tracing",title:"Tracing"},l=void 0,p={unversionedId:"api/class-tracing",id:"version-1.14/api/class-tracing",isDocsHomePage:!1,title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened using the Playwright CLI after Playwright script runs.",source:"@site/versioned_docs/version-1.14/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/python/docs/api/class-tracing",version:"1.14",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"version-1.14/api",previous:{title:"Touchscreen",permalink:"/python/docs/api/class-touchscreen"},next:{title:"Video",permalink:"/python/docs/api/class-video"}},u=[{value:"tracing.start(**kwargs)",id:"tracing-start",children:[]},{value:"tracing.stop(**kwargs)",id:"tracing-stop",children:[]}],h={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened using the Playwright CLI after Playwright script runs."),(0,i.kt)("p",null,"Start with specifying the folder traces will be stored in:"),(0,i.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'browser = chromium.launch()\ncontext = browser.new_context()\ncontext.tracing.start(screenshots=True, snapshots=True)\npage.goto("https://playwright.dev")\ncontext.tracing.stop(path = "trace.zip")\n'))),(0,i.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'browser = await chromium.launch()\ncontext = await browser.new_context()\nawait context.tracing.start(screenshots=True, snapshots=True)\nawait page.goto("https://playwright.dev")\nawait context.tracing.stop(path = "trace.zip")\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-tracing#tracing-start"},"tracing.start(**kwargs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-tracing#tracing-stop"},"tracing.stop(**kwargs)"))),(0,i.kt)("h2",{id:"tracing-start"},"tracing.start(**kwargs)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"traces_dir")," folder specified in ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsertype#browser-type-launch"},"browser_type.launch(**kwargs)"),".",(0,i.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screenshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,i.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snapshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether to capture DOM snapshot on every action.",(0,i.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,i.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Start tracing."),(0,i.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'context.tracing.start(name="trace", screenshots=True, snapshots=True)\npage.goto("https://playwright.dev")\ncontext.tracing.stop()\ncontext.tracing.stop(path = "trace.zip")\n'))),(0,i.kt)(s.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'await context.tracing.start(name="trace", screenshots=True, snapshots=True)\nawait page.goto("https://playwright.dev")\nawait context.tracing.stop()\nawait context.tracing.stop(path = "trace.zip")\n')))),(0,i.kt)("h2",{id:"tracing-stop"},"tracing.stop(**kwargs)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,i.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]",">"," Export trace into the file with the given name.",(0,i.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,i.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Stop tracing."))}d.isMDXComponent=!0},6010:function(t,e,n){function r(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:function(){return a}})}}]);