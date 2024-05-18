import{_ as F}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-cdf626a1.js";import{_ as O}from"./AppBaseCard.vue_vue_type_style_index_0_lang-391c6244.js";import{bp as q,bq as M,bk as P,ah as b,bm as S,ao as V,aC as N,o as l,c as C,a as i,b as e,az as R,al as a,af as y,ae as w,a1 as _,w as t,a2 as I,a7 as T,ak as W,c1 as j,V as v,am as m,ab as k,bl as A,d as $,bd as L,bR as G,b$ as B,c6 as U,bW as H,bV as J,a4 as K,aw as Q,b0 as X}from"./index-4786772a.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";const D=q({id:"notes",state:()=>({notes:[],notesContent:1,noteSearch:""}),actions:{async fetchNotes(){try{const n=await M.get("/api/data/notes/NotesData");this.notes=n.data}catch(n){alert(n),console.log(n)}},SelectNote(n){this.notesContent=n},deleteNote(n){const o=this.notes.findIndex(s=>s.id==n);this.notes.splice(o,1)},updateNote(n,o){this.notes=P.map(this.notes,s=>s.id===n?{...s,color:o}:s)}}}),Z={class:"pa-6"},ee=i("h4",{class:"text-h6 mb-4"},"All Notes",-1),te={class:"mb-5"},oe={class:"d-flex mt-3 align-center"},se={class:"text-subtitle-2 opacity-25"},ae=$("Delete Note"),z=b({setup(n){const o=D();S(()=>{o.fetchNotes()});const f=V(()=>o.notes),d=N(""),r=V(()=>f.value.filter(x=>{var h;return(h=x.title)==null?void 0:h.toLowerCase().includes(d.value.toLowerCase())}));return(x,h)=>(l(),C("div",Z,[ee,i("div",te,[e(R,{variant:"outlined",modelValue:d.value,"onUpdate:modelValue":h[0]||(h[0]=c=>d.value=c),"append-inner-icon":"mdi-magnify",placeholder:"Search Notes","hide-details":"",density:"compact"},null,8,["modelValue"])]),a(r).length>0?(l(!0),C(y,{key:0},w(a(r),c=>(l(),_(m,{class:T("note-sheet pa-6 pb-4 rounded-md cursor-pointer mb-4  bg-light"+c.color),key:c.id,onClick:g=>a(o).SelectNote(c.id)},{default:t(()=>[i("h6",{class:T("text-h6 text-truncate text-"+c.color)},I(c.title),3),i("div",oe,[i("small",se,I(new Date(c.datef).toLocaleDateString()),1),e(v,{icon:"",variant:"text",class:"ml-auto",size:"x-small",onClick:g=>a(o).deleteNote(c.id)},{default:t(()=>[e(W,{activator:"parent",location:"top"},{default:t(()=>[ae]),_:1}),e(a(j),{size:"18"})]),_:2},1032,["onClick"])])]),_:2},1032,["class","onClick"]))),128)):k("",!0),a(r).length===0?(l(),_(m,{key:1},{default:t(()=>[e(A,{type:"error",title:"Opps",text:"The Notes you are looking for is not found"})]),_:1})):k("",!0)]))}});const le=$("Add Notes"),ne=i("h4",{class:"text-h6 mb-4"},"Add Notes",-1),re=i("h4",{class:"text-h6 mt-4 mb-4"},"Select Notes Color",-1),ie={class:"d-flex gap-3 align-center"},ce=$("Save"),de=$("Close Dialog"),ue=b({setup(n){const o=N(!1),s=N(""),f=N("primary"),d=D();S(()=>{d.fetchNotes()});const r=V(()=>d.notes);function x(g){return f.value=g}const h=r.value.length;function c(){return r.value.push({id:h+1,title:s.value,color:f.value,datef:new Date}),o.value=!1,s.value=""}return(g,p)=>{const E=K("CheckIcon");return l(),_(m,null,{default:t(()=>[e(v,{color:"primary",onClick:p[0]||(p[0]=u=>o.value=!0)},{default:t(()=>[le]),_:1}),e(J,{modelValue:o.value,"onUpdate:modelValue":p[3]||(p[3]=u=>o.value=u),"max-width":"500"},{default:t(()=>[e(L,null,{default:t(()=>[e(G,null,{default:t(()=>[ne,e(B,{outlined:"",name:"Note",modelValue:s.value,"onUpdate:modelValue":p[1]||(p[1]=u=>s.value=u)},null,8,["modelValue"]),re,i("div",ie,[(l(!0),C(y,null,w(a(U),u=>(l(),_(v,{icon:"",key:u.id,size:"x-small",color:u.color,onClick:xe=>x(u.color)},{default:t(()=>[f.value===u.color?(l(),_(E,{key:0,width:"16"})):k("",!0)]),_:2},1032,["color","onClick"]))),128))])]),_:1}),e(H,null,{default:t(()=>[e(v,{color:"primary",onClick:c},{default:t(()=>[ce]),_:1}),e(v,{color:"primary",onClick:p[2]||(p[2]=u=>o.value=!1)},{default:t(()=>[de]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}}),_e=i("h4",{class:"text-h6"},"Edit Notes",-1),pe={class:"ml-auto"},me=i("h4",{class:"text-h6 mb-4"},"Change Title",-1),fe=i("h4",{class:"text-h6 mt-4 mb-4"},"Change Notes Color",-1),he={class:"d-flex gap-3 align-center"},ve=b({setup(n){const o=D();S(()=>{o.fetchNotes()});const s=V(()=>o.notes[o.notesContent-1]);return(f,d)=>(l(),_(m,null,{default:t(()=>[e(m,{class:"py-3 pl-6 pr-4 d-flex align-center"},{default:t(()=>[_e,i("div",pe,[e(ue)])]),_:1}),e(Q),a(s)?(l(),_(m,{key:0},{default:t(()=>[e(m,{class:"pa-6"},{default:t(()=>[me,e(B,{outlined:"",name:"Note",modelValue:a(s).title,"onUpdate:modelValue":d[0]||(d[0]=r=>a(s).title=r)},null,8,["modelValue"]),fe,i("div",he,[(l(!0),C(y,null,w(a(U),r=>(l(),_(v,{icon:"",key:r.id,size:"x-small",color:r.color,onClick:x=>a(o).updateNote(a(s).id,r.color)},{default:t(()=>[a(s).color===r.color?(l(),_(a(X),{key:0,width:"16"})):k("",!0)]),_:2},1032,["color","onClick"]))),128))])]),_:1})]),_:1})):(l(),_(m,{key:1,class:"pa-6"},{default:t(()=>[e(A,{type:"error",title:"Opps",text:"No Note selected Please select note"})]),_:1}))]),_:1}))}}),Ne=b({setup(n){const o=N({title:"Note app"}),s=N([{text:"Add todo list",disabled:!0,href:"#"}]);return(f,d)=>(l(),C(y,null,[e(F,{title:o.value.title,breadcrumbs:s.value},null,8,["title","breadcrumbs"]),e(L,{elevation:"10"},{default:t(()=>[e(O,null,{leftpart:t(()=>[e(z)]),rightpart:t(()=>[e(ve)]),mobileLeftContent:t(()=>[e(z)]),_:1})]),_:1})],64))}});const be=Y(Ne,[["__scopeId","data-v-517b10a9"]]);export{be as default};
