"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{6761:function(i,e,t){var n=t(9099),s=t(9291);let o=(0,n.Ue)((0,s.tJ)(i=>({noUjian:null,namaLengkap:null,gender:null,pendidikanTerakhir:null,alamat:null,kodeDesa:null,isAuth:!1,login:e=>{i({noUjian:e.noUjian,namaLengkap:e.namaLengkap,gender:e.gender,pendidikanTerakhir:e.pendidikanTerakhir,alamat:e.alamat,kodeDesa:e.kodeDesa,isAuth:!0})},logout:()=>{i({noUjian:null,namaLengkap:null,gender:null,pendidikanTerakhir:null,alamat:null,kodeDesa:null,isAuth:!1})}}),{name:"auth-store"}));e.Z=o},7466:function(i,e,t){var n=t(8472),s=t(9099),o=t(9291);let a=(0,s.Ue)((0,o.tJ)((i,e)=>({section1RemainingTime:null,section2RemainingTime:null,section1StartTime:null,section2StartTime:null,fetchRemainingTime:async e=>{try{let t=(await n.Z.get("http://18.141.142.63:8080/time",{params:{ujian:e}})).data.remainingTime,s=new Date,o=new Date(s.getTime()+252e5).toISOString();1===e?i({section1RemainingTime:1e3*t,section1StartTime:o}):2===e&&i({section2RemainingTime:1e3*t,section2StartTime:o})}catch(i){console.error("Failed to fetch remaining time:",i)}},getRemainingTime:i=>(1===i?e().section1RemainingTime:e().section2RemainingTime)||null,isQuestionPlayable:i=>{let t=new Date(new Date().getTime()+252e5).getTime(),n=new Date(e()["section".concat(i,"StartTime")]).getTime(),s=e().getRemainingTime(i);return t>=n&&t<n+s},decrementRemainingTime:e=>{i(i=>{let t=1===e?"section1RemainingTime":"section2RemainingTime";return{[t]:i[t]-1e3}})},resetTimer:e=>i({["section".concat(e,"RemainingTime")]:null,["section".concat(e,"StartTime")]:null})}),{name:"countdown"}));e.Z=a},6241:function(i,e,t){var n=t(8472),s=t(9099),o=t(9291),a=t(9082);let l=(0,s.Ue)((0,o.tJ)((i,e)=>({quizzes:[],questions:[],selectedQuizz:null,currentQuestion:0,hasCompletedSection1:!1,score:0,temporarySelection:null,isQuiz1Finished:!1,isQuiz1Restricted:!1,isLoadingSection:!1,selectQuizz:e=>{i({questions:e.hasil})},fetchQuizzes:async(t,s)=>{let{hasCompletedSection1:o}=e();if(!o)try{let e=(await n.Z.get("http://18.141.142.63:8080/genSoal",{params:{noUjian:t,kodeDesa:s}})).data.hasil;i({quizzes:e,questions:e})}catch(i){console.error(i)}},fetchStatusQuiz:async(e,t)=>{try{var s,o,a,l,d,u,r,c,v;let g=await n.Z.get("http://18.141.142.63:8080/status",{params:{noUjian:e,kodeDesa:t}}),m=(await n.Z.get("http://18.141.142.63:8080/nilai",{params:{noUjian:e,kodeDesa:t}})).data.nilai.nilai;i({hasCompletedSection1:null==g?void 0:null===(a=g.data)||void 0===a?void 0:null===(o=a.status)||void 0===o?void 0:null===(s=o.quiz1)||void 0===s?void 0:s.isFinished,isQuiz1Finished:null==g?void 0:null===(u=g.data)||void 0===u?void 0:null===(d=u.status)||void 0===d?void 0:null===(l=d.quiz1)||void 0===l?void 0:l.isFinished,isQuiz1Restricted:null==g?void 0:null===(v=g.data)||void 0===v?void 0:null===(c=v.status)||void 0===c?void 0:null===(r=c.quiz1)||void 0===r?void 0:r.isRestricted,score:m,isLoadingSection:!0})}catch(e){console.error("Failed to update quiz1 status:",e),i({isLoadingSection:!1})}finally{i({isLoadingSection:!1})}},selectAnswer:(t,n)=>{let{questions:s}=e(),o=[...s],a=o.findIndex(i=>"isian"===i.jenis?i.soalText===t:i.soal===t),l=o[a];if("soal"===l.jenis){let i=(null==l?void 0:l.kunciJawabanText)===n.optionText;o[a]={...l,isCorrectUserAnswer:i,jawaban:n.optionText,userSelectedAnswer:n,isAnswered:!0}}else"isian"===l.jenis&&(o[a]={...l,jawaban:n.jawabanText,isAnswered:!0});i({questions:o,temporarySelection:{questionIdOrSoalText:t,selectedAnswer:n}})},onCompleteQuestions:async(e,t)=>{try{var s,o,l,d,u,r,c,v,g;let m=(await n.Z.post("http://18.141.142.63:8080/nilai",{noUjian:e,kodeDesa:t})).data.nilai.nilai,A=await n.Z.put("http://18.141.142.63:8080/status",{quiz:"quiz1",noUjian:e,kodeDesa:t,statusUpdate:{onProgress:!1,isFinished:!0,isRestricted:!0}});i({hasCompletedSection1:null==A?void 0:null===(l=A.data)||void 0===l?void 0:null===(o=l.status)||void 0===o?void 0:null===(s=o.quiz1)||void 0===s?void 0:s.isFinished,isQuiz1Finished:null==A?void 0:null===(r=A.data)||void 0===r?void 0:null===(u=r.status)||void 0===u?void 0:null===(d=u.quiz1)||void 0===d?void 0:d.isFinished,isQuiz1Restricted:null==A?void 0:null===(g=A.data)||void 0===g?void 0:null===(v=g.status)||void 0===v?void 0:null===(c=v.quiz1)||void 0===c?void 0:c.isRestricted,currentQuestion:0,score:m}),a.Z.getState().unlockSection2(e,t)}catch(i){console.error(i)}},goNextQuestion:()=>{let{currentQuestion:t,questions:n,temporarySelection:s}=e(),o=t+1;if(o<n.length){let e=[...n],a=e[t];s&&(s.questionIdOrSoalText===a.soal||s.questionIdOrSoalText===a.soalText)&&(e[t]={...a,isAnswered:!0,..."isian"===a.jenis&&{jawaban:s.selectedAnswer.jawabanText},userSelectedAnswer:s.selectedAnswer}),i({questions:e,currentQuestion:o,temporarySelection:null})}},goPreviousQuestion:()=>{let{currentQuestion:t,questions:n,temporarySelection:s}=e(),o=t-1;if(o>=0){let e=[...n],a=e[t];s&&(s.questionIdOrSoalText===a.soal||s.questionIdOrSoalText===a.soalText)&&(e[t]={...a,isAnswered:!0,..."isian"===a.jenis&&{jawaban:s.selectedAnswer.jawabanText},userSelectedAnswer:s.selectedAnswer}),i({questions:e,currentQuestion:o,temporarySelection:null})}},goToQuestion:t=>{let{currentQuestion:n,questions:s,temporarySelection:o}=e(),a=[...s],l=a[n];o&&(o.questionIdOrSoalText===l.soal||o.questionIdOrSoalText===l.soalText)&&(a[n]={...l,isAnswered:!0,..."isian"===l.jenis&&{jawaban:o.selectedAnswer.jawabanText},userSelectedAnswer:o.selectedAnswer}),i({questions:a,currentQuestion:t,temporarySelection:null})},reset:()=>{i({currentQuestion:0,questions:[],temporarySelection:null})}}),{name:"quizz"}));e.Z=l},9082:function(i,e,t){t.d(e,{Z:function(){return d}});var n=t(8472),s=t(9099),o=t(9291),a={src:"/_next/static/media/soal1.f15aef94.png",height:663,width:606,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAAAAAAQb7raAAAAPUlEQVR42hXJSw6AQAgEUe5/Uhf+AInTg9LiqpJXgkORLKFuZkVhBM75djXr90vNn3ZfVr+ruwdGf2CO5AfG2TY//+2i1AAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},l={src:"/_next/static/media/soal2.42f4c7df.png",height:812,width:713,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAAAAAAQb7raAAAAOklEQVR42g3IwQ2AQAgEwO2/V8JigAiHovMcjEpPP1gXehxskLwa45FxvyiqZfb/QqNjM6p7MKZRdT66PjXWLY2xXwAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},d=(0,s.Ue)((0,o.tJ)((i,e)=>({questions:[{_id:"1",soalText:a,questionType:"file-upload",linkFile:"https://drive.google.com/uc?export=download&id=1ztG0NKdyd6sbHHIWouSp7XB9Iip5h8zb",uploadedFileName:null},{_id:"2",soalText:l,questionType:"file-upload",uploadedFileName:null}],currentQuestion:0,hasCompletedSection2:!1,isSection2Locked:!0,isLoading:!1,isQuiz2Finished:!1,isQuiz2Restricted:!0,goNextQuestion:()=>{let{currentQuestion:t,questions:n}=e(),s=t+1;s<n.length&&i({currentQuestion:s})},goPreviousQuestion:()=>{let{currentQuestion:t}=e(),n=t-1;n>=0&&i({currentQuestion:n})},goToQuestion:e=>{i({currentQuestion:e})},setLoading:e=>{i({isLoading:e})},saveUploadedFileName:t=>{let{currentQuestion:n,questions:s}=e(),o=[...s];o[n].uploadedFileName=t,i({questions:o})},markQuestionAsAnswered:t=>{let{questions:n}=e(),s=[...n];s[t].isAnswered=!0,i({questions:s})},onCompleteQuestions:async(e,t)=>{try{var s,o,a,l,d,u,r,c,v,g,m,A;i({currentQuestion:0});let h=await n.Z.put("http://18.141.142.63:8080/status",{quiz:"quiz2",noUjian:e,kodeDesa:t,statusUpdate:{onProgress:!1,isFinished:!0,isRestricted:!0}});i({hasCompletedSection2:null==h?void 0:null===(a=h.data)||void 0===a?void 0:null===(o=a.status)||void 0===o?void 0:null===(s=o.quiz2)||void 0===s?void 0:s.isFinished,isQuiz2Finished:null==h?void 0:null===(u=h.data)||void 0===u?void 0:null===(d=u.status)||void 0===d?void 0:null===(l=d.quiz2)||void 0===l?void 0:l.isFinished,isQuiz2Restricted:null==h?void 0:null===(v=h.data)||void 0===v?void 0:null===(c=v.status)||void 0===c?void 0:null===(r=c.quiz2)||void 0===r?void 0:r.isRestricted,isSection2Locked:null==h?void 0:null===(A=h.data)||void 0===A?void 0:null===(m=A.status)||void 0===m?void 0:null===(g=m.quiz2)||void 0===g?void 0:g.isRestricted})}catch(i){console.error("Failed to update quiz2 status:",i)}},reset:()=>{i({currentQuestion:0,hasCompletedSection2:!1,isSection2Locked:!0,isQuiz2Finished:!1,isQuiz2Restricted:!0})},unlockSection2:async(e,t)=>{var s,o,a,l,d,u,r,c,v;let g=await n.Z.put("http://18.141.142.63:8080/status",{quiz:"quiz2",noUjian:e,kodeDesa:t,statusUpdate:{onProgress:!0,isFinished:!1,isRestricted:!1}});console.log(null==g?void 0:null===(a=g.data)||void 0===a?void 0:null===(o=a.status)||void 0===o?void 0:null===(s=o.quiz2)||void 0===s?void 0:s.isFinished),i({isSection2Locked:null==g?void 0:null===(u=g.data)||void 0===u?void 0:null===(d=u.status)||void 0===d?void 0:null===(l=d.quiz2)||void 0===l?void 0:l.isRestricted,isQuiz2Restricted:null==g?void 0:null===(v=g.data)||void 0===v?void 0:null===(c=v.status)||void 0===c?void 0:null===(r=c.quiz2)||void 0===r?void 0:r.isRestricted})},fetchStatusQuiz2:async(e,t)=>{try{var s,o,a,l,d,u,r,c,v,g,m,A;let h=await n.Z.get("http://18.141.142.63:8080/status",{params:{noUjian:e,kodeDesa:t}});i({hasCompletedSection2:null==h?void 0:null===(a=h.data)||void 0===a?void 0:null===(o=a.status)||void 0===o?void 0:null===(s=o.quiz2)||void 0===s?void 0:s.isFinished,isQuiz2Finished:null==h?void 0:null===(u=h.data)||void 0===u?void 0:null===(d=u.status)||void 0===d?void 0:null===(l=d.quiz2)||void 0===l?void 0:l.isFinished,isQuiz2Restricted:null==h?void 0:null===(v=h.data)||void 0===v?void 0:null===(c=v.status)||void 0===c?void 0:null===(r=c.quiz2)||void 0===r?void 0:r.isRestricted,isSection2Locked:null==h?void 0:null===(A=h.data)||void 0===A?void 0:null===(m=A.status)||void 0===m?void 0:null===(g=m.quiz2)||void 0===g?void 0:g.isRestricted})}catch(i){console.error("Failed to update quiz2 status:",i)}}}),{name:"quiz2-store"}))}}]);