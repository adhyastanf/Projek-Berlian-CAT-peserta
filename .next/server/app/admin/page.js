(()=>{var e={};e.id=3,e.ids=[3],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3849:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},6793:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d}),s(5468),s(1466),s(8295),s(5866);var r=s(3191),a=s(8716),n=s(7922),i=s.n(n),o=s(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5468)),"C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\admin\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,1466)),"C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\admin\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,8295)),"C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\admin\\page.jsx"],u="/admin/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/admin/page",pathname:"/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5279:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},6671:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2481,23))},5650:(e,t,s)=>{Promise.resolve().then(s.bind(s,6043))},7585:(e,t,s)=>{Promise.resolve().then(s.bind(s,5135)),Promise.resolve().then(s.bind(s,730))},6043:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(326),a=s(7577),n=s(4099),i=s(5047),o=s(2759);function l(){let[e,t]=(0,a.useState)(1),[s,l]=(0,a.useState)([]),[d,c]=(0,a.useState)(!1),[u,p]=(0,a.useState)(null),x=(0,o.Z)(e=>e.logout),m=(0,i.useRouter)();async function h(){try{let t=await fetch(`http://18.141.142.63:8080/export-nilai?kodeDesa=${e}`,{method:"GET"});if(!t.ok)throw Error("Network response was not ok");let s=await t.blob(),r=window.URL.createObjectURL(s),a=document.createElement("a");a.href=r;let n=t.headers.get("Content-Disposition"),i=`data_desa_${1===e?"harjasari":"suradadi"}.xlsx`;if(n){let e=n.match(/filename="(.+)"/);e[1]&&(i=e[1])}a.setAttribute("download",i),document.body.appendChild(a),a.click(),a.parentNode.removeChild(a)}catch(e){console.error("Error downloading the file:",e),alert("Gagal Mendownload Data")}}let b=e=>{n.Z.get(`http://18.141.142.63:8080/download/${e}`,{responseType:"blob"}).then(t=>{let s=t.headers["content-disposition"],r=e;if(s){let e=s.match(/filename="?(.+)"?/);e.length>1&&(r=e[1])}let a=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=a,n.setAttribute("download",r),document.body.appendChild(n),n.click(),n.remove()}).catch(e=>{console.error("Error downloading the file:",e)})},g=e=>{e?b(e):console.error("Filename is missing")};return(0,r.jsxs)("div",{className:"container mx-auto p-4",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[r.jsx("h2",{className:"text-2xl font-bold",children:"Data Nilai Peserta Tiap Desa"}),r.jsx("button",{onClick:()=>{x(),m.push("/")},className:"bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700",children:"Logout"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("button",{onClick:()=>t(1),className:`px-4 py-2 mr-2 rounded ${1===e?"bg-blue-600 text-white":"bg-gray-200"}`,children:"Desa Harjasari"}),r.jsx("button",{onClick:()=>t(2),className:`px-4 py-2 mr-2 rounded ${2===e?"bg-blue-600 text-white":"bg-gray-200"}`,children:"Desa Suradadi"}),r.jsx("button",{onClick:()=>t(3),className:`px-4 py-2 mr-2 rounded ${3===e?"bg-blue-600 text-white":"bg-gray-200"}`,children:"Desa Simulasi"})]}),r.jsx("div",{className:"mb-4",children:r.jsx("button",{onClick:h,className:"bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",children:"Download Data Excel"})}),d?r.jsx("p",{}):u?r.jsx("p",{className:"text-red-500",children:u}):r.jsx("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"min-w-full bg-white border border-gray-200",children:[r.jsx("thead",{children:(0,r.jsxs)("tr",{children:[r.jsx("th",{className:"py-2 px-4 border-b",children:"Nama Lengkap"}),r.jsx("th",{className:"py-2 px-4 border-b",children:"Nama Desa"}),r.jsx("th",{className:"py-2 px-4 border-b",children:"Nilai"}),r.jsx("th",{className:"py-2 px-4 border-b",children:"File Docx"}),r.jsx("th",{className:"py-2 px-4 border-b",children:"File Xlsx"})]})}),r.jsx("tbody",{children:s.map(e=>(0,r.jsxs)("tr",{children:[r.jsx("td",{className:"py-2 px-4 border-b text-center",children:e.namaLengkap}),r.jsx("td",{className:"py-2 px-4 border-b text-center",children:e.namaDesa}),r.jsx("td",{className:"py-2 px-4 border-b text-center",children:e.nilai}),r.jsx("td",{className:"py-2 px-4 border-b",children:r.jsx("button",{onClick:()=>g(e.filenameDocx),className:"text-blue-600 hover:underline",children:e.filenameDocx})}),r.jsx("td",{className:"py-2 px-4 border-b",children:r.jsx("button",{onClick:()=>g(e.filenameXlsx),className:"text-blue-600 hover:underline",children:e.filenameXlsx})})]},e._id))})]})})]})}},5135:(e,t,s)=>{"use strict";s.d(t,{default:()=>i});var r=s(5047),a=s(7577),n=s(2759);let i=({children:e})=>{let{isAuthAdmin:t}=(0,n.Z)(),[s,i]=(0,a.useState)(!1),o=(0,r.useRouter)();return((0,a.useEffect)(()=>{i(!0)},[]),(0,a.useEffect)(()=>{if(s){let e="/admin/login"===o.pathname,s="/"===o.pathname;t||e||s||o.replace("/admin/login")}},[t,s,o]),s)?e:null}},730:(e,t,s)=>{"use strict";s.d(t,{default:()=>n});var r=s(326),a=s(7577);let n=({children:e})=>{let[t,s]=(0,a.useState)(!0);return((0,a.useEffect)(()=>{let e=setTimeout(()=>{s(!1)},2e3);return()=>clearTimeout(e)},[]),t)?(0,r.jsxs)("div",{className:"flex items-center justify-center h-screen",children:[r.jsx("div",{className:"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"}),r.jsx("span",{className:"ml-2",children:"Loading..."})]}):e}},2759:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(551),a=s(5251);let n=(0,r.Ue)((0,a.tJ)(e=>({username:"",password:"",isAuthAdmin:!1,login:(t,s)=>e({username:t,password:s,isAuthAdmin:!0}),logout:()=>e({username:"",password:"",isAuthAdmin:!1})}),{name:"auth-admin-storage"}))},1466:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(9510),a=s(8570);let n=(0,a.createProxy)(String.raw`C:\Users\Adhyasta\Desktop\CAT Peserta\cat-peserta\src\components\adminProtectedRoute.js`),{__esModule:i,$$typeof:o}=n;n.default;let l=(0,a.createProxy)(String.raw`C:\Users\Adhyasta\Desktop\CAT Peserta\cat-peserta\src\components\adminProtectedRoute.js#default`);var d=s(5470);function c({children:e}){return r.jsx(l,{children:r.jsx(d.ZP,{children:e})})}},5468:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var r=s(8570);let a=(0,r.createProxy)(String.raw`C:\Users\Adhyasta\Desktop\CAT Peserta\cat-peserta\src\app\admin\page.jsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,r.createProxy)(String.raw`C:\Users\Adhyasta\Desktop\CAT Peserta\cat-peserta\src\app\admin\page.jsx#default`)},8295:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l,metadata:()=>o});var r=s(9510),a=s(7167),n=s.n(a),i=s(7710);s(5023);let o={title:"Selamat Datang di Tes CAT Kecamatan Suradadi",description:"Website tes CAT",icons:{icon:"./favicon.ico"}};function l({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:n().className,children:[(0,r.jsxs)("nav",{className:"navbar bg-third text-white justify-between flex px-10 py-6",children:[r.jsx(i.default,{src:"/Logo_Kabupaten_Tegal.png",width:150,height:150,alt:"Logo Kabupaten Tegal"}),(0,r.jsxs)("a",{className:"text-2xl font-bold text-stroke",children:["PANITIA PENGANGKATAN PERANGKAT DESA ",r.jsx("br",{})," KECAMATAN SURADADI KABUPATEN TEGAL"]})]}),e]})})}},5470:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>o});var r=s(8570);let a=(0,r.createProxy)(String.raw`C:\Users\Adhyasta\Desktop\CAT Peserta\cat-peserta\src\components\pageLoader.jsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,r.createProxy)(String.raw`C:\Users\Adhyasta\Desktop\CAT Peserta\cat-peserta\src\components\pageLoader.jsx#default`)},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,206,916,99],()=>s(6793));module.exports=r})();