(()=>{var e={};e.id=177,e.ids=[177],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3849:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},7916:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>x,tree:()=>c}),s(2175),s(3611),s(2005),s(8295),s(5866);var r=s(3191),a=s(8716),i=s(7922),l=s.n(i),n=s(5231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let c=["",{children:["sesi",{children:["quiz2",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2175)),"C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\sesi\\quiz2\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,3611)),"C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\sesi\\quiz2\\layout.jsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,2005)),"C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\sesi\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,8295)),"C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\sesi\\quiz2\\page.jsx"],p="/sesi/quiz2/page",u={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/sesi/quiz2/page",pathname:"/sesi/quiz2",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5193:(e,t,s)=>{Promise.resolve().then(s.bind(s,8977))},8479:(e,t,s)=>{Promise.resolve().then(s.bind(s,2802))},8977:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>w});var r=s(326),a=s(9505),i=s(4723),l=s(1774),n=s(123);let o=["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","text/csv"],c=(0,n.Ry)().shape({file:(0,n.nK)().required("File is required").test("fileType","Unsupported File Format",e=>!e.length||e&&o.includes(e[0].type))});var d=s(4099),p=s(7577),u=s(5047),x=s(6981);let m=({data:e})=>{let{goNextQuestion:t,goPreviousQuestion:s,onCompleteQuestions:n,currentQuestion:o,questions:m,saveUploadedFileName:h,isLoading:f,setLoading:g,markQuestionAsAnswered:y}=(0,a.Z)(),{noUjian:w,kodeDesa:b}=(0,x.Z)(),j=(0,u.useRouter)(),{register:v,handleSubmit:q,formState:{errors:P},setValue:A,reset:C}=(0,i.cI)({resolver:(0,l.X)(c)});(0,p.useEffect)(()=>{let e=localStorage.getItem(`uploadedFile-${o}`);e&&(A("file",{name:e}),h(e))},[o,A,h]);let k=async(e,t)=>{if(e.file.length){let s=new FormData;s.append("file",e.file[0]),s.append("noUjian",w),s.append("kodeDesa",b),s.append("tipeSoal",0===t?"docx":"xlsx"),g(!0);try{let{fileName:e}=(await d.Z.post("http://18.141.142.63:8080/upload",s,{headers:{"Content-Type":"multipart/form-data"}})).data;h(e),y(o),localStorage.setItem(`uploadedFile-${o}`,e)}catch(e){console.error("Error uploading file:",e)}finally{g(!1)}}},N=async e=>{await k(e,o)};async function S(){try{let e=await fetch("http://18.141.142.63:8080/download/NAMA_Simulasi.docx",{method:"GET"});if(!e.ok)throw Error("Network response was not ok");let t=await e.blob(),s=window.URL.createObjectURL(t),r=document.createElement("a");r.href=s;let a=e.headers.get("Content-Disposition"),i="NAMA.docx";if(a){let e=a.match(/filename="(.+)"/);e[1]&&(i=e[1])}r.setAttribute("download",i),document.body.appendChild(r),r.click(),r.parentNode.removeChild(r)}catch(e){console.error("Error downloading the file:",e),alert("Gagal Mendownload Data")}}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("form",{onSubmit:q(N),className:"flex flex-col gap-y-4 justify-center w-full",children:[o+1===1&&r.jsx("button",{onClick:S,className:"btn btn-primary text-white mb-14",children:"DOWNLOAD FILE"}),r.jsx("input",{type:"file",accept:".doc,.docx,.xls,.xlsx,.csv",...v("file"),className:`file-input file-input-bordered w-full ${P.file?"border-red-500":""}`,disabled:f}),P.file&&r.jsx("p",{className:"text-red-500 text-sm",children:P.file.message}),r.jsx("button",{type:"submit",className:"btn btn-primary bg-third text-white mt-2 self-center",disabled:f,children:f?"Mengirim Jawaban...":"Kirim Jawaban"}),r.jsx("p",{className:"text-xs",children:"Klik Tombol Kirim Jawaban Supaya Jawaban disimpan"})]}),(0,r.jsxs)("div",{className:"flex justify-between mt-4",children:[r.jsx("button",{onClick:()=>{s(),C()},disabled:0===o||f,className:"btn bg-gray-400 text-white",children:"Kembali"}),r.jsx("button",{onClick:()=>{o+1===m.length?confirm("Apakah anda sudah yakin dengan jawaban anda?")&&(n(w,b),j.push("/sesi")):(t(),C())},className:"bg-purple py-2 px-4 rounded-lg shadow-lg btn-primary bg-third text-white font-semibold text-sm",disabled:f,children:o+1===m.length?"Selesaikan":"Berikutnya"})]})]})};var h=s(6226);let f=({data:e})=>r.jsx("div",{children:r.jsx("h2",{className:"text-dark-blue  xs:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold",children:r.jsx(h.default,{src:e?.soalText?.src,height:700,width:700})})}),g=()=>{let{questions:e,currentQuestion:t}=(0,a.Z)(),s=e[t];return(0,r.jsxs)("div",{className:"flex flex-col items-center gap-4 lg:px-6 lg:py-4 w-full",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-4 w-full max-w-7xl px-4",children:[(0,r.jsxs)("p",{className:"italic text-sm md:text-base lg:text-lg text-gray-700 ",children:["Pertanyaan ",t+1," dari ",e.length]}),r.jsx(f,{data:s})]}),r.jsx("div",{className:"flex flex-col gap-4 w-full max-w-7xl px-4",children:r.jsx("div",{className:"w-full",children:r.jsx(m,{data:s})})})]})};var y=s(4118);function w(){let{hasCompletedSection2:e,isSection2Locked:t}=(0,a.Z)();return(0,y.Z)({section:2}),r.jsx("div",{children:r.jsx(g,{})})}},2802:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var r=s(326),a=s(9505),i=s(5905);let l=function(){let{questions:e,goToQuestion:t}=(0,a.Z)();return(0,r.jsxs)("div",{className:"flex flex-col items-center p-4",children:[r.jsx(i.Z,{section:2}),r.jsx("div",{className:"grid grid-cols-5 gap-2 mt-4 w-full max-w-2xl",children:e.map((e,s)=>r.jsx("div",{onClick:()=>t(s),className:`flex items-center justify-center w-8 h-8 rounded-md text-xs font-semibold cursor-pointer
            ${e.isAnswered?"bg-green-400":"bg-zinc-300"} // Change color if answered
               text-dark-blue `,children:s+1},s))})]})}},4118:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var r=s(7577),a=s(5047),i=s(6803),l=s(7350),n=s(9505),o=s(6981);let c=({section:e})=>{let t=(0,a.useRouter)(),{getRemainingTime:s,isQuestionPlayable:c}=(0,i.Z)(),{hasCompletedSection1:d,isQuiz1Finished:p,isQuiz1Restricted:u,fetchStatusQuiz:x}=(0,l.Z)(),{hasCompletedSection2:m,isQuiz2Finished:h,isQuiz2Restricted:f,isSection2Locked:g,fetchStatusQuiz2:y}=(0,n.Z)(),{noUjian:w,kodeDesa:b}=(0,o.Z)(),[j,v]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{(async()=>{1===e?await x(w,b):2===e&&await y(w,b),v(!0)})()},[e,w,b,x,y]),(0,r.useEffect)(()=>{if(!j)return;let r=s(e),a=c(e);1===e?(!a||r<=0||p||u)&&t.push("/sesi"):2===e&&(!d||!a||r<=0||g||h||f)&&t.push("/sesi")},[j,e,s,c,d,m,g,p,u,h,f,t]),null}},5905:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var r=s(326),a=s(7577),i=s(6803),l=s(7350),n=s(9505),o=s(5047),c=s(6981);let d=({section:e})=>{let t=(0,o.useRouter)(),{fetchRemainingTime:s,getRemainingTime:d,decrementRemainingTime:p}=(0,i.Z)(),{onCompleteQuestions:u}=(0,l.Z)(),{onCompleteQuestions:x}=(0,n.Z)(),{noUjian:m,kodeDesa:h}=(0,c.Z)(),[f,g]=(0,a.useState)(0);(0,a.useEffect)(()=>{if(1!==e&&2!==e){console.error("Invalid section:",e);return}(async()=>{await s(e),g(d(e))})();let r=setInterval(()=>{p(e),g(d(e)),0>=d(e)&&(clearInterval(r),1===e?u(m,h):2===e&&x(m,h),t.push("/sesi"))},1e3);return()=>clearInterval(r)},[s,d,e,u,x,m,h,t]);let{days:y,hours:w,minutes:b,seconds:j}=null===f?{days:0,hours:0,minutes:0,seconds:0}:{days:Math.floor(f/864e5),hours:Math.floor(f%864e5/36e5),minutes:Math.floor(f%36e5/6e4),seconds:Math.floor(f%6e4/1e3)};return(0,r.jsxs)("div",{className:"countdown font-mono text-2xl",children:[r.jsx("span",{style:{"--value":y},children:y.toString().padStart(2,"0")}),":",r.jsx("span",{style:{"--value":w},children:w.toString().padStart(2,"0")}),":",r.jsx("span",{style:{"--value":b},children:b.toString().padStart(2,"0")}),":",r.jsx("span",{style:{"--value":j},children:j.toString().padStart(2,"0")})]})}},3611:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(9510),a=s(8570);let i=(0,a.createProxy)(String.raw`C:\Users\Adhyasta\Desktop\CAT Peserta\cat-peserta\src\components\form\RightBar2.jsx`),{__esModule:l,$$typeof:n}=i;i.default;let o=(0,a.createProxy)(String.raw`C:\Users\Adhyasta\Desktop\CAT Peserta\cat-peserta\src\components\form\RightBar2.jsx#default`),c=({children:e})=>(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between px-4 lg:px-20",children:[r.jsx("div",{className:"flex-1 w-full lg:w-auto",children:e}),r.jsx("div",{className:"w-full lg:w-[250px] mt-4 lg:mt-0",children:r.jsx(o,{})})]})},2175:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>l,__esModule:()=>i,default:()=>n});var r=s(8570);let a=(0,r.createProxy)(String.raw`C:\Users\Adhyasta\Desktop\CAT Peserta\cat-peserta\src\app\sesi\quiz2\page.jsx`),{__esModule:i,$$typeof:l}=a;a.default;let n=(0,r.createProxy)(String.raw`C:\Users\Adhyasta\Desktop\CAT Peserta\cat-peserta\src\app\sesi\quiz2\page.jsx#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,206,916,99,723,899,810],()=>s(7916));module.exports=r})();