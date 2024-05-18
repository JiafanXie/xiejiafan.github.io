import{_ as F}from"./TopCards.vue_vue_type_script_setup_true_lang-e97bbc09.js";import{g as A,a as D,b as v}from"./UpdateColors-75a742ae.js";import{ah as b,aC as y,ao as C,o as d,a1 as _,w as s,b as t,a as e,b8 as w,b9 as M,ba as I,aB as f,aA as l,al as V,aj as r,bb as j,V as B,bc as p,bd as x,d as c,a4 as u,c as z,ae as R,af as E,u as H,a8 as S,be as P,bf as T,a7 as U,a2 as $}from"./index-1b2cf765.js";import{_ as G,a as N,b as W}from"./Projects.vue_vue_type_script_setup_true_lang-3fc46f32.js";import{u as J,t as q}from"./modernData-8c660431.js";import{_ as K}from"./WeeklyStats.vue_vue_type_script_setup_true_lang-dd45e74e.js";import"./customizer-66e7778f.js";const Q={class:"d-sm-flex align-center justify-space-between"},X=c("Revenue Updates"),Y=c("Overview of Profit"),Z={class:"my-sm-0 my-2"},tt={class:"d-flex align-center mt-md-6 mt-3"},et=e("div",{class:"pl-4"},[e("h3",{class:"text-h3"},"$63,489.50"),e("h6",{class:"text-subtitle-1 textSecondary"},"Total Earnings")],-1),st={class:"mt-sm-10 mb-sm-10 mt-10 mb-0"},at={class:"d-flex align-baseline"},lt=e("div",{class:"pl-4"},[e("h6",{class:"text-subtitle-1 textSecondary"},"Earnings this month"),e("h5",{class:"text-h5 mt-1"},"$48,820")],-1),ot={class:"d-flex mt-8 align-baseline"},it=e("div",{class:"pl-4"},[e("h6",{class:"text-subtitle-1 textSecondary"},"Expense this month"),e("h5",{class:"text-h5 mt-1"},"$26,498")],-1),nt=c("View Full Report"),ct=b({setup(g){const o=y("March 2023"),n=y(["March 2023","April 2023","May 2023"]),m=C(()=>({chart:{height:375,type:"bar",fontFamily:"inherit",foreColor:"#adb0bb",stacked:!0},colors:[A.value,D.value],plotOptions:{bar:{horizontal:!1,barHeight:"60%",columnWidth:"18%",borderRadius:[6],borderRadiusApplication:"end",borderRadiusWhenStacked:"all"}},stroke:{show:!1},dataLabels:{enabled:!1},legend:{show:!1},grid:{borderColor:"rgba(0,0,0,0.1)",strokeDashArray:3,xaxis:{lines:{show:!1}}},yaxis:{min:-5,max:5,tickAmount:4},xaxis:{categories:["16/08","17/08","18/08","19/08","20/08","21/08"],axisBorder:{show:!1}},tooltip:{theme:"dark",x:{format:"dd/MM/yy HH:mm"}},responsive:[{breakpoint:991,options:{xaxis:{labels:{rotate:-45},categories:["16/08","17/08","18/08","19/08","20/08","21/08","22/08"]}}}]})),i={series:[{name:"Eanings this month",data:[1.5,2.7,2.2,3.6,1.5,1]},{name:"Expense this month",data:[-1.5,-1.1,-2.5,-1.5,-.6,-1.8]}]};return(a,h)=>{const k=u("apexchart"),L=u("GridDotsIcon");return d(),_(x,{elevation:"10"},{default:s(()=>[t(p,null,{default:s(()=>[e("div",Q,[e("div",null,[t(w,{class:"text-h5"},{default:s(()=>[X]),_:1}),t(M,{class:"text-subtitle-1 textSecondary"},{default:s(()=>[Y]),_:1})]),e("div",Z,[t(I,{modelValue:o.value,"onUpdate:modelValue":h[0]||(h[0]=O=>o.value=O),items:n.value,variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue","items"])])]),t(f,null,{default:s(()=>[t(l,{cols:"12",sm:"8",class:"pt-7"},{default:s(()=>[t(k,{type:"bar",height:"375",options:V(m),series:i.series},null,8,["options","series"])]),_:1}),t(l,{cols:"12",sm:"4",class:"pt-7"},{default:s(()=>[e("div",tt,[t(r,{class:"rounded-md bg-lightprimary text-primary"},{default:s(()=>[t(L,{size:"22"})]),_:1}),et]),e("div",st,[e("div",at,[t(j,{icon:"mdi mdi-checkbox-blank-circle",size:"10",color:"primary"}),lt]),e("div",ot,[t(j,{icon:"mdi mdi-checkbox-blank-circle",size:"10",color:"secondary"}),it]),t(B,{color:"primary",class:"mt-10",variant:"flat",block:""},{default:s(()=>[nt]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}}}),dt={class:"d-flex align-center justify-space-between"},rt=c("Monthly Earnings"),ut={class:"mt-2"},_t=e("h3",{class:"text-h3"},"$6,820",-1),mt={class:"mt-2 d-flex gap-2 align-center"},ht=e("span",{class:"text-subtitle-1 font-weight-bold"},"+9%",-1),ft=e("span",{class:"text-subtitle-1 textSecondary"},"last year",-1),pt={class:"mt-3"},xt=b({setup(g){const o=C(()=>({chart:{type:"area",height:60,fontFamily:"inherit",foreColor:"#a1aab2",toolbar:{show:!1},sparkline:{enabled:!0},group:"sparklines"},colors:[D.value],stroke:{curve:"smooth",width:2},fill:{type:"solid",opacity:.05},markers:{size:0},tooltip:{theme:"dark",x:{show:!1}}})),n={series:[{name:"",data:[25,66,20,40,12,58,20]}]};return(m,i)=>{const a=u("CurrencyDollarIcon"),h=u("ArrowDownRightIcon"),k=u("apexchart");return d(),_(x,{elevation:"10"},{default:s(()=>[t(p,null,{default:s(()=>[e("div",dt,[t(w,{class:"text-h5"},{default:s(()=>[rt]),_:1}),t(B,{size:"large",icon:"",variant:"flat",class:"bg-secondary"},{default:s(()=>[t(r,{size:"large",class:"text-white"},{default:s(()=>[t(a,{size:"22"})]),_:1})]),_:1})]),t(f,null,{default:s(()=>[t(l,{cols:"12"},{default:s(()=>[e("div",ut,[_t,e("div",mt,[t(r,{class:"bg-lighterror text-accent",size:"25"},{default:s(()=>[t(h,{size:"20"})]),_:1}),ht,ft])])]),_:1})]),_:1})]),_:1}),e("div",pt,[t(k,{type:"area",height:"60",options:V(o),series:n.series},null,8,["options","series"])])]),_:1})}}}),bt=c("Employee Salary"),gt=c("Every month"),yt={class:"d-flex align-center mt-md-6 mt-3"},vt=e("div",{class:"pl-4"},[e("h6",{class:"text-subtitle-1 textSecondary mb-1"},"Salary"),e("h3",{class:"text-h6"},"$36,358")],-1),$t={class:"d-flex align-center mt-md-6 mt-3"},wt=e("div",{class:"pl-4"},[e("h6",{class:"text-subtitle-1 textSecondary mb-1"},"Profit"),e("h3",{class:"text-h6"},"$5,296")],-1),Vt=b({setup(g){const o=C(()=>({chart:{height:275,type:"bar",fontFamily:"inherit",foreColor:"#adb0bb",toolbar:{show:!1}},colors:[v.value,v.value,A.value,v.value,v.value,v.value],plotOptions:{bar:{columnWidth:"45%",distributed:!0,borderRadius:4}},dataLabels:{enabled:!1},legend:{show:!1},grid:{yaxis:{lines:{show:!1}}},xaxis:{categories:[["Apr"],["May"],["June"],["July"],["Aug"],["Sept"]],axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{theme:"dark",x:{format:"dd/MM/yy HH:mm"}}})),n={series:[{name:"",data:[20,15,30,25,10,15]}]};return(m,i)=>{const a=u("apexchart"),h=u("GridDotsIcon");return d(),_(x,{elevation:"10"},{default:s(()=>[t(p,null,{default:s(()=>[t(w,{class:"text-h5"},{default:s(()=>[bt]),_:1}),t(M,{class:"text-subtitle-1 textSecondary"},{default:s(()=>[gt]),_:1}),t(a,{type:"bar",height:"275",options:V(o),series:n.series},null,8,["options","series"]),t(f,null,{default:s(()=>[t(l,{cols:"6",sm:"6",class:"d-flex"},{default:s(()=>[e("div",yt,[t(r,{class:"rounded-md bg-lightprimary text-primary"},{default:s(()=>[t(h,{size:"22"})]),_:1}),vt])]),_:1}),t(l,{cols:"6",sm:"6",class:"d-flex justify-lg-start justify-end"},{default:s(()=>[e("div",$t,[t(r,{class:"rounded-md bg-lightsecondary text-secondary"},{default:s(()=>[t(h,{size:"22"})]),_:1}),wt])]),_:1})]),_:1})]),_:1})]),_:1})}}}),kt={class:"d-flex align-center"},zt=e("img",{contain:"",src:H,height:"70"},null,-1),St=e("div",{class:"pl-5"},[e("h5",{class:"text-h5"},"Super awesome, Vue coming soon!"),e("h6",{class:"text-subtitle-1 textSecondary mt-2"},"22 March, 2022")],-1),Ct={class:"d-flex align-center justify-space-between mt-8 mb-sm-3 mb-0"},Mt={class:"ml-2 d-flex flex-row-reverse"},jt=["src"],Pt=b({setup(g){return(o,n)=>{const m=u("Message2Icon"),i=u("RouterLink");return d(),_(x,{elevation:"10"},{default:s(()=>[t(p,null,{default:s(()=>[e("div",kt,[t(r,{rounded:"md",size:"70"},{default:s(()=>[zt]),_:1}),St]),e("div",Ct,[e("div",Mt,[(d(!0),z(E,null,R(V(J),a=>(d(),_(r,{key:a.img,size:"45",class:"ml-n2 avtar-border"},{default:s(()=>[e("img",{src:a.img,alt:"usericon",height:"45"},null,8,jt)]),_:2},1024))),128))]),e("div",null,[t(i,{to:"/",class:"rounded-md bg-lightprimary d-block",size:"40"},{default:s(()=>[t(r,{size:"40",class:"text-primary"},{default:s(()=>[t(m,{size:"22"})]),_:1})]),_:1})])])]),_:1})]),_:1})}}}),At="/assets/piggy-84077fef.png",Dt=c("Best selling products"),It=e("div",{class:"text-subtitle-1 mt-1"},"Overview 2023",-1),Bt=e("div",{class:"d-flex justify-center pt-sm-5 pt-5 mt-n2"},[e("img",{src:At,alt:"image",width:"300"})],-1),Rt={class:"ma-2 mt-0 pb-2 mt-n16"},Et={class:"mb-3 d-flex justify-space-between align-center"},Lt=e("div",null,[e("h5",{class:"text-h6"},"MaterialPro"),e("h6",{class:"text-subtitle-1 textSecondary mt-1"},"$23,568")],-1),Ot=c("55%"),Ft={class:"mb-3 d-flex justify-space-between align-center"},Ht=e("div",null,[e("h5",{class:"text-h6"},"Flexy Admin"),e("h6",{class:"text-subtitle-1 textSecondary mt-1"},"$23,568")],-1),Tt=c("20%"),Ut=b({setup(g){const o=y(55),n=y(20);return(m,i)=>(d(),_(x,{elevation:"10",class:"bg-primary"},{default:s(()=>[t(p,null,{default:s(()=>[t(w,{class:"text-h5"},{default:s(()=>[Dt]),_:1}),It,Bt]),_:1}),e("div",Rt,[t(x,{elevation:"10",rounded:"md"},{default:s(()=>[t(p,{class:"py-sm-7 py-5"},{default:s(()=>[e("div",null,[e("div",Et,[Lt,t(S,{rounded:"sm",color:"primary",class:"text-subtitle-2 font-weight-semibold px-4",size:"small"},{default:s(()=>[Ot]),_:1})]),t(P,{class:"mb-5",modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=a=>o.value=a),color:"primary",height:"4"},null,8,["modelValue"])]),e("div",null,[e("div",Ft,[Ht,t(S,{rounded:"sm",color:"secondary",class:"text-subtitle-2 font-weight-semibold px-4",size:"small"},{default:s(()=>[Tt]),_:1})]),t(P,{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=a=>n.value=a),color:"secondary",height:"4"},null,8,["modelValue"])])]),_:1})]),_:1})])]),_:1}))}}),Gt={class:"d-sm-flex align-center justify-space-between"},Nt=c("Top Projects"),Wt=c("Best Products"),Jt={class:"my-sm-0 my-2"},qt=e("thead",null,[e("tr",null,[e("th",{class:"text-subtitle-1 textPrimary font-weight-semibold"},"Assigned"),e("th",{class:"text-subtitle-1 textPrimary font-weight-semibold"},"Project"),e("th",{class:"text-subtitle-1 textPrimary font-weight-semibold"},"Priority"),e("th",{class:"text-subtitle-1 textPrimary font-weight-semibold"},"Budget")])],-1),Kt={class:"d-flex align-center"},Qt=["src","alt"],Xt={class:"mx-3"},Yt={class:"text-subtitle-1 text-no-wrap font-weight-semibold"},Zt={class:"text-subtitle-2 text-no-wrap textSecondary mt-1"},te={class:"text-no-wrap text-body-1"},ee={class:"text-body-1"},se=b({setup(g){const o=y("March 2023"),n=y(["March 2023","April 2023","May 2023"]);return(m,i)=>(d(),_(x,{elevation:"10"},{default:s(()=>[t(p,null,{default:s(()=>[e("div",Gt,[e("div",null,[t(w,{class:"text-h5"},{default:s(()=>[Nt]),_:1}),t(M,{class:"text-subtitle-1 textSecondary"},{default:s(()=>[Wt]),_:1})]),e("div",Jt,[t(I,{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=a=>o.value=a),items:n.value,variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue","items"])])]),t(T,{class:"month-table mt-6"},{default:s(()=>[qt,e("tbody",null,[(d(!0),z(E,null,R(V(q),a=>(d(),z("tr",{key:a.leadname,class:U([a.activestate,"month-item"])},[e("td",null,[e("div",Kt,[t(r,{size:"40"},{default:s(()=>[e("img",{src:a.img,alt:a.img,width:"40"},null,8,Qt)]),_:2},1024),e("div",Xt,[e("h4",Yt,$(a.leadname),1),e("h6",Zt,$(a.designation),1)])])]),e("td",null,[e("h5",te,$(a.projectname),1)]),e("td",null,[t(S,{rounded:"md",class:"ma-2 font-weight-semibold",color:a.statuscolor,size:"small",label:""},{default:s(()=>[c($(a.statustext),1)]),_:2},1032,["color"])]),e("td",null,[e("h4",ee,$(a.money),1)])],2))),128))])]),_:1})]),_:1})]),_:1}))}}),re=b({setup(g){return(o,n)=>(d(),_(f,null,{default:s(()=>[t(l,{cols:"12"},{default:s(()=>[t(F)]),_:1}),t(l,{cols:"12"},{default:s(()=>[t(f,null,{default:s(()=>[t(l,{cols:"12",lg:"8",md:"12"},{default:s(()=>[t(ct)]),_:1}),t(l,{cols:"12",lg:"4",sm:"12"},{default:s(()=>[t(f,null,{default:s(()=>[t(l,{cols:"12",lg:"12",sm:"6"},{default:s(()=>[t(G)]),_:1}),t(l,{cols:"12",lg:"12",sm:"6"},{default:s(()=>[t(xt)]),_:1})]),_:1})]),_:1}),t(l,{cols:"12",lg:"4",md:"4"},{default:s(()=>[t(Vt)]),_:1}),t(l,{cols:"12",lg:"4",md:"4"},{default:s(()=>[t(f,null,{default:s(()=>[t(l,{cols:"12",sm:"6"},{default:s(()=>[t(N)]),_:1}),t(l,{cols:"12",sm:"6"},{default:s(()=>[t(W)]),_:1}),t(l,{cols:"12"},{default:s(()=>[t(Pt)]),_:1})]),_:1})]),_:1}),t(l,{cols:"12",lg:"4",md:"4"},{default:s(()=>[t(Ut)]),_:1}),t(l,{cols:"12",lg:"4",md:"4"},{default:s(()=>[t(K)]),_:1}),t(l,{cols:"12",lg:"8",md:"8"},{default:s(()=>[t(se)]),_:1})]),_:1})]),_:1})]),_:1}))}});export{re as default};
