import{j as r,a as e,r as n,F as w}from"./index.5f2b1954.js";import{N as x,a as g,B as v,F as y}from"./Footer.812255c8.js";import{G as s}from"./iconBase.a4f36f13.js";function N(t){return s({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]})(t)}const k=t=>r("div",{className:"my-4",children:[r("div",{className:"relative w-[9.2rem] h-[11.2rem]",children:[e(N,{className:"absolute top-2 right-2 text-[#3056D3] text-xl cursor-pointer"}),e("img",{src:"https://static.dafiti.com.ar/p/unlimit-ride-0542-661058-1-catalog-new.jpg",alt:"prueba",className:"h-full w-full"})]}),r("div",{className:"flex flex-col font-poppins",children:[e("p",{className:"font-bold text-lg pt-1",children:t.productName}),e("p",{className:"w-[9.2rem] text-xs truncate text-ellipsis overflow-hidden pt-0.5",children:t.description}),e("p",{className:"font-extrabold text-[#3056D3] pt-1",children:t.price})]})]});function p(t){return s({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(t)}function m(t){return s({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"}}]})(t)}const L=()=>{const[t,l]=n.exports.useState(window.innerWidth),[o,d]=n.exports.useState({open:!1,waist:!1,colors:!1}),[c,u]=n.exports.useState(!1),i=a=>{const f=a.currentTarget;console.log(`Ordenar por ${f.innerHTML}`)},h=[{id:"1",productName:"Remera",description:"Hermosa para verano",quantityInStock:270,price:1500},{id:"2",productName:"Pantalon",description:"Genial para correr",quantityInStock:220,price:2500},{id:"3",productName:"Buso",description:"Especial para quemar calorias",quantityInStock:240,price:4700},{id:"4",productName:"Campera",description:"Especial para lluvia",quantityInStock:230,price:6500},{id:"5",productName:"Short",description:"Para actividad al aire libre",quantityInStock:320,price:3100}],b=()=>{l(window.innerWidth)};return n.exports.useEffect(()=>{window.addEventListener("resize",b)},[]),r(w,{children:[e(x,{width:t,setWidth:l}),t>=768&&e(g,{width:t,setWidth:l}),e("div",{className:"font-poppins text-[1.5rem] font-[1000] p-4",children:"Todos los Productos"}),r("div",{className:"flex px-4 justify-between",children:[r("div",{children:[r("button",{id:"multiLevelDropdownButton","data-dropdown-toggle":"dropdown",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button",onClick:()=>d({...o,open:!o.open}),children:[e(v,{className:"mr-2"})," Filtrar",e("svg",{className:"ml-2 w-4 h-4","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),e("div",{id:"dropdown",className:`${o.open?"":"hidden"} absolute p-2 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`,placeholder:"Categorias",children:r("ul",{className:"py-1 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"multiLevelDropdownButton",children:[e("li",{children:r("select",{name:"prueba",id:"prueba",size:6,className:"block w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-none rounded-sm",children:[e("option",{value:"",children:"CATEGORIAS"}),e("option",{value:"2",children:"Remera"}),e("option",{value:"3",children:"Pantalon"}),e("option",{value:"4",children:"Short"}),e("option",{value:"5",children:"Camiseta"}),e("option",{value:"6",children:"Calzado"}),e("option",{value:"3",children:"Pantalon"}),e("option",{value:"4",children:"Short"}),e("option",{value:"5",children:"Camiseta"}),e("option",{value:"6",children:"Calzado"})]})}),r("li",{children:[r("div",{className:"flex items-center justify-between text-lg py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",onClick:()=>d({...o,waist:!o.waist}),children:["Talle",o.waist?e(p,{}):e(m,{})]}),o.waist?null:r("div",{className:"flex justify-between",children:[e("p",{className:"flex w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center",children:"XS"}),e("p",{className:"flex w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center",children:"S"}),e("p",{className:"flex w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center",children:"M"}),e("p",{className:"flex w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center",children:"L"}),e("p",{className:"flex w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center",children:"XL"}),e("p",{className:"flex w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center",children:"XXL"})]})]}),r("li",{children:[r("div",{className:"flex items-center justify-between text-lg py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",onClick:()=>d({...o,colors:!o.colors}),children:["Colores",o.colors?e(p,{}):e(m,{})]}),o.colors?null:r("div",{className:"flex justify-between",children:[e("p",{className:"flex bg-[#000000] w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center"}),e("p",{className:"flex bg-[#666666] w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center"}),e("p",{className:"flex bg-[#13C296] w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center"}),e("p",{className:"flex bg-[#3056D3] w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center"}),e("p",{className:"flex bg-[#E41D2C] w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center"}),e("p",{className:"flex bg-[#FFFFFF] w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center"})]})]})]})})]}),e("div",{className:"flex justify-center",children:e("div",{children:r("div",{className:"dropdown relative",children:[r("button",{className:"\r dropdown-toggle\r px-6\r py-2.5\r text-[#3056D3]\r font-medium\r border-[#666666]\r border-2\r text-xs\r leading-tight\r uppercase\r rounded\r shadow-md\r hover:bg-blue-700 hover:shadow-lg hover:text-white\r active:bg-blue-800 active:shadow-lg active:text-white\r transition\r duration-150\r ease-in-out\r flex\r items-center\r whitespace-nowrap\r ",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",onClick:()=>u(!c),children:["Ordenar por:",e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:e("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),r("ul",{className:`${c?"":"hidden"} dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-non`,"aria-labelledby":"dropdownMenuButton1",children:[e("li",{className:"\r dropdown-item\r text-sm\r py-2\r px-4\r font-normal\r block\r w-full\r whitespace-nowrap\r bg-transparent\r text-gray-700\r hover:bg-gray-100\r cursor-pointer\r ",onClick:i,children:"Menor precio"}),e("li",{className:"\r dropdown-item\r text-sm\r py-2\r px-4\r font-normal\r block\r w-full\r whitespace-nowrap\r bg-transparent\r text-gray-700\r hover:bg-gray-100\r ",onClick:i,children:"Mayor Precio"}),e("li",{className:"\r dropdown-item\r text-sm\r py-2\r px-4\r font-normal\r block\r w-full\r whitespace-nowrap\r bg-transparent\r text-gray-700\r hover:bg-gray-100\r ",onClick:i,children:"Alfab\xE9tico a-z"}),e("li",{className:"\r dropdown-item\r text-sm\r py-2\r px-4\r font-normal\r block\r w-full\r whitespace-nowrap\r bg-transparent\r text-gray-700\r hover:bg-gray-100\r ",onClick:i,children:"Alfab\xE9tico z-a"})]})]})})})]}),e("div",{className:"flex flex-wrap w-full justify-center gap-4 ",children:h.map(a=>e(k,{id:a.id,productName:a.productName,description:a.description,quantityInStock:a.quantityInStock,price:a.price},a.id))}),e(y,{})]})};export{L as default};
