(function(e){function t(t){for(var o,l,s=t[0],r=t[1],c=t[2],u=0,f=[];u<s.length;u++)l=s[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},i={app:0},a=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=r;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"004e":function(e,t,n){"use strict";n("fd9d")},"1ff2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),i=Object(o["e"])("link",{href:"https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css",rel:"stylesheet"},null,-1);function a(e,t,n,a,l,s){var r=Object(o["j"])("HelloWorld");return Object(o["f"])(),Object(o["c"])(o["a"],null,[i,Object(o["e"])(r)],64)}n("fb6a"),n("b0c0");var l=Object(o["o"])("data-v-5eddea1b");Object(o["h"])("data-v-5eddea1b");var s={class:"flex flex-col items-center h-full w-full overflow-auto justify-center"},r=Object(o["e"])("h1",{class:"text-3xl"},"Personality Test",-1),c={class:"flex flex-wrap justify-center -mx-3 mb-6"},d={class:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},u=Object(o["e"])("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"grid-first-name"}," Full Name ",-1),f={class:"w-full md:w-1/3 px-3 mb-6 md:mb-0"},b=Object(o["e"])("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"grid-state"}," Gender ",-1),h={class:"relative"},p=Object(o["e"])("option",{value:"-1",selected:"true",disabled:"true",hidden:"true"},"Select gender",-1),m=Object(o["e"])("option",{value:"0"},"Male",-1),g=Object(o["e"])("option",{value:"1"},"Female",-1),x=Object(o["e"])("option",{value:"2"},"Other",-1),y=Object(o["e"])("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[Object(o["e"])("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[Object(o["e"])("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1),w={class:"w-full flex items-center justify-between p-5"},v={key:0,class:"text-red-600"},k={key:2,class:"absolute border-2 z-50 bg-white rounded-lg border-gray-400 w-10/12 h-10/12 m-1/2 position-custom"},j=Object(o["e"])("div",{class:"w-full py-5 text-lg font-bold border-b-2 border-gray-400"}," Your test results ",-1),O={class:"w-full p-5"};Object(o["g"])();var I=l((function(e,t,n,i,a,l){var I=Object(o["j"])("question");return Object(o["f"])(),Object(o["c"])("div",s,[r,a.submitted?(Object(o["f"])(),Object(o["c"])("div",{key:1,class:[a.result?"blur":"","bg-gray-100 rounded-lg p-5"]},[(Object(o["f"])(!0),Object(o["c"])(o["a"],null,Object(o["i"])(a.testQuestions.slice(a.index,a.index+a.step),(function(e,t){return Object(o["f"])(),Object(o["c"])(I,{index:t+a.index,question:a.testQuestions[t+a.index].text,answer:a.answers[t+a.index],key:t,callback:function(e,t){return l.answer(t,e)}},null,8,["index","question","answer","callback"])})),128)),Object(o["e"])("div",w,[Object(o["e"])("button",{type:"submit",onClick:t[6]||(t[6]=function(){return l.decrement.apply(l,arguments)}),class:"md:w-32 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"}," Back "),a.verified?Object(o["d"])("",!0):(Object(o["f"])(),Object(o["c"])("div",v," You need to finish answering all the questions first! ")),Object(o["e"])("button",{type:"submit",onClick:t[7]||(t[7]=function(){return a.index==a.testQuestions.length-a.step?l.send():l.increment()}),class:"md:w-32 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"},Object(o["k"])(a.index==a.testQuestions.length-a.step?"Submit":"Next"),1)])],2)):(Object(o["f"])(),Object(o["c"])("form",{key:0,onSubmit:t[5]||(t[5]=function(e){e.preventDefault()}),class:"w-full lg:w-1/2 max-w-lg bg-gray-100 rounded-lg p-10"},[Object(o["e"])("div",c,[Object(o["e"])("div",d,[u,Object(o["n"])(Object(o["e"])("input",{onChange:t[1]||(t[1]=function(e){a.checkName=a.name&&!0}),class:["appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",a.checkName?"":"border-red-500"],id:"grid-first-name",type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.name=e}),placeholder:"Full name"},null,34),[[o["m"],a.name]]),Object(o["e"])("p",{class:["text-red-500 text-xs italic",a.checkName?"hidden":"block"]}," Please fill out this field. ",2)]),Object(o["e"])("div",f,[b,Object(o["e"])("div",h,[Object(o["n"])(Object(o["e"])("select",{class:["block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",a.checkGender?"":"border-red-500"],id:"grid-state","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.gender=e})},[p,m,g,x],2),[[o["l"],a.gender]]),Object(o["e"])("p",{class:["text-red-500 text-xs italic",a.checkGender?"hidden":"block"]}," Please fill out this field. ",2),y])]),Object(o["e"])("button",{type:"submit",onClick:t[4]||(t[4]=function(){return l.check.apply(l,arguments)}),class:"md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"}," Submit ")])],32)),a.result?(Object(o["f"])(),Object(o["c"])("div",k,[j,Object(o["e"])("div",O,Object(o["k"])(a.result),1),Object(o["e"])("button",{onClick:t[8]||(t[8]=function(){a.result=0,a.index=0}),class:"transition p-2 bg-red-500 px-4 text-white rounded-lg inline text-black lg:inline my-4"}," Close ")])):Object(o["d"])("",!0)])})),P=(n("cb29"),n("c975"),n("d81d"),n("13d5"),n("d3b7"),n("96cf"),n("1da1")),S=(n("ba8c"),n("6e63")),C=(n("99af"),Object(o["o"])("data-v-2e5d1895"));Object(o["h"])("data-v-2e5d1895");var N={class:"font-bold"},M={class:"lg:flex"};Object(o["g"])();var _=C((function(e,t,n,i,a,l){return Object(o["f"])(),Object(o["c"])("div",null,[Object(o["e"])("span",N,Object(o["k"])("".concat(n.question," (").concat(n.index+1,"/40)")),1),Object(o["e"])("div",M,[Object(o["e"])("button",{onClick:t[1]||(t[1]=function(){n.callback(1,n.index),l.selection=1}),class:["w-1/6 transition p-3 border-custom-1 border-2 rounded-lg text-black w-full lg:inline my-4",1==l.selection?"selection-custom-"+l.selection:""]}," Highly disagree ",2),Object(o["e"])("button",{onClick:t[2]||(t[2]=function(){n.callback(2,n.index),l.selection=2}),class:["w-1/6 transition p-3 border-custom-2 border-2 rounded-lg text-black w-full lg:inline my-4",2==l.selection?"selection-custom-"+l.selection:""]}," Moderately disagree ",2),Object(o["e"])("button",{onClick:t[3]||(t[3]=function(){n.callback(3,n.index),l.selection=3}),class:["w-1/6 transition p-3 border-custom-3 border-2 rounded-lg text-black w-full lg:inline my-4",3==l.selection?"selection-custom-"+l.selection:""]}," Slightly disagree ",2),Object(o["e"])("button",{onClick:t[4]||(t[4]=function(){n.callback(4,n.index),l.selection=4}),class:["w-1/6 transition p-3 border-custom-4 border-2 rounded-lg text-black w-full lg:inline my-4",4==l.selection?"selection-custom-"+l.selection:""]}," Slightly agree ",2),Object(o["e"])("button",{onClick:t[5]||(t[5]=function(){n.callback(5,n.index),l.selection=5}),class:["w-1/6 transition p-3 border-custom-5 border-2 rounded-lg text-black w-full lg:inline my-4",5==l.selection?"selection-custom-"+l.selection:""]}," Moderately agree ",2),Object(o["e"])("button",{onClick:t[6]||(t[6]=function(){n.callback(6,n.index),l.selection=6}),class:["w-1/6 transition p-3 border-custom-6 border-2 rounded-lg text-black w-full lg:inline my-4",6==l.selection?"selection-custom-"+l.selection:""]}," Highly agree ",2)])])})),q=(n("a9e3"),{props:{question:{type:String,default:""},callback:{type:Function},index:{type:Number,default:0},answer:{type:Number}},data:function(){return{checkValue:-1}},computed:{selection:function(){return console.log("answer: ",this.answer),this.answer}},methods:{test:function(){console.log(this.checkValue)}},mounted:function(){console.log("selection",this.selection)}});n("004e");q.render=_,q.__scopeId="data-v-2e5d1895";var Q=q,T={name:"HelloWorld",data:function(){return{name:"",gender:-1,result:"",testQuestions:S.map((function(e){return[Math.random(),e]})).sort((function(e,t){return e[0]-t[0]})).map((function(e){return e[1]})),checkName:!0,checkGender:!0,submitted:!1,verified:!0,answers:[].fill(0,0,S.length),o:0,c:0,e:0,a:0,n:0,index:0,step:5}},components:{Question:Q},methods:{check:function(){this.checkName=this.name&&!0,this.checkGender=this.gender>=0,this.checkName&&this.gender>=0&&(this.submitted=!0)},answer:function(e,t){this.answers[e]=t},send:function(){this.calculateOcean(),this.sendReport()},calculatePart:function(e){var t=this,n=0;return this.testQuestions.reduce((function(o,i,a){var l=i.fields.indexOf(e);return-1!==l?(n++,o+i.coeff[l]*t.answers[a]):o}),0)/(3*n)*100},calculateOcean:function(){this.o=this.calculatePart("o"),this.c=this.calculatePart("c"),this.e=this.calculatePart("e"),this.a=this.calculatePart("a"),this.n=this.calculatePart("n")},sendReport:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://report-gen-api.herokuapp.com/generate_report",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({o:e.o,c:e.c,e:e.e,a:e.a,n:e.n,name:e.name,gender:+e.gender})});case 2:return t.next=4,t.sent.text();case 4:n=t.sent,e.result=n;case 6:case"end":return t.stop()}}),t)})))()},decrement:function(){this.index=Math.max(this.index-this.step,0)},increment:function(){this.answers.slice(this.index,this.index+this.step).reduce((function(e,t){return e+t}),0)?(this.verified=!0,this.index=Math.min(this.index+this.step,this.testQuestions.length-this.step)):this.verified=!1}},mounted:function(){this.console=console}};n("94dc");T.render=I,T.__scopeId="data-v-5eddea1b";var G=T,H={name:"App",components:{HelloWorld:G}};n("64be");H.render=a;var z=H,F=Object(o["b"])(z);F.mount("#app")},"64be":function(e,t,n){"use strict";n("c894")},"6e63":function(e){e.exports=JSON.parse('[{"fields":["e"],"coeff":[1],"text":"I take charge and try to lead others "},{"fields":["e"],"coeff":[1],"text":"I am a cheerful person and I always radiate joy to people around me "},{"fields":["e"],"coeff":[1],"text":"I am an adrenaline junkie and I want to try all kind of thrilling activities at least once "},{"fields":["e"],"coeff":[1],"text":"I enjoy making new friends and feel comfortable around people "},{"fields":["e"],"coeff":[-1],"text":"I don\'t like to draw attention to myself"},{"fields":["e"],"coeff":[-1],"text":"I like to take things seriously and don\'t like it when people joke around about everything "},{"fields":["e"],"coeff":[-1],"text":"I value my safety and wouldn\'t engage in crazy and dangerous activities (car racing, bungee jumping, sky diving, etc) "},{"fields":["e"],"coeff":[-1],"text":"I don\'t open up about my feelings or problems with people easily and prefer to have time alone"},{"fields":["o"],"coeff":[1],"text":"I spend time reflecting on things and tend to daydream so often"},{"fields":["o"],"coeff":[1],"text":"I like variety and trying new things (taste new food, learn a new language, earn a new skill, etc)"},{"fields":["0"],"coeff":[0],"text":"I love reading complex and challenging material"},{"fields":["o"],"coeff":[1],"text":"I believe that laws, societal norms and traditions should be adapted to the evolution of the modern world"},{"fields":["o"],"coeff":[-1],"text":"I focus on the here and now and would rely on my experience rather than my imagination"},{"fields":["o"],"coeff":[-1],"text":"I am a creature of habit and like having a routine"},{"fields":["o"],"coeff":[-1],"text":"I avoid philosophical and abstract discussions"},{"fields":["o"],"coeff":[-1],"text":"I believe that new generations have drifted apart from their roots and traditions under the name of \\"freedom\\" "},{"fields":["a"],"coeff":[-1],"text":"I don\'t easily trust people and believe everyone has hidden motives"},{"fields":["a"],"coeff":[-1],"text":"People say I have a sharp tongue (You tell the truth even when it hurts)"},{"fields":["a"],"coeff":[-1],"text":"I don\'t allocate much time for others, I think everyone should be able to deal with their problems alone"},{"fields":["a"],"coeff":[-1],"text":"Believe deep inside that I\'m better than others"},{"fields":["a"],"coeff":[-1],"text":"I have a difficulty relating to others\' feelings"},{"fields":["a"],"coeff":[1],"text":"I am convinced all humans are inherently good (there\'s a good side in everyone)"},{"fields":["a"],"coeff":[1],"text":"I avoid getting into controversial topics or conversations that could cause disagreement between me and others"},{"fields":["a"],"coeff":[1],"text":"I am concerned about others and feel it\'s my responsibility to help them "},{"fields":["a"],"coeff":[1],"text":"I don\'t talk a lot about my achievements or successes in front of others"},{"fields":["a"],"coeff":[1],"text":"I sympathize a lot with people that are worse-off than me and often feel sad when I see people suffering"},{"fields":["c"],"coeff":[1],"text":"I try to avoid making mistakes as much as I can, and like to always have a backup plan"},{"fields":["c"],"coeff":[1],"text":"I plunge into tasks with all of my heart and tend to do more of what\'s expected from me "},{"fields":["c"],"coeff":[1],"text":"I like order, I make plans and To-Do-Lists and always stick to them"},{"fields":["c"],"coeff":[-1],"text":"I live by the motto of \\"You Only Live Once\\" and get myself going with the flow"},{"fields":["c"],"coeff":[-1],"text":"I need a push to get started in a task and always get things done on last-minute"},{"fields":["c"],"coeff":[-1],"text":"I leave my belongings around and don\'t mind staying in a messy place. "},{"fields":["n"],"coeff":[-1],"text":"I worry about things and fear that they might go wrong "},{"fields":["o","n"],"coeff":[1,-1],"text":"I tend to overreact to situations (exple: lose my temper, stress about trivial matters, etc)"},{"fields":["n"],"coeff":[-1],"text":"I have frequent mood swings"},{"fields":["n"],"coeff":[-1],"text":"I tend to feel awkward or intimdated in unfamiliar situations or with unfamiliar people "},{"fields":["n"],"coeff":[1],"text":"I don\'t think I have big problems to worry about in my life, things are rather going well for me"},{"fields":["n"],"coeff":[1],"text":"I\'m not easily annoyed and even if I am, I usually calm down very quickly"},{"fields":["n"],"coeff":[1],"text":"I have a lot of happy thoughts and am pleased about myself in general"},{"fields":["n"],"coeff":[1],"text":"I don\'t have a problem with being on stage or delivering a public speech in a large group of people "}]')},"94dc":function(e,t,n){"use strict";n("1ff2")},ba8c:function(e,t,n){},c894:function(e,t,n){},fd9d:function(e,t,n){}});
//# sourceMappingURL=app.6579a0d0.js.map