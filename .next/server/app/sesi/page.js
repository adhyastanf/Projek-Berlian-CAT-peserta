(()=>{var e={};e.id=988,e.ids=[988],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3849:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},1216:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>A.a,__next_app__:()=>d,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>l}),s(4171),s(2005),s(8295),s(5866);var r=s(3191),a=s(8716),i=s(7922),A=s.n(i),o=s(5231),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);s.d(t,n);let l=["",{children:["sesi",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4171)),"C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\sesi\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,2005)),"C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\sesi\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,8295)),"C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\sesi\\page.jsx"],c="/sesi/page",d={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/sesi/page",pathname:"/sesi",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},1264:(e,t,s)=>{Promise.resolve().then(s.bind(s,9698))},9698:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var r=s(326),a=s(7577),i=s(6803),A=s(7350),o=s(6426),n=s(5047),l=s(6981),u=s(6226),c=s(1742);function d(){let[e,t]=(0,a.useState)(!0),s=(0,n.useRouter)(),{fetchRemainingTime:d,isQuestionPlayable:p}=(0,i.Z)(),{hasCompletedSection1:x,isQuiz1Finished:h,isQuiz1Restricted:g,score:m,isLoadingSection:b,fetchStatusQuiz:f}=(0,A.Z)(),{hasCompletedSection2:w,isQuiz2Finished:C,isQuiz2Restricted:j,isSection2Locked:y,updateQuizStatus:P,fetchStatusQuiz2:v}=(0,o.Z)(),{isAuth:E,noUjian:q,kodeDesa:Q}=(0,l.Z)(),B=h||g||!p(1),T=!x||y||C||j||!p(2);return e||b?r.jsx("div",{}):(0,r.jsxs)("div",{children:[r.jsx(u.default,{src:c.default,width:"100%",height:"100%",alt:"hero",className:"absolute"}),r.jsx("div",{className:"flex items-center justify-center h-screen relative",children:(0,r.jsxs)("div",{className:"space-y-6 text-center",children:[r.jsx("section",{children:(0,r.jsxs)("button",{disabled:B,onClick:()=>s.push("/sesi/quiz1"),className:`w-full py-5 px-10 rounded-lg font-semibold text-white transition-all duration-300 ${B?"bg-gray-400 cursor-not-allowed flex items-center justify-between gap-2":"bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl"}`,children:[r.jsx("span",{children:"TES UJIAN TERTULIS CAT"}),x&&r.jsx("span",{className:"bg-white text-blue-600 font-bold py-1 px-3 rounded-full",children:`${m} / 100`})]})}),r.jsx("section",{children:r.jsx("button",{disabled:T,onClick:()=>s.push("/sesi/quiz2"),className:`w-full py-5 px-10 rounded-lg font-semibold text-white transition-all duration-300 ${T?"bg-gray-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl"}`,children:r.jsx("span",{children:"TES UJIAN KOMPUTER"})})}),r.jsx("section",{children:r.jsx("button",{onClick:()=>s.push("/sesi/infoquiz3"),className:"w-full py-5 px-10 rounded-lg font-semibold text-white transition-all duration-300 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl",children:r.jsx("span",{children:"TES WAWANCARA"})})})]})})]})}},4171:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(9510),a=s(8570);let i=(0,a.createProxy)(String.raw`C:\Users\Adhyasta\Desktop\CAT Peserta\cat-peserta\src\components\sectionHome.jsx`),{__esModule:A,$$typeof:o}=i;i.default;let n=(0,a.createProxy)(String.raw`C:\Users\Adhyasta\Desktop\CAT Peserta\cat-peserta\src\components\sectionHome.jsx#default`);function l(){return r.jsx(n,{userName:"Adhyasta Naufal Faadhilah"})}},1742:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/_next/static/media/hero.3232d41e.jpg",height:3288,width:5120,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAoFv/xAAeEAAABQUBAAAAAAAAAAAAAAABAgMRQQAEBRITIf/aAAgBAQABPwBfJ3SGxXKZluQ+BM1//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/AB0L/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEhMf/aAAgBAwEBPwBzD//Z",blurWidth:8,blurHeight:5}}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,206,916,99,810],()=>s(1216));module.exports=r})();