"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8693],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},5064:function(e,t,n){n(7294),n(9443)},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},6804:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return o},default:function(){return u}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),s=(n(5064),n(8215),{id:"assertions",title:"Assertions"}),i=void 0,c={unversionedId:"assertions",id:"version-1.13/assertions",isDocsHomePage:!1,title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/versioned_docs/version-1.13/assertions.mdx",sourceDirName:".",slug:"/assertions",permalink:"/dotnet/docs/1.13/assertions",version:"1.13",frontMatter:{id:"assertions",title:"Assertions"},sidebar:"version-1.13/docs",previous:{title:"Auto-waiting",permalink:"/dotnet/docs/1.13/actionability"},next:{title:"Authentication",permalink:"/dotnet/docs/1.13/auth"}},o=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Attribute value",id:"attribute-value",children:[]},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"JS expression",id:"js-expression",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[]}]},{value:"Custom assertions",id:"custom-assertions",children:[{value:"API reference",id:"api-reference-7",children:[]}]}],p={toc:o};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inner-text"},"Inner text")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attribute-value"},"Attribute value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#checkbox-state"},"Checkbox state")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#js-expression"},"JS expression")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inner-html"},"Inner HTML")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#visibility"},"Visibility")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enabled-state"},"Enabled state")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#custom-assertions"},"Custom assertions"))),(0,l.kt)("h2",{id:"text-content"},"Text content"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = await page.TextContentAsync("nav:first-child");\nAssert.Equals("home", content);\n')),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page#page-text-content"},"Page.TextContentAsync(selector, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-elementhandle#element-handle-text-content"},"ElementHandle.TextContentAsync()"))),(0,l.kt)("h2",{id:"inner-text"},"Inner text"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = await page.InnerTextAsync(".selected");\nAssert.Equals("value", content);\n')),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page#page-inner-text"},"Page.InnerTextAsync(selector, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-elementhandle#element-handle-inner-text"},"ElementHandle.InnerTextAsync()"))),(0,l.kt)("h2",{id:"attribute-value"},"Attribute value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var value = await page.GetAttributeAsync("input", "alt");\nAssert.Equals("Text", value);\n')),(0,l.kt)("h2",{id:"checkbox-state"},"Checkbox state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var checked = await page.IsCheckedAsync("input");\nAssert.True(checked);\n')),(0,l.kt)("h3",{id:"api-reference-2"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page#page-is-checked"},"Page.IsCheckedAsync(selector, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-elementhandle#element-handle-is-checked"},"ElementHandle.IsCheckedAsync()"))),(0,l.kt)("h2",{id:"js-expression"},"JS expression"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = await page.EvalOnSelectorAsync("nav:first-child", "e => e.textContent");\nAssert.Equals("home", content);\n')),(0,l.kt)("h3",{id:"api-reference-3"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page#page-eval-on-selector"},"Page.EvalOnSelectorAsync(selector, expression, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-jshandle#js-handle-evaluate"},"JsHandle.EvaluateAsync(expression, arg)"))),(0,l.kt)("h2",{id:"inner-html"},"Inner HTML"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var html = await page.InnerHTMLAsync("div.result");\nAssert.Equals(html, "<p>Result</p>");\n')),(0,l.kt)("h3",{id:"api-reference-4"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page#page-inner-html"},"Page.InnerHTMLAsync(selector, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-elementhandle#element-handle-inner-html"},"ElementHandle.InnerHTMLAsync()"))),(0,l.kt)("h2",{id:"visibility"},"Visibility"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var visibility = await page.IsVisibleAsync("input");\nAssert.True(visibility);\n')),(0,l.kt)("h3",{id:"api-reference-5"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page#page-is-visible"},"Page.IsVisibleAsync(selector, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-elementhandle#element-handle-is-visible"},"ElementHandle.IsVisibleAsync()"))),(0,l.kt)("h2",{id:"enabled-state"},"Enabled state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var enabled = await page.IsEnabledAsync("input");\nAssert.True(enabled);\n')),(0,l.kt)("h3",{id:"api-reference-6"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page#page-is-enabled"},"Page.IsEnabledAsync(selector, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-elementhandle#element-handle-is-enabled"},"ElementHandle.IsEnabledAsync()"))),(0,l.kt)("h2",{id:"custom-assertions"},"Custom assertions"),(0,l.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'// Assert local storage value\nvar userId = await page.EvaluateAsync<string>("() => window.localStorage.getItem(\'userId\')");\nAssert.NotNull(userId);\n\n// Assert value for input element\nawait page.WaitForSelectorAsync("#search");\nvar value = await page.EvalOnSelectorAsync("#search", "el => el.value");\nAssert.Equals("query", value);\n\n// Assert computed style\nvar fontSize = await page.EvalOnSelectorAsync<string>("div", "el => window.getComputedStyle(el).fontSize");\nAssert.Equals("16px", fontSize);\n\n// Assert list length\nvar length = await page.EvalOnSelectorAllAsync<int>("li.selected", "items => items.length");\nAssert.Equals(3, length);\n')),(0,l.kt)("h3",{id:"api-reference-7"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page#page-evaluate"},"Page.EvaluateAsync(expression, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page#page-eval-on-selector"},"Page.EvalOnSelectorAsync(selector, expression, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page#page-eval-on-selector-all"},"Page.EvalOnSelectorAllAsync(selector, expression, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-frame#frame-evaluate"},"Frame.EvaluateAsync(expression, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-frame#frame-eval-on-selector"},"Frame.EvalOnSelectorAsync(selector, expression, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-frame#frame-eval-on-selector-all"},"Frame.EvalOnSelectorAllAsync(selector, expression, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-elementhandle#element-handle-eval-on-selector"},"ElementHandle.EvalOnSelectorAsync(selector, expression, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-elementhandle#element-handle-eval-on-selector-all"},"ElementHandle.EvalOnSelectorAllAsync(selector, expression, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"))))}u.isMDXComponent=!0}}]);