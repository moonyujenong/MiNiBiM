"use strict";(self.webpackChunkminibim=self.webpackChunkminibim||[]).push([[755],{7755:(e,s,i)=>{i.d(s,{Z:()=>P});const n="Layouts_container__7o4H-";var c=i(8397),a=i(2791);const r=[{id:"1",name:"Works",src:"/works"},{id:"2",name:"About",src:"/about"},{id:"3",name:"Contact",src:"/contact"}];const t=i.p+"static/media/logo.77e35fa07efa1dc8b1f50564eb59f272.svg";const o=i.p+"static/media/hamburger.94abfdd3e52b242ae09750fdedf6dd67.svg";const l=i.p+"static/media/close.966d4d7bb91ceee2ba22823826ede15c.svg",d="MobileHeader_container__NM+Rw",m="MobileHeader_hamburger__5-mtQ",_="MobileHeader_logo_link__1S9c4",h="MobileHeader_fnb__GQ+17",x="MobileHeader_close__CAbSP",j="MobileHeader_menu__ZxHPE",u="MobileHeader_link__KrGSH";var g=i(1087),b=i(184);const f=function(){const[e,s]=(0,a.useState)(),i=()=>{s(!e)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:d,children:[(0,b.jsx)("button",{className:m,type:"button",onClick:i,children:(0,b.jsx)("img",{alt:"hamburger",src:o})}),(0,b.jsxs)(g.rU,{to:"/",className:_,children:[(0,b.jsx)("h1",{children:"\ub85c\uace0 \uc774\ubbf8\uc9c0"}),(0,b.jsx)("img",{alt:"logo",src:t})]})]}),(0,b.jsxs)("div",{className:`${h} ${e?"active":""}`,children:[(0,b.jsx)("button",{className:x,type:"button",onClick:i,children:(0,b.jsx)("img",{alt:"close",src:l})}),(0,b.jsx)("ul",{className:j,children:r.map((e=>(0,b.jsx)("li",{className:u,children:(0,b.jsx)(g.rU,{to:e.src,children:e.name})},e.id)))})]})]})},N={container:"PcHeader_container__7WTLa",logo_link:"PcHeader_logo_link__dukHg",menu_list:"PcHeader_menu_list__lcHoH",active:"PcHeader_active__8M7Cy"};var v=i(7689);const p=function(){const e=(0,v.TH)();return(0,b.jsxs)("div",{className:N.container,children:[(0,b.jsxs)(g.rU,{to:"/",className:N.logo_link,children:[(0,b.jsx)("h1",{className:N.logo_title,children:"\ubbf8\ub2c8\ube54 \ub85c\uace0 \uc774\ubbf8\uc9c0"}),(0,b.jsx)("img",{alt:"logo img",src:t})]}),(0,b.jsx)("ul",{className:N.menu_list,children:r.map((s=>(0,b.jsx)("li",{className:`${N.menu_item} ${e.pathname.includes(s.src)?N.active:""}`,children:(0,b.jsx)(g.rU,{to:s.src,children:s.name})},s.id)))})]})},H="Header_container__hPqFl";const w=function(){const e=(0,c.Z)();return(0,b.jsx)("header",{className:H,children:e<1280?(0,b.jsx)(f,{}):(0,b.jsx)(p,{})})};const k=[{id:"1",name:"twitter",img:i.p+"static/media/twitter.0e4c5361f16d02953c13ac9244ee101d.svg",src:""},{id:"2",name:"instagram",img:i.p+"static/media/instagram.ee43088437d35c43634da70b2ec76c56.svg",src:""}],M={container:"Footer_container__P0wcn",wrap:"Footer_wrap__kHdvv",logo:"Footer_logo__192ZN",foot_info:"Footer_foot_info__6xugp",sns_box:"Footer_sns_box__Y+Cc6",copyright:"Footer_copyright__8GjBX"};const y=function(){return(0,b.jsx)("footer",{className:M.container,children:(0,b.jsxs)("div",{className:M.wrap,children:[(0,b.jsx)("img",{alt:"logo",src:t,className:M.logo}),(0,b.jsxs)("ul",{className:M.foot_info,children:[(0,b.jsxs)("li",{className:M.info_item,children:["(\uc8fc) \ud06c\ub808\ud398\uc2a4\ud29c\ub514\uc624 ",(0,b.jsx)("p",{children:"|"})," \ub300\ud45c \ubb38\uc720\uc815 \uc784\uc9c0\uc601"]}),(0,b.jsxs)("li",{className:M.info_item,children:["\uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 : 203-2933-20392",(0,b.jsx)("br",{})]}),(0,b.jsx)("li",{className:M.info_item,children:"\uc804\ud654\ubc88\ud638 : 02-203-2223"}),(0,b.jsx)("li",{className:M.info_item,children:"\uc774\uba54\uc77c : minibim@gmail.com"}),(0,b.jsx)("li",{className:M.info_item,children:"\uc8fc\uc18c : \uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uc11c\ub300\ubb38\uad6c \uc5b4\ub514\uc624 12\uce35"})]}),(0,b.jsx)("p",{className:M.copyright,children:"\xa9 2024 Minibim Inc. All rights reserved."}),(0,b.jsx)("div",{className:M.sns_box,children:k.map((e=>(0,b.jsx)("a",{className:M.sns_link,href:e.src,children:(0,b.jsx)("img",{alt:"sns img",src:e.img})},e.id)))})]})})},C="Body_container__rXjuO";const F=function(e){let{children:s}=e;return(0,b.jsx)("div",{className:C,children:s})};const P=function(e){let{children:s}=e;return(0,b.jsxs)("div",{className:n,children:[(0,b.jsx)(w,{}),(0,b.jsx)(F,{children:s}),(0,b.jsx)(y,{})]})}},8397:(e,s,i)=>{i.d(s,{Z:()=>c});var n=i(2791);const c=function(){const[e,s]=(0,n.useState)(window.innerWidth);return(0,n.useEffect)((()=>{const e=()=>{s(window.innerWidth)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}}),[]),e}}}]);
//# sourceMappingURL=755.0343823d.chunk.js.map