(()=>{var e={};e.id=401,e.ids=[401],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3849:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},6764:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>o}),t(7709),t(8295),t(5866);var s=t(3191),r=t(8716),i=t(7922),l=t.n(i),n=t(5231),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);t.d(a,d);let o=["",{children:["biodata",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,7709)),"C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\biodata\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,8295)),"C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\Adhyasta\\Desktop\\CAT Peserta\\cat-peserta\\src\\app\\biodata\\page.jsx"],m="/biodata/page",u={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/biodata/page",pathname:"/biodata",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},3837:(e,a,t)=>{let s={"2a673556949009e3829133e84d3506865f3bdfd2":()=>Promise.resolve().then(t.bind(t,8451)).then(e=>e.default)};async function r(e,...a){return(await s[e]()).apply(null,a)}e.exports={"2a673556949009e3829133e84d3506865f3bdfd2":r.bind(null,"2a673556949009e3829133e84d3506865f3bdfd2")}},5279:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},6671:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,2481,23))},5509:(e,a,t)=>{Promise.resolve().then(t.bind(t,5852))},5852:(e,a,t)=>{"use strict";t.d(a,{default:()=>u});var s=t(326);t(5424);let r=(0,t(6242).$)("2a673556949009e3829133e84d3506865f3bdfd2");var i=t(123);let l=(0,i.Ry)({nomor_ujian:(0,i.Z_)().required("Nomor Ujian Harus Diisi"),nama_lengkap:(0,i.Z_)().required("Nama Lengkap Harus Diisi"),jenis_kelamin:(0,i.Z_)().required("Jenis Kelamin Harus Diisi"),pendidikan_terakhir:(0,i.Z_)().required("Pendidikan Terakhir Harus Diisi"),alamat:(0,i.Z_)().required("Alamat Harus Diisi"),kode_desa:(0,i.Rx)().required("Kode Desa Harus Diisi")});var n=t(6981),d=t(1774),o=t(5047),c=t(7577),m=t(4723);let u=()=>{let{login:e}=(0,n.Z)(),a=(0,o.useRouter)(),[t,i]=(0,c.useState)(""),[u,p]=(0,c.useState)(!1),{register:x,handleSubmit:h,control:b,formState:{errors:j}}=(0,m.cI)({resolver:(0,d.X)(l)}),k=h(async t=>{p(!0),i("");try{let s=await r(t);e(s),a.push("/sesi")}catch(e){i(e.message||"Terjadi kesalahan, silakan coba lagi.")}finally{p(!1)}});return s.jsx("div",{className:"flex items-center justify-center",children:(0,s.jsxs)("form",{onSubmit:k,className:"bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg",children:[(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Nomor Ujian:"}),s.jsx("input",{type:"text",...x("nomor_ujian"),className:`input input-bordered w-full ${j.nomor_ujian?"input-error":""}`,placeholder:"001"}),j.nomor_ujian&&s.jsx("p",{className:"text-red-500 text-xs italic",children:j.nomor_ujian.message})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Nama Lengkap:"}),s.jsx("input",{type:"text",...x("nama_lengkap"),className:`input input-bordered w-full ${j.nama_lengkap?"input-error":""}`,placeholder:"James Theo"}),j.nama_lengkap&&s.jsx("p",{className:"text-red-500 text-xs italic",children:j.nama_lengkap.message})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Jenis Kelamin:"}),[{label:"Laki-Laki",value:"Laki-Laki"},{label:"Perempuan",value:"Perempuan"}].map((e,a)=>(0,s.jsxs)("div",{className:"flex items-center mb-2",children:[s.jsx("input",{id:`jenis_kelamin_${a}`,type:"radio",value:e.value,...x("jenis_kelamin"),className:"radio radio-primary"}),s.jsx("label",{htmlFor:`jenis_kelamin_${a}`,className:"ml-2",children:e.label})]},a)),j.jenis_kelamin&&s.jsx("p",{className:"text-red-500 text-xs italic",children:j.jenis_kelamin.message})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Pendidikan Terakhir:"}),[{label:"SMA/Sederajat",value:"SMA/Sederajat"},{label:"S1",value:"S1"},{label:"S2",value:"S2"}].map((e,a)=>(0,s.jsxs)("div",{className:"flex items-center mb-2",children:[s.jsx("input",{id:`pendidikan_terakhir_${a}`,type:"radio",value:e.value,...x("pendidikan_terakhir"),className:"radio radio-primary"}),s.jsx("label",{htmlFor:`pendidikan_terakhir_${a}`,className:"ml-2",children:e.label})]},a)),j.pendidikan_terakhir&&s.jsx("p",{className:"text-red-500 text-xs italic",children:j.pendidikan_terakhir.message})]}),(0,s.jsxs)("div",{className:"mb-6",children:[s.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"alamat",children:"Alamat:"}),s.jsx("input",{type:"text",...x("alamat"),className:`input input-bordered w-full ${j.alamat?"input-error":""}`,placeholder:"Jl. Melati 14 No. 102"}),j.alamat&&s.jsx("p",{className:"text-red-500 text-xs italic",children:j.alamat.message})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Desa:"}),(0,s.jsxs)("select",{...x("kode_desa"),defaultValue:1,className:`select select-bordered w-full ${j.kode_desa?"select-error":""}`,children:[s.jsx("option",{value:"",children:"Pilih Nama Desa"}),[{label:"Desa Harjasari",value:1},{label:"Desa Suradadi",value:2}].map(e=>s.jsx("option",{value:e.value,children:e.label},e.value))]}),j.kode_desa&&s.jsx("p",{className:"text-red-500 text-xs italic",children:j.kode_desa.message})]}),s.jsx("div",{className:"flex items-center justify-between",children:s.jsx("button",{type:"submit",className:"btn btn-primary bg-third text-white w-full",disabled:u,children:u?"Loading...":"Kirim"})}),t&&s.jsx("p",{className:"text-red-500 text-xs italic mb-4",children:t})]})})}},6981:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});var s=t(551),r=t(5251);let i=(0,s.Ue)((0,r.tJ)(e=>({noUjian:null,namaLengkap:null,gender:null,pendidikanTerakhir:null,alamat:null,kodeDesa:null,isAuth:!1,login:a=>{e({noUjian:a.noUjian,namaLengkap:a.namaLengkap,gender:a.gender,pendidikanTerakhir:a.pendidikanTerakhir,alamat:a.alamat,kodeDesa:a.kodeDesa,isAuth:!0})},logout:()=>{e({noUjian:null,namaLengkap:null,gender:null,pendidikanTerakhir:null,alamat:null,kodeDesa:null,isAuth:!1})}}),{name:"auth-store"}))},8451:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>n});var s=t(7745);t(6461);var r=t(4843),i=t(5723);let l=async e=>{try{let a=await r.default.post("http://18.141.142.63:8080/biodata",{noUjian:e.nomor_ujian,namaLengkap:e.nama_lengkap,gender:e.jenis_kelamin,pendidikanTerakhir:e.pendidikan_terakhir,alamat:e.alamat,kodeDesa:e.kode_desa});return a?.data?.user}catch(e){throw Error(e.response?.data?.message||"Failed to submit data")}},n=l;(0,i.ensureServerEntryExports)([l]),(0,s.registerServerReference)("2a673556949009e3829133e84d3506865f3bdfd2",l)},7709:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>i});var s=t(9510),r=t(6172);let i=()=>(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center h-screen mt-12",children:[s.jsx("h1",{className:"text-2xl font-bold",children:"Isi Biodata Diri Peserta"}),s.jsx("div",{className:"w-full max-w-md",children:s.jsx(r.ZP,{})})]})},8295:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>d,metadata:()=>n});var s=t(9510),r=t(7167),i=t.n(r),l=t(7710);t(5023);let n={title:"Selamat Datang di Tes CAT Kecamatan Suradadi",description:"Website tes CAT",icons:{icon:"./favicon.ico"}};function d({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:i().className,children:[(0,s.jsxs)("nav",{className:"navbar bg-third text-white justify-between flex px-10 py-6",children:[s.jsx(l.default,{src:"/Logo_Kabupaten_Tegal.png",width:150,height:150,alt:"Logo Kabupaten Tegal"}),(0,s.jsxs)("a",{className:"text-2xl font-bold text-stroke",children:["PANITIA PENGANGKATAN PERANGKAT DESA ",s.jsx("br",{})," KECAMATAN SURADADI KABUPATEN TEGAL"]})]}),e]})})}},6172:(e,a,t)=>{"use strict";t.d(a,{ZP:()=>n});var s=t(8570);let r=(0,s.createProxy)(String.raw`C:\Users\Adhyasta\Desktop\CAT Peserta\cat-peserta\src\components\form\form.jsx`),{__esModule:i,$$typeof:l}=r;r.default;let n=(0,s.createProxy)(String.raw`C:\Users\Adhyasta\Desktop\CAT Peserta\cat-peserta\src\components\form\form.jsx#default`)},3881:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>r});var s=t(6621);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var a=require("../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),s=a.X(0,[948,206,916,723,899,600],()=>t(6764));module.exports=s})();