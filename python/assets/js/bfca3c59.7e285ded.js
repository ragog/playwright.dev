"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7051],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(9443);var s=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,c=e.values,d=e.groupId,m=e.className,h=s(),f=h.tabGroupChoices,k=h.setTabGroupChoices,g=(0,n.useState)(r),N=g[0],y=g[1],w=n.Children.toArray(e.children),b=[];if(null!=d){var v=f[d];null!=v&&v!==N&&c.some((function(e){return e.value===v}))&&y(v)}var x=function(e){var t=e.currentTarget,a=b.indexOf(t),n=c[a].value;y(n),null!=d&&(k(d,n),setTimeout((function(){var e,a,n,r,s,o,i,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,s=e.right,o=window,i=o.innerHeight,p=o.innerWidth,a>=0&&s<=p&&r<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case u:var n=b.indexOf(e.target)+1;a=b[n]||b[0];break;case p:var r=b.indexOf(e.target)-1;a=b[r]||b[b.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":N===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:C,onFocus:x,onClick:x},a)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},5966:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=a(2122),r=a(9756),s=(a(7294),a(3905)),o=(a(5064),a(8215),{id:"test-intro",title:"Introduction"}),i=void 0,l={unversionedId:"test-intro",id:"version-1.12/test-intro",isDocsHomePage:!1,title:"Introduction",description:"Playwright Test Runner was created specifically to accommodate the needs of the end-to-end testing. It does everything you would expect from the regular test runner, and more. Playwright test allows to:",source:"@site/versioned_docs/version-1.12/test-intro.mdx",sourceDirName:".",slug:"/test-intro",permalink:"/python/docs/1.12/test-intro",version:"1.12",frontMatter:{id:"test-intro",title:"Introduction"}},p=[{value:"Installation",id:"installation",children:[]},{value:"First test",id:"first-test",children:[]},{value:"Test fixtures",id:"test-fixtures",children:[]},{value:"Test and assertion features",id:"test-and-assertion-features",children:[{value:"Focus a test",id:"focus-a-test",children:[]},{value:"Skip a test",id:"skip-a-test",children:[]},{value:"Group tests",id:"group-tests",children:[]},{value:"Use test hooks",id:"use-test-hooks",children:[]},{value:"Write assertions",id:"write-assertions",children:[]}]},{value:"Learn the command line",id:"learn-the-command-line",children:[]},{value:"Create a configuration file",id:"create-a-configuration-file",children:[]}],u={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright Test Runner was created specifically to accommodate the needs of the end-to-end testing. It does everything you would expect from the regular test runner, and more. Playwright test allows to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Run tests across all browsers."),(0,s.kt)("li",{parentName:"ul"},"Execute tests in parallel."),(0,s.kt)("li",{parentName:"ul"},"Enjoy context isolation out of the box."),(0,s.kt)("li",{parentName:"ul"},"Capture videos, screenshots and other artifacts on failure."),(0,s.kt)("li",{parentName:"ul"},"Integrate your POMs as extensible fixtures.")),(0,s.kt)("br",null),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#first-test"},"First test")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#test-fixtures"},"Test fixtures")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#test-and-assertion-features"},"Test and assertion features")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#learn-the-command-line"},"Learn the command line")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#create-a-configuration-file"},"Create a configuration file"))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("p",null,"Playwright has its own test runner for end-to-end tests."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D @playwright/test\n")),(0,s.kt)("h2",{id:"first-test"},"First test"),(0,s.kt)("p",null,"Create ",(0,s.kt)("inlineCode",{parentName:"p"},"tests/foo.spec.js")," (or ",(0,s.kt)("inlineCode",{parentName:"p"},"tests/foo.spec.ts")," for TypeScript) to define your test."),(0,s.kt)("p",null,"Now run your tests, assuming that test files are in the ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," directory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n")),(0,s.kt)("p",null,"Playwright Test just ran a test using Chromium browser, in a headless manner. Let's tell it to use headed browser:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --headed\n")),(0,s.kt)("p",null,"What about other browsers? Let's run the same test using Firefox:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --browser=firefox\n")),(0,s.kt)("p",null,"And finally, on all three browsers:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --browser=all\n")),(0,s.kt)("p",null,"Refer to ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.12/test-configuration"},"configuration")," section for configuring test runs in different modes with different browsers."),(0,s.kt)("h2",{id:"test-fixtures"},"Test fixtures"),(0,s.kt)("p",null,"You noticed an argument ",(0,s.kt)("inlineCode",{parentName:"p"},"{ page }")," that the test above has access to:"),(0,s.kt)("p",null,"We call these arguments ",(0,s.kt)("inlineCode",{parentName:"p"},"fixtures"),". Fixtures are objects that are created for each test run. Playwright Test comes loaded with those fixtures, and you can add your own fixtures as well. When running tests, Playwright Test looks at each test declaration, analyses the set of fixtures the test needs and prepares those fixtures specifically for the test."),(0,s.kt)("p",null,"Here is a list of the pre-defined fixtures that you are likely to use most of the time:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Fixture"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"page"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/python/docs/1.12/api/class-page",title:"Page"},"Page")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Isolated page for this test run.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"context"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/python/docs/1.12/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Isolated context for this test run. The ",(0,s.kt)("inlineCode",{parentName:"td"},"page")," fixture belongs to this context as well. Learn how to ",(0,s.kt)("a",{parentName:"td",href:"/python/docs/1.12/test-configuration"},"configure context"),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"browser"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/python/docs/1.12/api/class-browser",title:"Browser"},"Browser")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Browsers are shared across tests to optimize resources. Learn how to ",(0,s.kt)("a",{parentName:"td",href:"/python/docs/1.12/test-configuration"},"configure browser"),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"browserName"),(0,s.kt)("td",{parentName:"tr",align:"left"},"[string]"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The name of the browser currently running the test. Either ",(0,s.kt)("inlineCode",{parentName:"td"},"chromium"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"firefox")," or ",(0,s.kt)("inlineCode",{parentName:"td"},"webkit"),".")))),(0,s.kt)("h2",{id:"test-and-assertion-features"},"Test and assertion features"),(0,s.kt)("p",null,"If you are familiar with test runners like Jest, Mocha and Ava, you will find the Playwright Test syntax familiar. These are the basic things you can do with the test:"),(0,s.kt)("h3",{id:"focus-a-test"},"Focus a test"),(0,s.kt)("p",null,"You can focus some tests. When there are focused tests, only they run."),(0,s.kt)("h3",{id:"skip-a-test"},"Skip a test"),(0,s.kt)("p",null,"You can skip certain test based on the condition."),(0,s.kt)("h3",{id:"group-tests"},"Group tests"),(0,s.kt)("p",null,"You can group tests to give them a logical name or to scope before/after hooks to the group."),(0,s.kt)("h3",{id:"use-test-hooks"},"Use test hooks"),(0,s.kt)("p",null,"You can use ",(0,s.kt)("inlineCode",{parentName:"p"},"test.beforeAll")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"test.afterAll")," hooks to set up and tear down resources shared between tests. And you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"test.beforeEach")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"test.afterEach")," hooks to set up and tear down resources for each test individually."),(0,s.kt)("h3",{id:"write-assertions"},"Write assertions"),(0,s.kt)("p",null,"Playwright Test uses ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect"},"expect")," library for test assertions. It provides a lot of matchers like ",(0,s.kt)("inlineCode",{parentName:"p"},"toEqual"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"toContain"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"toMatch"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"toMatchSnapshot")," and many more."),(0,s.kt)("p",null,"Combine ",(0,s.kt)("inlineCode",{parentName:"p"},"expect")," with various Playwright methods to create expectations for your test:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.12/api/class-page#page-is-visible"},"page.is_visible(selector, **kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.12/api/class-page#page-wait-for-selector"},"page.wait_for_selector(selector, **kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.12/api/class-page#page-text-content"},"page.text_content(selector, **kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.12/api/class-page#page-get-attribute"},"page.get_attribute(selector, name, **kwargs)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.12/api/class-page#page-screenshot"},"page.screenshot(**kwargs)")),(0,s.kt)("li",{parentName:"ul"},"Find out more in the ",(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.12/assertions"},"assertions")," guide")),(0,s.kt)("p",null,"Notice how running this test is saying:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Error: example.spec.ts-snapshots/get-started-chromium-darwin.png is missing in snapshots, writing actual.\n")),(0,s.kt)("p",null,"That's because there was no golden file for your ",(0,s.kt)("inlineCode",{parentName:"p"},"get-started.png")," snapshot. It is now created and is ready to be added to the repository. The name of the folder with the golden expectations starts with the name of your test file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"drwxr-xr-x  5 user  group  160 Jun  4 11:46 .\ndrwxr-xr-x  6 user  group  192 Jun  4 11:45 ..\n-rw-r--r--  1 user  group  231 Jun  4 11:16 example.spec.ts\ndrwxr-xr-x  3 user  group   96 Jun  4 11:46 example.spec.ts-snapshots\n")),(0,s.kt)("p",null,"To update your golden files, you can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"--update-snapshots")," parameter."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --update-snapshots\n")),(0,s.kt)("h2",{id:"learn-the-command-line"},"Learn the command line"),(0,s.kt)("p",null,"Here are the most common options available in the ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.12/test-cli"},"command line"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run tests in headed browsers"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --headed\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run tests in a particular browser"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --browser=webkit\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run tests in all browsers"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --browser=all\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run a single test file"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test tests/todo-page.spec.ts\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run a set of test files"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test tests/todo-page/ tests/landing-page/\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run a test with specific title"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'npx playwright test -g "add a todo item"\n'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run tests ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.12/test-parallel"},"in parallel")," - that's the default"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Disable ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.12/test-parallel"},"parallelization")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers=1\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Choose a ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.12/test-reporters"},"reporter")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=dot\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run in debug mode with ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.12/inspector"},"Playwright Inspector")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Linux/macOS\nPWDEBUG=1 npx playwright test\n\n# Windows with cmd.exe\nset PWDEBUG=1\nnpx playwright test\n\n# Windows with PowerShell\n$env:PWDEBUG=1\nnpx playwright test\n")))),(0,s.kt)("h2",{id:"create-a-configuration-file"},"Create a configuration file"),(0,s.kt)("p",null,"So far, we've looked at the zero-config operation of Playwright Test. For a real world application, it is likely that you would want to use a config."),(0,s.kt)("p",null,"Create ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright.config.ts")," (or ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright.config.js"),") to configure your tests. You can specify browser launch options, run tests in multiple browsers and much more with the config. Here is an example configuration that runs every test in Chromium, Firefox and WebKit, both Desktop and Mobile versions. Look for more options in the ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.12/test-configuration"},"configuration section"),"."),(0,s.kt)("p",null,"Configure NPM script to run tests. Test runner will automatically pick up ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright.config.js")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright.config.ts"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test": "npx playwright test"\n  }\n}\n')),(0,s.kt)("p",null,"If you put your configuration file in a different place, pass it with ",(0,s.kt)("inlineCode",{parentName:"p"},"--config")," option."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test": "npx playwright test --config=tests/example.config.js"\n  }\n}\n')))}c.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);