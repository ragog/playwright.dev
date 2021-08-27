"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8837],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},w=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),w=p(t),u=a,h=w["".concat(s,".").concat(u)]||w[u]||d[u]||i;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=w;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}w.displayName="MDXCreateElement"},8215:function(e,n,t){t(7294)},5064:function(e,n,t){t(7294),t(9443)},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},7198:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),l=(t(5064),t(8215),{id:"test-install",title:"Advanced: installing browsers"}),o=void 0,s={unversionedId:"test-install",id:"version-1.13/test-install",isDocsHomePage:!1,title:"Advanced: installing browsers",description:"- Installing browser binaries",source:"@site/versioned_docs/version-1.13/test-install.mdx",sourceDirName:".",slug:"/test-install",permalink:"/dotnet/docs/1.13/test-install",version:"1.13",frontMatter:{id:"test-install",title:"Advanced: installing browsers"}},p=[{value:"Installing browser binaries",id:"installing-browser-binaries",children:[]},{value:"Installing a single browser binary",id:"installing-a-single-browser-binary",children:[]},{value:"Managing browser binaries",id:"managing-browser-binaries",children:[]},{value:"Install behind a firewall or a proxy",id:"install-behind-a-firewall-or-a-proxy",children:[]},{value:"Download from artifact repository",id:"download-from-artifact-repository",children:[]},{value:"Stale browser removal",id:"stale-browser-removal",children:[]}],c={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installing-browser-binaries"},"Installing browser binaries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installing-a-single-browser-binary"},"Installing a single browser binary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#managing-browser-binaries"},"Managing browser binaries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#install-behind-a-firewall-or-a-proxy"},"Install behind a firewall or a proxy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#download-from-artifact-repository"},"Download from artifact repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#stale-browser-removal"},"Stale browser removal"))),(0,i.kt)("h2",{id:"installing-browser-binaries"},"Installing browser binaries"),(0,i.kt)("p",null,"Each version of Playwright Test needs specific versions of browser binaries to operate. Playwright Test includes ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/cli"},"Command Line Interface")," that can download these binaries. By default, Playwright Test downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Add dependency\nnpm i -D @playwright/test\n# Download browser binaries\nnpx playwright install\n")),(0,i.kt)("p",null,"These browsers will take a few hundred megabytes of disk space when installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"du -hs ~/Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M  firefox-XXXX\n180M  webkit-XXXX\n")),(0,i.kt)("h2",{id:"installing-a-single-browser-binary"},"Installing a single browser binary"),(0,i.kt)("p",null,"Playwright Test downloads Chromium, Firefox and WebKit browsers by default. To install a specific browser, pass it as an argument."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright install webkit\n")),(0,i.kt)("h2",{id:"managing-browser-binaries"},"Managing browser binaries"),(0,i.kt)("p",null,"You can override default installation behavior using environment variables. When installing browsers, ask Playwright Test to download them into a specific location."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\nPLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npx playwright install\n\n# Windows with cmd.exe\nset PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\nnpx playwright install\n\n# Windows with PowerShell\n$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\nnpx playwright install\n')),(0,i.kt)("p",null,"When running tests, ask it to search for browsers in a shared location."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\nPLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npx playwright test\n\n# Windows with cmd.exe\nset PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\nnpx playwright test\n\n# Windows with PowerShell\n$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\nnpx playwright test\n')),(0,i.kt)("p",null,"Or you can opt into the hermetic install and place binaries in the local folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Linux/macOS\n# Places binaries to node_modules/@playwright/test\nPLAYWRIGHT_BROWSERS_PATH=0 npx playwright install\n\n# Windows with cmd.exe\n# Places binaries to node_modules\\@playwright\\test\nset PLAYWRIGHT_BROWSERS_PATH=0\nnpx playwright install\n\n# Windows with PowerShell\n# Places binaries to node_modules\\@playwright\\test\n$env:PLAYWRIGHT_BROWSERS_PATH=0\nnpx playwright install\n")),(0,i.kt)("p",null,"Playwright Test keeps track of packages that need those browsers and will garbage collect them as you update Playwright Test to the newer versions."),(0,i.kt)("h2",{id:"install-behind-a-firewall-or-a-proxy"},"Install behind a firewall or a proxy"),(0,i.kt)("p",null,"By default, Playwright Test downloads browsers from Microsoft CDN."),(0,i.kt)("p",null,"Sometimes companies maintain an internal proxy that blocks direct access to the public resources. In this case, Playwright can be configured to download browsers via a proxy server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\nHTTPS_PROXY=https://192.0.2.1 npx playwright install\n\n# Windows with cmd.exe\nset HTTPS_PROXY=https://192.0.2.1\nnpx playwright install\n\n# Windows with PowerShell\n$env:HTTPS_PROXY="https://192.0.2.1"\nnpx playwright install\n')),(0,i.kt)("h2",{id:"download-from-artifact-repository"},"Download from artifact repository"),(0,i.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,i.kt)("p",null,"Sometimes companies maintain an internal artifact repository to host browser binaries. In this case, Playwright can be configured to download from a custom location using the ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST")," env variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\nPLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 npx playwright install\n\n# Windows with cmd.exe\nset PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\nnpx playwright install\n\n# Windows with PowerShell\n$env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"\nnpx playwright install\n')),(0,i.kt)("p",null,"It is also possible to choose a per-browser download host using ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that take precedence over ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),(0,i.kt)("h2",{id:"stale-browser-removal"},"Stale browser removal"),(0,i.kt)("p",null,"Playwright Test keeps track of the clients that use its browsers. When there are no more clients that require particular version of the browser, that version is deleted from the system. That way you can safely use Playwright Test instances of different versions and at the same time, you don't waste disk space for the browsers that are no longer in use."),(0,i.kt)("p",null,"To opt-out from the unused browser removal, you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_GC=1")," environment variable."))}d.isMDXComponent=!0}}]);