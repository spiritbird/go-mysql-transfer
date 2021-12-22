var E=Object.defineProperty,_=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var v=(a,t,e)=>t in a?E(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,f=(a,t)=>{for(var e in t||(t={}))x.call(t,e)&&v(a,e,t[e]);if(h)for(var e of h(t))M.call(t,e)&&v(a,e,t[e]);return a},B=(a,t)=>_(a,P(t));var d=(a,t,e)=>new Promise((l,u)=>{var c=o=>{try{n(e.next(o))}catch(r){u(r)}},i=o=>{try{n(e.throw(o))}catch(r){u(r)}},n=o=>o.done?l(o.value):Promise.resolve(o.value).then(c,i);n((e=e.apply(a,t)).next())});import{B as q,a as C}from"./index.24728625.js";import{t as S,p as T,a as L}from"./index.e064266a.js";import{B as j,h as R}from"./useForm.d0a5ee18.js";import{w as V,bh as $,A as N,z as b,u as p,y as O,a0 as g,B as U,a1 as z,a5 as F,k as w,a4 as G,ad as W}from"./vendor.52d192f7.js";/* empty css               */import{_ as H,h as J}from"./index.c0a3bc85.js";const ne=[{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u4E3B\u673A",dataIndex:"host",width:170},{title:"\u7AEF\u53E3",dataIndex:"port",width:80},{title:"\u7528\u6237",dataIndex:"username",width:120},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:a})=>{const e=~~a.status==0,l=e?"green":"red",u=e?"\u542F\u7528":"\u505C\u7528";return V($,{color:l},()=>u)}},{title:"Charset",dataIndex:"charset",width:100},{title:"SlaveID",dataIndex:"slaveID",width:100},{title:"Flavor",dataIndex:"flavor",width:100}],re=[{field:"name",label:"\u540D\u79F0",component:"Input",colProps:{span:8}},{field:"host",label:"\u4E3B\u673A",component:"Input",colProps:{span:8}}],K=[{field:"name",label:"\u540D\u79F0",component:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0"},{max:20,message:"\u6700\u5927\u957F\u5EA6\u4E3A20"}]},{field:"host",label:"\u4E3B\u673A",component:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4E3B\u673A"},{max:20,message:"\u6700\u5927\u957F\u5EA6\u4E3A45"}],colProps:{span:12}},{field:"port",label:"\u7AEF\u53E3",required:!0,component:"InputNumber",defaultValue:3306,colProps:{span:12}},{field:"username",label:"\u7528\u6237\u540D",component:"Input",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},{max:20,message:"\u6700\u5927\u957F\u5EA6\u4E3A40"}],colProps:{span:12}},{field:"password",label:"\u5BC6\u7801",component:"InputPassword",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"},{max:20,message:"\u6700\u5927\u957F\u5EA6\u4E3A40"}],colProps:{span:12}},{field:"charset",label:"\u5B57\u7B26\u96C6",required:!0,component:"Select",colProps:{span:12},componentProps:{options:[{label:"utf8",value:"utf8",key:"utf8"},{label:"utf8mb4",value:"utf8mb4",key:"utf8mb4"},{label:"gb2312",value:"gb2312",key:"gb2312"},{label:"gbk",value:"gbk",key:"gbk"}]}},{field:"slaveID",label:"SlaveID",required:!0,component:"InputNumber",defaultValue:3,colProps:{span:12}},{field:"flavor",label:"Flavor",component:"Select",required:!0,colProps:{span:12},componentProps:{options:[{label:"mysql",value:"mysql",key:"mysql"},{label:"mariadb",value:"mariadb",key:"mariadb"}]}},{field:"status",label:"\u72B6\u6001",component:"RadioButtonGroup",defaultValue:0,colProps:{span:12},componentProps:{options:[{label:"\u542F\u7528",value:0},{label:"\u505C\u7528",value:9}]}}],Q=N({name:"DatasourceModal",components:{BasicModal:q,BasicForm:j},emits:["success","register"],setup(a,{emit:t}){const e=b(!0),l=b("");let u=b(!1);const{createSuccessModal:c}=J(),[i,{setFieldsValue:n,resetFields:o,validate:r}]=R({labelWidth:100,schemas:K,showActionButtonGroup:!1,actionColOptions:{span:23}}),[D,{setModalProps:m,closeModal:I}]=C(s=>d(this,null,function*(){yield o(),m({confirmLoading:!1,width:1e3}),e.value=!!(s==null?void 0:s.isUpdate),p(e)?(l.value=s.record.id,yield n(f({},s.record))):yield n({charset:"utf8",flavor:"mysql"})})),k=O(()=>p(e)?"\u7F16\u8F91":"\u65B0\u589E");function y(){return d(this,null,function*(){const s=yield r();u.value=!0;try{yield S(s),c({title:"\u63D0\u793A",content:"\u8FDE\u63A5\u6210\u529F"})}finally{u.value=!1}})}function A(){return d(this,null,function*(){try{const s=yield r();console.log(s),m({confirmLoading:!0}),p(e)?(s.id=l.value,yield T(s)):yield L(s),I(),t("success",{isUpdate:p(e),values:B(f({},s),{id:l.value})})}finally{m({confirmLoading:!1})}})}return{registerModal:D,registerForm:i,getTitle:k,linkTestLoading:u,handleLinkTest:y,handleSubmit:A}}}),X=W("\u6D4B\u8BD5\u8FDE\u63A5");function Y(a,t,e,l,u,c){const i=g("BasicForm"),n=g("a-button"),o=g("BasicModal");return U(),z(o,G(a.$attrs,{onRegister:a.registerModal,title:a.getTitle,onOk:a.handleSubmit}),{insertFooter:F(()=>[w(n,{type:"dashed",onClick:a.handleLinkTest,loading:a.linkTestLoading},{default:F(()=>[X]),_:1},8,["onClick","loading"])]),default:F(()=>[w(i,{onRegister:a.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Z=H(Q,[["render",Y]]),ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z});export{Z as D,ie as a,ne as c,re as s};