import{r as s,u as i,H as q,E,G,j as o,a as t,o as M,T as H}from"./index.a7cc8b2c.js";import{S as B,a as J}from"./notification.351c0513.js";import{u as Q}from"./useDispatch.400b06d7.js";const W=()=>{const[d,h]=s.exports.useState(""),[p,x]=s.exports.useState(""),[u,f]=s.exports.useState(""),[m,b]=s.exports.useState(""),[n,v]=s.exports.useState(),[w,N]=s.exports.useState(""),[S,y]=s.exports.useState(""),[C,k]=s.exports.useState(""),[z,l]=s.exports.useState(!1),A=i(e=>e.categories.list),P=i(e=>e.sizes.list),j=i(e=>e.colours.list),c=Q();s.exports.useEffect(()=>{c(q()),c(E()),c(G())},[]);let g;const I=e=>{l(!0),g=8;const a=new FormData;a.append("productName",d),a.append("description",p),a.append("quantityInStock",u),a.append("price",m),a.append("sizes",w),a.append("colours",S),a.append("categoriesIds",C),console.log(a);for(let r=0;r<g;r++)a.append("productPic",n?n[r]:"");e.preventDefault(),H(a,"/products/save").then(r=>{l(!1),console.log(r),B("Su producto se gener\xF3 correctamente","\u{1F601}")}).catch(r=>{l(!1),console.log("err",r.error),J("Faltan campos que rellenar")})},D=e=>{k(e.target.value)},F=e=>{y(e.target.value)},L=e=>{N(e.target.value)};return o("div",{className:" flex p-2 pt-8 md:pt-4 md:gap-10 flex-col gap-20 w-[100%]  md:items-end  h-screen",children:[t("h2",{className:"text-lg font-semibold w-[100vw] md:w-auto ",children:"Hola admin! me alegra tenerte de nuevo \u{1F601}!"}),o("form",{className:"flex flex-col justify-center items-center gap-5 md:p-0 p-4 h-full w-screen md:w-[80%]",onSubmit:I,children:[t("input",{type:"text",name:"productName",placeholder:"Nombre del producto",className:"form-inputs ",onChange:e=>h(e.target.value),value:d}),t("input",{type:"text",name:"description",placeholder:"Descripcion",className:"form-inputs",onChange:e=>x(e.target.value),value:p}),t("input",{type:"number",name:"quantityInStock",placeholder:"Cantidad Disponible",className:"form-inputs",onChange:e=>f(e.target.value),value:u}),t("input",{type:"number",name:"price",placeholder:"Precio",className:"form-inputs",onChange:e=>b(e.target.value),value:m}),o("div",{className:"flex md:w-max md:gap-5 w-[100%] justify-center",children:[t("select",{name:"categories",onChange:D,className:"border-2  shadow-2xl  text-sm rounded-lg    block w-max p-2.5   dark:text-[#aaaaaa]  ",children:A.map(e=>t("option",{value:e.id,children:e.categoryName},e.id))}),t("select",{name:"colours",onChange:F,className:"border-2  shadow-2xl  text-sm rounded-lg    block w-max p-2.5   dark:text-[#aaaaaa]  ",children:j.map(e=>t("option",{value:e.id,children:e.colourName},e.id))}),t("select",{name:"size",onChange:L,className:"border-2  shadow-2xl  text-sm rounded-lg    block w-max p-2.5   dark:text-[#aaaaaa]  ",children:P.map(e=>t("option",{value:e.id,children:e.sizeLetter},e.id))})]}),t("div",{className:"flex items-center justify-center w-full",children:o("label",{className:"flex flex-col items-center justify-center w-[12rem]  border-2 border-gray-300  rounded-lg cursor-pointer   hover:bg-[#3A3A3A]  ",children:[o("div",{className:"flex flex-col items-center justify-center pt-2 pb-2",children:[t("svg",{"aria-hidden":"true",className:"w-10 h-10 mb-3 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),t("p",{className:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:t("span",{className:"font-semibold",children:"Enviar 3 imagenes"})}),t("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"SVG, PNG, JPG (MAX. 800x400px)"})]}),t("input",{id:"dropzone-file",type:"file",className:"hidden",name:"productPic",multiple:!0,onChange:e=>v(e.target.files?e.target.files:n)})]})}),o("div",{className:"flex gap-3 md:w-2/5  w-3/4",children:[t("button",{className:"form-buttons  bg-red-500 border-transparent font-semibold  text-white  hover:bg-red-800 transition-all",children:"cancelar"}),t("button",{className:"form-buttons  bg-emerald-600/75  rounded-md text-white font-semibold hover:bg-emerald-500  hover:text-white transition-all",children:"crear"}),z&&t(M,{windowSize:"full"})]})]})]})};export{W as default};
