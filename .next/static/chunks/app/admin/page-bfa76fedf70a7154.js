(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{9226:function(e,t,a){Promise.resolve().then(a.bind(a,5285))},5285:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var s=a(7437),r=a(2265),n=a(8472),l=a(6463),i=a(2234);function c(){let[e,t]=(0,r.useState)(1),[a,c]=(0,r.useState)([]),[d,o]=(0,r.useState)(!1),[h,x]=(0,r.useState)(null),u=(0,i.Z)(e=>e.logout),m=(0,l.useRouter)();(0,r.useEffect)(()=>{(async()=>{o(!0),x(null);try{let t=await n.Z.get("http://3.0.20.136:8080/data-desa",{params:{kodeDesa:e}});if(t.data&&t.data.data)c(t.data.data);else throw Error("Data format is incorrect")}catch(e){x("Failed to fetch data")}finally{o(!1)}})()},[e]);let b=e=>{n.Z.get("http://3.0.20.136:8080/download/".concat(e),{responseType:"blob"}).then(t=>{let a=t.headers["content-disposition"],s=e;if(a){let e=a.match(/filename="?(.+)"?/);e.length>1&&(s=e[1])}let r=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=r,n.setAttribute("download",s),document.body.appendChild(n),n.click(),n.remove()}).catch(e=>{console.error("Error downloading the file:",e)})},p=e=>{e?b(e):console.error("Filename is missing")};return(0,s.jsxs)("div",{className:"container mx-auto p-4",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold",children:"Data Nilai Peserta Tiap Desa"}),(0,s.jsx)("button",{onClick:()=>{u(),m.push("/")},className:"bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700",children:"Logout"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("button",{onClick:()=>t(1),className:"px-4 py-2 mr-2 rounded ".concat(1===e?"bg-blue-600 text-white":"bg-gray-200"),children:"Desa Harjasari"}),(0,s.jsx)("button",{onClick:()=>t(2),className:"px-4 py-2 rounded ".concat(2===e?"bg-blue-600 text-white":"bg-gray-200"),children:"Desa Suradadi"})]}),d?(0,s.jsx)("p",{}):h?(0,s.jsx)("p",{className:"text-red-500",children:h}):(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"min-w-full bg-white border border-gray-200",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"py-2 px-4 border-b",children:"Nama Lengkap"}),(0,s.jsx)("th",{className:"py-2 px-4 border-b",children:"Nama Desa"}),(0,s.jsx)("th",{className:"py-2 px-4 border-b",children:"Nilai"}),(0,s.jsx)("th",{className:"py-2 px-4 border-b",children:"File Docx"}),(0,s.jsx)("th",{className:"py-2 px-4 border-b",children:"File Xlsx"})]})}),(0,s.jsx)("tbody",{children:a.map(e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-2 px-4 border-b text-center",children:e.namaLengkap}),(0,s.jsx)("td",{className:"py-2 px-4 border-b text-center",children:e.namaDesa}),(0,s.jsx)("td",{className:"py-2 px-4 border-b text-center",children:e.nilai}),(0,s.jsx)("td",{className:"py-2 px-4 border-b",children:(0,s.jsx)("button",{onClick:()=>p(e.filenameDocx),className:"text-blue-600 hover:underline",children:e.filenameDocx})}),(0,s.jsx)("td",{className:"py-2 px-4 border-b",children:(0,s.jsx)("button",{onClick:()=>p(e.filenameXlsx),className:"text-blue-600 hover:underline",children:e.filenameXlsx})})]},e._id))})]})})]})}},2234:function(e,t,a){"use strict";var s=a(9099),r=a(9291);let n=(0,s.Ue)((0,r.tJ)(e=>({username:"",password:"",isAuthAdmin:!1,login:(t,a)=>e({username:t,password:a,isAuthAdmin:!0}),logout:()=>e({username:"",password:"",isAuthAdmin:!1})}),{name:"auth-admin-storage"}));t.Z=n}},function(e){e.O(0,[461,472,971,23,744],function(){return e(e.s=9226)}),_N_E=e.O()}]);