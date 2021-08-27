"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3803],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),y=a,m=d["".concat(i,".").concat(y)]||d[y]||p[y]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},5064:function(e,t,n){n(7294),n(9443)},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},8284:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),o=(n(5064),n(8215),{id:"test-runners",title:"Test Runners"}),l=void 0,i={unversionedId:"test-runners",id:"version-1.12/test-runners",isDocsHomePage:!1,title:"Test Runners",description:"With a few lines of code, you can hook up Playwright to your favorite .NET test runner.",source:"@site/versioned_docs/version-1.12/test-runners.mdx",sourceDirName:".",slug:"/test-runners",permalink:"/dotnet/docs/1.12/test-runners",version:"1.12",frontMatter:{id:"test-runners",title:"Test Runners"},sidebar:"version-1.12/docs",previous:{title:"Release notes",permalink:"/dotnet/docs/1.12/release-notes"},next:{title:"Auto-waiting",permalink:"/dotnet/docs/1.12/actionability"}},u=[{value:"Creating NUnit project",id:"creating-nunit-project",children:[]},{value:"Running NUnit tests in Parallel",id:"running-nunit-tests-in-parallel",children:[]},{value:"Base NUnit classes for Playwright",id:"base-nunit-classes-for-playwright",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"With a few lines of code, you can hook up Playwright to your favorite .NET test runner."),(0,s.kt)("p",null,"Playwright and Browser instances can be reused between tests for better performance. We recommend running each test case in a new BrowserContext, this way browser state will be isolated between the tests."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#creating-nunit-project"},"Creating NUnit project")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#running-nunit-tests-in-parallel"},"Running NUnit tests in Parallel")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#base-nunit-classes-for-playwright"},"Base NUnit classes for Playwright"))),(0,s.kt)("h2",{id:"creating-nunit-project"},"Creating NUnit project"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new console -n pw_test\ncd pw_test\ndotnet add package Microsoft.Playwright --prerelease\ndotnet add package Microsoft.Playwright.NUnit --prerelease\n")),(0,s.kt)("p",null,"Ensure browsers necessary for testing are installed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"playwright install\n")),(0,s.kt)("p",null,"Create a PageTests.cs file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Threading.Tasks;\nusing Microsoft.Playwright.NUnit;\nusing NUnit.Framework;\n\nnamespace PlaywrightTests\n{\n    [Parallelizable(ParallelScope.Self)]\n    public class MyTest : PageTest\n    {\n        [Test]\n        public async Task ShouldAdd()\n        {\n            int result = await Page.EvaluateAsync<int>("() => 7 + 3");\n            Assert.AreEqual(10, result);\n        }\n\n        [Test]\n        public async Task ShouldMultiply()\n        {\n            int result = await Page.EvaluateAsync<int>("() => 7 * 3");\n            Assert.AreEqual(21, result);\n        }\n    }\n}\n')),(0,s.kt)("p",null,"Run your tests against Chromium"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet test\n")),(0,s.kt)("p",null,"Run your tests against WebKit"),(0,s.kt)("p",null,"Windows"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"set BROWSER=webkit\ndotnet test\n")),(0,s.kt)("p",null,"Linux & Mac"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"BROWSER=webkit dotnet test\n")),(0,s.kt)("p",null,"Run your tests with GUI"),(0,s.kt)("p",null,"Window"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"set HEADED=1\ndotnet test\n")),(0,s.kt)("p",null,"Linux & Mac"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"HEADED=1 dotnet test\n")),(0,s.kt)("h2",{id:"running-nunit-tests-in-parallel"},"Running NUnit tests in Parallel"),(0,s.kt)("p",null,"By default NUnit will run all test files in parallel, while running tests inside each file sequentially. It will create as many processes as there are cores on the host system. You can adjust this behavior using the NUnit.NumberOfTestWorkers parameter."),(0,s.kt)("p",null,"For CPU-bound tests, we recommend using as many workers as there are cores on your system, divided by 2. For IO-bound tests you can use as many workers as you have cores."),(0,s.kt)("h2",{id:"base-nunit-classes-for-playwright"},"Base NUnit classes for Playwright"),(0,s.kt)("p",null,"There are few base classes available to you in Microsoft.Playwright.NUnit namespace:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Test"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"PageTest"),(0,s.kt)("td",{parentName:"tr",align:null},"Each test gets a fresh copy of a web ",(0,s.kt)("a",{parentName:"td",href:"/dotnet/docs/1.12/api/class-page",title:"Page"},"Page")," created in its own unique ",(0,s.kt)("a",{parentName:"td",href:"/dotnet/docs/1.12/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),". Extending this class is the simplest way of writing a fully-functional Playwright test.",(0,s.kt)("br",null),(0,s.kt)("br",null),"Note: You can override the ",(0,s.kt)("inlineCode",{parentName:"td"},"ContextOptions")," method in each test file to control context options, the ones typically passed into the ",(0,s.kt)("a",{parentName:"td",href:"/dotnet/docs/1.12/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")," method. That way you can specify all kinds of emulation options for your test file individually.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"ContextTest"),(0,s.kt)("td",{parentName:"tr",align:null},"Each test will get a fresh copy of a ",(0,s.kt)("a",{parentName:"td",href:"/dotnet/docs/1.12/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),". You can create as many pages in this context as you'd like. Using this test is the easiest way to test multi-page scenarios where you need more than one tab.",(0,s.kt)("br",null),(0,s.kt)("br",null),"Note: You can override the ",(0,s.kt)("inlineCode",{parentName:"td"},"ContextOptions")," method in each test file to control context options, the ones typically passed into the ",(0,s.kt)("a",{parentName:"td",href:"/dotnet/docs/1.12/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")," method. That way you can specify all kinds of emulation options for your test file individually.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"BrowserTest"),(0,s.kt)("td",{parentName:"tr",align:null},"Each test will get a browser and can create as many contexts as it likes. Each test is responsible for cleaning up all the contexts it created.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"PlaywrightTest"),(0,s.kt)("td",{parentName:"tr",align:null},"This gives each test a Playwright object so that the test could start and stop as many browsers as it likes.")))))}p.isMDXComponent=!0}}]);