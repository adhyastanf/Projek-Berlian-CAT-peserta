(()=>{var e={};e.id=3,e.ids=[3],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},83:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d}),r(5468),r(1466),r(8295),r(5866);var a=r(3191),s=r(8716),n=r(7922),i=r.n(n),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5468)),"D:\\Proj\\ProjectCAT\\fe\\Projek-Berlian-CAT-peserta\\src\\app\\admin\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,1466)),"D:\\Proj\\ProjectCAT\\fe\\Projek-Berlian-CAT-peserta\\src\\app\\admin\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,8295)),"D:\\Proj\\ProjectCAT\\fe\\Projek-Berlian-CAT-peserta\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Proj\\ProjectCAT\\fe\\Projek-Berlian-CAT-peserta\\src\\app\\admin\\page.jsx"],u="/admin/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/admin/page",pathname:"/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4525:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},876:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2481,23))},891:(e,t,r)=>{Promise.resolve().then(r.bind(r,6043))},1966:(e,t,r)=>{Promise.resolve().then(r.bind(r,5135)),Promise.resolve().then(r.bind(r,730))},6043:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(326),s=r(7577),n=r(5047),i=r(2759);function o(){let[e,t]=(0,s.useState)(1),[r,o]=(0,s.useState)([]),[l,d]=(0,s.useState)(!1),[c,u]=(0,s.useState)(null),p=(0,i.Z)(e=>e.logout),x=(0,n.useRouter)();async function m(){try{let t=await fetch(`http://3.0.20.136:8080/export-nilai?kodeDesa=${e}`,{method:"GET"});if(!t.ok)throw Error("Network response was not ok");let r=await t.blob(),a=window.URL.createObjectURL(r),s=document.createElement("a");s.href=a;let n=t.headers.get("Content-Disposition"),i=`data_desa_${1===e?"harjasari":"suradadi"}.xlsx`;if(n){let e=n.match(/filename="(.+)"/);e[1]&&(i=e[1])}s.setAttribute("download",i),document.body.appendChild(s),s.click(),s.parentNode.removeChild(s)}catch(e){console.error("Error downloading the file:",e),alert("Gagal Mendownload Data")}}return(0,a.jsxs)("div",{className:"container mx-auto p-4",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[a.jsx("h2",{className:"text-2xl font-bold",children:"Data Nilai Peserta Tiap Desa"}),a.jsx("button",{onClick:()=>{p(),x.push("/")},className:"bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700",children:"Logout"})]}),(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("button",{onClick:()=>t(1),className:`px-4 py-2 mr-2 rounded ${1===e?"bg-blue-600 text-white":"bg-gray-200"}`,children:"Desa Harjasari"}),a.jsx("button",{onClick:()=>t(2),className:`px-4 py-2 rounded ${2===e?"bg-blue-600 text-white":"bg-gray-200"}`,children:"Desa Suradadi"})]}),a.jsx("div",{className:"mb-4",children:a.jsx("button",{onClick:m,className:"bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",children:"Download Data Excel"})}),l?a.jsx("p",{}):c?a.jsx("p",{className:"text-red-500",children:c}):a.jsx("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"min-w-full bg-white border border-gray-200",children:[a.jsx("thead",{children:(0,a.jsxs)("tr",{children:[a.jsx("th",{className:"py-2 px-4 border-b",children:"Nama Lengkap"}),a.jsx("th",{className:"py-2 px-4 border-b",children:"Nama Desa"}),a.jsx("th",{className:"py-2 px-4 border-b",children:"Nilai"}),a.jsx("th",{className:"py-2 px-4 border-b",children:"File Docx"}),a.jsx("th",{className:"py-2 px-4 border-b",children:"File Xlsx"})]})}),a.jsx("tbody",{children:r.map(e=>(0,a.jsxs)("tr",{children:[a.jsx("td",{className:"py-2 px-4 border-b text-center",children:e.namaLengkap}),a.jsx("td",{className:"py-2 px-4 border-b text-center",children:e.namaDesa}),a.jsx("td",{className:"py-2 px-4 border-b text-center",children:e.nilai}),a.jsx("td",{className:"py-2 px-4 border-b",children:a.jsx("button",{onClick:()=>handleDownload(e.filenameDocx),className:"text-blue-600 hover:underline",children:e.filenameDocx})}),a.jsx("td",{className:"py-2 px-4 border-b",children:a.jsx("button",{onClick:()=>handleDownload(e.filenameXlsx),className:"text-blue-600 hover:underline",children:e.filenameXlsx})})]},e._id))})]})})]})}},5135:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(5047),s=r(7577),n=r(2759);let i=({children:e})=>{let{isAuthAdmin:t}=(0,n.Z)(),[r,i]=(0,s.useState)(!1),o=(0,a.useRouter)();return((0,s.useEffect)(()=>{i(!0)},[]),(0,s.useEffect)(()=>{if(r){let e="/admin/login"===o.pathname,r="/"===o.pathname;t||e||r||o.replace("/admin/login")}},[t,r,o]),r)?e:null}},730:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var a=r(326),s=r(7577);let n=({children:e})=>{let[t,r]=(0,s.useState)(!0);return((0,s.useEffect)(()=>{let e=setTimeout(()=>{r(!1)},1e3);return()=>clearTimeout(e)},[]),t)?(0,a.jsxs)("div",{className:"flex items-center justify-center h-screen",children:[a.jsx("div",{className:"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"}),a.jsx("span",{className:"ml-2",children:"Loading..."})]}):e}},2759:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(551),s=r(5251);let n=(0,a.Ue)((0,s.tJ)(e=>({username:"",password:"",isAuthAdmin:!1,login:(t,r)=>e({username:t,password:r,isAuthAdmin:!0}),logout:()=>e({username:"",password:"",isAuthAdmin:!1})}),{name:"auth-admin-storage"}))},1466:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(9510),s=r(8570);let n=(0,s.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\components\adminProtectedRoute.js`),{__esModule:i,$$typeof:o}=n;n.default;let l=(0,s.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\components\adminProtectedRoute.js#default`);var d=r(5470);function c({children:e}){return a.jsx(l,{children:a.jsx(d.ZP,{children:e})})}},5468:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var a=r(8570);let s=(0,a.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\app\admin\page.jsx`),{__esModule:n,$$typeof:i}=s;s.default;let o=(0,a.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\app\admin\page.jsx#default`)},8295:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,metadata:()=>o});var a=r(9510),s=r(7167),n=r.n(s),i=r(7710);r(5023);let o={title:"Selamat Datang di Tes CAT Kecamatan Surajadi",description:"Website tes CAT",icons:{icon:"./favicon.ico"}};function l({children:e}){return a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{className:n().className,children:[(0,a.jsxs)("nav",{className:"navbar bg-third text-white justify-between flex px-10 py-6",children:[a.jsx(i.default,{src:"/Logo_Kabupaten_Tegal.png",width:150,height:150,alt:"Logo Kabupaten Tegal"}),(0,a.jsxs)("a",{className:"text-2xl font-bold text-stroke",children:["PANITIA PENGANGKATAN PERANGKAT DESA ",a.jsx("br",{})," KECAMATAN SURADADI KABUPATEN TEGAL"]})]}),e]})})}},5470:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>o});var a=r(8570);let s=(0,a.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\components\pageLoader.jsx`),{__esModule:n,$$typeof:i}=s;s.default;let o=(0,a.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\components\pageLoader.jsx#default`)},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(6621);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,206,916],()=>r(83));module.exports=a})();