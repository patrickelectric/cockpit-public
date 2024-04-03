import{d as E,S as O,j as P,D as j,u as I,k as h,U as M,Z as $,bc as z,i as H,m as b,aq as C,an as q,at as F,o as L,c as Y,a as i,f as W,a2 as Z,ad as G,b as r,bd as J,a4 as K,ar as Q,as as l,be as X,a9 as ee,aa as te,ab as ae}from"./index.2658db6d.js";import{g as d}from"./index.26c17e5e.js";const se=o=>(ee("data-v-8d9e1d9d"),o=o(),te(),o),oe=["height","width"],ne={class:"w-full h-full"},le={class:"flex flex-col items-center justify-around"},ie={class:"flex items-center justify-between w-full my-1"},re=se(()=>i("span",{class:"mr-1 text-slate-100"},"Heading style",-1)),de={class:"w-40"};var N=(o=>(o.NORTH_UP="North Up",o.HEAD_UP="Head Up",o))(N||{});const ce=E({__name:"Compass",props:{widget:{}},setup(o){const V=O();P.registerUsage(j.heading);const D=I(),S=h(),c=h(),m=h(),R={[0]:"N",[45]:"NE",[90]:"E",[135]:"SE",[180]:"S",[225]:"SW",[270]:"W",[315]:"NW"},x=Object.values(N),n=M(o).widget;$(()=>{Object.keys(n.value.options).length===0&&(n.value.options={headingStyle:x[0]})});const{width:A,height:T}=z(S),g=H(()=>A.value<T.value?A.value:T.value),U=()=>{if(c.value===void 0||c.value===null)return;m.value===void 0&&(m.value=c.value.getContext("2d"));const e=m.value;Q(e);const t=.5*g.value,s=.13*g.value,u=.03*t;e.textAlign="center",e.strokeStyle="white",e.font=`bold ${s}px Arial`,e.fillStyle="white",e.lineWidth=u,e.textBaseline="middle";const f=.7*t,y=.4*t,_=.55*t;e.translate(t,t),e.font=`bold ${s}px Arial`,e.fillText(`${a.yawAngleDegrees.toFixed(0)}\xB0`,.15*s,0),e.rotate(l(-90)),n.value.options.headingStyle=="Head Up"&&e.rotate(l(a.yawAngleDegrees));for(const[v,B]of Object.entries(R))e.save(),e.rotate(l(Number(v))),e.beginPath(),e.moveTo(_,0),e.lineTo(f,0),e.textBaseline="bottom",e.font=`bold ${.7*s}px Arial`,e.translate(f*1.025,0),e.rotate(l(90)),e.fillText(B,0,0),e.stroke(),e.restore();for(const v of X(360))v%9===0&&(e.save(),e.lineWidth=.25*u,e.rotate(l(Number(v))),e.beginPath(),e.moveTo(1.1*_,0),e.lineTo(f,0),e.stroke(),e.restore());e.beginPath(),e.arc(0,0,f,0,l(360)),e.stroke(),n.value.options.headingStyle=="North Up"?e.rotate(l(a.yawAngleDegrees)):e.rotate(-l(a.yawAngleDegrees)),e.beginPath(),e.lineWidth=1,e.strokeStyle="red",e.fillStyle="red";const p=.05*t;e.moveTo(y,p),e.lineTo(_-.5*p,0),e.lineTo(y,-p),e.lineTo(y,p),e.closePath(),e.fill(),e.stroke()},w=h(0);let k;b(D.attitude,e=>{Math.abs(C(e.yaw-(k||0)))>.1&&(k=e.yaw,w.value=C(D.attitude.yaw))});const a=q({yawAngleDegrees:0});return b(w,()=>{const e=w.value,t=e<0?e+360:e,s=a.yawAngleDegrees>270&&t<90,u=a.yawAngleDegrees<90&&t>270;s?(d.to(a,.05,{yawAngleDegrees:0}),d.fromTo(a,.05,{yawAngleDegrees:0},{yawAngleDegrees:t})):u?(d.to(a,.05,{yawAngleDegrees:360}),d.fromTo(a,.05,{yawAngleDegrees:360},{yawAngleDegrees:t})):d.to(a,.1,{yawAngleDegrees:t})}),b(a,()=>{!V.isWidgetVisible(n.value)||F(()=>U())}),(e,t)=>(L(),Y(K,null,[i("div",{ref_key:"compassRoot",ref:S,class:"compass"},[i("canvas",{ref_key:"canvasRef",ref:c,height:g.value,width:g.value,class:"rounded-[15%] bg-slate-950/70"},null,8,oe)],512),W(J,{show:r(n).managerVars.configMenuOpen,"onUpdate:show":t[1]||(t[1]=s=>r(n).managerVars.configMenuOpen=s),class:"w-72"},{default:Z(()=>[i("div",ne,[i("div",le,[i("div",ie,[re,i("div",de,[W(G,{modelValue:r(n).options.headingStyle,"onUpdate:modelValue":t[0]||(t[0]=s=>r(n).options.headingStyle=s),options:r(x)},null,8,["modelValue","options"])])])])])]),_:1},8,["show"])],64))}});const pe=ae(ce,[["__scopeId","data-v-8d9e1d9d"]]);export{pe as default};
