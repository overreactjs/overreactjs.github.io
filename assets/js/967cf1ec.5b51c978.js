"use strict";(self.webpackChunkoverreact_docs=self.webpackChunkoverreact_docs||[]).push([[35],{2547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(5893),r=t(1151);const s={},i="Properties",a={id:"guides/properties",title:"Properties",description:"In Overreact you'll work with props a little differently to how you would typically use props in a React app.",source:"@site/docs/guides/properties.md",sourceDirName:"guides",slug:"/guides/properties",permalink:"/docs/guides/properties",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Game Loop",permalink:"/docs/guides/game-loop"},next:{title:"Device",permalink:"/docs/components/device"}},c={},l=[{value:"Breaking from tradition",id:"breaking-from-tradition",level:2},{value:"Passing properties",id:"passing-properties",level:2},{value:"Invalidation",id:"invalidation",level:2},{value:"Clear invalidation flags",id:"clear-invalidation-flags",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"properties",children:"Properties"}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.em,{children:"Overreact"})," you'll work with props a little differently to how you would typically use props in a React app."]}),"\n",(0,o.jsx)(n.h2,{id:"breaking-from-tradition",children:"Breaking from tradition"}),"\n",(0,o.jsxs)(n.p,{children:["When we looked at the ",(0,o.jsx)(n.a,{href:"./game-loop",children:"Game Loop"}),", we saw how we avoid parts of the React component lifecycle, in order to get greater control of when game state is updated, and when the DOM is synchronized with that state."]}),"\n",(0,o.jsx)(n.p,{children:"In this guide we'll see how that impacts how we work with props."}),"\n",(0,o.jsx)(n.p,{children:"When building a React app, we mostly don't need to think about the component lifecycle, and how it synchronizes changes to the DOM. So long as we use state in accordance with its expectation of how it should be used, it holds up its end of the bargain to ensure that components are rerendered when the state changes."}),"\n",(0,o.jsx)(n.p,{children:"Here's a simple component that contains a single piece of state, a count of how many times a button has been pressed. When the button is clicked, the count is increased by one, which triggers a rerender of the component, thus ensuring the new value is displayed. We can write this code without ever knowing the details of how React does this under the hood."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="/src/components/MyComponent.js"',children:"const MyComponent = () => {\n  const [count, setCount] = useState(0);\n  const onClick = () => setCount((count) => count + 1);\n\n  return (\n    <button onClick={onClick}>\n      Clicked {count} times!\n    </button>\n  );\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["However, when we're making a game, we don't want React to rerender our components for us, because we need tighter control over when that happens. With ",(0,o.jsx)(n.em,{children:"Overreact"}),", you'll use props that are more like refs. The example below is equivalent to the one above:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="/src/components/MyComponent.js"',children:"const MyComponent = () => {\n  const element = useElement();\n  const count = useProperty(0);\n  const onClick = () => count.current += 1;\n\n  useRender(() => {\n    element.setText(`Clicked ${count.current} times!`);\n  });\n\n  return <button ref={element.ref} onClick={onClick} />;\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"passing-properties",children:"Passing properties"}),"\n",(0,o.jsx)(n.p,{children:"Working with properties that behave like refs introduces a problem: How do we pass them to child components?"}),"\n",(0,o.jsxs)(n.p,{children:["Let's expand on the example above. Let's imagine we need access to the number of times the user clicked the button further up in our app. If this were a regular React app we'd hoist the state up to the parent component, and likely pass in an ",(0,o.jsx)(n.code,{children:"onClick"})," callback."]}),"\n",(0,o.jsx)(n.p,{children:"We could do the equivalent with properties, like so, and it would work:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="/src/components/Parent.js"',children:"export const Parent = () => {\n  const count = useProperty(0);\n  return <MyComponent count={count} />;\n};\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="/src/components/MyComponent.js"',children:"type Props = {\n  count: Property<number>;\n}\n\nconst MyComponent: React.FC<Props> = ({ count }) => {\n  const onClick = () => count.current += 1;\n\n  useRender(() => /* ... */);\n\n  return <button ref={element.ref} onClick={onClick} />;\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["However, we can do better. The ",(0,o.jsx)(n.code,{children:"useProperty"})," hook not only initializes a new property, it can take an existing property as a parameter, and simply passes it through. This \u2013 along with the ",(0,o.jsx)(n.code,{children:"Prop<T>"})," type \u2013 allows us to create components which can either initialize a property or reuse an existing property that something higher up the component tree also has access to."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="/src/components/MyComponent.js"',children:"type Props = {\n  // highlight-start\n  count: Prop<number>;\n  // highlight-end\n};\n\nconst MyComponent: React.FC<Props> = (props) => {\n  // highlight-start\n  const count = useProperty(props.count || 0);\n  // highlight-end\n  const onClick = () => count.current += 1;\n\n  useRender(() => /* ... */);\n\n  return <button ref={element.ref} onClick={onClick} />;\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"This can be particularly powerful, allowing us to create components that can either own their own properties, or use properties owned by others. And even when their own their own properties, they can be initialized by the parent component."}),"\n",(0,o.jsx)(n.p,{children:"All of the following are valid:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// The component owns the property.\nreturn <MyComponent />;\n\n// The component owns the property, initialized by the parent as '5'.\nreturn <MyComponent count={5} />;\n\n// The parent owns the property.\nconst count = useProperty(0);\nreturn <MyComponent count={count} />;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"invalidation",children:"Invalidation"}),"\n",(0,o.jsxs)(n.p,{children:["Remember when we said properties in ",(0,o.jsx)(n.em,{children:"Overreact"})," are a lot like refs, objects with a ",(0,o.jsx)(n.code,{children:"current"})," property. They are a little more."]}),"\n",(0,o.jsxs)(n.p,{children:["They also have an ",(0,o.jsx)(n.code,{children:"invalidated"})," property, which is automatically set to ",(0,o.jsx)(n.code,{children:"true"})," when a new value is assigned to ",(0,o.jsx)(n.code,{children:"current"}),", or the value assigned to ",(0,o.jsx)(n.code,{children:"current"})," changes. (This happens thanks to the magic of proxies)."]}),"\n",(0,o.jsxs)(n.p,{children:["The first example we showed above has a flaw, we aren't checking the ",(0,o.jsx)(n.code,{children:"invalidated"})," flag (or clearing it) in the render function. As a result, we're setting the text content of the button ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"every single frame"})}),", even when it hasn't changed. Here's a better implementation:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"useRender(() => {\n  // Check that the count value actually changed.\n  if (count.invalidated) {\n    element.setText(`Clicked ${count.current} times!`);\n\n    // Clear the invalidated flag so that we don't render unnecessarily.\n    count.invalidated = false;\n  }\n});\n"})}),"\n",(0,o.jsx)(n.h3,{id:"clear-invalidation-flags",children:"Clear invalidation flags"}),"\n",(0,o.jsxs)(n.p,{children:["When you clear an ",(0,o.jsx)(n.code,{children:"invalidated"})," flag on a property, it does not change immediately. Instead, it is scheduled to change after the current render phase, once all registered render functions have completed. This is necessary since a property may be accessed in multiple render functions, and we wouldn't want the first of those to clear the invalidation flag that a subsequent render function will be checking."]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(7294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);