(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{4156:function(e,t,a){Promise.resolve().then(a.bind(a,5285))},5285:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i}});var r=a(7437),s=a(2265),n=a(8472),l=a(6463),o=a(2234);function i(){let[e,t]=(0,s.useState)(1),[a,i]=(0,s.useState)([]),[c,d]=(0,s.useState)(!1),[h,x]=(0,s.useState)(null),m=(0,o.Z)(e=>e.logout),u=(0,l.useRouter)();async function b(){try{let t=await fetch("http://54.251.182.133:8080/export-nilai?kodeDesa=".concat(e),{method:"GET"});if(!t.ok)throw Error("Network response was not ok");let a=await t.blob(),r=window.URL.createObjectURL(a),s=document.createElement("a");s.href=r;let n=t.headers.get("Content-Disposition"),l="data_desa_".concat(1===e?"harjasari":"suradadi",".xlsx");if(n){let e=n.match(/filename="(.+)"/);e[1]&&(l=e[1])}s.setAttribute("download",l),document.body.appendChild(s),s.click(),s.parentNode.removeChild(s)}catch(e){console.error("Error downloading the file:",e),alert("Gagal Mendownload Data")}}(0,s.useEffect)(()=>{(async()=>{d(!0),x(null);try{let t=await n.Z.get("http://54.251.182.133:8080/data-desa",{params:{kodeDesa:e}});if(t.data&&t.data.data)i(t.data.data);else throw Error("Data format is incorrect")}catch(e){x("Failed to fetch data")}finally{d(!1)}})()},[e]);let p=e=>{n.Z.get("http://54.251.182.133:8080/download/".concat(e),{responseType:"blob"}).then(t=>{let a=t.headers["content-disposition"],r=e;if(a){let e=a.match(/filename="?(.+)"?/);e.length>1&&(r=e[1])}let s=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=s,n.setAttribute("download",r),document.body.appendChild(n),n.click(),n.remove()}).catch(e=>{console.error("Error downloading the file:",e)})},f=e=>{e?p(e):console.error("Filename is missing")};return(0,r.jsxs)("div",{className:"container mx-auto p-4",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold",children:"Data Nilai Peserta Tiap Desa"}),(0,r.jsx)("button",{onClick:()=>{m(),u.push("/")},className:"bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700",children:"Logout"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("button",{onClick:()=>t(1),className:"px-4 py-2 mr-2 rounded ".concat(1===e?"bg-blue-600 text-white":"bg-gray-200"),children:"Desa Harjasari"}),(0,r.jsx)("button",{onClick:()=>t(2),className:"px-4 py-2 mr-2 rounded ".concat(2===e?"bg-blue-600 text-white":"bg-gray-200"),children:"Desa Suradadi"}),(0,r.jsx)("button",{onClick:()=>t(3),className:"px-4 py-2 mr-2 rounded ".concat(3===e?"bg-blue-600 text-white":"bg-gray-200"),children:"Desa Simulasi"})]}),(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)("button",{onClick:b,className:"bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",children:"Download Data Excel"})}),c?(0,r.jsx)("p",{}):h?(0,r.jsx)("p",{className:"text-red-500",children:h}):(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"min-w-full bg-white border border-gray-200",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"py-2 px-4 border-b",children:"Nama Lengkap"}),(0,r.jsx)("th",{className:"py-2 px-4 border-b",children:"Nama Desa"}),(0,r.jsx)("th",{className:"py-2 px-4 border-b",children:"Nilai"}),(0,r.jsx)("th",{className:"py-2 px-4 border-b",children:"File Docx"}),(0,r.jsx)("th",{className:"py-2 px-4 border-b",children:"File Xlsx"})]})}),(0,r.jsx)("tbody",{children:a.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"py-2 px-4 border-b text-center",children:e.namaLengkap}),(0,r.jsx)("td",{className:"py-2 px-4 border-b text-center",children:e.namaDesa}),(0,r.jsx)("td",{className:"py-2 px-4 border-b text-center",children:e.nilai}),(0,r.jsx)("td",{className:"py-2 px-4 border-b",children:(0,r.jsx)("button",{onClick:()=>f(e.filenameDocx),className:"text-blue-600 hover:underline",children:e.filenameDocx})}),(0,r.jsx)("td",{className:"py-2 px-4 border-b",children:(0,r.jsx)("button",{onClick:()=>f(e.filenameXlsx),className:"text-blue-600 hover:underline",children:e.filenameXlsx})})]},e._id))})]})})]})}},2234:function(e,t,a){"use strict";var r=a(9099),s=a(9291);let n=(0,r.Ue)((0,s.tJ)(e=>({username:"",password:"",isAuthAdmin:!1,login:(t,a)=>e({username:t,password:a,isAuthAdmin:!0}),logout:()=>e({username:"",password:"",isAuthAdmin:!1})}),{name:"auth-admin-storage"}));t.Z=n}},function(e){e.O(0,[461,472,971,23,744],function(){return e(e.s=4156)}),_N_E=e.O()}]);