import{d as L,S as G,U as B,j as z,D as M,u as $,k as h,bc as U,i as q,m as p,aq as T,an as E,at as j,q as F,o as I,c as N,a as J,ar as K,as as i,ab as O}from"./index.2658db6d.js";import{g as P}from"./index.26c17e5e.js";const Q=["height","width"],X=L({__name:"VirtualHorizon",props:{widget:{}},setup(H){const R=G(),V=B(H).widget;z.registerUsage(M.roll),z.registerUsage(M.pitch);const b=$(),x=h(),n=h(),g=h(),{width:A,height:D}=U(x),v=q(()=>A.value<D.value?A.value:D.value),w=()=>{if(n.value===void 0||n.value===null)return;g.value===void 0&&(g.value=n.value.getContext("2d"));const e=g.value;K(e);const r=.5*v.value,c=.06*v.value,l=.03*r;e.textAlign="center",e.strokeStyle="white",e.font=`bold ${c}px Arial`,e.fillStyle="white",e.lineWidth=l,e.textBaseline="middle";const t=.7*r;e.translate(r,r),e.rotate(i(-90)),e.rotate(i(90)),e.save(),e.strokeStyle="white",e.lineWidth=1.5*l,e.beginPath(),e.arc(0,0,t,0,i(360)),e.stroke(),e.restore(),e.save(),e.rotate(i(-1*s.rollAngleDegrees)),e.beginPath(),e.arc(0,0,t,0,i(360)),e.clip();const u=4,a=u*(s.pitchAngleDegrees/90)*t,_=e.createLinearGradient(0,-t,0,t);_.addColorStop(0,"rgb(69, 144, 190)"),_.addColorStop(1,"rgb(137, 190, 228)"),e.fillStyle=_,e.fillRect(-1.5*t,a,3*t,-3*t);const k=e.createLinearGradient(0,-t,0,t);k.addColorStop(0,"rgb(176, 117, 80)"),k.addColorStop(1,"rgb(200, 149, 98)"),e.fillStyle=k,e.fillRect(-1.5*t,a,3*t,3*t),e.lineWidth=.6*l,e.strokeStyle="white",e.beginPath(),e.moveTo(-.75*t,a),e.lineTo(-.45*t,a),e.lineTo(-.43*t,a+.07*t),e.moveTo(.75*t,a),e.lineTo(.45*t,a),e.lineTo(.43*t,a+.07*t),e.stroke(),e.save(),e.fillStyle="white",e.strokeStyle="white",e.lineWidth=.5*l,e.font=`bold ${c}px Arial`;for(const o of[-10,0,10]){const d=u*Math.abs(o/300)||.15,f=u*(o/90)*t,C=u*((o-5*Math.sign(o))/90)*t;e.beginPath(),e.moveTo(-d*t,f),e.lineTo(+d*t,f),e.moveTo(-.5*d*t,C),e.lineTo(.5*d*t,C),e.stroke(),e.textAlign="right",e.fillText(`${Math.abs(o)}`,-1*(d*t+.3*c),f),e.textAlign="left",e.fillText(`${Math.abs(o)}`,1*(d*t+.3*c),f)}e.restore(),e.restore(),e.save(),e.lineWidth=.8*l,e.rotate(i(-1*s.rollAngleDegrees)),e.beginPath(),e.moveTo(-1*t,0),e.lineTo(-.85*t,0),e.moveTo(.85*t,0),e.lineTo(1*t,0),e.stroke(),e.restore();for(const o of[-60,-45,-30,-20,-10,0,10,20,30,45,60])e.save(),e.rotate(i(o)),e.beginPath(),[-60,-30,30,60].includes(o)?(e.lineWidth=.8*l,e.moveTo(0,-1.2*t),e.lineTo(0,-1*t)):[-20,-10,10,20].includes(o)?(e.lineWidth=.6*l,e.moveTo(0,-1.1*t),e.lineTo(0,-1*t)):[-45,45].includes(o)?(e.lineWidth=.01*l,e.moveTo(0,-1.01*t),e.lineTo(-.05*t,-1.15*t),e.lineTo(.05*t,-1.15*t),e.lineTo(0,-1.01*t)):o===0&&(e.lineWidth=.01*l,e.moveTo(0,-1.01*t),e.lineTo(-.07*t,-1.25*t),e.lineTo(.07*t,-1.25*t),e.lineTo(0,-1.01*t)),e.stroke(),e.fill(),e.restore();e.save(),e.beginPath(),e.rotate(i(90)),e.rotate(i(-1*s.rollAngleDegrees)),e.lineWidth=.01*l,e.fillStyle="rgb(221, 43, 43)",e.moveTo(-1*t,0),e.lineTo(-.8*t,-.08*t),e.lineTo(-.8*t,.08*t),e.lineTo(-1*t,0),e.stroke(),e.fill(),e.restore()},m=h(0),S=h(0);let y,W;p(b.attitude,e=>{const r=Math.abs(T(e.roll-(y||0))),c=Math.abs(T(e.pitch-(W||0)));r>.1&&(y=e.roll,m.value=T(b.attitude.roll)),c>.1&&(W=e.pitch,S.value=T(b.attitude.pitch))});const s=E({pitchAngleDegrees:0,rollAngleDegrees:0});return p(S,()=>{P.to(s,.1,{pitchAngleDegrees:S.value})}),p(m,()=>{P.to(s,.1,{rollAngleDegrees:-1*m.value})}),p(s,()=>{!R.isWidgetVisible(V.value)||j(()=>w())}),F(()=>{n.value===void 0||n.value===null||(g.value===void 0&&(g.value=n.value.getContext("2d")),w())}),(e,r)=>(I(),N("div",{ref_key:"virtualHorizonRoot",ref:x,class:"virtualHorizon"},[J("canvas",{ref_key:"canvasRef",ref:n,height:v.value,width:v.value,class:"rounded-[15%] bg-slate-950/70"},null,8,Q)],512))}});const te=O(X,[["__scopeId","data-v-24d64a2f"]]);export{te as default};
