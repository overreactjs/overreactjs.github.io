"use strict";(self.webpackChunkoverreact_docs=self.webpackChunkoverreact_docs||[]).push([[256],{7208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(5893),s=n(1151);const o={},a="useRender",c={id:"hooks/use-render",title:"useRender",description:"Register a callback function that will be invoked every frame, regardless of whether or not the game is paused. It is responsible for updating the appearance of elements in the DOM to reflect the current game state.",source:"@site/docs/hooks/use-render.md",sourceDirName:"hooks",slug:"/hooks/use-render",permalink:"/docs/hooks/use-render",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useProperty",permalink:"/docs/hooks/use-property"},next:{title:"useTicker",permalink:"/docs/hooks/use-ticker"}},i={},l=[{value:"Examples",id:"examples",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"userender",children:"useRender"}),"\n",(0,r.jsx)(t.p,{children:"Register a callback function that will be invoked every frame, regardless of whether or not the game is paused. It is responsible for updating the appearance of elements in the DOM to reflect the current game state."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"// Set the position the player's sprite.\nuseRender(() => {\n  element.setBaseStyles({ pos });\n});\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"// Display the player's score.\nconst game = useMyGameState();\nuseRender(() => {\n  element.setText(game.score.current.toString());\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var r=n(7294);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);