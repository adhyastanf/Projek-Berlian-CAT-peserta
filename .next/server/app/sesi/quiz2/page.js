(()=>{var e={};e.id=177,e.ids=[177],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},3480:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c}),r(2175),r(3611),r(2005),r(8295),r(5866);var s=r(3191),a=r(8716),i=r(7922),l=r.n(i),n=r(5231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let c=["",{children:["sesi",{children:["quiz2",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2175)),"D:\\Proj\\ProjectCAT\\fe\\Projek-Berlian-CAT-peserta\\src\\app\\sesi\\quiz2\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,3611)),"D:\\Proj\\ProjectCAT\\fe\\Projek-Berlian-CAT-peserta\\src\\app\\sesi\\quiz2\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,2005)),"D:\\Proj\\ProjectCAT\\fe\\Projek-Berlian-CAT-peserta\\src\\app\\sesi\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,8295)),"D:\\Proj\\ProjectCAT\\fe\\Projek-Berlian-CAT-peserta\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Proj\\ProjectCAT\\fe\\Projek-Berlian-CAT-peserta\\src\\app\\sesi\\quiz2\\page.jsx"],u="/sesi/quiz2/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/sesi/quiz2/page",pathname:"/sesi/quiz2",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1496:(e,t,r)=>{Promise.resolve().then(r.bind(r,8977))},9007:(e,t,r)=>{Promise.resolve().then(r.bind(r,2802))},8977:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var s=r(326),a=r(6426),i=r(4723),l=r(1774),n=r(123);let o=["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","text/csv"],c=(0,n.Ry)().shape({file:(0,n.nK)().required("File is required").test("fileType","Unsupported File Format",e=>!e.length||e&&o.includes(e[0].type))});var d=r(4099),u=r(7577),p=r(5047),x=r(6981);let m=({data:e})=>{let{goNextQuestion:t,goPreviousQuestion:r,onCompleteQuestions:n,currentQuestion:o,questions:m,saveUploadedFileName:f,isLoading:h,setLoading:j,markQuestionAsAnswered:g}=(0,a.Z)(),{noUjian:v,kodeDesa:y}=(0,x.Z)(),b=(0,p.useRouter)(),{register:w,handleSubmit:P,formState:{errors:q},setValue:k,reset:C}=(0,i.cI)({resolver:(0,l.X)(c)});(0,u.useEffect)(()=>{let e=localStorage.getItem(`uploadedFile-${o}`);e&&(k("file",{name:e}),f(e))},[o,k,f]);let A=async e=>{if(e.file.length){let t=new FormData;t.append("file",e.file[0]),t.append("noUjian",v),t.append("kodeDesa",y),t.append("tipeSoal",e.file[0].name.split(".").pop()),j(!0);try{let{fileName:e}=(await d.Z.post("http://3.0.20.136:8080/upload",t,{headers:{"Content-Type":"multipart/form-data"}})).data;f(e),g(o),localStorage.setItem(`uploadedFile-${o}`,e)}catch(e){console.error("Error uploading file:",e)}finally{j(!1)}}},N=async e=>{await A(e)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("form",{onSubmit:P(N),className:"flex flex-col gap-y-4 justify-center w-full",children:[o+1===1&&s.jsx("a",{href:e?.linkFile,className:"btn btn-primary text-white mb-14",children:"DOWNLOAD FILE"}),s.jsx("input",{type:"file",accept:".doc,.docx,.xls,.xlsx,.csv",...w("file"),className:`file-input file-input-bordered w-full ${q.file?"border-red-500":""}`,disabled:h}),q.file&&s.jsx("p",{className:"text-red-500 text-sm",children:q.file.message}),s.jsx("button",{type:"submit",className:"btn btn-primary bg-third text-white mt-2 self-center",disabled:h,children:h?"Mengirim Jawaban...":"Kirim Jawaban"}),s.jsx("p",{className:"text-xs",children:"Klik Tombol Kirim Jawaban Supaya Jawaban disimpan"})]}),(0,s.jsxs)("div",{className:"flex justify-between mt-4",children:[s.jsx("button",{onClick:()=>{r(),C()},disabled:0===o||h,className:"btn bg-gray-400 text-white",children:"Kembali"}),s.jsx("button",{onClick:()=>{o+1===m.length?confirm("Apakah anda sudah yakin dengan jawaban anda?")&&(n(v,y),b.push("/sesi")):(t(),C())},className:"bg-purple py-2 px-4 rounded-lg shadow-lg btn-primary bg-third text-white font-semibold text-sm",disabled:h,children:o+1===m.length?"Selesaikan":"Berikutnya"})]})]})};var f=r(6226);let h=({data:e})=>s.jsx("div",{children:s.jsx("h2",{className:"text-dark-blue dark:text-white xs:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold",children:s.jsx(f.default,{src:e?.soalText?.src,height:700,width:700})})}),j=()=>{let{questions:e,currentQuestion:t}=(0,a.Z)(),r=e[t];return(0,s.jsxs)("div",{className:"flex flex-col items-center gap-4 lg:px-6 lg:py-4 w-full",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4 w-full max-w-7xl px-4",children:[(0,s.jsxs)("p",{className:"italic text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300",children:["Pertanyaan ",t+1," dari ",e.length]}),s.jsx(h,{data:r})]}),s.jsx("div",{className:"flex flex-col gap-4 w-full max-w-7xl px-4",children:s.jsx("div",{className:"w-full",children:s.jsx(m,{data:r})})})]})};var g=r(4118);function v(){let{hasCompletedSection2:e,isSection2Locked:t}=(0,a.Z)();return(0,g.Z)({section:2}),s.jsx("div",{children:s.jsx(j,{})})}},2802:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(326),a=r(6426),i=r(5905);let l=function(){let{questions:e,goToQuestion:t}=(0,a.Z)();return(0,s.jsxs)("div",{className:"flex flex-col items-center p-4",children:[s.jsx(i.Z,{section:2}),s.jsx("div",{className:"grid grid-cols-5 gap-2 mt-4 w-full max-w-2xl",children:e.map((e,r)=>s.jsx("div",{onClick:()=>t(r),className:`flex items-center justify-center w-8 h-8 rounded-md text-xs font-semibold cursor-pointer
            ${e.isAnswered?"bg-green-400":"bg-zinc-300"} // Change color if answered
              dark:bg-slate-700 text-dark-blue dark:text-white`,children:r+1},r))})]})}},4118:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(7577),a=r(5047),i=r(6803),l=r(7350),n=r(6426),o=r(6981);let c=({section:e})=>{let t=(0,a.useRouter)(),{getRemainingTime:r,isQuestionPlayable:c}=(0,i.Z)(),{hasCompletedSection1:d,isQuiz1Finished:u,isQuiz1Restricted:p,fetchStatusQuiz:x}=(0,l.Z)(),{hasCompletedSection2:m,isQuiz2Finished:f,isQuiz2Restricted:h,isSection2Locked:j,fetchStatusQuiz2:g}=(0,n.Z)(),{noUjian:v,kodeDesa:y}=(0,o.Z)(),[b,w]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{(async()=>{1===e?await x(v,y):2===e&&await g(v,y),w(!0)})()},[e,v,y,x,g]),(0,s.useEffect)(()=>{if(!b)return;let s=r(e),a=c(e);1===e?(!a||s<=0||u||p)&&t.push("/sesi"):2===e&&(!d||!a||s<=0||j||f||h)&&t.push("/sesi")},[b,e,r,c,d,m,j,u,p,f,h,t]),null}},5905:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s=r(326),a=r(7577),i=r(6803),l=r(7350),n=r(6426),o=r(5047),c=r(6981);let d=({section:e})=>{let t=(0,o.useRouter)(),{fetchRemainingTime:r,getRemainingTime:d,decrementRemainingTime:u}=(0,i.Z)(),{onCompleteQuestions:p}=(0,l.Z)(),{onCompleteQuestions:x}=(0,n.Z)(),{noUjian:m,kodeDesa:f}=(0,c.Z)(),[h,j]=(0,a.useState)(0);(0,a.useEffect)(()=>{if(1!==e&&2!==e){console.error("Invalid section:",e);return}(async()=>{await r(e),j(d(e))})();let s=setInterval(()=>{u(e),j(d(e)),0>=d(e)&&(clearInterval(s),1===e?p(m,f):2===e&&x(m,f),t.push("/sesi"))},1e3);return()=>clearInterval(s)},[r,d,e,p,x,m,f,t]);let{days:g,hours:v,minutes:y,seconds:b}=null===h?{days:0,hours:0,minutes:0,seconds:0}:{days:Math.floor(h/864e5),hours:Math.floor(h%864e5/36e5),minutes:Math.floor(h%36e5/6e4),seconds:Math.floor(h%6e4/1e3)};return(0,s.jsxs)("div",{className:"countdown font-mono text-2xl",children:[s.jsx("span",{style:{"--value":g},children:g.toString().padStart(2,"0")}),":",s.jsx("span",{style:{"--value":v},children:v.toString().padStart(2,"0")}),":",s.jsx("span",{style:{"--value":y},children:y.toString().padStart(2,"0")}),":",s.jsx("span",{style:{"--value":b},children:b.toString().padStart(2,"0")})]})}},3611:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(9510),a=r(8570);let i=(0,a.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\components\form\RightBar2.jsx`),{__esModule:l,$$typeof:n}=i;i.default;let o=(0,a.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\components\form\RightBar2.jsx#default`),c=({children:e})=>(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between px-4 lg:px-20",children:[s.jsx("div",{className:"flex-1 w-full lg:w-auto",children:e}),s.jsx("div",{className:"w-full lg:w-[250px] mt-4 lg:mt-0",children:s.jsx(o,{})})]})},2175:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>l,__esModule:()=>i,default:()=>n});var s=r(8570);let a=(0,s.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\app\sesi\quiz2\page.jsx`),{__esModule:i,$$typeof:l}=a;a.default;let n=(0,s.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\app\sesi\quiz2\page.jsx#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,206,916,99,723,899,583],()=>r(3480));module.exports=s})();