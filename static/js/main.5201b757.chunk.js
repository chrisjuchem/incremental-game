(this["webpackJsonpincremental-game"]=this["webpackJsonpincremental-game"]||[]).push([[0],{17:function(e,n,t){e.exports=t(24)},22:function(e,n,t){},23:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(15),o=t.n(c),u=(t(22),t(23),t(12)),i=t(27),s=t(26),l=t(28),m=Object(i.a)(1e3/30).pipe(Object(l.a)(new s.a));m.connect();var b={a:0,b:0,c:10},f={a:1,c:.2},d=new s.a(b);m.subscribe((function(){for(var e=0,n=Object.entries(f);e<n.length;e++){var t=Object(u.a)(n[e],2),r=t[0],a=t[1];b[r]+=1e3/30*a/1e3}d.next(b)}));var v=function(e){var n=Object(r.useState)(),t=Object(u.a)(n,2),c=t[0],o=t[1];return Object(r.useEffect)((function(){var n=d.subscribe((function(n){o(Math.floor(n[e.resource]))}));return function(){n.unsubscribe()}}),[e.resource]),Object(r.useEffect)((function(){return console.log("render "+e.resource)})),a.a.createElement("div",null,a.a.createElement("p",null,e.resource,": ",c))};var h=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(v,{resource:"a"}),a.a.createElement(v,{resource:"b"}),a.a.createElement(v,{resource:"c"}),a.a.createElement("button",{onClick:function(){return e=1,b["b"]+=e,void d.next(b);var e}},"Add a 'B'")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.5201b757.chunk.js.map