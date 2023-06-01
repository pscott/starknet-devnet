"use strict";(self.webpackChunkstarknet_devnet=self.webpackChunkstarknet_devnet||[]).push([[307],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:18},i="Cairo 1 support",s={unversionedId:"guide/cairo1-support",id:"guide/cairo1-support",title:"Cairo 1 support",description:"Declaring, deploying and interacting with Cairo 1 contracts is supported in the latest version of starknet-devnet. Declaration body only includes the Sierra of your contract class, so Devnet needs to compile it to Casm.",source:"@site/docs/guide/cairo1-support.md",sourceDirName:"guide",slug:"/guide/cairo1-support",permalink:"/starknet-devnet/docs/guide/cairo1-support",draft:!1,editUrl:"https://github.com/0xSpaceShard/starknet-devnet/blob/master/page/docs/guide/cairo1-support.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Devnet speed-up troubleshooting",permalink:"/starknet-devnet/docs/guide/devnet-speed-up"},next:{title:"Development",permalink:"/starknet-devnet/docs/guide/development"}},c={},p=[{value:"Compiler binaries",id:"compiler-binaries",level:2},{value:"Docker support",id:"docker-support",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cairo-1-support"},"Cairo 1 support"),(0,o.kt)("p",null,"Declaring, deploying and interacting with Cairo 1 contracts is supported in the latest version of starknet-devnet. Declaration body only includes the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/cairo-1-and-sierra/"},"Sierra")," of your contract class, so Devnet needs to compile it to Casm."),(0,o.kt)("p",null,"Make sure your Devnet is using the same compiler version that you used for the compilation of the contract class being declared. To successfully declare a contract compiled with Cairo v1.1.0, if on an x86 machine, you don't have to do anything. On another architecture, or if you want to specify a custom version of the Cairo 1 compiler, you need to specify your local compiler. Use one of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--cairo-compiler-manifest <PATH_TO_CARGO_TOML>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--sierra-compiler-path <PATH_TO_SIERRA_EXECUTABLE>"))),(0,o.kt)("h2",{id:"compiler-binaries"},"Compiler binaries"),(0,o.kt)("p",null,"Other than cloning ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/starkware-libs/cairo"},"the compiler repo")," and checking out and building the desired version, you can find statically linked ",(0,o.kt)("strong",{parentName:"p"},"prebuilt")," executable binaries under ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets")," of every release ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/starkware-libs/cairo/releases"},"on the GitHub release page")," (usually x86 and Apple sillicon binaries are included)."),(0,o.kt)("h2",{id:"docker-support"},"Docker support"),(0,o.kt)("p",null,"Devnet's Docker image has a Cairo compiler set up internally, so Cairo 1 is supported out-of-the-box. But to use a custom compiler , you should have a statically linked executable binary sierra compiler on your host and use it like this (use absolute paths when mounting):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run -it \\\n    -p <YOUR_PORT>:5050 \\\n    --mount type=bind,source=<YOUR_PATH>,target=/starknet-sierra-compile \\\n    -it \\\n    shardlabs/starknet-devnet:<TAG> \\\n    --sierra-compiler-path /starknet-sierra-compile\n")))}d.isMDXComponent=!0}}]);