var b=(e,i,o)=>new Promise((c,u)=>{var p=t=>{try{r(o.next(t))}catch(y){u(y)}},a=t=>{try{r(o.throw(t))}catch(y){u(y)}},r=t=>t.done?c(t.value):Promise.resolve(t.value).then(p,a);r((o=o.apply(e,i)).next())});import{B as g,a as B}from"./index.24728625.js";import{_ as C}from"./index.c0a3bc85.js";import{A as F,z as k,y as M,a0 as D,B as m,a1 as f,a5 as s,k as l,ad as d,J as n,ac as _,a4 as T}from"./vendor.52d192f7.js";import"./useWindowSizeFn.34f605a6.js";const w=F({name:"RedisDescModal",components:{BasicModal:g},emits:["success","register"],setup(e,{emit:i}){const o=k({}),[c,{setModalProps:u}]=B(r=>b(this,null,function*(){u({showOkBtn:!1,confirmLoading:!1,width:1e3,minHeight:300}),o.value=r.record})),p=M(()=>"\u7AEF\u70B9\u8BE6\u60C5");function a(){i("success",{})}return{registerModal:c,descData:o,getTitle:p,onCancel:a}}}),A=d("Redis");function h(e,i,o,c,u,p){const a=D("a-descriptions-item"),r=D("a-descriptions"),t=D("BasicModal");return m(),f(t,T(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onCancel:e.onCancel}),{default:s(()=>[l(r,{bordered:"",column:1,size:"small",style:{"word-break":"break-all","word-wrap":"break-word"}},{default:s(()=>[l(a,{label:"\u7C7B\u578B"},{default:s(()=>[A]),_:1}),l(a,{label:"\u540D\u79F0"},{default:s(()=>[d(n(e.descData.name),1)]),_:1}),l(a,{label:"\u5730\u5740"},{default:s(()=>[d(n(e.descData.addresses),1)]),_:1}),l(a,{label:"\u72B6\u6001"},{default:s(()=>[d(n(e.descData.status===0?"\u542F\u7528":"\u505C\u7528"),1)]),_:1}),l(a,{label:"\u90E8\u7F72\u6A21\u5F0F"},{default:s(()=>[d(n(e.descData.deployType===0?"\u5355\u673A":"\u96C6\u7FA4"),1)]),_:1}),e.descData.deployType===1?(m(),f(a,{key:0,label:"\u96C6\u7FA4\u6A21\u5F0F"},{default:s(()=>[d(n(e.descData.groupType===0?"sentinel":"cluster"),1)]),_:1})):_("",!0),e.descData.deployType===1&&e.descData.groupType===0?(m(),f(a,{key:1,label:"Master Name"},{default:s(()=>[d(n(e.descData.masterName),1)]),_:1})):_("",!0),e.descData.groupType!=2?(m(),f(a,{key:2,label:"database"},{default:s(()=>[d(n(e.descData.database),1)]),_:1})):_("",!0)]),_:1})]),_:1},16,["onRegister","title","onCancel"])}var z=C(w,[["render",h]]);export{z as default};