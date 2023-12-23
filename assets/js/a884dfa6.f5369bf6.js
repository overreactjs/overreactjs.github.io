"use strict";(self.webpackChunkoverreact_docs=self.webpackChunkoverreact_docs||[]).push([[93],{738:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(5893),t=n(1151);const s={},i="useProperty",c={id:"hooks/use-property",title:"useProperty",description:"Coalesce a Prop (either a Property or a literal value) into a Property.",source:"@site/docs/hooks/use-property.md",sourceDirName:"hooks",slug:"/hooks/use-property",permalink:"/docs/hooks/use-property",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Engine",permalink:"/docs/components/engine"},next:{title:"useRender",permalink:"/docs/hooks/use-render"}},p={},l=[{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function a(e){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"useproperty",children:"useProperty"}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["Coalesce a ",(0,r.jsx)(o.code,{children:"Prop"})," (either a ",(0,r.jsx)(o.code,{children:"Property"})," or a literal value) into a ",(0,r.jsx)(o.code,{children:"Property"}),"."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"type MyComponentProps = {\n  pos: Prop<Position>;\n};\n\nconst MyComponent: React.FC<> = (props) => {\n  // highlight-start\n  const pos: Property<Position> = useProperty(props.pos)\n  const score: Property<number> = useProperty(0);\n  // highlight-end\n\n  // ...\n};\n"})}),"\n",(0,r.jsx)(o.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Guide on ",(0,r.jsx)(o.a,{href:"../guides/passing-props",children:"passing props"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>c,a:()=>i});var r=n(7294);const t={},s=r.createContext(t);function i(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);