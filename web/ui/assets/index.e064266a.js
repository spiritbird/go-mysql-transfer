import{aH as s,aI as t}from"./index.c0a3bc85.js";var a;(function(e){e.DatasourceUrl="/sources"})(a||(a={}));const c=e=>s.post({url:a.DatasourceUrl,params:e},{errorMessageMode:"modal"}),l=e=>s.put({url:a.DatasourceUrl,params:e},{errorMessageMode:"modal"}),u=e=>s.delete({url:t(a.DatasourceUrl,e)},{errorMessageMode:"modal"}),n=e=>s.get({url:a.DatasourceUrl,params:e}),D=e=>s.get({url:a.DatasourceUrl,params:e}),g=e=>s.get({url:t(a.DatasourceUrl,e,"schemas")}),i=(e,r)=>s.get({url:t(a.DatasourceUrl,e,"tables"),params:r}),d=(e,r)=>s.get({url:t(a.DatasourceUrl,e,"table-info"),params:r}),p=e=>s.post({url:t(a.DatasourceUrl,"test-connect"),params:e},{errorMessageMode:"modal"}),U=e=>s.get({url:t(a.DatasourceUrl,e,"is-running")},{errorMessageMode:"modal"});export{c as a,D as b,g as c,u as d,i as e,d as g,U as i,l as p,n as s,p as t};