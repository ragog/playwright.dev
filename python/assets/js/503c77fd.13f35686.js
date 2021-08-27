"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9882],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return y}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),y=r,m=c["".concat(l,".").concat(y)]||c[y]||k[y]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7294),r=a(9443);var o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6010),p="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,d=39;var k=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,k=e.values,c=e.groupId,y=e.className,m=o(),u=m.tabGroupChoices,h=m.setTabGroupChoices,b=(0,n.useState)(r),N=b[0],f=b[1],g=n.Children.toArray(e.children),v=[];if(null!=c){var w=u[c];null!=w&&w!==N&&k.some((function(e){return e.value===w}))&&f(w)}var C=function(e){var t=e.currentTarget,a=v.indexOf(t),n=k[a].value;f(n),null!=c&&(h(c,n),setTimeout((function(){var e,a,n,r,o,i,p,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,p=i.innerHeight,s=i.innerWidth,a>=0&&o<=s&&r<=p&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case d:var n=v.indexOf(e.target)+1;a=v[n]||v[0];break;case s:var r=v.indexOf(e.target)-1;a=v[r]||v[v.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},y)},k.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",p,{"tabs__item--active":N===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:x,onFocus:C,onClick:C},a)}))),t?(0,n.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},7882:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return k},default:function(){return y}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=a(5064),p=a(8215),l={id:"class-keyboard",title:"Keyboard"},s=void 0,d={unversionedId:"api/class-keyboard",id:"version-1.14/api/class-keyboard",isDocsHomePage:!1,title:"Keyboard",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is keyboard.type(text, **kwargs), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/versioned_docs/version-1.14/api/class-keyboard.mdx",sourceDirName:"api",slug:"/api/class-keyboard",permalink:"/python/docs/api/class-keyboard",version:"1.14",frontMatter:{id:"class-keyboard",title:"Keyboard"},sidebar:"version-1.14/api",previous:{title:"JSHandle",permalink:"/python/docs/api/class-jshandle"},next:{title:"Locator",permalink:"/python/docs/api/class-locator"}},k=[{value:"keyboard.down(key)",id:"keyboard-down",children:[]},{value:"keyboard.insert_text(text)",id:"keyboard-insert-text",children:[]},{value:"keyboard.press(key, **kwargs)",id:"keyboard-press",children:[]},{value:"keyboard.type(text, **kwargs)",id:"keyboard-type",children:[]},{value:"keyboard.up(key)",id:"keyboard-up",children:[]}],c={toc:k};function y(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Keyboard provides an api for managing a virtual keyboard. The high level api is ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-keyboard#keyboard-type"},"keyboard.type(text, **kwargs)"),", which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page."),(0,o.kt)("p",null,"For finer control, you can use ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-keyboard#keyboard-down"},"keyboard.down(key)"),", ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-keyboard#keyboard-up"},"keyboard.up(key)"),", and ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-keyboard#keyboard-insert-text"},"keyboard.insert_text(text)")," to manually fire events as if they were generated from a real keyboard."),(0,o.kt)("p",null,"An example of holding down ",(0,o.kt)("inlineCode",{parentName:"p"},"Shift")," in order to select and delete some text:"),(0,o.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.keyboard.type("Hello World!")\npage.keyboard.press("ArrowLeft")\npage.keyboard.down("Shift")\nfor i in range(6):\n    page.keyboard.press("ArrowLeft")\npage.keyboard.up("Shift")\npage.keyboard.press("Backspace")\n# result text will end up saying "Hello!"\n'))),(0,o.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'await page.keyboard.type("Hello World!")\nawait page.keyboard.press("ArrowLeft")\nawait page.keyboard.down("Shift")\nfor i in range(6):\n    await page.keyboard.press("ArrowLeft")\nawait page.keyboard.up("Shift")\nawait page.keyboard.press("Backspace")\n# result text will end up saying "Hello!"\n')))),(0,o.kt)("p",null,"An example of pressing uppercase ",(0,o.kt)("inlineCode",{parentName:"p"},"A")),(0,o.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.keyboard.press("Shift+KeyA")\n# or\npage.keyboard.press("Shift+A")\n'))),(0,o.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'await page.keyboard.press("Shift+KeyA")\n# or\nawait page.keyboard.press("Shift+A")\n')))),(0,o.kt)("p",null,"An example to trigger select-all with the keyboard"),(0,o.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# on windows and linux\npage.keyboard.press("Control+A")\n# on mac_os\npage.keyboard.press("Meta+A")\n'))),(0,o.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# on windows and linux\nawait page.keyboard.press("Control+A")\n# on mac_os\nawait page.keyboard.press("Meta+A")\n')))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-keyboard#keyboard-down"},"keyboard.down(key)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-keyboard#keyboard-insert-text"},"keyboard.insert_text(text)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-keyboard#keyboard-press"},"keyboard.press(key, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-keyboard#keyboard-type"},"keyboard.type(text, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-keyboard#keyboard-up"},"keyboard.up(key)"))),(0,o.kt)("h2",{id:"keyboard-down"},"keyboard.down(key)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-down-option-key"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Name of the key to press or a character to generate, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"a"),".",(0,o.kt)("a",{href:"#keyboard-down-option-key",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-down-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,o.kt)("a",{href:"#keyboard-down-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Dispatches a ",(0,o.kt)("inlineCode",{parentName:"p"},"keydown")," event."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"key")," can specify the intended ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"},"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," values can be found ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"},"here"),". Examples of the keys are:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"F1")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"F12"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Digit0"),"- ",(0,o.kt)("inlineCode",{parentName:"p"},"Digit9"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyA"),"- ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyZ"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Backquote"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Minus"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Equal"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Backslash"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Backspace"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Tab"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Escape"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Insert"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PageDown"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PageUp"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrowRight"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),(0,o.kt)("p",null,"Following modification shortcuts are also supported: ",(0,o.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Control"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Alt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),(0,o.kt)("p",null,"Holding down ",(0,o.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," in the upper case."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," is a modifier key, ",(0,o.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Control"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"Alt"),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-keyboard#keyboard-up"},"keyboard.up(key)"),"."),(0,o.kt)("p",null,"After the key is pressed once, subsequent calls to ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-keyboard#keyboard-down"},"keyboard.down(key)")," will have ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat"},"repeat")," set to true. To release the key, use ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-keyboard#keyboard-up"},"keyboard.up(key)"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Modifier keys DO influence ",(0,o.kt)("inlineCode",{parentName:"p"},"keyboard.down"),". Holding down ",(0,o.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))),(0,o.kt)("h2",{id:"keyboard-insert-text"},"keyboard.insert_text(text)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"text"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-option-text"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Sets input to the specified text value.",(0,o.kt)("a",{href:"#keyboard-insert-text-option-text",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,o.kt)("a",{href:"#keyboard-insert-text-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Dispatches only ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," event, does not emit the ",(0,o.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"keyup")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"keypress")," events."),(0,o.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.keyboard.insert_text("\u55e8")\n'))),(0,o.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'await page.keyboard.insert_text("\u55e8")\n')))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Modifier keys DO NOT effect ",(0,o.kt)("inlineCode",{parentName:"p"},"keyboard.insertText"),". Holding down ",(0,o.kt)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),(0,o.kt)("h2",{id:"keyboard-press"},"keyboard.press(key, **kwargs)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-option-key"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Name of the key to press or a character to generate, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"a"),".",(0,o.kt)("a",{href:"#keyboard-press-option-key",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delay"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-option-delay"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to wait between ",(0,o.kt)("inlineCode",{parentName:"li"},"keydown")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"keyup")," in milliseconds. Defaults to 0.",(0,o.kt)("a",{href:"#keyboard-press-option-delay",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,o.kt)("a",{href:"#keyboard-press-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"key")," can specify the intended ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"},"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," values can be found ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"},"here"),". Examples of the keys are:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"F1")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"F12"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Digit0"),"- ",(0,o.kt)("inlineCode",{parentName:"p"},"Digit9"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyA"),"- ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyZ"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Backquote"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Minus"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Equal"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Backslash"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Backspace"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Tab"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Escape"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Insert"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PageDown"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PageUp"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrowRight"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),(0,o.kt)("p",null,"Following modification shortcuts are also supported: ",(0,o.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Control"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Alt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),(0,o.kt)("p",null,"Holding down ",(0,o.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," in the upper case."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),(0,o.kt)("p",null,"Shortcuts such as ",(0,o.kt)("inlineCode",{parentName:"p"},'key: "Control+o"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'key: "Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,o.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page = browser.new_page()\npage.goto("https://keycode.info")\npage.keyboard.press("a")\npage.screenshot(path="a.png")\npage.keyboard.press("ArrowLeft")\npage.screenshot(path="arrow_left.png")\npage.keyboard.press("Shift+O")\npage.screenshot(path="o.png")\nbrowser.close()\n'))),(0,o.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page = await browser.new_page()\nawait page.goto("https://keycode.info")\nawait page.keyboard.press("a")\nawait page.screenshot(path="a.png")\nawait page.keyboard.press("ArrowLeft")\nawait page.screenshot(path="arrow_left.png")\nawait page.keyboard.press("Shift+O")\nawait page.screenshot(path="o.png")\nawait browser.close()\n')))),(0,o.kt)("p",null,"Shortcut for ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-keyboard#keyboard-down"},"keyboard.down(key)")," and ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-keyboard#keyboard-up"},"keyboard.up(key)"),"."),(0,o.kt)("h2",{id:"keyboard-type"},"keyboard.type(text, **kwargs)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"text"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-option-text"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," A text to type into a focused element.",(0,o.kt)("a",{href:"#keyboard-type-option-text",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delay"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-option-delay"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time to wait between key presses in milliseconds. Defaults to 0.",(0,o.kt)("a",{href:"#keyboard-type-option-delay",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,o.kt)("a",{href:"#keyboard-type-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Sends a ",(0,o.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"input"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),(0,o.kt)("p",null,"To press a special key, like ",(0,o.kt)("inlineCode",{parentName:"p"},"Control")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-keyboard#keyboard-press"},"keyboard.press(key, **kwargs)"),"."),(0,o.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.keyboard.type("Hello") # types instantly\npage.keyboard.type("World", delay=100) # types slower, like a user\n'))),(0,o.kt)(p.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'await page.keyboard.type("Hello") # types instantly\nawait page.keyboard.type("World", delay=100) # types slower, like a user\n')))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Modifier keys DO NOT effect ",(0,o.kt)("inlineCode",{parentName:"p"},"keyboard.type"),". Holding down ",(0,o.kt)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For characters that are not on a US keyboard, only an ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," event will be sent."))),(0,o.kt)("h2",{id:"keyboard-up"},"keyboard.up(key)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-up-option-key"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Name of the key to press or a character to generate, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"a"),".",(0,o.kt)("a",{href:"#keyboard-up-option-key",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-up-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,o.kt)("a",{href:"#keyboard-up-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Dispatches a ",(0,o.kt)("inlineCode",{parentName:"p"},"keyup")," event."))}y.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);