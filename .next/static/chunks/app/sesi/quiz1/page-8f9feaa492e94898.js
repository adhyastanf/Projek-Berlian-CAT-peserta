(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[199],{8760:function(e,t,n){Promise.resolve().then(n.bind(n,1588))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return l.a}});var a=n(5601),l=n.n(a)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getImageProps:function(){return i}});let a=n(9920),l=n(497),s=n(8173),r=a._(n(1241));function i(e){let{props:t}=(0,l.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let o=s.Image},1588:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a=n(7437),l=n(6241),s=n(2265);n(6648);var r=n(6800);let i=n.n(r)();var o=e=>{let{answer:t,selectedAns:n,handleSelectAnswer:l,index:s,answerLabels:r}=e,o=n===(null==t?void 0:t.optionText);return(0,a.jsx)("li",{className:"w-full",children:(0,a.jsxs)("button",{onClick:()=>l(t),className:i(o&&"ring ring-offset-2 ring-third text-black ","w-full flex items-center gap-x-4 bg-white  py-4 px-5 rounded-xl shadow-lg hover:ring-1 hover:ring-purple transition-all font-semibold text-sm text-dark-blue "),children:[(0,a.jsx)("span",{className:i(o?"bg-third text-white":"bg-gray-200  group-hover:bg-purple group-hover:text-black","text-lg rounded-lg py-2 px-4"),children:r[s]}),(0,a.jsx)("span",{className:"xl:text-lg text-left",children:t.optionText})]})})},u=n(8472),x=n(9343),c=n(6761),d=e=>{let{questionId:t,soalText:n,noUjian:r}=e,{questions:i,selectAnswer:o}=(0,l.Z)(),{kodeDesa:d}=(0,c.Z)(),f=i.find(e=>e.soalText===t),{register:p,handleSubmit:m,setValue:g,reset:h,formState:{errors:b}}=(0,x.cI)();(0,s.useEffect)(()=>{f&&h({essayText:f.jawaban||""})},[t,f,h]);let j=async e=>{try{await u.Z.put("http://54.251.182.133:8080/submit-soal",{soalText:t,jawabanText:e.essayText,noUjian:r,kodeDesa:d}),o(t,{jawabanText:e.essayText})}catch(e){console.error("Error submitting essay:",e)}};return(0,a.jsx)("div",{className:"flex flex-col gap-4 w-full max-w-7xl px-4",children:(0,a.jsxs)("form",{onSubmit:m(j),className:"flex flex-col gap-4",children:[(0,a.jsx)("input",{...p("essayText"),className:"textarea textarea-bordered w-full h-30 p-4 text-sm text-gray-700  ".concat(b.essayText?"border-red-500":""),placeholder:"Tulis jawaban Anda di sini..."}),(0,a.jsx)("button",{type:"submit",className:"btn btn-primary bg-third text-white mt-2 self-center",children:"Kirim Jawaban"}),(0,a.jsx)("p",{className:"text-xs",children:"Klik Tombol Kirim Jawaban Supaya Jawaban disimpan"})]})})},f=n(6463),p=e=>{var t;let{data:n,handleAnswer:r,questionId:i,goNextQuestion:x,jawaban:p,questionType:m,soalText:g,noUjian:h}=e,[b,j]=(0,s.useState)(""),{questions:w,onCompleteQuestions:y,currentQuestion:v,goPreviousQuestion:T}=(0,l.Z)(),{kodeDesa:N}=(0,c.Z)(),k=null===(t=w.find(e=>e.soal===i))||void 0===t?void 0:t.isCorrectUserAnswer,S=(0,f.useRouter)();(0,s.useEffect)(()=>{j(p||"")},[p,i]);let Z=["A","B","C","D"],_=e=>{b!==e.optionText&&(j(e.optionText),r(i,{...e,optionText:e.optionText,jawaban:e.optionText}),u.Z.put("http://54.251.182.133:8080/submit-soal",{jawabanText:e.optionText,soalText:g,noUjian:h,kodeDesa:N}).catch(e=>{console.error("Error submitting answer:",e)}))},A=v===w.length-1;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("ul",{className:"flex flex-col gap-y-4 justify-center w-full",children:["soal"===m&&(0,a.jsx)("ul",{className:"flex flex-col gap-y-4 justify-center w-full",children:null==n?void 0:n.map((e,t)=>(0,a.jsx)(o,{answer:e,selectedAns:b,isCorrectUserAnswer:k,handleSelectAnswer:_,index:t,answerLabels:Z},e.optionText))}),"isian"===m&&(0,a.jsx)(d,{questionId:g,soalText:g,noUjian:h})]}),(0,a.jsxs)("div",{className:"flex justify-between mt-4",children:[(0,a.jsx)("button",{onClick:()=>{T()},disabled:0===v,className:"btn bg-gray-400 text-white",children:"Kembali"}),(0,a.jsx)("button",{onClick:()=>{A?confirm("Apakah anda sudah yakin dengan jawaban anda?")&&(y(h,N),S.push("/sesi")):x()},className:"btn btn-primary bg-third text-white ",children:A?"Selesaikan":"Berikutnya"})]})]})},m=e=>{let{data:t}=e;return(0,a.jsx)("div",{children:(0,a.jsx)("h2",{className:"text-dark-blue  xs:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:null==t?void 0:t.soalText}})})})},g=()=>{let{questions:e,currentQuestion:t,selectAnswer:n,goNextQuestion:s}=(0,l.Z)(),{noUjian:r}=(0,c.Z)(),i=e[t];return(0,a.jsxs)("div",{className:"flex flex-col items-center gap-4 lg:px-6 lg:py-4 w-full",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-4 w-full max-w-7xl px-4",children:[(0,a.jsxs)("p",{className:"italic text-sm md:text-base lg:text-lg text-gray-700 ",children:["Pertanyaan ",t+1," dari ",e.length]}),(0,a.jsx)(m,{data:i})]}),(0,a.jsx)("div",{className:"flex flex-col gap-4 w-full max-w-7xl px-4",children:(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(p,{data:null==i?void 0:i.options,questionId:null==i?void 0:i.soal,handleAnswer:n,goNextQuestion:s,jawaban:null==i?void 0:i.jawaban,questionType:null==i?void 0:i.jenis,soalText:null==i?void 0:i.soalText,noUjian:r})})})]})},h=n(7278);function b(){let{fetchQuizzes:e}=(0,l.Z)(),{noUjian:t,kodeDesa:n}=(0,c.Z)();return(0,s.useEffect)(()=>{(async()=>{t&&n&&await e(t,n)})()},[t,n,e]),(0,h.Z)({section:1}),(0,a.jsx)("div",{children:(0,a.jsx)(g,{})})}},7278:function(e,t,n){"use strict";var a=n(2265),l=n(6463),s=n(7466),r=n(6241),i=n(1927),o=n(6761);t.Z=e=>{let{section:t}=e,n=(0,l.useRouter)(),{getRemainingTime:u,isQuestionPlayable:x}=(0,s.Z)(),{hasCompletedSection1:c,isQuiz1Finished:d,isQuiz1Restricted:f,fetchStatusQuiz:p}=(0,r.Z)(),{hasCompletedSection2:m,isQuiz2Finished:g,isQuiz2Restricted:h,isSection2Locked:b,fetchStatusQuiz2:j}=(0,i.Z)(),{noUjian:w,kodeDesa:y}=(0,o.Z)(),[v,T]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{(async()=>{1===t?await p(w,y):2===t&&await j(w,y),T(!0)})()},[t,w,y,p,j]),(0,a.useEffect)(()=>{if(!v)return;let e=u(t),a=x(t);1===t?(!a||e<=0||d||f)&&n.push("/sesi"):2===t&&(!c||!a||e<=0||b||g||h)&&n.push("/sesi")},[v,t,u,x,c,m,b,d,f,g,h,n]),null}},6800:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=s(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)a.call(e,n)&&e[n]&&(t=s(t,n));return t}(n)))}return e}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0!==(n=(function(){return l}).apply(t,[]))&&(e.exports=n)}()}},function(e){e.O(0,[461,472,343,173,897,971,23,744],function(){return e(e.s=8760)}),_N_E=e.O()}]);