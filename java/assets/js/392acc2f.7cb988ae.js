"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9927],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),o=n(9443);var r=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,d=39;var u=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,u=e.values,p=e.groupId,m=e.className,f=r(),v=f.tabGroupChoices,h=f.setTabGroupChoices,w=(0,a.useState)(o),g=w[0],y=w[1],b=a.Children.toArray(e.children),k=[];if(null!=p){var N=v[p];null!=N&&N!==g&&u.some((function(e){return e.value===N}))&&y(N)}var O=function(e){var t=e.currentTarget,n=k.indexOf(t),a=u[n].value;y(a),null!=p&&(h(p,a),setTimeout((function(){var e,n,a,o,r,i,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&r<=c&&o<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case d:var a=k.indexOf(e.target)+1;n=k[a]||k[0];break;case c:var o=k.indexOf(e.target)-1;n=k[o]||k[k.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:j,onFocus:O,onClick:O},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},3325:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=(n(5064),n(8215),{id:"downloads",title:"Downloads"}),l=void 0,s={unversionedId:"downloads",id:"version-1.12/downloads",isDocsHomePage:!1,title:"Downloads",description:"For uploading files, see the uploading files section.",source:"@site/versioned_docs/version-1.12/downloads.mdx",sourceDirName:".",slug:"/downloads",permalink:"/java/docs/1.12/downloads",version:"1.12",frontMatter:{id:"downloads",title:"Downloads"},sidebar:"version-1.12/docs",previous:{title:"Dialogs",permalink:"/java/docs/1.12/dialogs"},next:{title:"Element selectors",permalink:"/java/docs/1.12/selectors"}},c=[{value:"API reference",id:"api-reference",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For uploading files, see the ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.12/input#upload-files"},"uploading files")," section."))),(0,r.kt)("p",null,"For every attachment downloaded by the page, ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.12/api/class-page#page-event-download"},"Page.onDownload(handler)")," event is emitted. If you create a browser context with the ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptDownloads")," set, all these attachments are going to be downloaded into a temporary folder. You can obtain the download url, file system path and payload stream using the ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.12/api/class-download",title:"Download"},"Download")," object from the event."),(0,r.kt)("p",null,"You can specify where to persist downloaded files using the ",(0,r.kt)("inlineCode",{parentName:"p"},"downloadsPath")," option in ",(0,r.kt)("a",{parentName:"p",href:"/java/docs/1.12/api/class-browsertype#browser-type-launch"},"BrowserType.launch([options])"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Unless ",(0,r.kt)("inlineCode",{parentName:"p"},"downloadsPath")," is set, downloaded files are deleted when the browser context that produced them is closed."))),(0,r.kt)("p",null,"Here is the simplest way to handle the file download:"),(0,r.kt)("h4",{id:"variations"},"Variations"),(0,r.kt)("p",null,"If you have no idea what initiates the download, you can still handle the event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"page.onDownload(download -> System.out.println(download.path()));\n")),(0,r.kt)("p",null,"Note that handling the event forks the control flow and makes script harder to follow. Your scenario might end while you are downloading a file since your main control flow is not awaiting for this operation to resolve."),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.12/api/class-download",title:"Download"},"Download")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.12/api/class-page#page-event-download"},"Page.onDownload(handler)"))))}u.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);