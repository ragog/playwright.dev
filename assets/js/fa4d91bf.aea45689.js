"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[15930],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(67294),a=r(79443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var d=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=o(),h=f.tabGroupChoices,b=f.setTabGroupChoices,w=(0,n.useState)(a),v=w[0],y=w[1],g=n.Children.toArray(e.children),k=[];if(null!=p){var N=h[p];null!=N&&N!==v&&d.some((function(e){return e.value===N}))&&y(N)}var O=function(e){var t=e.currentTarget,r=k.indexOf(t),n=d[r].value;y(n),null!=p&&(b(p,n),setTimeout((function(){var e,r,n,a,o,i,l,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,r>=0&&o<=c&&a<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},P=function(e){var t,r;switch(e.keyCode){case u:var n=k.indexOf(e.target)+1;r=k[n]||k[0];break;case c:var a=k.indexOf(e.target)-1;r=k[a]||k[k.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},d.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":v===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:P,onFocus:O,onClick:O},r)}))),t?(0,n.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},27603:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=(r(55064),r(58215),{id:"installation",title:"Installation"}),l=void 0,s={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"- Managing browser binaries",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docs/next/installation",version:"current",frontMatter:{id:"installation",title:"Installation"}},c=[{value:"Managing browser binaries",id:"managing-browser-binaries",children:[]},{value:"Install behind a firewall or a proxy",id:"install-behind-a-firewall-or-a-proxy",children:[]},{value:"Download from artifact repository",id:"download-from-artifact-repository",children:[]},{value:"Skip browser downloads",id:"skip-browser-downloads",children:[]},{value:"Stale browser removal",id:"stale-browser-removal",children:[]}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#managing-browser-binaries"},"Managing browser binaries")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#install-behind-a-firewall-or-a-proxy"},"Install behind a firewall or a proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#download-from-artifact-repository"},"Download from artifact repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#skip-browser-downloads"},"Skip browser downloads")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#stale-browser-removal"},"Stale browser removal"))),(0,o.kt)("h2",{id:"managing-browser-binaries"},"Managing browser binaries"),(0,o.kt)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. By default, Playwright downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,o.kt)("p",null,"These browsers will take a few hundred megabytes of disk space when installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"du -hs ~/Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M  firefox-XXXX\n180M  webkit-XXXX\n")),(0,o.kt)("p",null,"You can override default behavior using environment variables. When installing Playwright, ask it to download browsers into a specific location:"),(0,o.kt)("p",null,"When running Playwright scripts, ask it to search for browsers in a shared location."),(0,o.kt)("p",null,"Playwright keeps track of packages that need those browsers and will garbage collect them as you update Playwright to the newer versions."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Developers can opt-in in this mode via exporting ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers")," in their ",(0,o.kt)("inlineCode",{parentName:"p"},".bashrc"),"."))),(0,o.kt)("h2",{id:"install-behind-a-firewall-or-a-proxy"},"Install behind a firewall or a proxy"),(0,o.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,o.kt)("p",null,"Sometimes companies maintain an internal proxy that blocks direct access to the public resources. In this case, Playwright can be configured to download browsers via a proxy server."),(0,o.kt)("h2",{id:"download-from-artifact-repository"},"Download from artifact repository"),(0,o.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,o.kt)("p",null,"Sometimes companies maintain an internal artifact repository to host browser binaries. In this case, Playwright can be configured to download from a custom location using the ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST")," env variable."),(0,o.kt)("p",null,"It is also possible to use a per-browser download hosts using ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that take precedence over ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),(0,o.kt)("h2",{id:"skip-browser-downloads"},"Skip browser downloads"),(0,o.kt)("p",null,"In certain cases, it is desired to avoid browser downloads altogether because browser binaries are managed separately."),(0,o.kt)("p",null,"This can be done by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," variable before installation."),(0,o.kt)("h2",{id:"stale-browser-removal"},"Stale browser removal"),(0,o.kt)("p",null,"Playwright keeps track of the clients that use its browsers. When there are no more clients that require particular version of the browser, that version is deleted from the system. That way you can safely use Playwright instances of different versions and at the same time, you don't waste disk space for the browsers that are no longer in use."),(0,o.kt)("p",null,"To opt-out from the unused browser removal, you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_GC=1")," environment variable."))}d.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);