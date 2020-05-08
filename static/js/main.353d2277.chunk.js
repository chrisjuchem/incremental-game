(this["webpackJsonpincremental-game"]=this["webpackJsonpincremental-game"]||[]).push([[0],{26:function(e,t,n){e.exports=n(35)},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),o=n.n(c);n(31),n(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(1),u=(n(33),n(6)),s=n(7),l=n(20),m=n(19),b=n(24),f=n(38),v=n(37),d=n(39),g=Math.floor(1e3/30),h=Object(f.a)(30).pipe(Object(v.a)(g),Object(d.a)(0));h.connect();var E=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e,a){var r;return Object(u.a)(this,n),(r=t.call(this,1e3,a)).resource=e,r}return Object(s.a)(n,[{key:"generate",value:function(e){this.resource.updateCount(e)}}]),n}(function(){function e(t){var n=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(u.a)(this,e),this.baseTime=t,this.upgrades=a,this.accumulated=0,this.emitter=new b.a(this.message()),h.subscribe((function(e){n.accumulated+=e*n.upgrades;var t=Math.floor(n.accumulated/n.baseTime);n.accumulated=n.accumulated%n.baseTime,t&&n.generate(t),n.emitter.next(n.message())}))}return Object(s.a)(e,[{key:"getRate",value:function(){return this.baseTime*this.upgrades/1e3}},{key:"generate",value:function(e){console.warn("Generator did not overwrite generate.")}},{key:"upgrade",value:function(e){this.upgrades+=e,this.emitter.next(this.message())}},{key:"message",value:function(){return{rate:this.getRate(),progress:this.accumulated/this.baseTime}}}]),e}()),O=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;Object(u.a)(this,e),this.name=t,this.count=n,this.generator=new E(this,a),this.emitter=new b.a({count:n,rate:a})}return Object(s.a)(e,[{key:"broadcast",value:function(){this.emitter.next(this.serialize())}},{key:"update",value:function(e){if(!e)return!1;this.updateCount(e.count),this.updateRate(e.rate)}},{key:"updateCount",value:function(e){if(!e)return!1;this.count+=e,this.broadcast()}},{key:"updateRate",value:function(e){if(!e)return!1;this.generator.upgrade(e),this.broadcast()}},{key:"serialize",value:function(){return{count:this.count,rate:this.generator.upgrades}}},{key:"deserializable",value:function(e){return!(!e||void 0===e.count||void 0===e.rate)}},{key:"deserialize",value:function(e){this.count=e.count,this.generator.upgrades=e.rate,this.broadcast()}}]),e}(),j=[new O("a"),new O("b"),new O("c",2)].reduce((function(e,t){return e[t.name]=t,e}),{});var p=function(e){var t=e.generator,n=e.showBar,c=void 0!==n&&n,o=Object(a.useState)(0),u=Object(i.a)(o,2),s=u[0],l=u[1],m=Object(a.useState)(0),b=Object(i.a)(m,2),f=b[0],v=b[1];return Object(a.useEffect)((function(){var e=t.emitter.subscribe((function(e){l(e.progress),v(e.rate)}));return function(){e.unsubscribe()}}),[t]),r.a.createElement("div",null,c?r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(100*s,"%"),transition:"none"}})):null,f,"/s")};var w=function(e){var t=e.resource,n=Object(a.useState)(0),c=Object(i.a)(n,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){var e=j[t].emitter.subscribe((function(e){u(Math.floor(e.count))}));return function(){e.unsubscribe()}}),[t]),r.a.createElement("div",null,r.a.createElement("div",null,t,": ",o," ",r.a.createElement(p,{generator:j[t].generator,showBar:!0})))},y=n(21),k=new y.a,N="SAVE_GAME_EVENT",L="LOAD_GAME_EVENT";function S(){var e=JSON.parse(localStorage.getItem("saved-game"));return!!e&&Object.entries(e).reduce((function(e,t){var n=Object(i.a)(t,2),a=n[0],r=n[1];return!!(e&&j[a]&&j[a].deserializable(r))}),!0)}var x=r.a.createContext({history:[],doLog:!1,showLog:!1,toggleLog:function(){},toggleShowLog:function(){},log:function(e){},clearLog:function(){}});var C=function(e){var t=e.saveInterval,n=Object(a.useContext)(x);return Object(a.useEffect)((function(){var e=Object(f.a)(1e3*t).subscribe((function(){!function(){var e=Object.entries(j).reduce((function(e,t){var n=Object(i.a)(t,2),a=n[0],r=n[1];return e[a]=r.serialize(),e}),{});localStorage.setItem("saved-game",JSON.stringify(e)),k.next("SAVE_GAME_EVENT")}()}));return function(){return e.unsubscribe()}}),[n,t]),null},G=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e,a,r){var c;return Object(u.a)(this,n),(c=t.call(this,a)).name=e,c.result=r,c.emitter=new y.a,c}return Object(s.a)(n,[{key:"giveBuyResult",value:function(){Object.entries(this.result).forEach((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];return j[n].update(a)})),this.emitter.next({name:this.name,price:this.price,result:this.result})}}]),n}(function(){function e(t){Object(u.a)(this,e),this.price=t}return Object(s.a)(e,[{key:"isAffordable",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Object.entries(this.price).reduce((function(t,n){var a=Object(i.a)(n,2),r=a[0],c=a[1];return t&&c*e<=j[r].count}),!0)}},{key:"buy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(!this.isAffordable(e))return!1;Object.entries(this.price).forEach((function(t){var n=Object(i.a)(t,2),a=n[0],r=n[1];return j[a].updateCount(-r*e)})),this.giveBuyResult(e)}},{key:"giveBuyResult",value:function(e){console.warn("Buyable did not overwrite giveResult.")}}]),e}()),_=[new G("a++",{c:2},{a:{rate:1}}),new G("b++",{c:10},{b:{rate:1}}),new G("click",{},{b:{count:1}}),new G("convert",{a:5,b:5},{c:{count:1}})].reduce((function(e,t){return e[t.name]=t,e}),{});var M=function(e){var t=e.recipe;return r.a.createElement("div",{className:"row mb-4"},r.a.createElement("div",{className:"col-3"},r.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(){_[t].buy()}},t)),r.a.createElement("div",{className:"col-auto"},"Costs:",Object.entries(_[t].price).map((function(e){var n=Object(i.a)(e,2),a=n[0],c=n[1];return r.a.createElement("div",{key:"".concat(t,"_entries_").concat(a)},"".concat(c," ").concat(a))}))),r.a.createElement("div",{className:"col-auto"},"Produces:",Object.entries(_[t].result).map((function(e){var n=Object(i.a)(e,2),a=n[0],c=n[1];return r.a.createElement("div",{key:"".concat(t,"_results_").concat(a)},Object.entries(c).map((function(e){var t=Object(i.a)(e,2),n=t[0],r=t[1];return"".concat(r," ").concat(a).concat("rate"===n?"/s":"")})))}))))};var A=function(e){var t=e.recipes;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container-fluid p-0"},t.map((function(e){return r.a.createElement(M,{recipe:e,key:e})}))))};var I=function(){return r.a.createElement("div",{className:"container game-container"},r.a.createElement(C,{saveInterval:5}),r.a.createElement("div",{className:"row"},r.a.createElement(w,{resource:"a"})),r.a.createElement("div",{className:"row"},r.a.createElement(w,{resource:"b"})),r.a.createElement("div",{className:"row"},r.a.createElement(w,{resource:"c"})),r.a.createElement(A,{recipes:Object.keys(_)}))};var B=function(e){var t=e.setInGame;return r.a.createElement("div",{className:"main-menu"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t(!0)}},"New Game"),r.a.createElement("button",{className:"btn btn-primary".concat(S()?"":" d-none"),onClick:function(){!function(){var e=JSON.parse(localStorage.getItem("saved-game"));Object.entries(e).forEach((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];j[n].deserialize(a)})),k.next("LOAD_GAME_EVENT")}(),t(!0)}},"Continue"))};var T=function(e){var t=e.timestamp,n=e.string;return r.a.createElement("div",{className:"list-group-item list-group-item-action p-0 pl-1 text-monospace"},r.a.createElement("span",{className:"text-muted mr-2 font-italic"},t.padEnd(12)),r.a.createElement("span",{className:"text-black"},n))};n(34);var R=function(e){var t=e.history,n=Object(a.useState)(null),c=Object(i.a)(n,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){null!==o&&o.scrollIntoView({behavior:"smooth"})}),[t,o]),r.a.createElement("div",{className:"list-group max-vh-20 overflow-auto"},t.map((function(e,t){return r.a.createElement(T,{timestamp:e[0],string:e[1],key:t})})),r.a.createElement("div",{ref:function(e){return u(e)}}))};var z=function(){var e=Object(a.useContext)(x);return Object(a.useEffect)((function(){var t=k.subscribe((function(t){switch(t){case N:e.log("Game saved.");break;case L:e.log("Game loaded.");break;default:console.warn("got unhandled saveGameEvent"),e.log(t)}}));return function(){t.unsubscribe()}})),Object(a.useEffect)((function(){var t=Object.entries(_).map((function(t){var n=Object(i.a)(t,2),a=n[0];return n[1].emitter.subscribe((function(t){var n=Object.entries(t.result).map((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];return Object.entries(a).map((function(e){var t=Object(i.a)(e,2),a=t[0],r=t[1];return"".concat(r).concat(n).concat("rate"===a?"/s":"")}))})),r="Bought ".concat(a,", received ").concat(n);e.log(r)}))}));return function(){t.map((function(e){return e.unsubscribe()}))}})),e.showLog&&r.a.createElement("div",{className:"card text-dark"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",null,"Debug Me Daddy"),r.a.createElement(R,{history:e.history}),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("button",{onClick:function(){return e.toggleLog()},className:"btn btn-block ".concat(e.doLog?"btn-success":"btn-danger")},"Log ",e.doLog?"On":"Off")),r.a.createElement("div",{className:"col-2"},r.a.createElement("button",{onClick:function(){return e.clearLog()},className:"btn btn-block btn-warning"},"Clear Log")))))},V=n(25),D=n(8);var J=function(e){var t=e.inner,n=Object(a.useState)({history:[],doLog:!0,showLog:!1,toggleLog:function(){u((function(e){return Object(D.a)(Object(D.a)({},e),{},{doLog:!e.doLog})}))},toggleShowLog:function(){u((function(e){return Object(D.a)(Object(D.a)({},e),{},{showLog:!e.showLog})}))},log:function(e){return u((function(t){if(t.doLog){var n=function(e){var t=("0"+e.getHours().toString()).slice(-2),n=("0"+e.getMinutes().toString()).slice(-2),a=("0"+e.getSeconds().toString()).slice(-2),r=e.getMilliseconds().toString().padEnd(3,"0");return"".concat(t,":").concat(n,":").concat(a,".").concat(r)}(new Date),a=String(e);t.history.length>100&&t.history.shift(),t.history.push([n,a])}return Object(D.a)(Object(D.a)({},t),{},{history:Object(V.a)(t.history)})}))},clearLog:function(){return u((function(e){return Object(D.a)(Object(D.a)({},e),{},{history:[]})}))}}),c=Object(i.a)(n,2),o=c[0],u=c[1];return Object(a.useEffect)((function(){var e=function(e){"d"===e.key&&o.toggleShowLog()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[o]),r.a.createElement(x.Provider,{value:o},t)};var P=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],o=r.a.createElement("div",{className:"container text-light"},r.a.createElement("div",{className:"row pt-3"},r.a.createElement("h1",null,"Untitled Incremental Game")),n?r.a.createElement(I,null):r.a.createElement(B,{setInGame:c}),r.a.createElement("br",null),r.a.createElement(z,null));return r.a.createElement(J,{inner:o})};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.353d2277.chunk.js.map