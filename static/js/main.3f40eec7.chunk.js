(this["webpackJsonpmy-proj"]=this["webpackJsonpmy-proj"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},37:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var r=c(3),s=c.n(r),a=c(23),n=c.n(a),l=(c(28),c(29),c(16)),o=c(11),d=c(2),i=function(){return Object(d.jsx)("footer",{class:"footer-1 bg-black text-gray-100 py-8 sm:py-12 font-mont",children:Object(d.jsx)("div",{class:"container mx-auto px-4",children:Object(d.jsxs)("div",{class:"sm:flex sm:flex-wrap sm:-mx-4 md:py-4 content-evenly",children:[Object(d.jsxs)("div",{class:"px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0",children:[Object(d.jsx)("h5",{class:"text-xl font-bold mb-6",children:"About"}),Object(d.jsxs)("ul",{class:"list-none footer-links",children:[Object(d.jsx)("li",{class:"mb-2",children:Object(d.jsx)("a",{href:"#",class:"border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",children:"Team"})}),Object(d.jsx)("li",{class:"mb-2",children:Object(d.jsx)("a",{href:"#",class:"border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",children:"Privacy"})}),Object(d.jsx)("li",{class:"mb-2",children:Object(d.jsx)("a",{href:"#",class:"border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",children:"Terms"})})]})]}),Object(d.jsxs)("div",{class:"px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0",children:[Object(d.jsx)("h5",{class:"text-xl font-bold mb-6",children:"Help"}),Object(d.jsxs)("ul",{class:"list-none footer-links",children:[Object(d.jsx)("li",{class:"mb-2",children:Object(d.jsx)("a",{href:"#",class:"border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",children:"Support"})}),Object(d.jsx)("li",{class:"mb-2",children:Object(d.jsx)("a",{href:"#",class:"border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",children:"Help Center"})}),Object(d.jsx)("li",{class:"mb-2",children:Object(d.jsx)("a",{href:"#",class:"border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800",children:"Contact Us"})})]})]}),Object(d.jsxs)("div",{class:"px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto md:absolute md:right-6",children:[Object(d.jsx)("h5",{class:"text-xl font-bold mb-6 sm:text-center xl:text-left",children:"Stay connected"}),Object(d.jsxs)("div",{class:"flex sm:justify-center xl:justify-start",children:[Object(d.jsx)("a",{href:"",class:"w-8 h-8 border-solid border-2 border-gray-400 rounded-full text-center p-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600",children:Object(d.jsx)(l.a,{icon:o.a})}),Object(d.jsx)("a",{href:"",class:"w-8 h-8 border-solid border-2 border-gray-400 rounded-full text-center p-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400",children:Object(d.jsx)(l.a,{icon:o.b})}),Object(d.jsx)("a",{href:"",class:"w-8 h-8 border-solid border-2 border-gray-400 rounded-full text-center pt-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600",children:Object(d.jsx)(l.a,{icon:o.c})})]})]})]})})})},j=c(9),b=c.n(j),x=c(10),h=c(8),u=(c(37),c(55)),m=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)([]),n=Object(h.a)(a,2),l=n[0],o=n[1],i=Object(r.useState)([]),j=Object(h.a)(i,2),m=j[0],p=j[1],O=function(){var e=Object(x.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://disease.sh/v3/covid-19/countries");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,s(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(x.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://disease.sh/v3/covid-19/countries/".concat(m));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,o(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){O()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(u.a.div,{className:"wrap container w-5/6 flex flex-col items-center justify-center mx-auto bg-yellow-100 mb-10 ",animate:{x:15,opacity:1},initial:{opacity:0,x:-50},transition:{duration:1},children:[Object(d.jsx)("div",{className:"comp3 right uppercase flex justify-center",children:Object(d.jsx)("h3",{children:"Country Wise Stats"})}),Object(d.jsx)("select",{className:"custom mont",onChange:function(e){var t=e.target.value;p(t),v()},children:c.map((function(e,t){return Object(d.jsx)("option",{className:"option",value:e.country,children:e.country},t)}))}),Object(d.jsx)("div",{className:"container-wrap flex flex-col shadow-md w-full items-center justify-center container mx-auto",children:Object(d.jsxs)("div",{className:"flex flex-col sm:flex-row mt-6 mont object-scale-down",children:[Object(d.jsxs)("div",{className:"data-cont bg-yellow-200 ",children:["Total Cases",Object(d.jsx)("div",{className:"country",children:m}),Object(d.jsx)("div",{className:"data text-yellow-500 shadow-sm",children:l.cases})]}),Object(d.jsxs)("div",{className:"data-cont bg-red-200",children:["Total Deceased",Object(d.jsx)("div",{className:"country",children:m}),Object(d.jsx)("div",{className:"data text-red-500 shadow-sm",children:l.deaths})]}),Object(d.jsxs)("div",{className:"data-cont bg-green-100",children:["Total Recovered",Object(d.jsx)("div",{className:"country",children:m}),Object(d.jsx)("div",{className:"data text-green-500 shadow-sm",children:l.recovered})]})]})})]})})},p=(c(49),function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],a=function(){var e=Object(x.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,s(c.statewise),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){a()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(u.a.div,{className:"container mx-auto flex flex-col items-center justify-center mont mt-16 shadow-xl mb-10  bg-yellow-100 rounded-xl pb-6 w-5/6 px-6",animate:{x:5,opacity:1},initial:{opacity:0,x:-50},transition:{duration:.9},children:[Object(d.jsx)("div",{className:"comp2 right uppercase mb-10",children:Object(d.jsx)("h3",{children:"Indian States Data"})}),Object(d.jsxs)("table",{className:"table-auto bg-red-100 table1",children:[Object(d.jsx)("thead",{className:"head",children:Object(d.jsxs)("tr",{className:"row row1",children:[Object(d.jsx)("th",{className:"cell",children:"State"}),Object(d.jsx)("th",{className:"cell ",children:"Cases"}),Object(d.jsx)("th",{className:"cell ",children:"Deceased"}),Object(d.jsx)("th",{className:"cell ",children:"Recovered"})]})}),Object(d.jsx)("tbody",{children:c.map((function(e,t){return Object(d.jsxs)("tr",{className:"row",children:[Object(d.jsx)("td",{className:"cell",children:e.state}),Object(d.jsx)("td",{className:"cell cases",children:e.confirmed}),Object(d.jsx)("td",{className:"cell deaths",children:e.deaths}),Object(d.jsx)("td",{className:"cell recovered",children:e.recovered})]},t)}))})]})]})})}),O=(c(50),function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],a=function(){var e=Object(x.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://disease.sh/v3/covid-19/all");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,s(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){a()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(u.a.div,{className:"container-wrap flex flex-col shadow-md items-center justify-center mx-auto w-5/6 container bg-yellow-100 border-2 relative top-3",animate:{y:10,opacity:1},initial:{opacity:0,y:-50},transition:{duration:.7},children:[Object(d.jsx)("div",{className:"heading right flex justify-center",children:Object(d.jsx)("h1",{children:"COVID-19 Tracker"})}),Object(d.jsx)("div",{className:"comp1 right uppercase",children:Object(d.jsx)("h3",{children:"World Wide Stats"})}),Object(d.jsxs)("div",{className:"flex flex-col sm:flex-row mt-6 mont py-4 px-8 justify-between object-contain",children:[Object(d.jsxs)("div",{className:"data-cont bg-yellow-200 border-yellow-400",children:["Total Cases",Object(d.jsx)("div",{className:"world",children:"World"}),Object(d.jsx)("div",{className:"data text-yellow-500 shadow-sm",children:c.cases})]}),Object(d.jsxs)("div",{className:"data-cont bg-red-200",children:["Total Deceased",Object(d.jsx)("div",{className:"world",children:"World"}),Object(d.jsx)("div",{className:"data text-red-500 shadow-sm",children:c.deaths})]}),Object(d.jsxs)("div",{className:"data-cont bg-green-100",children:["Total Recovered",Object(d.jsx)("div",{className:"world",children:"World"}),Object(d.jsx)("div",{className:"data text-green-500 shadow-sm",children:c.recovered})]})]})]})})});var v=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O,{}),Object(d.jsx)(p,{}),Object(d.jsx)(m,{}),Object(d.jsx)(i,{})]})};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.3f40eec7.chunk.js.map