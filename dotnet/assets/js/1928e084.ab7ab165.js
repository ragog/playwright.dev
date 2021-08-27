"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2165],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return w}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(a),w=o,h=u["".concat(i,".").concat(w)]||u[w]||p[w]||l;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function w(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(e,t,a){a(7294)},5064:function(e,t,a){a(7294),a(9443)},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},3623:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return d},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var n=a(2122),o=a(9756),l=(a(7294),a(3905)),r=(a(5064),a(8215),{id:"class-download",title:"Download"}),d=void 0,i={unversionedId:"api/class-download",id:"version-1.12/api/class-download",isDocsHomePage:!1,title:"Download",description:"Download] objects are dispatched by page via the [event Page.Download event.",source:"@site/versioned_docs/version-1.12/api/class-download.mdx",sourceDirName:"api",slug:"/api/class-download",permalink:"/dotnet/docs/1.12/api/class-download",version:"1.12",frontMatter:{id:"class-download",title:"Download"},sidebar:"version-1.12/api",previous:{title:"Dialog",permalink:"/dotnet/docs/1.12/api/class-dialog"},next:{title:"ElementHandle",permalink:"/dotnet/docs/1.12/api/class-elementhandle"}},s=[{value:"Download.CreateReadStreamAsync()",id:"download-create-read-stream",children:[]},{value:"Download.DeleteAsync()",id:"download-delete",children:[]},{value:"Download.FailureAsync()",id:"download-failure",children:[]},{value:"Download.Page",id:"download-page",children:[]},{value:"Download.PathAsync()",id:"download-path",children:[]},{value:"Download.SaveAsAsync(path)",id:"download-save-as",children:[]},{value:"Download.SuggestedFilename",id:"download-suggested-filename",children:[]},{value:"Download.Url",id:"download-url",children:[]}],c={toc:s};function p(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12/api/class-download",title:"Download"},"Download")," objects are dispatched by page via the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12/api/class-page#page-event-download"},"event Page.Download")," event."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"downloadsPath")," isn't specified, all the downloaded files belonging to the browser context are deleted when the browser context is closed. And all downloaded files are deleted when the browser closes."),(0,l.kt)("p",null,"Download event is emitted once the download starts. Download path becomes available once download completes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var download = await page.RunAndWaitForDownloadAsync(async () =>\n{\n    await page.ClickAsync("#downloadButton");\n});\nConsole.WriteLine(await download.PathAsync());\n')),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Browser context ",(0,l.kt)("strong",{parentName:"p"},"must")," be created with the ",(0,l.kt)("inlineCode",{parentName:"p"},"acceptDownloads")," set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",(0,l.kt)("inlineCode",{parentName:"p"},"acceptDownloads")," is not set, download events are emitted, but the actual download is not performed and user has no access to the downloaded files."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-download#download-create-read-stream"},"Download.CreateReadStreamAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-download#download-delete"},"Download.DeleteAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-download#download-failure"},"Download.FailureAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-download#download-page"},"Download.Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-download#download-path"},"Download.PathAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-download#download-save-as"},"Download.SaveAsAsync(path)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-download#download-suggested-filename"},"Download.SuggestedFilename")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-download#download-url"},"Download.Url"))),(0,l.kt)("h2",{id:"download-create-read-stream"},"Download.CreateReadStreamAsync()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<","[Stream]","?",">")),(0,l.kt)("p",null,"Returns readable stream for current download or ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," if download failed."),(0,l.kt)("h2",{id:"download-delete"},"Download.DeleteAsync()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">")),(0,l.kt)("p",null,"Deletes the downloaded file. Will wait for the download to finish if necessary."),(0,l.kt)("h2",{id:"download-failure"},"Download.FailureAsync()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"?",">")),(0,l.kt)("p",null,"Returns download error if any. Will wait for the download to finish if necessary."),(0,l.kt)("h2",{id:"download-page"},"Download.Page"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-page",title:"Page"},"Page"),">")),(0,l.kt)("p",null,"Get the page that the download belongs to."),(0,l.kt)("h2",{id:"download-path"},"Download.PathAsync()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"?",">")),(0,l.kt)("p",null,"Returns path to the downloaded file in case of successful download. The method will wait for the download to finish if necessary. The method throws when connected remotely."),(0,l.kt)("h2",{id:"download-save-as"},"Download.SaveAsAsync(path)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Path where the download should be copied."),(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">")),(0,l.kt)("p",null,"Copy the download to a user-specified path. It is safe to call this method while the download is still in progress. Will wait for the download to finish if necessary."),(0,l.kt)("h2",{id:"download-suggested-filename"},"Download.SuggestedFilename"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,l.kt)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"},(0,l.kt)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",(0,l.kt)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",(0,l.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/#downloading-resources"},"whatwg"),". Different browsers can use different logic for computing it."),(0,l.kt)("h2",{id:"download-url"},"Download.Url"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,l.kt)("p",null,"Returns downloaded url."))}p.isMDXComponent=!0}}]);