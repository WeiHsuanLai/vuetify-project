import{u as x,a4 as h,a5 as w,w as t,an as S,o as k,b as s,d as e,aO as B,aM as m,at as V,R as F,a7 as M}from"./index-BkJnoXqh.js";import{c as y,a as c,u as C,e as d,V as N}from"./vee-validate.esm-B-NegV8a.js";import{v as R}from"./index-DlT6X-nH.js";import{V as U}from"./VContainer-Djqc0geq.js";import{V as p}from"./VCol-Bhl9o-sP.js";import{V as q}from"./VDivider-cTFBKJY6.js";import{V as A}from"./VRow-A0LBql79.js";const P=V("h1",{class:"text-center"},"登入",-1),T={class:"text-center"},I={__name:"login",setup($){const f=S(),g=x(),u=h(),v=y({account:c().required("使用者帳號必填").min(4,"使用者帳號長度不符").max(20,"使用者帳號長度不符").test("isAlphanumeric","使用者帳號格式錯誤",o=>R.isAlphanumeric(o)),password:c().required("使用者密碼必填").min(4,"使用者密碼長度不符").max(20,"使用者密碼長度不符")}),{handleSubmit:b,isSubmitting:i}=C({validationSchema:v}),r=d("account"),l=d("password"),_=b(async o=>{const a=await g.login(o);a==="登入成功"?(u({text:a,snackbarProps:{color:"green"}}),f.push("/")):u({text:a,snackbarProps:{color:"red"}})});return(o,a)=>(k(),w(U,null,{default:t(()=>[s(A,null,{default:t(()=>[s(p,{cols:"12"},{default:t(()=>[P]),_:1}),s(q),s(p,{cols:"12"},{default:t(()=>[s(N,{disabled:e(i),onSubmit:B(e(_),["prevent"])},{default:t(()=>[s(m,{label:"帳號",minlength:"4",maxlength:"20",counter:"",modelValue:e(r).value.value,"onUpdate:modelValue":a[0]||(a[0]=n=>e(r).value.value=n),"error-messages":e(r).errorMessage.value},null,8,["modelValue","error-messages"]),s(m,{label:"密碼",minlength:"4",maxlength:"20",counter:"",type:"password",modelValue:e(l).value.value,"onUpdate:modelValue":a[1]||(a[1]=n=>e(l).value.value=n),"error-messages":e(l).errorMessage.value},null,8,["modelValue","error-messages"]),V("div",T,[s(F,{type:"submit",color:"green",loading:e(i)},{default:t(()=>[M("登入")]),_:1},8,["loading"])])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}))}};export{I as default};
