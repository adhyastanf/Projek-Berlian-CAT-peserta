exports.id=583,exports.ids=[583],exports.modules={4525:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2994,23)),Promise.resolve().then(i.t.bind(i,6114,23)),Promise.resolve().then(i.t.bind(i,9727,23)),Promise.resolve().then(i.t.bind(i,9671,23)),Promise.resolve().then(i.t.bind(i,1868,23)),Promise.resolve().then(i.t.bind(i,4759,23))},876:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2481,23))},8736:(e,t,i)=>{Promise.resolve().then(i.bind(i,3096)),Promise.resolve().then(i.bind(i,730)),Promise.resolve().then(i.bind(i,9677))},6226:(e,t,i)=>{"use strict";i.d(t,{default:()=>a.a});var s=i(9029),a=i.n(s)},9029:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return l},getImageProps:function(){return o}});let s=i(1174),a=i(3078),n=i(2481),r=s._(i(6820));function o(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let l=n.Image},9677:(e,t,i)=>{"use strict";i.d(t,{default:()=>r});var s=i(5047),a=i(7577),n=i(6981);let r=({children:e})=>{let{isAuth:t}=(0,n.Z)(),[i,r]=(0,a.useState)(!1),o=(0,s.useRouter)();return((0,a.useEffect)(()=>{r(!0)},[]),(0,a.useEffect)(()=>{i&&!t&&o.replace("/")},[t,i,o]),i&&t)?e:null}},3096:(e,t,i)=>{"use strict";i.d(t,{default:()=>r});var s=i(326),a=i(7577),n=i(6981);function r(){let{namaLengkap:e,noUjian:t}=(0,n.Z)(),[i,r]=(0,a.useState)(!1);return i?e&&t?(0,s.jsxs)("div",{className:"text-center py-8",children:[s.jsx("h1",{className:"text-2xl font-bold text-black",children:`Selamat Datang, ${e}`}),s.jsx("h2",{className:"text-xl text-black",children:`No. Ujian: ${t}`})]}):s.jsx("div",{className:"text-center py-8",children:"Loading..."}):null}},730:(e,t,i)=>{"use strict";i.d(t,{default:()=>n});var s=i(326),a=i(7577);let n=({children:e})=>{let[t,i]=(0,a.useState)(!0);return((0,a.useEffect)(()=>{let e=setTimeout(()=>{i(!1)},1e3);return()=>clearTimeout(e)},[]),t)?(0,s.jsxs)("div",{className:"flex items-center justify-center h-screen",children:[s.jsx("div",{className:"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"}),s.jsx("span",{className:"ml-2",children:"Loading..."})]}):e}},6981:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var s=i(551),a=i(5251);let n=(0,s.Ue)((0,a.tJ)(e=>({noUjian:null,namaLengkap:null,gender:null,pendidikanTerakhir:null,alamat:null,kodeDesa:null,isAuth:!1,login:t=>{e({noUjian:t.noUjian,namaLengkap:t.namaLengkap,gender:t.gender,pendidikanTerakhir:t.pendidikanTerakhir,alamat:t.alamat,kodeDesa:t.kodeDesa,isAuth:!0})},logout:()=>{e({noUjian:null,namaLengkap:null,gender:null,pendidikanTerakhir:null,alamat:null,kodeDesa:null,isAuth:!1})}}),{name:"auth-store"}))},6803:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var s=i(4099),a=i(551),n=i(5251);let r=(0,a.Ue)((0,n.tJ)((e,t)=>({section1RemainingTime:null,section2RemainingTime:null,section1StartTime:null,section2StartTime:null,fetchRemainingTime:async t=>{try{let i=(await s.Z.get("http://3.0.20.136:8080/time",{params:{ujian:t}})).data.remainingTime,a=new Date().toISOString();1===t?e({section1RemainingTime:1e3*i,section1StartTime:a}):2===t&&e({section2RemainingTime:1e3*i,section2StartTime:a})}catch(e){console.error("Failed to fetch remaining time:",e)}},getRemainingTime:e=>(1===e?t().section1RemainingTime:t().section2RemainingTime)||null,isQuestionPlayable:e=>{let i=new Date().getTime(),s=new Date(t()[`section${e}StartTime`]).getTime(),a=t().getRemainingTime(e);return i>=s&&i<s+a},decrementRemainingTime:t=>{e(e=>{let i=1===t?"section1RemainingTime":"section2RemainingTime";return{[i]:e[i]-1e3}})},resetTimer:t=>e({[`section${t}RemainingTime`]:null,[`section${t}StartTime`]:null})}),{name:"countdown"}))},7350:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var s=i(4099),a=i(551),n=i(5251),r=i(6426);let o=(0,a.Ue)((0,n.tJ)((e,t)=>({quizzes:[],questions:[],selectedQuizz:null,currentQuestion:0,hasCompletedSection1:!1,score:0,temporarySelection:null,isQuiz1Finished:!1,isQuiz1Restricted:!1,selectQuizz:t=>{e({questions:t.hasil})},fetchQuizzes:async(i,a)=>{let{hasCompletedSection1:n}=t();if(!n)try{let t=(await s.Z.get("http://3.0.20.136:8080/genSoal",{params:{noUjian:i,kodeDesa:a}})).data.hasil;e({quizzes:t,questions:t})}catch(e){console.error(e)}},fetchStatusQuiz:async(t,i)=>{try{let a=await s.Z.get("http://3.0.20.136:8080/status",{params:{noUjian:t,kodeDesa:i}});e({hasCompletedSection1:a?.data?.status?.quiz1?.isFinished,isQuiz1Finished:a?.data?.status?.quiz1?.isFinished,isQuiz1Restricted:a?.data?.status?.quiz1?.isRestricted})}catch(e){console.error("Failed to update quiz1 status:",e)}},selectAnswer:(i,s)=>{let{questions:a}=t(),n=[...a],r=n.findIndex(e=>"isian"===e.jenis?e.soalText===i:e.soal===i),o=n[r];if("soal"===o.jenis){let e=o?.kunciJawabanText===s.optionText;n[r]={...o,isCorrectUserAnswer:e,jawaban:s.optionText,userSelectedAnswer:s,isAnswered:!0}}else"isian"===o.jenis&&(n[r]={...o,jawaban:s.jawabanText,isAnswered:!0});e({questions:n,temporarySelection:{questionIdOrSoalText:i,selectedAnswer:s}})},onCompleteQuestions:async(t,i)=>{try{let a=(await s.Z.get("http://3.0.20.136:8080/nilai",{params:{noUjian:t,kodeDesa:i}})).data.nilai.nilai;e({hasCompletedSection1:!0,currentQuestion:0,score:a});let n=await s.Z.put("http://3.0.20.136:8080/status",{quiz:"quiz1",noUjian:t,kodeDesa:i,statusUpdate:{onProgress:!1,isFinished:!0,isRestricted:!0}});e({hasCompletedSection1:n?.data?.status?.quiz1?.isFinished,isQuiz1Finished:n?.data?.status?.quiz1?.isFinished,isQuiz1Restricted:n?.data?.status?.quiz1?.isRestricted}),r.Z.getState().unlockSection2()}catch(e){console.error(e)}},goNextQuestion:()=>{let{currentQuestion:i,questions:s,temporarySelection:a}=t(),n=i+1;if(n<s.length){let t=[...s],r=t[i];a&&(a.questionIdOrSoalText===r.soal||a.questionIdOrSoalText===r.soalText)&&(t[i]={...r,isAnswered:!0,..."isian"===r.jenis&&{jawaban:a.selectedAnswer.jawabanText},userSelectedAnswer:a.selectedAnswer}),e({questions:t,currentQuestion:n,temporarySelection:null})}},goPreviousQuestion:()=>{let{currentQuestion:i,questions:s,temporarySelection:a}=t(),n=i-1;if(n>=0){let t=[...s],r=t[i];a&&(a.questionIdOrSoalText===r.soal||a.questionIdOrSoalText===r.soalText)&&(t[i]={...r,isAnswered:!0,..."isian"===r.jenis&&{jawaban:a.selectedAnswer.jawabanText},userSelectedAnswer:a.selectedAnswer}),e({questions:t,currentQuestion:n,temporarySelection:null})}},goToQuestion:i=>{let{currentQuestion:s,questions:a,temporarySelection:n}=t(),r=[...a],o=r[s];n&&(n.questionIdOrSoalText===o.soal||n.questionIdOrSoalText===o.soalText)&&(r[s]={...o,isAnswered:!0,..."isian"===o.jenis&&{jawaban:n.selectedAnswer.jawabanText},userSelectedAnswer:n.selectedAnswer}),e({questions:r,currentQuestion:i,temporarySelection:null})},reset:()=>{e({currentQuestion:0,questions:[],temporarySelection:null})}}),{name:"quizz"}))},6426:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var s=i(4099),a=i(551),n=i(5251);let r={src:"/_next/static/media/soal1.f15aef94.png",height:663,width:606,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAAAAAAQb7raAAAAPUlEQVR42hXJSw6AQAgEUe5/Uhf+AInTg9LiqpJXgkORLKFuZkVhBM75djXr90vNn3ZfVr+ruwdGf2CO5AfG2TY//+2i1AAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},o={src:"/_next/static/media/soal2.42f4c7df.png",height:812,width:713,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAAAAAAQb7raAAAAOklEQVR42g3IwQ2AQAgEwO2/V8JigAiHovMcjEpPP1gXehxskLwa45FxvyiqZfb/QqNjM6p7MKZRdT66PjXWLY2xXwAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},l=(0,a.Ue)((0,n.tJ)((e,t)=>({questions:[{_id:"1",soalText:r,questionType:"file-upload",uploadedFileName:null},{_id:"2",soalText:o,questionType:"file-upload",uploadedFileName:null}],currentQuestion:0,hasCompletedSection2:!1,isSection2Locked:!0,isLoading:!1,isQuiz2Finished:!1,isQuiz2Restricted:!0,goNextQuestion:()=>{let{currentQuestion:i,questions:s}=t(),a=i+1;a<s.length&&e({currentQuestion:a})},goPreviousQuestion:()=>{let{currentQuestion:i}=t(),s=i-1;s>=0&&e({currentQuestion:s})},goToQuestion:t=>{e({currentQuestion:t})},setLoading:t=>{e({isLoading:t})},saveUploadedFileName:i=>{let{currentQuestion:s,questions:a}=t(),n=[...a];n[s].uploadedFileName=i,e({questions:n})},markQuestionAsAnswered:i=>{let{questions:s}=t(),a=[...s];a[i].isAnswered=!0,e({questions:a})},onCompleteQuestions:async(t,i)=>{try{e({currentQuestion:0});let a=await s.Z.put("http://3.0.20.136:8080/status",{quiz:"quiz2",noUjian:t,kodeDesa:i,statusUpdate:{onProgress:!1,isFinished:!0,isRestricted:!0}});e({hasCompletedSection2:a?.data?.status?.quiz2?.isFinished,isQuiz2Finished:a?.data?.status?.quiz2?.isFinished,isQuiz2Restricted:a?.data?.status?.quiz2?.isRestricted,isSection2Locked:a?.data?.status?.quiz2?.isRestricted})}catch(e){console.error("Failed to update quiz2 status:",e)}},reset:()=>{e({currentQuestion:0,hasCompletedSection2:!1,isSection2Locked:!0,isQuiz2Finished:!1,isQuiz2Restricted:!0})},unlockSection2:()=>{e({isSection2Locked:!1,isQuiz2Restricted:!1})},fetchStatusQuiz2:async(t,i)=>{try{let a=await s.Z.get("http://3.0.20.136:8080/status",{params:{noUjian:t,kodeDesa:i}});e({hasCompletedSection2:a?.data?.status?.quiz2?.isFinished,isQuiz2Finished:a?.data?.status?.quiz2?.isFinished,isQuiz2Restricted:a?.data?.status?.quiz2?.isRestricted,isSection2Locked:a?.data?.status?.quiz2?.isRestricted})}catch(e){console.error("Failed to update quiz2 status:",e)}}}),{name:"quiz2-store"}))},8295:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l,metadata:()=>o});var s=i(9510),a=i(7167),n=i.n(a),r=i(7710);i(5023);let o={title:"Selamat Datang di Tes CAT Kecamatan Surajadi",description:"Website tes CAT",icons:{icon:"./favicon.ico"}};function l({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:n().className,children:[(0,s.jsxs)("nav",{className:"navbar bg-third text-white justify-between flex px-10 py-6",children:[s.jsx(r.default,{src:"/Logo_Kabupaten_Tegal.png",width:150,height:150,alt:"Logo Kabupaten Tegal"}),(0,s.jsxs)("a",{className:"text-2xl font-bold text-stroke",children:["PANITIA PENGANGKATAN PERANGKAT DESA ",s.jsx("br",{})," KECAMATAN SURADADI KABUPATEN TEGAL"]})]}),e]})})}},2005:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>g});var s=i(9510),a=i(8570);let n=(0,a.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\components\form\bioPerserta.jsx`),{__esModule:r,$$typeof:o}=n;n.default;let l=(0,a.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\components\form\bioPerserta.jsx#default`);var u=i(5470);let d=(0,a.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\components\ProtectedRoute.jsx`),{__esModule:c,$$typeof:m}=d;d.default;let A=(0,a.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\components\ProtectedRoute.jsx#default`);function g({children:e}){return s.jsx(A,{children:s.jsx(u.ZP,{children:(0,s.jsxs)("div",{className:"pb-20 relative",children:[s.jsx(l,{}),e]})})})}},5470:(e,t,i)=>{"use strict";i.d(t,{ZP:()=>o});var s=i(8570);let a=(0,s.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\components\pageLoader.jsx`),{__esModule:n,$$typeof:r}=a;a.default;let o=(0,s.createProxy)(String.raw`D:\Proj\ProjectCAT\fe\Projek-Berlian-CAT-peserta\src\components\pageLoader.jsx#default`)},3881:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>a});var s=i(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};