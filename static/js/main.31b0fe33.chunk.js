(this["webpackJsonpcovid-19_statewise_tracker"]=this["webpackJsonpcovid-19_statewise_tracker"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),a=c.n(r),i=(c(11),c(3)),d=c.n(i),j=c(5),h=c(6),o=(c(13),c(0)),l=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],r=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://data.covid19india.org/data.json").catch((function(e){return console.log(e)}));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c.statewise),s(c.statewise);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container-fluid mt-5",children:[Object(o.jsx)("div",{className:"main-heading",children:Object(o.jsxs)("h1",{className:"mb-5 text-center",children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"INDIA"})," Covid-19 Dashboard"]})}),Object(o.jsx)("div",{className:"table-responsive",children:Object(o.jsxs)("table",{className:"table table-hover",children:[Object(o.jsx)("thead",{className:"thead-dark",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"state"}),Object(o.jsx)("th",{children:"confirmed"}),Object(o.jsx)("th",{children:"recovered"}),Object(o.jsx)("th",{children:"deaths"}),Object(o.jsx)("th",{children:"active"}),Object(o.jsx)("th",{children:"update"})]})}),Object(o.jsx)("tbody",{children:c.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:e.state}),Object(o.jsx)("td",{children:e.confirmed}),Object(o.jsx)("td",{children:e.recovered}),Object(o.jsx)("td",{children:e.deaths}),Object(o.jsx)("td",{children:e.active}),Object(o.jsx)("td",{children:e.lastupdatedtimecd})]},t)}))})]})})]})})};c(15),c(16);var b=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(l,{})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),u()}},[[17,1,2]]]);
//# sourceMappingURL=main.31b0fe33.chunk.js.map