"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3166],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),a=n(9443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),c="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,h=e.groupId,d=e.className,m=i(),f=m.tabGroupChoices,g=m.setTabGroupChoices,v=(0,r.useState)(a),b=v[0],k=v[1],w=r.Children.toArray(e.children),y=[];if(null!=h){var N=f[h];null!=N&&N!==b&&p.some((function(e){return e.value===N}))&&k(N)}var x=function(e){var t=e.currentTarget,n=y.indexOf(t),r=p[n].value;k(r),null!=h&&(g(h,r),setTimeout((function(){var e,n,r,a,i,o,c,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,c=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case s:var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",c,{"tabs__item--active":b===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:O,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},560:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=(n(5064),n(8215),{id:"trace-viewer",title:"Trace Viewer"}),c=void 0,l={unversionedId:"trace-viewer",id:"version-1.14/trace-viewer",isDocsHomePage:!1,title:"Trace Viewer",description:"Playwright Trace Viewer is a GUI tool that helps exploring recorded Playwright traces after the script ran.",source:"@site/versioned_docs/version-1.14/trace-viewer.mdx",sourceDirName:".",slug:"/trace-viewer",permalink:"/java/docs/trace-viewer",version:"1.14",frontMatter:{id:"trace-viewer",title:"Trace Viewer"},sidebar:"version-1.14/docs",previous:{title:"Screenshots",permalink:"/java/docs/screenshots"},next:{title:"Verification",permalink:"/java/docs/verification"}},s=[{value:"Recording a trace",id:"recording-a-trace",children:[]},{value:"Viewing the trace",id:"viewing-the-trace",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Screenshots",id:"screenshots",children:[]},{value:"Snapshots",id:"snapshots",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright Trace Viewer is a GUI tool that helps exploring recorded Playwright traces after the script ran."),(0,i.kt)("img",{width:"1212",alt:"Playwright Trace Viewer",src:"https://user-images.githubusercontent.com/883973/120585896-6a1bca80-c3e7-11eb-951a-bd84002480f5.png"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#recording-a-trace"},"Recording a trace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#viewing-the-trace"},"Viewing the trace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#actions"},"Actions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#screenshots"},"Screenshots")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#snapshots"},"Snapshots"))),(0,i.kt)("h2",{id:"recording-a-trace"},"Recording a trace"),(0,i.kt)("p",null,"Traces can be recorded using the ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-browsercontext#browser-context-tracing"},"BrowserContext.tracing()")," API as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Browser browser = browserType.launch();\nBrowserContext context = browser.newContext();\n\n// Start tracing before creating / navigating a page.\ncontext.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true));\n\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\n\n// Stop tracing and export it into a zip archive.\ncontext.tracing().stop(new Tracing.StopOptions()\n  .setPath(Paths.get("trace.zip")));\n')),(0,i.kt)("p",null,"This will record the trace and place it into the file named ",(0,i.kt)("inlineCode",{parentName:"p"},"trace.zip"),"."),(0,i.kt)("h2",{id:"viewing-the-trace"},"Viewing the trace"),(0,i.kt)("p",null,"You can open the saved trace using Playwright CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="show-trace trace.zip"\n')),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("p",null,"Once trace is opened, you will see the list of actions Playwright performed on the left hand side:"),(0,i.kt)("img",{width:"301",alt:"Actions",src:"https://user-images.githubusercontent.com/883973/120588303-d39dd800-c3eb-11eb-9e8b-bfea8b775354.png"}),(0,i.kt)("p",null,"Selecting each action reveals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"action snapshots,"),(0,i.kt)("li",{parentName:"ul"},"action log,"),(0,i.kt)("li",{parentName:"ul"},"source code location,"),(0,i.kt)("li",{parentName:"ul"},"network log for this action")),(0,i.kt)("p",null,"in the properties pane. You will also see rendered DOM snapshots associated with each action."),(0,i.kt)("h2",{id:"screenshots"},"Screenshots"),(0,i.kt)("p",null,"When tracing with the ",(0,i.kt)("inlineCode",{parentName:"p"},"screenshots")," option turned on, each trace records screencast and renders it as a film strip:"),(0,i.kt)("img",{width:"353",alt:"Film strip",src:"https://user-images.githubusercontent.com/883973/120588069-5d997100-c3eb-11eb-97a3-acbd5e0eb358.png"}),(0,i.kt)("p",null,"You can hover over the film strip to see a magnified image:"),(0,i.kt)("img",{width:"617",alt:"Magnify",src:"https://user-images.githubusercontent.com/883973/120588147-8f123c80-c3eb-11eb-864b-19d800619234.png"}),(0,i.kt)("p",null,"That helps locating the action of interest very quickly."),(0,i.kt)("h2",{id:"snapshots"},"Snapshots"),(0,i.kt)("p",null,"When tracing with the ",(0,i.kt)("inlineCode",{parentName:"p"},"snapshots")," option turned on, Playwright captures a set of complete DOM snapshots for each action. Depending on the type of the action, it will capture:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Before"),(0,i.kt)("td",{parentName:"tr",align:null},"A snapshot at the time action is called.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Action"),(0,i.kt)("td",{parentName:"tr",align:null},"A snapshot at the moment of the performed input. This type of snapshot is especially useful when exploring where exactly Playwright clicked.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"After"),(0,i.kt)("td",{parentName:"tr",align:null},"A snapshot after the action.")))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Here is what the typical Action snapshot looks like:"),(0,i.kt)("img",{width:"682",alt:"Snapshots",src:"https://user-images.githubusercontent.com/883973/120588728-879f6300-c3ec-11eb-85d6-e67b0e92e4e3.png"}),(0,i.kt)("p",null,"Notice how it highlights both, the DOM Node as well as the exact click position."))}p.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);