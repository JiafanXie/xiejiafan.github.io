import{_ as n}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-cdf626a1.js";import{_ as c}from"./UiParentCard.vue_vue_type_script_setup_true_lang-6bf011f5.js";import{g as m,a as u}from"./UpdateColors-05d8cffb.js";import{ah as d,aC as a,ao as h,o as p,c as f,b as e,w as t,aA as b,al as _,aB as g,af as x,a4 as y}from"./index-4786772a.js";import"./customizer-aac67010.js";const B=d({setup(C){const o=a({title:"Line Chart"}),r=a([{text:"Dashboard",disabled:!1,href:"#"},{text:"Line Chart",disabled:!0,href:"#"}]),s=h(()=>({chart:{height:350,type:"line",fontFamily:"inherit",zoom:{type:"x",enabled:!0},toolbar:{show:!1},shadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:1}},colors:[m.value,u.value],markers:{size:1},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month"}},grid:{show:!1},dataLabels:{enabled:!0},stroke:{curve:"straight",width:"2"},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},tooltip:{theme:"dark",x:{format:"dd/MM/yy HH:mm"}}})),l={series:[{name:"High - 2013",data:[28,29,33,36,32,32,33]},{name:"Low - 2013",data:[12,11,14,18,17,13,13]}]};return(w,v)=>{const i=y("apexchart");return p(),f(x,null,[e(n,{title:o.value.title,breadcrumbs:r.value},null,8,["title","breadcrumbs"]),e(g,null,{default:t(()=>[e(b,{cols:"12"},{default:t(()=>[e(c,{title:"Line Chart"},{default:t(()=>[e(i,{type:"line",height:"350",options:_(s),series:l.series},null,8,["options","series"])]),_:1})]),_:1})]),_:1})],64)}}});export{B as default};
