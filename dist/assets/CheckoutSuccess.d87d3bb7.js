import{A as c,r,u as i,P as u,j as a,a as o,L as d}from"./index.46cb1239.js";import{G as m}from"./iconBase.85c8dabf.js";function f(t){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M2 22l14-5-9-9zM14.53 12.53l5.59-5.59a1.25 1.25 0 011.77 0l.59.59 1.06-1.06-.59-.59a2.758 2.758 0 00-3.89 0l-5.59 5.59 1.06 1.06zM10.06 6.88l-.59.59 1.06 1.06.59-.59a2.758 2.758 0 000-3.89l-.59-.59-1.06 1.07.59.59c.48.48.48 1.28 0 1.76zM17.06 11.88l-1.59 1.59 1.06 1.06 1.59-1.59a1.25 1.25 0 011.77 0l1.61 1.61 1.06-1.06-1.61-1.61a2.758 2.758 0 00-3.89 0zM15.06 5.88l-3.59 3.59 1.06 1.06 3.59-3.59a2.758 2.758 0 000-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c.48.49.48 1.29 0 1.77z"}}]})(t)}const x=()=>{const t=c(),[e,s]=r.exports.useState(10),{userName:n}=i(l=>l.auth);return setInterval(()=>{s(e-1),e<=0&&(t(`/${u.HOME}`,{replace:!0}),s(10),window.location.reload())},1e3),a("div",{className:"flex flex-col font-poppins justify-center items-center h-screen",children:[a("div",{className:"text-2xl font-bold",children:["Felicitaciones ",n,","]}),o("span",{children:"tu compra se realizo con exito!!!"}),o(f,{className:"h-32 w-32 m-4"}),a(d,{to:"/",className:"text-center cart-buttons bg-[#07A889] text-[#FFFFFF] font-bold",children:["VOLVIENDO A MOVEment (",e,")"]})]})};export{x as default};
