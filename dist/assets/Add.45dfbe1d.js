import{r,j as n,a as t,m as F,Q as I,k as j}from"./index.00f18f07.js";import{S as f,a as x}from"./notification.b92a5846.js";import"./sweetalert2.all.caeff549.js";const L=()=>{const[i,b]=r.exports.useState(""),[d,v]=r.exports.useState(""),[u,N]=r.exports.useState(""),[l,w]=r.exports.useState(""),[c,y]=r.exports.useState(),[p,S]=r.exports.useState(""),[m,C]=r.exports.useState(""),[h,k]=r.exports.useState(""),[P,o]=r.exports.useState(!1);let g;return n("div",{className:" flex p-2 flex-col gap-10 w-[100%]  md:items-end  h-screen",children:[t("h2",{className:"text-lg font-semibold w-[100vw] md:w-auto ",children:"Hola admin! me alegra tenerte de nuevo \u{1F601}!"}),n("form",{className:"flex flex-col justify-center items-center gap-5 md:p-0 p-4 h-full w-screen md:w-[80%]",onSubmit:e=>{o(!0),g=8;const a=new FormData;a.append("productName",i),a.append("description",d),a.append("quantityInStock",u),a.append("price",l),a.append("sizes",p),a.append("colours",m),a.append("categoriesIds",h);for(let s=0;s<g;s++)a.append("productPic",c?c[s]:"");e.preventDefault(),I(a,"/products/save").then(s=>{o(!1),console.log(s),f("Su producto se gener\xF3 correctamente","\u{1F601}")}).catch(s=>{o(!1),console.log("err",s.error),x("Faltan campos que rellenar")})},children:[t("input",{type:"text",name:"productName",placeholder:"Nombre del producto",className:"form-inputs ",onChange:e=>b(e.target.value),value:i}),t("input",{type:"text",name:"description",placeholder:"Descripcion",className:"form-inputs",onChange:e=>v(e.target.value),value:d}),t("input",{type:"number",name:"quantityInStock",placeholder:"Cantidad Disponible",className:"form-inputs",onChange:e=>N(e.target.value),value:u}),t("input",{type:"number",name:"price",placeholder:"Precio",className:"form-inputs",onChange:e=>w(e.target.value),value:l}),t("input",{type:"text",name:"sizes",placeholder:"Talle",className:"form-inputs",onChange:e=>S(e.target.value),value:p}),t("input",{type:"text",name:"colours",placeholder:"Color",className:"form-inputs",onChange:e=>C(e.target.value),value:m}),t("input",{type:"text",name:"categoriesIds",placeholder:"Categoria",className:"form-inputs",onChange:e=>k(e.target.value),value:h}),t("div",{className:"flex items-center justify-center w-full",children:n("label",{className:"flex flex-col items-center justify-center w-[12rem]  border-2 border-gray-300  rounded-lg cursor-pointer   hover:bg-[#3A3A3A]  ",children:[n("div",{className:"flex flex-col items-center justify-center pt-2 pb-2",children:[t("svg",{"aria-hidden":"true",className:"w-10 h-10 mb-3 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),t("p",{className:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:t("span",{className:"font-semibold",children:"Enviar 3 imagenes"})}),t("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"SVG, PNG, JPG (MAX. 800x400px)"})]}),t("input",{id:"dropzone-file",type:"file",className:"hidden",name:"productPic",multiple:!0,onChange:e=>y(e.target.files?e.target.files:c)})]})}),n("div",{className:"flex gap-3 md:w-2/5  w-3/4",children:[t("button",{className:"form-buttons  bg-red-500 border-transparent font-semibold  text-white  hover:bg-red-800 transition-all",children:"cancelar"}),t("button",{className:"form-buttons  bg-emerald-600/75  rounded-md text-white font-semibold hover:bg-emerald-500  hover:text-white transition-all",children:"crear"}),P&&t(F,{windowSize:"full"})]})]}),t("button",{onClick:()=>{o(!0),j("/checkout/process?price="+l).then(e=>{o(!1),console.log(e),f("Su producto se gener\xF3 correctamente","\u{1F601}")}).catch(e=>{o(!1),console.log("err",e.error),x("Faltan campos que rellenar")})},className:"form-buttons  bg-blue-500  rounded-md text-white font-semibold hover:bg-blue-600  hover:text-white transition-all",children:"Generar Pago"})]})};export{L as default};