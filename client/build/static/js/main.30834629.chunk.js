(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),i=a(5),r=a.n(i),n=(a(10),a(1));function o(){return Object(n.jsx)("section",{id:"about",children:Object(n.jsxs)("div",{className:"container mx-auto flex px-10 py-20 md:flex-row flex-col items-center",children:[Object(n.jsxs)("div",{className:"lg:flex-grow md:w-1/2 lg:pr-24 md-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ",children:[Object(n.jsxs)("h1",{className:"title-font sm:text-4xl text-3xl mb-4  font medium text-white",children:["Hello, I'm Darren",Object(n.jsx)("br",{className:"hidden lg:inline-block"}),"I love building apps!"]}),Object(n.jsx)("p",{className:"mb-8 leading-relaxed",children:"I'm a web developer with a Full Stack Web Development Certificate from SMU. I have a background in Irrigation and Warehousing. Where I learned to work as a team, give a 100% everyday, and stay optimistic no matter what the challenge. I hope to bring that same work ethic to my next career in Full Stack Web Development."}),Object(n.jsxs)("div",{className:"flex justify-center",children:[Object(n.jsx)("a",{href:"#contact",className:"inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg",children:"Contact"}),Object(n.jsx)("a",{href:"#projects",className:"ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg",children:"My Work"})]})]}),Object(n.jsx)("div",{className:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6",children:Object(n.jsx)("img",{className:"object-cover object-center rounded",alt:"hero",src:"./coding.svg"})})]})})}var c=a(3);function d(){var e=l.a.useState(""),t=Object(c.a)(e,2),a=t[0],s=t[1],i=l.a.useState(""),r=Object(c.a)(i,2),o=r[0],d=r[1],m=l.a.useState(""),x=Object(c.a)(m,2),b=x[0],h=x[1];return Object(n.jsx)("section",{id:"contact",className:"relative",children:Object(n.jsxs)("div",{className:"container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap",children:[Object(n.jsxs)("div",{className:"lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative",children:[Object(n.jsx)("iframe",{width:"100%",height:"100%",title:"Isak Stoneheart",className:"absolute inset-0",frameBorder:0,marginHeight:0,marginWidth:0,style:{filter:"opacity(0.7)"},src:"https://www.breckcreate.org/wp-content/uploads/2019/07/Isak-02-01-1024x683.jpg"}),Object(n.jsxs)("div",{className:"bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md",children:[Object(n.jsxs)("div",{className:"lg:w-1/2 px-6",children:[Object(n.jsx)("h2",{className:"title-font font-semibold text-white tracking-widest text-xs",children:"ADDRESS"}),Object(n.jsxs)("p",{className:"mt-1",children:["4011 Dome  ",Object(n.jsx)("br",{}),"Addison, Texas 75001"]})]}),Object(n.jsxs)("div",{className:"lg:w-1/2 px-6 mt-4 lg:mt-0",children:[Object(n.jsx)("h2",{className:"title-font font-semibold text-white tracking-widest text-xs",children:"EMAIL"}),Object(n.jsx)("a",{className:"text-indigo-400 leading-relaxed",children:"v_tec@live.com"}),Object(n.jsx)("h2",{className:"title-font font-semibold text-white tracking-widest text-xs mt-4",children:"PHONE"}),Object(n.jsx)("p",{className:"leading-relaxed",children:"214-664-0373"})]})]})]}),Object(n.jsxs)("form",{netlify:!0,name:"contact",onSubmit:function(e){var t;e.preventDefault(),fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t={"form-name":"contact",name:a,email:o,message:b},Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){return alert("Message sent!")})).catch((function(e){return alert(e)}))},className:"lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0",children:[Object(n.jsx)("h2",{className:"text-white sm:text-4xl text-3xl mb-1 font-medium title-font",children:"Hire Me"}),Object(n.jsx)("p",{className:"leading-relaxed mb-5",children:"Feel free to contact me about work, questions/comments, or if your interesed in a collaboration. Thank you and I look forward to speaking with you."}),Object(n.jsxs)("div",{className:"relative mb-4",children:[Object(n.jsx)("label",{htmlFor:"name",className:"leading-7 text-sm text-gray-400",children:"Name"}),Object(n.jsx)("input",{type:"text",id:"name",name:"name",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:function(e){return s(e.target.value)}})]}),Object(n.jsxs)("div",{className:"relative mb-4",children:[Object(n.jsx)("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-400",children:"Email"}),Object(n.jsx)("input",{type:"email",id:"email",name:"email",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:function(e){return d(e.target.value)}})]}),Object(n.jsxs)("div",{className:"relative mb-4",children:[Object(n.jsx)("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-400",children:"Message"}),Object(n.jsx)("textarea",{id:"message",name:"message",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",onChange:function(e){return h(e.target.value)}})]}),Object(n.jsx)("button",{type:"submit",className:"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",children:"Submit"})]})]})})}var m=a(2);function x(){return Object(n.jsx)("header",{className:"bg-gray-800 md:sticky top-0 z-10",children:Object(n.jsxs)("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[Object(n.jsx)("a",{className:"title-font font-medium text-white mb-4 md:mb-0",children:Object(n.jsx)("a",{href:"#about",className:"ml-3 text-xl",children:"Darren Watson"})}),Object(n.jsxs)("nav",{className:"md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700\tflex flex-wrap items-center text-base justify-center",children:[Object(n.jsx)("a",{href:"#projects",className:"mr-5 hover:text-white",children:"My Work"}),Object(n.jsx)("a",{href:"#skills",className:"mr-5 hover:text-white",children:"Skills"})]}),Object(n.jsxs)("a",{href:"#contact",className:"inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0",children:["Hire Me",Object(n.jsx)(m.a,{className:"w-4 h-4 ml-1"})]})]})})}var b=[{title:"Google Book Search",subtitle:"MERN Stack",description:"A simple react app using google books api to search for books and view them in the google store, you can also save them for later , or delete it after your done with it. In future development I'll add a sign-in/sign-up page and work in a share button to social media. ",image:"./googleBook.gif",link:"#",code:""},{title:"Theater-Ade",subtitle:"JavaScript, TailwindCSS, and API",description:"When you want to mix Astrolgy with Movies look no further. What we do here is allow you to look up a movie and see what that movies sign is based on its release date. In future devolopments I hope to be able to suggest a movie to you based on your sign and personality. ",image:"./theater-ade.png",link:"https://emilymetzgar.github.io/theatre-ade/",code:""},{title:"Workday Scheduler",subtitle:"HTML, CSS , and JavaScript",description:"Simple app that allows you to plan the day out in hourly intervals. To help keep track of your day I've color coded the time slots so they turn red when that time has passed. For future development I'd like to take this a step further and have a weekly schedule aswell as the hourly. ",image:"./dayplanner.png",link:"https://dangerousd214.github.io/workday-scheduler/",code:""},{title:"Employee Directory",subtitle:"Mern, API, MaterialUI, and Bootstrap ",description:"The goal of this app is to make it easy to look at your employee's and there general info. In the future I want to be able to click on employee profile ,view a more detailed profile on them like what department they work in, their current performance, and etc... ",image:"./employee-directory.gif",link:"https://employee-crew.herokuapp.com/",code:""}],h=["JavaScript","React","CSS","Node","HTML","MongoDB"];function j(){return Object(n.jsx)("section",{id:"projects",className:"text-gray-400 bg-gray-900 body-font",children:Object(n.jsxs)("div",{className:"container px-5 py-10 mx-auto text-center lg:px-40",children:[Object(n.jsxs)("div",{className:"flex flex-col w-full mb-20",children:[Object(n.jsx)(m.d,{className:"mx-auto inline-block w-10 mb-4"}),Object(n.jsx)("h1",{className:"sm:text-4xl text-3xl font-medium title-font mb-4 text-white",children:"My Projects"}),Object(n.jsx)("p",{className:"lg:w-2/3 mx-auto leading-relaxed text-base"})]}),Object(n.jsx)("div",{className:"flex flex-wrap -m-4",children:b.map((function(e){return Object(n.jsx)("a",{href:e.link,className:"sm:w-1/2 w-100 p-4",children:Object(n.jsxs)("div",{className:"flex relative",children:[Object(n.jsx)("img",{alt:"gallery",className:"absolute inset-0 w-full h-full object-cover object-center",src:e.image}),Object(n.jsxs)("div",{className:"px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100",children:[Object(n.jsx)("h2",{className:"tracking-widest text-sm title-font font-medium text-green-400 mb-1",children:e.subtitle}),Object(n.jsx)("h1",{className:"title-font text-lg font-medium text-white mb-3",children:Object(n.jsx)("a",{href:e.code,children:e.title})}),Object(n.jsx)("p",{className:"leading-relaxed",children:e.description})]})]})},e.image)}))})]})})}function u(){return Object(n.jsx)("section",{id:"skills",children:Object(n.jsxs)("div",{className:"container px-5 py-10 mx-auto",children:[Object(n.jsxs)("div",{className:"text-center mb-20",children:[Object(n.jsx)(m.c,{className:"w-10 inline-block mb-4"}),Object(n.jsx)("h1",{className:"sm:text-4xl text-3xl font-medium title-font text-white mb-4",children:"Skills & Technologies"}),Object(n.jsx)("p",{className:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto",children:"Some of my favorite technologies to use!"})]}),Object(n.jsx)("div",{className:"flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2",children:h.map((function(e){return Object(n.jsx)("div",{className:"p-2 sm:w-1/2 w-full",children:Object(n.jsxs)("div",{className:"bg-gray-800 rounded flex p-4 h-full items-center",children:[Object(n.jsx)(m.b,{className:"text-green-400 w-6 h-6 flex-shrink-0 mr-4"}),Object(n.jsx)("span",{className:"title-font font-medium text-white",children:e})]})},e)}))})]})})}function g(){return Object(n.jsxs)("main",{className:"text-gray-400 bg-gray-900 body-font",children:[Object(n.jsx)(x,{}),Object(n.jsx)(o,{}),Object(n.jsx)(j,{}),Object(n.jsx)(u,{}),Object(n.jsx)(d,{})]})}r.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.30834629.chunk.js.map