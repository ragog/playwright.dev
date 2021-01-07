(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),o=(n(0),n(151)),l={id:"selectors",title:"Element selectors"},r={unversionedId:"selectors",id:"selectors",isDocsHomePage:!1,title:"Element selectors",description:"Selectors query elements on the web page for interactions, like page.click(selector, **options), and to obtain ElementHandle through page.$(selector). Built-in selectors auto-pierce shadow DOM.",source:"@site/docs/selectors.md",slug:"/selectors",permalink:"/python/docs/selectors",version:"current",sidebar:"docs",previous:{title:"Command Line Interface",permalink:"/python/docs/cli"},next:{title:"Input",permalink:"/python/docs/input"}},s=[{value:"Working with selectors",id:"working-with-selectors",children:[{value:"Working with Chrome Extensions",id:"working-with-chrome-extensions",children:[]}]},{value:"Syntax",id:"syntax",children:[{value:"Short-forms",id:"short-forms",children:[]},{value:"Chaining selectors",id:"chaining-selectors",children:[]},{value:"Intermediate matches",id:"intermediate-matches",children:[]}]},{value:"Best practices",id:"best-practices",children:[{value:"Prioritize user-facing attributes",id:"prioritize-user-facing-attributes",children:[]},{value:"Define explicit contract",id:"define-explicit-contract",children:[]},{value:"Avoid selectors tied to implementation",id:"avoid-selectors-tied-to-implementation",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Selector engines",id:"selector-engines",children:[{value:"css and css:light",id:"css-and-csslight",children:[]},{value:"xpath",id:"xpath",children:[]},{value:"text and text:light",id:"text-and-textlight",children:[]},{value:"id, data-testid, data-test-id, data-test and their :light counterparts",id:"id-data-testid-data-test-id-data-test-and-their-light-counterparts",children:[]}]}],c={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Selectors query elements on the web page for interactions, like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-options"}),"page.click(selector, **options)"),", and to obtain ",Object(o.b)("inlineCode",{parentName:"p"},"ElementHandle")," through ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageselector"}),"page.$(selector)"),". Built-in selectors auto-pierce ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"}),"shadow DOM"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#working-with-selectors"}),"Working with selectors")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#syntax"}),"Syntax")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#best-practices"}),"Best practices")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#examples"}),"Examples")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#selector-engines"}),"Selector engines"))),Object(o.b)("h2",{id:"working-with-selectors"},"Working with selectors"),Object(o.b)("p",null,"Selector describes an element in the page. It can be used to obtain ",Object(o.b)("inlineCode",{parentName:"p"},"ElementHandle")," (see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageselector"}),"page.$(selector)")," for example) or shortcut element operations to avoid intermediate handle (see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageclickselector-options"}),"page.click(selector, **options)")," for example)."),Object(o.b)("p",null,"Selector has the following format: ",Object(o.b)("inlineCode",{parentName:"p"},"engine=body [>> engine=body]*"),". Here ",Object(o.b)("inlineCode",{parentName:"p"},"engine")," is one of the supported ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/selectors"}),"selector engines")," (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"css")," or ",Object(o.b)("inlineCode",{parentName:"p"},"xpath"),"), and ",Object(o.b)("inlineCode",{parentName:"p"},"body")," is a selector body in the format of the particular engine. When multiple ",Object(o.b)("inlineCode",{parentName:"p"},"engine=body")," clauses are present (separated by ",Object(o.b)("inlineCode",{parentName:"p"},">>"),"), next one is queried relative to the previous one's result."),Object(o.b)("p",null,"Playwright also supports the following CSS extensions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},':text("string")')," - Matches elements that contain specific text node. Learn more about ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/selectors#css-extension-text"}),"text selector"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},":visible")," - Matches only visible elements. Learn more about ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/selectors#css-extension-visible"}),"visible selector"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},":light(selector)")," - Matches in the light DOM only as opposite to piercing open shadow roots. Learn more about ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/selectors#shadow-piercing"}),"shadow piercing"),".")),Object(o.b)("p",null,"For convenience, selectors in the wrong format are heuristically converted to the right format:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"selector starting with ",Object(o.b)("inlineCode",{parentName:"li"},"//")," or ",Object(o.b)("inlineCode",{parentName:"li"},"..")," is assumed to be ",Object(o.b)("inlineCode",{parentName:"li"},"xpath=selector"),";"),Object(o.b)("li",{parentName:"ul"},"selector starting and ending with a quote (either ",Object(o.b)("inlineCode",{parentName:"li"},'"')," or ",Object(o.b)("inlineCode",{parentName:"li"},"'"),") is assumed to be ",Object(o.b)("inlineCode",{parentName:"li"},"text=selector"),";"),Object(o.b)("li",{parentName:"ul"},"otherwise selector is assumed to be ",Object(o.b)("inlineCode",{parentName:"li"},"css=selector"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// queries 'div' css selector\nconst handle = await page.$('css=div');\n\n// queries '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div');\n\n// queries '\"foo\"' text selector\nconst handle = await page.$('text=\"foo\"');\n\n// queries 'span' css selector inside the result of '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div >> css=span');\n\n// converted to 'css=div'\nconst handle = await page.$('div');\n\n// converted to 'xpath=//html/body/div'\nconst handle = await page.$('//html/body/div');\n\n// converted to 'text=\"foo\"'\nconst handle = await page.$('\"foo\"');\n\n// queries '../span' xpath selector starting with the result of 'div' css selector\nconst handle = await page.$('div >> ../span');\n\n// queries 'span' css selector inside the div handle\nconst handle = await divHandle.$('css=span');\n")),Object(o.b)("h3",{id:"working-with-chrome-extensions"},"Working with Chrome Extensions"),Object(o.b)("p",null,"Playwright can be used for testing Chrome Extensions."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE")," Extensions in Chrome / Chromium currently only work in non-headless mode.")),Object(o.b)("p",null,"The following is code for getting a handle to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.chrome.com/extensions/background_pages"}),"background page")," of an extension whose source is located in ",Object(o.b)("inlineCode",{parentName:"p"},"./my-extension"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\n\n(async () => {\n  const pathToExtension = require('path').join(__dirname, 'my-extension');\n  const userDataDir = '/tmp/test-user-data-dir';\n  const browserContext = await chromium.launchPersistentContext(userDataDir,{\n    headless: false,\n    args: [\n      `--disable-extensions-except=${pathToExtension}`,\n      `--load-extension=${pathToExtension}`\n    ]\n  });\n  const backgroundPage = browserContext.backgroundPages()[0];\n  // Test the background page as you would any other page.\n  await browserContext.close();\n})();\n")),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"Selectors are defined by selector engine name and selector body, ",Object(o.b)("inlineCode",{parentName:"p"},"engine=body"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"engine")," refers to one of the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#selector-engines"}),"supported engines"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Built-in selector engines: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#css-and-csslight"}),"css"),", ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#text-and-textlight"}),"text"),", ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#xpath"}),"xpath")," and ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#id-data-testid-data-test-id-data-test-and-their-light-counterparts"}),"id selectors")),Object(o.b)("li",{parentName:"ul"},"Learn more about ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/extensibility"}),"custom selector engines")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"body")," refers to the query string for the respective engine",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("inlineCode",{parentName:"li"},"text"),", body is the text content"),Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("inlineCode",{parentName:"li"},"css"),", body is a ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en/docs/Web/CSS/CSS_Selectors"}),"css selector"))))),Object(o.b)("p",null,"Body format is assumed to ignore leading and trailing white spaces, so that extra whitespace can be added for readability."),Object(o.b)("h3",{id:"short-forms"},"Short-forms"),Object(o.b)("p",null,"For convenience, common selectors have short-forms:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Selector starting with ",Object(o.b)("inlineCode",{parentName:"li"},"//")," or ",Object(o.b)("inlineCode",{parentName:"li"},"..")," is assumed to be ",Object(o.b)("inlineCode",{parentName:"li"},"xpath=selector"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Example: ",Object(o.b)("inlineCode",{parentName:"li"},"'//html'")," is converted to ",Object(o.b)("inlineCode",{parentName:"li"},"'xpath=//html'"),"."))),Object(o.b)("li",{parentName:"ul"},"Selector starting and ending with a quote (either ",Object(o.b)("inlineCode",{parentName:"li"},'"')," or ",Object(o.b)("inlineCode",{parentName:"li"},"'"),") is assumed to be ",Object(o.b)("inlineCode",{parentName:"li"},"text=selector"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Example: ",Object(o.b)("inlineCode",{parentName:"li"},"'\"foo\"'")," is converted to ",Object(o.b)("inlineCode",{parentName:"li"},"'text=\"foo\"'"),"."))),Object(o.b)("li",{parentName:"ul"},"Otherwise, selector is assumed to be ",Object(o.b)("inlineCode",{parentName:"li"},"css=selector"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Example: ",Object(o.b)("inlineCode",{parentName:"li"},"'div'")," is converted to ",Object(o.b)("inlineCode",{parentName:"li"},"'css=div'"),".")))),Object(o.b)("h3",{id:"chaining-selectors"},"Chaining selectors"),Object(o.b)("p",null,"Selectors defined as ",Object(o.b)("inlineCode",{parentName:"p"},"engine=body")," or in short-form can be combined with the ",Object(o.b)("inlineCode",{parentName:"p"},">>")," token, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"selector1 >> selector2 >> selectors3"),". When selectors are chained, next one is queried relative to the previous one's result."),Object(o.b)("p",null,"For example,"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"css=article >> css=.bar > .baz >> css=span[attr=value]\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"document\n  .querySelector('article')\n  .querySelector('.bar > .baz')\n  .querySelector('span[attr=value]')\n")),Object(o.b)("p",null,"If a selector needs to include ",Object(o.b)("inlineCode",{parentName:"p"},">>")," in the body, it should be escaped inside a string to not be confused with chaining separator, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},'text="some >> text"'),"."),Object(o.b)("h3",{id:"intermediate-matches"},"Intermediate matches"),Object(o.b)("p",null,"By default, chained selectors resolve to an element queried by the last selector. A selector can be prefixed with ",Object(o.b)("inlineCode",{parentName:"p"},"*")," to capture elements that are queried by an intermediate selector."),Object(o.b)("p",null,"For example, ",Object(o.b)("inlineCode",{parentName:"p"},"css=article >> text=Hello")," captures the element with the text ",Object(o.b)("inlineCode",{parentName:"p"},"Hello"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"*css=article >> text=Hello")," (note the ",Object(o.b)("inlineCode",{parentName:"p"},"*"),") captures the ",Object(o.b)("inlineCode",{parentName:"p"},"article")," element that contains some element with the text ",Object(o.b)("inlineCode",{parentName:"p"},"Hello"),"."),Object(o.b)("h2",{id:"best-practices"},"Best practices"),Object(o.b)("p",null,"The choice of selectors determines the resiliency of automation scripts. To reduce the maintenance burden, we recommend prioritizing user-facing attributes and explicit contracts."),Object(o.b)("h3",{id:"prioritize-user-facing-attributes"},"Prioritize user-facing attributes"),Object(o.b)("p",null,"Attributes like text content, input placeholder, accessibility roles and labels are user-facing attributes that change rarely. These attributes are not impacted by DOM structure changes."),Object(o.b)("p",null,"The following examples use the built-in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#text-and-textlight"}),"text")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#css-and-csslight"}),"css")," selector engines."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// queries "Login" text selector\nawait page.click(\'text="Login"\');\nawait page.click(\'"Login"\'); // short-form\n\n// queries "Search GitHub" placeholder attribute\nawait page.fill(\'css=[placeholder="Search GitHub"]\');\nawait page.fill(\'[placeholder="Search GitHub"]\'); // short-form\n\n// queries "Close" accessibility label\nawait page.click(\'css=[aria-label="Close"]\');\nawait page.click(\'[aria-label="Close"]\'); // short-form\n\n// combine role and text queries\nawait page.click(\'css=nav >> text=Login\');\n')),Object(o.b)("h3",{id:"define-explicit-contract"},"Define explicit contract"),Object(o.b)("p",null,"When user-facing attributes change frequently, it is recommended to use explicit test ids, like ",Object(o.b)("inlineCode",{parentName:"p"},"data-test-id"),". These ",Object(o.b)("inlineCode",{parentName:"p"},"data-*")," attributes are supported by the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#css-and-csslight"}),"css")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#id-data-testid-data-test-id-data-test-and-their-light-counterparts"}),"id selectors"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<button data-test-id="directions">Itin\xe9raire</button>\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// queries data-test-id attribute with css\nawait page.click('css=[data-test-id=directions]');\nawait page.click('[data-test-id=directions]'); // short-form\n\n// queries data-test-id with id\nawait page.click('data-test-id=directions');\n")),Object(o.b)("h3",{id:"avoid-selectors-tied-to-implementation"},"Avoid selectors tied to implementation"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#xpath"}),"xpath")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#css-and-csslight"}),"css")," can be tied to the DOM structure or implementation. These selectors can break when the DOM structure changes."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// avoid long css or xpath chains\nawait page.click('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');\nawait page.click('//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input');\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// queries 'div' css selector\nconst handle = await page.$('css=div');\n\n// queries '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div');\n\n// queries '\"foo\"' text selector\nconst handle = await page.$('text=\"foo\"');\n\n// queries 'span' css selector inside the result of '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div >> css=span');\n\n// converted to 'css=div'\nconst handle = await page.$('div');\n\n// converted to 'xpath=//html/body/div'\nconst handle = await page.$('//html/body/div');\n\n// converted to 'text=\"foo\"'\nconst handle = await page.$('\"foo\"');\n\n// queries 'span' css selector inside the div handle\nconst handle = await divHandle.$('css=span');\n")),Object(o.b)("h2",{id:"selector-engines"},"Selector engines"),Object(o.b)("h3",{id:"css-and-csslight"},"css and css:light"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"css")," is a default engine - any malformed selector not starting with ",Object(o.b)("inlineCode",{parentName:"p"},"//")," nor starting and ending with a quote is assumed to be a css selector. For example, Playwright converts ",Object(o.b)("inlineCode",{parentName:"p"},"'span > button'")," to ",Object(o.b)("inlineCode",{parentName:"p"},"'css=span > button'"),"."),Object(o.b)("p",null,"Playwright augments standard CSS selectors in two ways, see below for more details:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"css")," engine pierces open shadow DOM by default."),Object(o.b)("li",{parentName:"ul"},"Playwright adds a few custom pseudo-classes like ",Object(o.b)("inlineCode",{parentName:"li"},":visible"),".")),Object(o.b)("h4",{id:"shadow-piercing"},"Shadow piercing"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"css:light")," engine is equivalent to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/API/Document/querySelector"}),Object(o.b)("inlineCode",{parentName:"a"},"Document.querySelector"))," and behaves according to the CSS spec. However, it does not pierce shadow roots, which may be inconvenient when working with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"}),"Shadow DOM and Web Components"),". For that reason, ",Object(o.b)("inlineCode",{parentName:"p"},"css")," engine pierces shadow roots. More specifically, any ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator"}),"Descendant combinator")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator"}),"Child combinator")," pierces an arbitrary number of open shadow roots, including the implicit descendant combinator at the start of the selector."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"css")," engine first searches for elements in the light dom in the iteration order, and then recursively inside open shadow roots in the iteration order. It does not search inside closed shadow roots or iframes."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<article>\n  <div>In the light dom</div>\n  <div slot='myslot'>In the light dom, but goes into the shadow slot</div>\n  <open mode shadow root>\n    <div class='in-the-shadow'>\n      <span class='content'>\n        In the shadow dom\n        <open mode shadow root>\n          <li id='target'>Deep in the shadow</li>\n        </open mode shadow root>\n      </span>\n    </div>\n    <slot name='myslot'></slot>\n  </open mode shadow root>\n</article>\n")),Object(o.b)("p",null,"Note that ",Object(o.b)("inlineCode",{parentName:"p"},"<open mode shadow root>")," is not an html element, but rather a shadow root created with ",Object(o.b)("inlineCode",{parentName:"p"},"element.attachShadow({mode: 'open'})"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Both ",Object(o.b)("inlineCode",{parentName:"li"},'"css=article div"')," and ",Object(o.b)("inlineCode",{parentName:"li"},'"css:light=article div"')," match the first ",Object(o.b)("inlineCode",{parentName:"li"},"<div>In the light dom</div>"),"."),Object(o.b)("li",{parentName:"ul"},"Both ",Object(o.b)("inlineCode",{parentName:"li"},'"css=article > div"')," and ",Object(o.b)("inlineCode",{parentName:"li"},'"css:light=article > div"')," match two ",Object(o.b)("inlineCode",{parentName:"li"},"div")," elements that are direct children of the ",Object(o.b)("inlineCode",{parentName:"li"},"article"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"css=article .in-the-shadow"')," matches the ",Object(o.b)("inlineCode",{parentName:"li"},"<div class='in-the-shadow'>"),", piercing the shadow root, while ",Object(o.b)("inlineCode",{parentName:"li"},'"css:light=article .in-the-shadow"')," does not match anything."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"css:light=article div > span"')," does not match anything, because both light-dom ",Object(o.b)("inlineCode",{parentName:"li"},"div")," elements do not contain a ",Object(o.b)("inlineCode",{parentName:"li"},"span"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"css=article div > span"')," matches the ",Object(o.b)("inlineCode",{parentName:"li"},"<span class='content'>"),", piercing the shadow root."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"css=article > .in-the-shadow"')," does not match anything, because ",Object(o.b)("inlineCode",{parentName:"li"},"<div class='in-the-shadow'>")," is not a direct child of ",Object(o.b)("inlineCode",{parentName:"li"},"article")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"css:light=article > .in-the-shadow"')," does not match anything."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"css=article li#target"')," matches the ",Object(o.b)("inlineCode",{parentName:"li"},"<li id='target'>Deep in the shadow</li>"),", piercing two shadow roots.")),Object(o.b)("h4",{id:"css-extension-visible"},"CSS extension: visible"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},":visible")," pseudo-class matches elements that are visible as defined in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/actionability#visible"}),"actionability")," guide. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"input")," matches all the inputs on the page, while ",Object(o.b)("inlineCode",{parentName:"p"},"input:visible")," matches only visible inputs. This is useful to distinguish elements that are very similar but differ in visibility."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Clicks the first button.\nawait page.click('button');\n// Clicks the first visible button. If there are some invisible buttons, this click will just ignore them.\nawait page.click('button:visible');\n")),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},":visible")," with caution, because it has two major drawbacks:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When elements change their visibility dynamically, ",Object(o.b)("inlineCode",{parentName:"li"},":visible")," will give upredictable results based on the timing."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},":visible")," forces a layout and may lead to querying being slow, especially when used with ",Object(o.b)("inlineCode",{parentName:"li"},"page.waitForSelector(selector[, options])")," method.")),Object(o.b)("h4",{id:"css-extension-text"},"CSS extension: text"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},":text")," pseudo-class matches elements that have a text node child with specific text. It is similar to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#text-and-textlight"}),"text engine"),". There are a few variations that support different arguments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},':text("substring")'),' - Matches when element\'s text contains "substring" somewhere. Matching is case-insensitive. Matching also normalizes whitespace, for example it turns multiple spaces into one, trusn line breaks into spaces and ignores leading and trailing whitespace.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},':text-is("string")'),' - Matches when element\'s text equals the "string". Matching is case-insensitive and normalizes whitespace.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'button:text("Sign in")')," - Text selector may be combined with regular CSS."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},':text-matches("[+-]?\\\\d+")')," - Matches text against a regular expression. Note that special characters like back-slash ",Object(o.b)("inlineCode",{parentName:"li"},"\\"),", quotes ",Object(o.b)("inlineCode",{parentName:"li"},'"'),", square brackets ",Object(o.b)("inlineCode",{parentName:"li"},"[]")," and more should be escaped. Learn more about ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"}),"regular expressions"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},':text-matches("value", "i")')," - Matches text against a regular expression with specified flags.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// Click a button with text "Sign in".\nawait page.click(\'button:text("Sign in")\');\n')),Object(o.b)("h4",{id:"css-extension-light"},"CSS extension: light"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"css")," engine ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#shadow-piercing"}),"pierces shadow")," by default. It is possible to disable this behavior by wrapping a selector in ",Object(o.b)("inlineCode",{parentName:"p"},":light")," pseudo-class: ",Object(o.b)("inlineCode",{parentName:"p"},":light(section > button.class)")," matches in light DOM only."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await page.click(':light(.article > .header)');\n")),Object(o.b)("h3",{id:"xpath"},"xpath"),Object(o.b)("p",null,"XPath engine is equivalent to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/API/Document/evaluate"}),Object(o.b)("inlineCode",{parentName:"a"},"Document.evaluate")),". Example: ",Object(o.b)("inlineCode",{parentName:"p"},"xpath=//html/body"),"."),Object(o.b)("p",null,"Malformed selector starting with ",Object(o.b)("inlineCode",{parentName:"p"},"//")," or ",Object(o.b)("inlineCode",{parentName:"p"},"..")," is assumed to be an xpath selector. For example, Playwright converts ",Object(o.b)("inlineCode",{parentName:"p"},"'//html/body'")," to ",Object(o.b)("inlineCode",{parentName:"p"},"'xpath=//html/body'"),"."),Object(o.b)("p",null,"Note that ",Object(o.b)("inlineCode",{parentName:"p"},"xpath")," does not pierce shadow roots."),Object(o.b)("h3",{id:"text-and-textlight"},"text and text:light"),Object(o.b)("p",null,"Text engine finds an element that contains a text node with the passed text. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"page.click('text=Login')")," clicks on a login button, and ",Object(o.b)("inlineCode",{parentName:"p"},'page.waitForSelector(\'"lazy loaded text")')," waits for the ",Object(o.b)("inlineCode",{parentName:"p"},'"lazy loaded text"')," to appear in the page."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"By default, the match is case-insensitive, ignores leading/trailing whitespace and searches for a substring. This means ",Object(o.b)("inlineCode",{parentName:"li"},"text= Login")," matches ",Object(o.b)("inlineCode",{parentName:"li"},"<button>Button loGIN (click me)</button>"),"."),Object(o.b)("li",{parentName:"ul"},"Text body can be escaped with single or double quotes for precise matching, insisting on exact match, including specified whitespace and case. This means ",Object(o.b)("inlineCode",{parentName:"li"},'text="Login "')," will only match ",Object(o.b)("inlineCode",{parentName:"li"},"<button>Login </button>"),' with exactly one space after "Login". Quoted text follows the usual escaping rules, e.g. use ',Object(o.b)("inlineCode",{parentName:"li"},'\\"')," to escape double quote in a double-quoted string: ",Object(o.b)("inlineCode",{parentName:"li"},'text="foo\\"bar"'),"."),Object(o.b)("li",{parentName:"ul"},"Text body can also be a JavaScript-like regex wrapped in ",Object(o.b)("inlineCode",{parentName:"li"},"/")," symbols. This means ",Object(o.b)("inlineCode",{parentName:"li"},"text=/^\\\\s*Login$/i")," will match ",Object(o.b)("inlineCode",{parentName:"li"},"<button> loGIN</button>"),' with any number of spaces before "Login" and no spaces after.'),Object(o.b)("li",{parentName:"ul"},"Input elements of the type ",Object(o.b)("inlineCode",{parentName:"li"},"button")," and ",Object(o.b)("inlineCode",{parentName:"li"},"submit")," are rendered with their value as text, and text engine finds them. For example, ",Object(o.b)("inlineCode",{parentName:"li"},"text=Login")," matches ",Object(o.b)("inlineCode",{parentName:"li"},'<input type=button value="Login">'),".")),Object(o.b)("p",null,"Malformed selector starting and ending with a quote (either ",Object(o.b)("inlineCode",{parentName:"p"},'"')," or ",Object(o.b)("inlineCode",{parentName:"p"},"'"),") is assumed to be a text selector. For example, Playwright converts ",Object(o.b)("inlineCode",{parentName:"p"},"page.click('\"Login\"')")," to ",Object(o.b)("inlineCode",{parentName:"p"},"page.click('text=\"Login\"')"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"text")," engine open pierces shadow roots similarly to ",Object(o.b)("inlineCode",{parentName:"p"},"css"),", while ",Object(o.b)("inlineCode",{parentName:"p"},"text:light")," does not. Text engine first searches for elements in the light dom in the iteration order, and then recursively inside open shadow roots in the iteration order. It does not search inside closed shadow roots or iframes."),Object(o.b)("h3",{id:"id-data-testid-data-test-id-data-test-and-their-light-counterparts"},"id, data-testid, data-test-id, data-test and their :light counterparts"),Object(o.b)("p",null,"Attribute engines are selecting based on the corresponding attribute value. For example: ",Object(o.b)("inlineCode",{parentName:"p"},"data-test-id=foo")," is equivalent to ",Object(o.b)("inlineCode",{parentName:"p"},'css=[data-test-id="foo"]'),", and ",Object(o.b)("inlineCode",{parentName:"p"},"id:light=foo")," is equivalent to ",Object(o.b)("inlineCode",{parentName:"p"},'css:light=[id="foo"]'),"."))}b.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?i.a.createElement(m,r(r({ref:t},c),{},{components:n})):i.a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);