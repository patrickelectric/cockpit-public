import{d as s,j as r,D as d,u,k as m,m as i,q as c,ac as p,o as v,c as f,f as g,b as h,ad as V}from"./index.2658db6d.js";const M=s({__name:"ModeSelector",setup(_){r.registerUsage(d.mode);const o=u(),e=m();i(e,t=>{if(e.value!==void 0){if(t===o.mode){console.log("New mode is the same as the current one. No mode-change commands will be issued.");return}o.setFlightMode(e.value)}});let a;return c(()=>a=setInterval(()=>e.value=o.mode,500)),p(()=>clearInterval(a)),(t,l)=>(v(),f("div",null,[g(V,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),options:h(o).modesAvailable(),class:"min-w-[128px]"},null,8,["modelValue","options"])]))}});export{M as default};
