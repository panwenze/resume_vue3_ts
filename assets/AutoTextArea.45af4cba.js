import{d as e,g as a,h as s,n as t,L as d,o,c as l,k as n,s as i,i as p,t as u,p as r,l as c,r as v,y}from"./vendor.21a5739d.js";r("data-v-f4cd2674");const x={class:"open-source-box"},g={key:0,class:"open-source-item"},h={key:0,class:"point"},m={key:1,class:"square"},f={style:{padding:"5px 15px","flex-grow":"1"}},k={key:1,class:"open-source-item"},b={key:0,class:"point"},C={key:1,class:"square"},q={class:"input-text"};c();var w=e({expose:[],props:{data:{type:String,default:""},edit:{type:Boolean,default:!0},bgColor:{type:String,dedault:"white;"},shape:{type:String,default:""},dataIndex:{type:Number,default:0}},emits:{textChange:(e,a)=>Boolean},setup(e,{emit:r}){const c=e;y((e=>({"2bed7378":n(w)})));const w=a((()=>c.bgColor)),S=a((()=>c.shape)),I=s("");I.value=c.data;const _=t({edit:!1,shape:c.shape}),B=()=>{r("textChange",I.value,c.dataIndex)};return d((()=>c.edit),(()=>{_.edit=c.edit})),(e,a)=>{const s=v("a-textarea");return o(),l("div",x,[n(_).edit?(o(),l("div",g,["point"===n(S)?(o(),l("div",h)):i("",!0),"square"===n(S)?(o(),l("div",m)):i("",!0),p("div",f,[p(s,{value:I.value,"onUpdate:value":a[1]||(a[1]=e=>I.value=e),placeholder:"请输入内容",onChange:B,class:"myinput",autoSize:{minRows:1,maxRows:5}},null,8,["value"])])])):(o(),l("div",k,["point"===n(S)?(o(),l("div",b)):i("",!0),"square"===n(S)?(o(),l("div",C)):i("",!0),p("div",q,[p("span",null,u(I.value),1)])]))])}}});w.__scopeId="data-v-f4cd2674";export{w as _};
