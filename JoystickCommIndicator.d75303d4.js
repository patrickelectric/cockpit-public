import{d as n,k as i,q as l,s as r,r as d,e as m,w as p,o as t,c as f,f as k,g as v,h as _,n as u}from"./index.2658db6d.js";const J=n({__name:"JoystickCommIndicator",setup(y){const e=i(!1);l(()=>{r.onJoystickUpdate(o=>{a(o)})});const a=o=>{e.value=o.size!==0};return(o,x)=>{const s=d("FontAwesomeIcon"),c=m("tooltip");return p((t(),f("div",{class:u(["relative",e.value?"text-slate-50":"text-gray-700"])},[k(s,{icon:"fa-solid fa-gamepad",size:"xl"}),e.value?_("",!0):(t(),v(s,{key:0,icon:"fa-solid fa-slash",size:"xl",class:"absolute left-0"}))],2)),[[c,e.value?"Joystick connected":"Joystick disconnected"]])}}});export{J as default};
