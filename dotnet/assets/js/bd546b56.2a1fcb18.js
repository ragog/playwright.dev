"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6904],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},5064:function(e,t,n){n(7294),n(9443)},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},5410:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),o=(n(5064),n(8215),{id:"cli",title:"Command line tools"}),i=void 0,s={unversionedId:"cli",id:"version-1.14/cli",isDocsHomePage:!1,title:"Command line tools",description:"Playwright comes with the command line tools.",source:"@site/versioned_docs/version-1.14/cli.mdx",sourceDirName:".",slug:"/cli",permalink:"/dotnet/docs/cli",version:"1.14",frontMatter:{id:"cli",title:"Command line tools"},sidebar:"version-1.14/docs",previous:{title:"Debugging tools",permalink:"/dotnet/docs/debug"},next:{title:"Supported languages",permalink:"/dotnet/docs/languages"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Install browsers",id:"install-browsers",children:[]},{value:"Generate code",id:"generate-code",children:[{value:"Preserve authenticated state",id:"preserve-authenticated-state",children:[]},{value:"Codegen with custom setup",id:"codegen-with-custom-setup",children:[]}]},{value:"Open pages",id:"open-pages",children:[{value:"Emulate devices",id:"emulate-devices",children:[]},{value:"Emulate color scheme and viewport size",id:"emulate-color-scheme-and-viewport-size",children:[]},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",children:[]}]},{value:"Inspect selectors",id:"inspect-selectors",children:[]},{value:"Take screenshot",id:"take-screenshot",children:[]},{value:"Generate PDF",id:"generate-pdf",children:[]},{value:"Install system dependencies",id:"install-system-dependencies",children:[]},{value:"Known limitations",id:"known-limitations",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright comes with the command line tools."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#install-browsers"},"Install browsers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#generate-code"},"Generate code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#open-pages"},"Open pages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inspect-selectors"},"Inspect selectors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#take-screenshot"},"Take screenshot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#generate-pdf"},"Generate PDF")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#install-system-dependencies"},"Install system dependencies")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#known-limitations"},"Known limitations"))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the CLI once.\ndotnet tool install --global Microsoft.Playwright.CLI\n# Use the tools.\nplaywright\n")),(0,l.kt)("h2",{id:"install-browsers"},"Install browsers"),(0,l.kt)("p",null,"Playwright can install supported browsers."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Running without arguments will install default browsers\nplaywright install\n")),(0,l.kt)("p",null,"You can also install specific browsers by providing an argument:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install WebKit\nplaywright install webkit\n")),(0,l.kt)("p",null,"See all supported browsers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"playwright install --help\n")),(0,l.kt)("h2",{id:"generate-code"},"Generate code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"playwright codegen wikipedia.org\n")),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"codegen")," and perform actions in the browser. Playwright CLI will generate JavaScript code for the user interactions. ",(0,l.kt)("inlineCode",{parentName:"p"},"codegen")," will attempt to generate resilient text-based selectors."),(0,l.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536033-7e7ebe00-f1ed-11ea-9e1a-7cbd912e3391.gif"}),(0,l.kt)("h3",{id:"preserve-authenticated-state"},"Preserve authenticated state"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"codegen")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-storage")," to save ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," and ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," at the end. This is useful to separately record authentication step and reuse it later."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"playwright codegen --save-storage=auth.json\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n")),(0,l.kt)("p",null,"Run with ",(0,l.kt)("inlineCode",{parentName:"p"},"--load-storage")," to consume previously loaded storage. This way, all ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," and ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," will be restored, bringing most web apps to the authenticated state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"playwright open --load-storage=auth.json my.web.app\nplaywright codegen --load-storage=auth.json my.web.app\n# Perform actions in authenticated state.\n")),(0,l.kt)("h3",{id:"codegen-with-custom-setup"},"Codegen with custom setup"),(0,l.kt)("p",null,"If you would like to use codegen in some non-standard setup (for example, use ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-browsercontext#browser-context-route"},"BrowserContext.RouteAsync(url, handler)"),"), it is possible to call ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-pause"},"Page.PauseAsync()")," that will open a separate window with codegen controls."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        var chromium = playwright.Chromium;\n        // Make sure to run headed.\n        var browser = await chromium.LaunchAsync(new BrowserTypeLaunchOptions { Headless = false });\n\n        // Setup context however you like.\n        var context = await browser.NewContextAsync(); // Pass any options\n        await context.RouteAsync('**/*', route => route.ContinueAsync());\n\n        // Pause the page, and start recording manually.\n        var page = await context.NewPageAsync();\n        await page.PauseAsync();\n    }\n}\n")),(0,l.kt)("h2",{id:"open-pages"},"Open pages"),(0,l.kt)("p",null,"With ",(0,l.kt)("inlineCode",{parentName:"p"},"open"),", you can use Playwright bundled browsers to browse web pages. Playwright provides cross-platform WebKit builds that can be used to reproduce Safari rendering across Windows, Linux and macOS."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Open page in Chromium\nplaywright open example.com\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Open page in WebKit\nplaywright wk example.com\n")),(0,l.kt)("h3",{id:"emulate-devices"},"Emulate devices"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"open")," can emulate mobile and tablet devices from the ",(0,l.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-playwright#playwrightdevices"},(0,l.kt)("inlineCode",{parentName:"a"},"playwright.devices"))," list."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Emulate iPhone 11.\nplaywright open --device="iPhone 11" wikipedia.org\n')),(0,l.kt)("h3",{id:"emulate-color-scheme-and-viewport-size"},"Emulate color scheme and viewport size"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Emulate screen size and color scheme.\nplaywright open --viewport-size=800,600 --color-scheme=dark twitter.com\n")),(0,l.kt)("h3",{id:"emulate-geolocation-language-and-timezone"},"Emulate geolocation, language and timezone"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Emulate timezone, language & location\n# Once page opens, click the "my location" button to see geolocation in action\nplaywright open --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" maps.google.com\n')),(0,l.kt)("h2",{id:"inspect-selectors"},"Inspect selectors"),(0,l.kt)("p",null,"During ",(0,l.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"codegen"),", you can use following API inside the developer tools console of any browser."),(0,l.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),(0,l.kt)("h4",{id:"playwrightselector"},"playwright.$(selector)"),(0,l.kt)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),(0,l.kt)("h4",{id:"playwrightselector-1"},"playwright.$$(selector)"),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),(0,l.kt)("h4",{id:"playwrightinspectselector"},"playwright.inspect(selector)"),(0,l.kt)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),(0,l.kt)("h4",{id:"playwrightselectorelement"},"playwright.selector(element)"),(0,l.kt)("p",null,"Generates selector for the given element."),(0,l.kt)("h2",{id:"take-screenshot"},"Take screenshot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Wait 3 seconds before capturing a screenshot after page loads ('load' event fires)\nplaywright screenshot \\\n    --device=\"iPhone 11\" \\\n    --color-scheme=dark \\\n    --wait-for-timeout=3000 \\\n    twitter.com twitter-iphone.png\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Capture a full page screenshot\nplaywright screenshot --full-page en.wikipedia.org wiki-full.png\n")),(0,l.kt)("h2",{id:"generate-pdf"},"Generate PDF"),(0,l.kt)("p",null,"PDF generation only works in Headless Chromium."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# See command help\nplaywright pdf https://en.wikipedia.org/wiki/PDF wiki.pdf\n")),(0,l.kt)("h2",{id:"install-system-dependencies"},"Install system dependencies"),(0,l.kt)("p",null,"Ubuntu 18.04 and Ubuntu 20.04 system dependencies can get installed automatically. This is useful for CI environments."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# See command help\nplaywright install-deps\n")),(0,l.kt)("p",null,"You can also install the dependencies for a single browser only by passing it as an argument:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"playwright install-deps chromium\n")),(0,l.kt)("h2",{id:"known-limitations"},"Known limitations"),(0,l.kt)("p",null,"Opening WebKit Web Inspector will disconnect Playwright from the browser. In such cases, code generation will stop."))}u.isMDXComponent=!0}}]);