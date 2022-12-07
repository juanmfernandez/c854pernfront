import{N,a as C,C as k,F as S}from"./Cart.191aa28f.js";import{j as r,a as e,L as j,r as a,u as h,D as I,E as z,F as A,S as D,G as P}from"./index.c574b4f1.js";import{I as w,a as b}from"./index.esm.24a06b35.js";import{a as F,b as _}from"./index.esm.9380d0f1.js";import{u as L}from"./useDispatch.91eeb0ca.js";import"./iconBase.f45f3860.js";import"./useCart.895b9f71.js";import"./notification.36fc9788.js";import"./sweetalert2.all.1185491a.js";import"./useMutation.esm.a63df038.js";const O=i=>r("div",{className:"my-2 shadow-md",children:[e(j,{to:`/catalogue/product/${i.id}`,children:e("div",{className:"relative w-[9.2rem] h-[11.2rem] md:w-[17rem] md:h-[19rem]",children:e("img",{src:i.ProductImgs[0].imgUrl,alt:i.id,className:"flex h-full w-full object-cover justify-start hover:scale-110 hover:duration-300 cursor-pointer"})})}),r("div",{className:"flex flex-col font-poppins p-2",children:[e("p",{className:"font-bold text-lg pt-1",children:i.productName}),e("p",{className:"w-[9.2rem] text-xs truncate text-ellipsis overflow-hidden pt-0.5",children:i.description}),e("p",{className:"font-extrabold text-[#3056D3] pt-1",children:i.price})]})]}),H=()=>{const[i,m]=a.exports.useState(window.innerWidth),[x,f]=a.exports.useState(!1),[o,u]=a.exports.useState({open:!1,waist:!1,colors:!1}),[g,v]=a.exports.useState(!1),l=h(t=>t.products.list),s=h(t=>t.colours.list),n=h(t=>t.sizes.list),d=t=>{const c=t.currentTarget;console.log(`Ordenar por ${c.innerHTML}`)},p=L(),y=()=>{m(window.innerWidth)};return a.exports.useEffect(()=>{l.length===0&&p(I()),s.length===0&&p(z()),n.length===0&&p(A()),window.addEventListener("resize",y)},[]),l.length===0?e(D,{windowSize:i.toString()}):r(P,{children:[e(N,{width:i,setWidth:m,setIsOpen:f}),i>=768&&e(C,{width:i,setWidth:m}),e(k,{isOpen:x,setIsOpen:f}),e("div",{className:"flex font-poppins text-[1.5rem] font-[1000] p-4 sm:justify-center",children:"Todos los Productos"}),r("div",{className:"flex px-4 justify-between sm:mx-20",children:[r("div",{children:[r("button",{id:"multiLevelDropdownButton","data-dropdown-toggle":"dropdown",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button",onClick:()=>u({...o,open:!o.open}),children:[e(F,{className:"mr-2"})," Filtrar",e(w,{className:"ml-2"})]}),e("div",{id:"dropdown",className:`${o.open?"":"hidden"} absolute p-2 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`,placeholder:"Categorias",children:r("ul",{className:"py-1 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"multiLevelDropdownButton",children:[e("li",{children:r("select",{name:"prueba",id:"prueba",size:6,className:"block w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-none rounded-sm",children:[e("option",{value:"",children:"CATEGORIAS"}),e("option",{value:"2",children:"Remera"}),e("option",{value:"3",children:"Pantalon"}),e("option",{value:"4",children:"Short"}),e("option",{value:"5",children:"Camiseta"}),e("option",{value:"6",children:"Calzado"}),e("option",{value:"3",children:"Pantalon"}),e("option",{value:"4",children:"Short"}),e("option",{value:"5",children:"Camiseta"}),e("option",{value:"6",children:"Calzado"})]})}),r("li",{children:[r("div",{className:"flex items-center justify-between text-lg py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",onClick:()=>u({...o,waist:!o.waist}),children:["Talle",o.waist?e(w,{}):e(b,{})]}),o.waist?null:e("div",{className:"flex justify-between flex-wrap",children:n==null?void 0:n.map(t=>e("div",{id:t.id,className:"flex w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center",children:t.sizeLetter},t.id))})]}),r("li",{children:[r("div",{className:"flex items-center justify-between text-lg py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",onClick:()=>u({...o,colors:!o.colors}),children:["Colores",o.colors?e(w,{}):e(b,{})]}),o.colors?null:e("div",{className:"flex flex-wrap justify-between",children:s==null?void 0:s.map(t=>e("div",{id:t.id,className:`flex bg-[${t.colourValue}] w-6 h-5 rounded-[0.2rem] border-2 border-solid border-[#666666] text-[0.7rem] font-semibold justify-center items-center mt-1`},t.id))})]})]})})]}),e("div",{className:"flex justify-center",children:e("div",{children:r("div",{className:"dropdown relative",children:[r("button",{className:"\r dropdown-toggle\r px-6\r py-2.5\r text-[#3056D3]\r font-medium\r border-[#666666]\r border-2\r text-xs\r leading-tight\r uppercase\r rounded\r shadow-md\r hover:bg-blue-700 hover:shadow-lg hover:text-white\r active:bg-blue-800 active:shadow-lg active:text-white\r transition\r duration-150\r ease-in-out\r flex\r items-center\r whitespace-nowrap\r ",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",onClick:()=>v(!g),children:["Ordenar por:",e(_,{className:"ml-2"})]}),r("ul",{className:`${g?"":"hidden"} dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-non`,"aria-labelledby":"dropdownMenuButton1",children:[e("li",{className:"dropdown-item li_menu_sort",onClick:d,children:"Menor precio"}),e("li",{className:"dropdown-item li_menu_sort",onClick:d,children:"Mayor Precio"}),e("li",{className:"dropdown-item li_menu_sort",onClick:d,children:"Alfab\xE9tico a-z"}),e("li",{className:"dropdown-item li_menu_sort",onClick:d,children:"Alfab\xE9tico z-a"})]})]})})})]}),e("div",{className:"flex w-full justify-center mt-8",children:e("div",{className:"flex flex-wrap w-full justify-center gap-6 sm:w-[60rem]",children:l==null?void 0:l.map(t=>{var c;return e(O,{id:t.id,productName:t.productName,description:t.description,quantityInStock:t.quantityInStock,price:t.price,ProductImgs:(c=t.ProductImgs)!=null&&c.length?t.ProductImgs:[{ProductId:"",id:"",date:new Date,imgUrl:"",status:"",createdAt:new Date,updatedAt:new Date}],Size:t.Size,Colours:t.Colours,Categories:t.Categories},t.id)})})}),e(S,{})]})};export{H as default};
