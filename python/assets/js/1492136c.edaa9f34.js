"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6031],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r=n(9443);var s=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,p=39;var d=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,d=e.values,u=e.groupId,m=e.className,h=s(),f=h.tabGroupChoices,y=h.setTabGroupChoices,b=(0,a.useState)(r),k=b[0],v=b[1],g=a.Children.toArray(e.children),w=[];if(null!=u){var N=f[u];null!=N&&N!==k&&d.some((function(e){return e.value===N}))&&v(N)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),a=d[n].value;v(a),null!=u&&(y(u,a),setTimeout((function(){var e,n,a,r,s,i,o,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,s=e.right,i=window,o=i.innerHeight,c=i.innerWidth,n>=0&&s<=c&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case p:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case c:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:O,onClick:O},n)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},1885:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),i=n(5064),o=n(8215),l={id:"class-cdpsession",title:"CDPSession"},c=void 0,p={unversionedId:"api/class-cdpsession",id:"version-1.13/api/class-cdpsession",isDocsHomePage:!1,title:"CDPSession",description:"* extends: [EventEmitter]",source:"@site/versioned_docs/version-1.13/api/class-cdpsession.mdx",sourceDirName:"api",slug:"/api/class-cdpsession",permalink:"/python/docs/1.13/api/class-cdpsession",version:"1.13",frontMatter:{id:"class-cdpsession",title:"CDPSession"},sidebar:"version-1.13/api",previous:{title:"BrowserType",permalink:"/python/docs/1.13/api/class-browsertype"},next:{title:"ConsoleMessage",permalink:"/python/docs/1.13/api/class-consolemessage"}},d=[{value:"cdp_session.detach()",id:"cdp-session-detach",children:[]},{value:"cdp_session.send(method, **kwargs)",id:"cdp-session-send",children:[]}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"extends: ",(0,s.kt)("a",{parentName:"li",href:"https://pyee.readthedocs.io/en/latest/#pyee.BaseEventEmitter",title:"EventEmitter"},"EventEmitter"))),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"CDPSession")," instances are used to talk raw Chrome Devtools Protocol:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"protocol methods can be called with ",(0,s.kt)("inlineCode",{parentName:"li"},"session.send")," method."),(0,s.kt)("li",{parentName:"ul"},"protocol events can be subscribed to with ",(0,s.kt)("inlineCode",{parentName:"li"},"session.on")," method.")),(0,s.kt)("p",null,"Useful links:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Documentation on DevTools Protocol can be found here: ",(0,s.kt)("a",{parentName:"li",href:"https://chromedevtools.github.io/devtools-protocol/"},"DevTools Protocol Viewer"),"."),(0,s.kt)("li",{parentName:"ul"},"Getting Started with DevTools Protocol: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"},"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"))),(0,s.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'client = page.context().new_cdp_session(page)\nclient.send("Animation.enable")\nclient.on("Animation.animationCreated", lambda: print("animation created!"))\nresponse = client.send("Animation.getPlaybackRate")\nprint("playback rate is " + str(response["playbackRate"]))\nclient.send("Animation.setPlaybackRate", {\n    playbackRate: response["playbackRate"] / 2\n})\n'))),(0,s.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'client = await page.context().new_cdp_session(page)\nawait client.send("Animation.enable")\nclient.on("Animation.animationCreated", lambda: print("animation created!"))\nresponse = await client.send("Animation.getPlaybackRate")\nprint("playback rate is " + str(response["playbackRate"]))\nawait client.send("Animation.setPlaybackRate", {\n    playbackRate: response["playbackRate"] / 2\n})\n')))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.13/api/class-cdpsession#cdp-session-detach"},"cdp_session.detach()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.13/api/class-cdpsession#cdp-session-send"},"cdp_session.send(method, **kwargs)"))),(0,s.kt)("h2",{id:"cdp-session-detach"},"cdp_session.detach()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-detach-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,s.kt)("a",{href:"#cdp-session-detach-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Detaches the CDPSession from the target. Once detached, the CDPSession object won't emit any events and can't be used to send messages."),(0,s.kt)("h2",{id:"cdp-session-send"},"cdp_session.send(method, **kwargs)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"method"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-param-method"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," protocol method name",(0,s.kt)("a",{href:"#cdp-session-send-param-method",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"params"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-param-params"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">"," Optional method parameters",(0,s.kt)("a",{href:"#cdp-session-send-param-params",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"cdp-session-send-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">",(0,s.kt)("a",{href:"#cdp-session-send-return",class:"list-anchor"},"#"))))}m.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);