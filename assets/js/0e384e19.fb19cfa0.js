"use strict";(self.webpackChunkstarknet_devnet=self.webpackChunkstarknet_devnet||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Getting Started",l={unversionedId:"intro",id:"intro",title:"Getting Started",description:"Let's discover starknet-devnet.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/starknet-devnet/docs/intro",draft:!1,editUrl:"https://github.com/0xSpaceShard/starknet-devnet/blob/master/page/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Run",permalink:"/starknet-devnet/docs/guide/run"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Install",id:"install",level:2},{value:"Run",id:"run",level:2},{value:"Windows installation",id:"windows-installation",level:3},{value:"Upgrade to a newer version",id:"upgrade-to-a-newer-version",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Let's discover ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/0xSpaceShard/starknet-devnet"},"starknet-devnet")),"."),(0,a.kt)("admonition",{title:"Take care",type:"danger"},(0,a.kt)("h2",{parentName:"admonition",id:"\ufe0f-disclaimer-\ufe0f"},"\u26a0\ufe0f Disclaimer \u26a0\ufe0f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Devnet should not be used as a replacement for Alpha testnet. After testing on Devnet, be sure to test on testnet (alpha-goerli)!"),(0,a.kt)("li",{parentName:"ul"},"Sending transactions with max_fee set to 0 is supported (not supported on alpha-mainnet or alpha-goerli).")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Works with Python versions >=3.9 and <3.10."),(0,a.kt)("p",null,"On Ubuntu/Debian, first run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install -y libgmp3-dev\n")),(0,a.kt)("p",null,"On Mac, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"brew"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install gmp\n")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pip install starknet-devnet\n")),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ starknet-devnet\n")),(0,a.kt)("p",null,"For more running possibilities, see ",(0,a.kt)("a",{parentName:"p",href:"https://0xspaceshard.github.io/starknet-devnet/docs/guide/run"},"this"),"."),(0,a.kt)("h3",{id:"windows-installation"},"Windows installation"),(0,a.kt)("p",null,"Follow this guide: ",(0,a.kt)("a",{parentName:"p",href:"https://www.spaceshard.io/blog/starknet-devnet-windows-tutorial"},"https://www.spaceshard.io/blog/starknet-devnet-windows-tutorial")),(0,a.kt)("h3",{id:"upgrade-to-a-newer-version"},"Upgrade to a newer version"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pip install --upgrade starknet-devnet\n")))}d.isMDXComponent=!0}}]);