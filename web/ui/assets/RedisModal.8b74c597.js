var E=Object.defineProperty,L=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var j=(s,o,e)=>o in s?E(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,f=(s,o)=>{for(var e in o||(o={}))b.call(o,e)&&j(s,e,o[e]);if(h)for(var e of h(o))A.call(o,e)&&j(s,e,o[e]);return s},_=(s,o)=>L(s,R(o));var u=(s,o,e)=>new Promise((r,i)=>{var c=a=>{try{n(e.next(a))}catch(d){i(d)}},l=a=>{try{n(e.throw(a))}catch(d){i(d)}},n=a=>a.done?r(a.value):Promise.resolve(a.value).then(c,l);n((e=e.apply(s,o)).next())});import{B as T,a as C}from"./index.24728625.js";import{r as D,t as S,p as $,b as O}from"./endpoint.data.75dd7889.js";import{B as U,h as V}from"./useForm.d0a5ee18.js";import{_ as z,h as I}from"./index.c0a3bc85.js";import{A as N,z as g,u as p,y as P,a0 as F,B as W,a1 as G,a5 as B,k as v,a4 as H,ad as q}from"./vendor.52d192f7.js";import"./useWindowSizeFn.34f605a6.js";/* empty css               *//* empty css              *//* empty css               *//* empty css               */import"./index.1c6370f0.js";/* empty css               *//* empty css                */import"./index.1c8e4638.js";import"./download.0ca988cf.js";const J=N({name:"RedisModal",components:{BasicModal:T,BasicForm:U},emits:["success","register"],setup(s,{emit:o}){const e=g(!0),r=g("");let i=g(!1);const{createSuccessModal:c}=I(),[l,{setFieldsValue:n,resetFields:a,validate:d}]=V({labelWidth:100,schemas:D,showActionButtonGroup:!1,actionColOptions:{span:23}}),[w,{setModalProps:m,closeModal:k}]=C(t=>u(this,null,function*(){yield a(),m({confirmLoading:!1,width:1e3,minHeight:300}),e.value=!!(t==null?void 0:t.isUpdate),p(e)&&(r.value=t.record.id,yield n(f({},t.record)))})),M=P(()=>p(e)?"\u7F16\u8F91Redis\u7AEF\u70B9":"\u65B0\u589ERedis\u7AEF\u70B9");function y(){return u(this,null,function*(){const t=yield d();i.value=!0;try{t.type=1,yield S(t),c({title:"\u63D0\u793A",content:"\u8FDE\u63A5\u6210\u529F"})}finally{i.value=!1}})}function x(){return u(this,null,function*(){try{const t=yield d();t.type=1,console.log(t),m({confirmLoading:!0}),p(e)?(t.id=r.value,yield $(t)):yield O(t),k(),o("success",{isUpdate:p(e),values:_(f({},t),{id:r.value})})}finally{m({confirmLoading:!1})}})}return{registerModal:w,registerForm:l,getTitle:M,linkTestLoading:i,handleLinkTest:y,handleSubmit:x}}}),K=q("\u6D4B\u8BD5\u8FDE\u63A5");function Q(s,o,e,r,i,c){const l=F("BasicForm"),n=F("a-button"),a=F("BasicModal");return W(),G(a,H(s.$attrs,{onRegister:s.registerModal,title:s.getTitle,onOk:s.handleSubmit}),{insertFooter:B(()=>[v(n,{type:"dashed",onClick:s.handleLinkTest,loading:s.linkTestLoading},{default:B(()=>[K]),_:1},8,["onClick","loading"])]),default:B(()=>[v(l,{onRegister:s.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var me=z(J,[["render",Q]]);export{me as default};