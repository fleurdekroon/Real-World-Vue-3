(function(e){function t(t){for(var c,a,u=t[0],i=t[1],s=t[2],v=0,l=[];v<u.length;v++)a=u[v],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var b=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02f3":function(e,t,n){"use strict";n("a3a4")},"4f68":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={id:"app"},o={id:"nav"},a=Object(c["f"])("Events"),u=Object(c["f"])(" | "),i=Object(c["f"])("About");function s(e,t){var n=Object(c["w"])("router-link"),s=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])("div",r,[Object(c["g"])("div",o,[Object(c["g"])(n,{to:{name:"EventList"}},{default:Object(c["C"])((function(){return[a]})),_:1}),u,Object(c["g"])(n,{to:{name:"About"}},{default:Object(c["C"])((function(){return[i]})),_:1})]),Object(c["g"])(s)])}n("64be");const b={};b.render=s;var v=b,l=n("8c4f"),d=Object(c["D"])("data-v-22746572");Object(c["s"])("data-v-22746572");var p={class:"events"};Object(c["q"])();var f=d((function(e,t){var n=Object(c["w"])("EventCard");return Object(c["p"])(),Object(c["d"])("div",p,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(e.events,(function(e){return Object(c["p"])(),Object(c["d"])(n,{key:e.id,event:e},null,8,["event"])})),128))])})),j=Object(c["D"])("data-v-55850e6c");Object(c["s"])("data-v-55850e6c");var O={class:"event-card"};Object(c["q"])();var h=j((function(e,t){var n=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])(n,{class:"event-link",to:{name:"EventDetails",params:{id:e.event.id}}},{default:j((function(){return[Object(c["g"])("div",O,[Object(c["g"])("h2",null,"Event #"+Object(c["y"])(e.$route.params.id),1),Object(c["g"])("span",null,"@"+Object(c["y"])(e.event.time)+" on "+Object(c["y"])(e.event.date),1),Object(c["g"])("h4",null,Object(c["y"])(e.event.title),1)])]})),_:1},8,["to"])})),y={props:{event:{type:Object,required:!0}}};n("b0d9");y.render=h,y.__scopeId="data-v-55850e6c";var g=y,m=n("bc3a"),w=m["a"].create({baseURL:"https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),_={getEvents:function(){return w.get("/events")},getEvent:function(e){return w.get("/events/"+e)}},E={name:"EventList",components:{EventCard:g},data:function(){return{events:null}},created:function(){var e=this;_.getEvents().then((function(t){e.events=t.data})).catch((function(e){console.log(e)}))}};n("02f3");E.render=f,E.__scopeId="data-v-22746572";var k=E,P=(n("a4d3"),n("e01a"),{key:0});function C(e,t){return e.event?(Object(c["p"])(),Object(c["d"])("div",P,[Object(c["g"])("h1",null,Object(c["y"])(e.event.title),1),Object(c["g"])("p",null,Object(c["y"])(e.event.time)+" on "+Object(c["y"])(e.event.date)+" @ "+Object(c["y"])(e.event.location),1),Object(c["g"])("p",null,Object(c["y"])(e.event.description),1)])):Object(c["e"])("",!0)}var x={props:["id"],data:function(){return{event:null}},created:function(){var e=this;_.getEvent(this.id).then((function(t){e.event=t.data})).catch((function(e){console.log(e)}))}};x.render=C;var A=x,S={class:"about"},D=Object(c["g"])("p",null,"A site for events to better the world.",-1);function L(e,t){return Object(c["p"])(),Object(c["d"])("div",S,[D])}const M={};M.render=L;var q=M,T=[{path:"/",name:"EventList",component:k},{path:"/about",name:"About",component:q},{path:"/event/:id",name:"EventDetails",props:!0,component:A}],I=Object(l["a"])({history:Object(l["b"])("/"),routes:T}),J=I,R=n("5502"),U=Object(R["a"])({state:{},mutations:{},actions:{},modules:{}});Object(c["c"])(v).use(U).use(J).mount("#app")},"64be":function(e,t,n){"use strict";n("c894")},a3a4:function(e,t,n){},b0d9:function(e,t,n){"use strict";n("4f68")},c894:function(e,t,n){}});
//# sourceMappingURL=app.33f47082.js.map
