(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{4726:function(e,t,n){Promise.resolve().then(n.bind(n,5981)),Promise.resolve().then(n.bind(n,6753))},5981:function(e,t,n){"use strict";var s=n(6463),i=n(2265),u=n(2234);t.default=e=>{let{children:t}=e,{isAuthAdmin:n}=(0,u.Z)(),[r,a]=(0,i.useState)(!1),l=(0,s.useRouter)();return((0,i.useEffect)(()=>{a(!0)},[]),(0,i.useEffect)(()=>{if(r){let e="/admin/login"===l.pathname,t="/"===l.pathname;n||e||t||l.replace("/admin/login")}},[n,r,l]),r)?t:null}},6753:function(e,t,n){"use strict";var s=n(7437),i=n(2265);t.default=e=>{let{children:t}=e,[n,u]=(0,i.useState)(!0);return((0,i.useEffect)(()=>{let e=setTimeout(()=>{u(!1)},1e3);return()=>clearTimeout(e)},[]),n)?(0,s.jsxs)("div",{className:"flex items-center justify-center h-screen",children:[(0,s.jsx)("div",{className:"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"}),(0,s.jsx)("span",{className:"ml-2",children:"Loading..."})]}):t}},2234:function(e,t,n){"use strict";var s=n(9099),i=n(9291);let u=(0,s.Ue)((0,i.tJ)(e=>({username:"",password:"",isAuthAdmin:!1,login:(t,n)=>e({username:t,password:n,isAuthAdmin:!0}),logout:()=>e({username:"",password:"",isAuthAdmin:!1})}),{name:"auth-admin-storage"}));t.Z=u}},function(e){e.O(0,[461,971,23,744],function(){return e(e.s=4726)}),_N_E=e.O()}]);