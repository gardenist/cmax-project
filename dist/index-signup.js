!function(e){var t={};function o(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){const s=o(1);document.getElementById("signUp").onclick=function(){let e=document.querySelector("#username").value,t=document.querySelector("#password").value;(new s).signUp(e,t),location.href="./login.html"}},function(e,t,o){const s=o(2),n=s.User,r=(s.Post,o(3)),a=o(4);e.exports=class{constructor(){this.storage=new r,this.session=new a}getLoggedInUser(){let e=this.session.load("loggedInUser");return console.log(e),e}signUp(e,t){let o=new n(e,t),s="users."+e;this.storage.save(s,o)}logIn(e,t,o,s){let r=this.storage.load("users."+e);r?r.password===t?(this.session.save("loggedInUser",new n(e,t)),o()):s("비밀번호가 일치하지 않습니다."):s("사용자 "+e+"의 정보를 찾을 수 없습니다.")}}},function(e,t){e.exports={User:class{constructor(e,t){this.username=e,this.password=t}},Post:class{constructor(e,{username:t},o,s){this.id=e,this.username=t,this.title=o,this.content=s,this.createdAt=new Date}},Comment:class{constructor({id:e},{username:t},o){this.postId=e,this.username=t,this.content=o}}}},function(e,t){e.exports=class{save(e,t){console.log("save data"+e,t),localStorage.setItem(e,JSON.stringify(t))}load(e){console.log("load data"+e);let t=localStorage.getItem(e);if(t)return JSON.parse(t)}}},function(e,t){e.exports=class{save(e,t){console.log("save session data"+e,t),sessionStorage.setItem(e,JSON.stringify(t))}load(e){console.log("load session data"+e);let t=sessionStorage.getItem(e);if(t)return JSON.parse(t)}}}]);