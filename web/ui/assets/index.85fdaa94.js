import{aH as i,aI as s}from"./index.c0a3bc85.js";var l;(function(e){e.PipelineUrl="/pipelines"})(l||(l={}));const a=e=>i.post({url:l.PipelineUrl,params:e},{errorMessageMode:"modal"}),o=e=>i.put({url:l.PipelineUrl,params:e},{errorMessageMode:"modal"}),t=e=>i.delete({url:s(l.PipelineUrl,e)},{errorMessageMode:"modal"}),n=e=>i.get({url:s(l.PipelineUrl,"entity",e)}),p=e=>i.get({url:l.PipelineUrl,params:e}),d=e=>i.post({url:s(l.PipelineUrl,"validate-rule"),params:e},{errorMessageMode:"modal"}),P=e=>i.get({url:l.PipelineUrl+"/rules?endpoint-type="+e},{errorMessageMode:"modal"}),u=e=>i.put({url:s(l.PipelineUrl,e,"enable")},{errorMessageMode:"modal"}),c=e=>i.put({url:s(l.PipelineUrl,e,"disable")},{errorMessageMode:"modal"});export{u as a,c as b,a as c,t as d,P as e,n as g,o as p,p as s,d as v};