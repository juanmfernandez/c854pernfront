import{u as C,N as w,C as k}from"./Cart.644452df.js";import{r as d,J as D,u as i,K as I,j as a,a as s,L as N}from"./index.33eca0da.js";import{b as S}from"./index.esm.50a8c776.js";import{B as E}from"./index.esm.054efafb.js";import{u as P}from"./useDispatch.35fa3511.js";import"./iconBase.12477262.js";import"./notification.416b2d16.js";import"./useMutation.esm.67a2ee7d.js";const q=()=>{var o,m,h,x,f;const[p,u]=d.exports.useState(window.innerWidth),[b,c]=d.exports.useState(!1),v=P(),{id:l}=D(),e=i(t=>t.products.detail),{cartId:g}=i(t=>t.auth),{logged:n}=i(t=>t.auth);d.exports.useEffect(()=>{l&&v(I(l))},[]);const{mutate:y}=C(g,l),j=()=>{y()};return a("div",{className:"font-poppins",children:[s(w,{width:p,setWidth:u,setIsOpen:c}),n&&s(k,{isOpen:b,setIsOpen:c}),a(N,{className:"flex items-center m-4",to:"/catalogue",children:[s(S,{className:"mr-2"})," Volver a la tienda"]}),s("div",{className:"p-4 ",children:a("div",{className:" flex gap-2 flex-col md:flex-row justify-center",children:[a("div",{className:"flex gap-2 justify-center 1",children:[s("div",{className:"md:hidden flex flex-col items-center justify-end gap-1",children:(o=e==null?void 0:e.Colours)==null?void 0:o.map(t=>s("div",{className:`bg-[${t.colourValue}] h-8 w-8 rounded-sm border-2 border-[#666666] flex- items-center justify-center hover:border-[#13C296]`},t.id))}),s("div",{className:"hidden md:flex flex-col justify-between",children:(m=e==null?void 0:e.ProductImgs)==null?void 0:m.map((t,r)=>{if(r!==0)return s("img",{id:r.toString(),className:"h-37 w-24",src:t.imgUrl,alt:e!=null&&e.productName?e.productName:"sin foto"},r)})}),s("div",{children:s("img",{className:" h-75 w-50 md:h-[38rem] object-cover ",src:e!=null&&e.ProductImgs?(h=e==null?void 0:e.ProductImgs[0])==null?void 0:h.imgUrl:"",alt:e!=null&&e.productName?e.productName:"sin foto"})})]}),a("div",{className:"md:w-1/3 md:ml-8",children:[s("h2",{className:" hidden md:block text-xl font-bold ",children:e==null?void 0:e.productName}),a("h2",{className:"text-3xl font-extrabold text-[#3056D3] text-center mt-2 md:text-left md:text-xl",children:["$ ",e==null?void 0:e.price]}),s("p",{className:"text-xs hidden md:block",children:"(mas costos de env\xEDo)"}),s("hr",{className:"hidden md:block"}),a("p",{className:"mt-4 hidden md:block",children:[s("span",{children:"Seleccionar talle"}),s("span",{className:"ml-2 text-xs font-bold text-[#3056D3]",children:"Referencia de talles >"})]}),s("div",{className:"flex items-center justify-center md:justify-start gap-1",children:(x=e==null?void 0:e.Size)==null?void 0:x.map(t=>s("div",{className:"h-8 w-8 rounded-sm border-2 border-black flex items-center justify-center hover:border-[#13C296] hover:text-[#13C296]",children:t.sizeLetter},t.id))}),s("p",{className:"mt-4 hidden md:block",children:"Seleccionar color"}),s("div",{className:"hidden md:flex items-center gap-1",children:(f=e.Colours)==null?void 0:f.map(t=>s("div",{style:{background:`${t.colourValue}`},className:"h-8 w-8 rounded-sm border-2 border-[#666666] flex items-center justify-center hover:border-[#13C296]"},t.id))}),n&&a("div",{className:"flex gap-2 justify-center md:justify-start mt-2",children:[a("span",{className:"border border-gray-600 rounded-md flex justify-center items-center pl-2",children:["Cant.:",s("input",{className:"w-16 text-right px-2",type:"number"})]}),a("button",{onClick:j,className:"flex bg-[#19F5BE] rounded-md py-2 px-6 drop-shadow-md",children:["AGREGAR",s(E,{className:"text-xl ml-2"})]})]}),a("p",{className:"text-center mt-2 md:text-left",children:["Con esta compra, donamos"," ",a("strong",{children:[((e==null?void 0:e.price)/1e3).toFixed(2)," Moves"]})]}),s(N,{className:"text-xs font-bold text-[#3056D3]",to:"/home",children:"Te contamos a quien beneficia >"}),s("hr",{}),a("div",{className:"py-4",children:[s("p",{className:"font-extrabold",children:"Descripci\xF3n"}),s("p",{className:"text-xs sm:block text-justify",children:e==null?void 0:e.description})]}),a("div",{className:"py-4",children:[s("p",{className:"font-extrabold",children:"M\xE9todos y costos de env\xEDo"}),a("p",{className:"text-xs text-justify",children:["Consulte los costos de envio"," ",s("a",{className:"font-bold",href:"#",children:"aqui"})]})]})]})]})})]})};export{q as default};
