(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[199],{3833:function(e,t,a){Promise.resolve().then(a.bind(a,1588))},6648:function(e,t,a){"use strict";a.d(t,{default:function(){return l.a}});var n=a(5601),l=a.n(n)},5601:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return o},getImageProps:function(){return i}});let n=a(9920),l=a(497),r=a(8173),s=n._(a(1241));function i(e){let{props:t}=(0,l.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let o=r.Image},1588:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var n=a(7437),l=a(6241),r=a(2265);a(6648);var s=a(6800);let i=a.n(s)();var o=e=>{let{answer:t,selectedAns:a,handleSelectAnswer:l,index:r,answerLabels:s}=e,o=a===(null==t?void 0:t.optionText);return(0,n.jsx)("li",{className:"w-full",children:(0,n.jsxs)("button",{onClick:()=>l(t),className:i(o&&"ring ring-offset-2 ring-third text-black ","w-full flex items-center gap-x-4 bg-white dark:bg-gray-800 py-4 px-5 rounded-xl shadow-lg hover:ring-1 hover:ring-purple transition-all font-semibold text-sm text-dark-blue dark:text-white"),children:[(0,n.jsx)("span",{className:i(o?"bg-third text-white":"bg-gray-200 dark:bg-gray-700 group-hover:bg-purple group-hover:text-black","text-lg rounded-lg py-2 px-4"),children:s[r]}),(0,n.jsx)("span",{className:"xl:text-lg",children:t.optionText})]})})},u=a(8472),x=a(9343),c=a(6761),d=e=>{let{questionId:t,soalText:a,noUjian:s}=e,{questions:i,selectAnswer:o}=(0,l.Z)(),{kodeDesa:d}=(0,c.Z)(),f=i.find(e=>e.soalText===t),{register:p,handleSubmit:g,setValue:h,reset:m,formState:{errors:b}}=(0,x.cI)();(0,r.useEffect)(()=>{f&&m({essayText:f.jawaban||""})},[t,f,m]);let j=async e=>{try{await u.Z.put("http://3.0.20.136:8080/submit-soal",{soalText:t,jawabanText:e.essayText,noUjian:s,kodeDesa:d}),o(t,{jawabanText:e.essayText})}catch(e){console.error("Error submitting essay:",e)}};return(0,n.jsx)("div",{className:"flex flex-col gap-4 w-full max-w-7xl px-4",children:(0,n.jsxs)("form",{onSubmit:g(j),className:"flex flex-col gap-4",children:[(0,n.jsx)("input",{...p("essayText"),className:"textarea textarea-bordered w-full h-30 p-4 text-sm text-gray-700 dark:text-gray-300 ".concat(b.essayText?"border-red-500":""),placeholder:"Tulis jawaban Anda di sini..."}),(0,n.jsx)("button",{type:"submit",className:"btn btn-primary bg-third text-white mt-2 self-center",children:"Kirim Jawaban"}),(0,n.jsx)("p",{className:"text-xs",children:"Klik Tombol Kirim Jawaban Supaya Jawaban disimpan"})]})})},f=a(6463),p=e=>{var t;let{data:a,handleAnswer:s,questionId:i,goNextQuestion:x,jawaban:p,questionType:g,soalText:h,noUjian:m}=e,[b,j]=(0,r.useState)(""),{questions:w,onCompleteQuestions:y,currentQuestion:v,goPreviousQuestion:T}=(0,l.Z)(),{kodeDesa:N}=(0,c.Z)(),k=null===(t=w.find(e=>e.soal===i))||void 0===t?void 0:t.isCorrectUserAnswer,S=(0,f.useRouter)();(0,r.useEffect)(()=>{j(p||"")},[p,i]);let Z=["A","B","C","D"],_=e=>{b!==e.optionText&&(j(e.optionText),s(i,{...e,optionText:e.optionText,jawaban:e.optionText}),u.Z.put("http://3.0.20.136:8080/submit-soal",{jawabanText:e.optionText,soalText:h,noUjian:m,kodeDesa:N}).catch(e=>{console.error("Error submitting answer:",e)}))},A=v===w.length-1;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("ul",{className:"flex flex-col gap-y-4 justify-center w-full",children:["soal"===g&&(0,n.jsx)("ul",{className:"flex flex-col gap-y-4 justify-center w-full",children:null==a?void 0:a.map((e,t)=>(0,n.jsx)(o,{answer:e,selectedAns:b,isCorrectUserAnswer:k,handleSelectAnswer:_,index:t,answerLabels:Z},e.optionText))}),"isian"===g&&(0,n.jsx)(d,{questionId:h,soalText:h,noUjian:m})]}),(0,n.jsxs)("div",{className:"flex justify-between mt-4",children:[(0,n.jsx)("button",{onClick:()=>{T()},disabled:0===v,className:"btn bg-gray-400 text-white",children:"Kembali"}),(0,n.jsx)("button",{onClick:()=>{A?confirm("Apakah anda sudah yakin dengan jawaban anda?")&&(y(m,N),S.push("/sesi")):x()},className:"btn btn-primary bg-third text-white ",children:A?"Selesaikan":"Berikutnya"})]})]})},g=e=>{let{data:t}=e;return(0,n.jsx)("div",{children:(0,n.jsx)("h2",{className:"text-dark-blue dark:text-white xs:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:null==t?void 0:t.soalText}})})})},h=()=>{let{questions:e,currentQuestion:t,selectAnswer:a,goNextQuestion:r}=(0,l.Z)(),{noUjian:s}=(0,c.Z)(),i=e[t];return(0,n.jsxs)("div",{className:"flex flex-col items-center gap-4 lg:px-6 lg:py-4 w-full",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-4 w-full max-w-7xl px-4",children:[(0,n.jsxs)("p",{className:"italic text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300",children:["Pertanyaan ",t+1," dari ",e.length]}),(0,n.jsx)(g,{data:i})]}),(0,n.jsx)("div",{className:"flex flex-col gap-4 w-full max-w-7xl px-4",children:(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)(p,{data:null==i?void 0:i.options,questionId:null==i?void 0:i.soal,handleAnswer:a,goNextQuestion:r,jawaban:null==i?void 0:i.jawaban,questionType:null==i?void 0:i.jenis,soalText:null==i?void 0:i.soalText,noUjian:s})})})]})},m=a(7278);function b(){let{fetchQuizzes:e}=(0,l.Z)(),{noUjian:t,kodeDesa:a}=(0,c.Z)();return(0,r.useEffect)(()=>{(async()=>{t&&a&&await e(t,a)})()},[t,a,e]),(0,m.Z)({section:1}),(0,n.jsx)("div",{children:(0,n.jsx)(h,{})})}},7278:function(e,t,a){"use strict";var n=a(2265),l=a(6463),r=a(7466),s=a(6241),i=a(9082),o=a(6761);t.Z=e=>{let{section:t}=e,a=(0,l.useRouter)(),{getRemainingTime:u,isQuestionPlayable:x}=(0,r.Z)(),{hasCompletedSection1:c,isQuiz1Finished:d,isQuiz1Restricted:f,fetchStatusQuiz:p}=(0,s.Z)(),{hasCompletedSection2:g,isQuiz2Finished:h,isQuiz2Restricted:m,isSection2Locked:b,fetchStatusQuiz2:j}=(0,i.Z)(),{noUjian:w,kodeDesa:y}=(0,o.Z)(),[v,T]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{(async()=>{1===t?await p(w,y):2===t&&await j(w,y),T(!0)})()},[t,w,y,p,j]),(0,n.useEffect)(()=>{if(!v)return;let e=u(t),n=x(t);1===t?(!n||e<=0||d||f)&&a.push("/sesi"):2===t&&(!c||!n||e<=0||b||h||m)&&a.push("/sesi")},[v,t,u,x,c,g,b,d,f,h,m,a]),null}},6800:function(e,t){var a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=r(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)n.call(e,a)&&e[a]&&(t=r(t,a));return t}(a)))}return e}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0!==(a=(function(){return l}).apply(t,[]))&&(e.exports=a)}()}},function(e){e.O(0,[461,472,343,173,897,971,23,744],function(){return e(e.s=3833)}),_N_E=e.O()}]);