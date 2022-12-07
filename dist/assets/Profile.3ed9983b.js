import{f as i,F as n,a as c,b as o,E as s}from"./useUser.800f15a9.js";import{v as p}from"./validationSchema.4c32ae12.js";import{j as r,a as e}from"./index.8b52bca0.js";import"./notification.6dd690d5.js";import"./sweetalert2.all.98ac37e0.js";import"./useMutation.esm.1125f07d.js";const w=()=>{const d={firstName:"",lastName:"",phoneNumber:"",email:""},{mutate:t,isLoading:l}=i();return r("div",{className:"container md:px-32 md:py-4 font-poppins ",children:[r("div",{className:"container-header border rounded-md border-gray-200 flex justify-start p-8 mb-4 shadow",children:[e("img",{className:"profile-image  h-36 w-36",src:"https://firebasestorage.googleapis.com/v0/b/db-demo-e7d23.appspot.com/o/Rectangle%2090.png?alt=media&token=e22140f1-d23c-4e84-a2a3-16355aad6b67",alt:""}),r("div",{className:" ml-4 flex flex-col justify-center",children:[e("h2",{className:"text-2xl font-extrabold",children:"Susana Bejarano"}),e("p",{children:"Verifica los datos relacionados con tu perfil"})]})]}),r("div",{className:"container-boxes rounded-md border border-gray-200 shadow",children:[e("div",{className:" justify-around py-8",children:r("div",{className:" w-full flex flex-col  gap-3 items-center md:items-start",children:[e("div",{className:" w-full md:w-1/2 flex justify-center gap-4",children:e("p",{children:"JPG, PNG o GIF. Peso M\xE1ximo de 1mb"})}),r("div",{className:" w-full md:w-1/2 flex justify-center gap-4",children:[e("button",{className:"rounded-md px-4 py-2 cursor-pointer bg-[#3A3A3A]  text-white",type:"submit",children:"Subir foto nueva"}),e("button",{className:"rounded-md px-4 py-2 cursor-pointer bg-[#3A3A3A]  text-white",type:"submit",children:"Suprimir"})]})]})}),e(n,{initialValues:d,validationSchema:p,onSubmit:(a,m)=>{t({...a,confirmPassword:null}),m.resetForm()},validateOnMount:!0,children:a=>e(c,{className:" w-full flex flex-col justify-evenly gap-5 ",children:r("div",{className:"w-full flex flex-col items-start gap-3 px-8",children:[e(o,{className:"w-full cursor-pointer md:w-1/2 p-2 border-2 rounded-md border-gray-200 drop-shadow ",type:"text",name:"firstName",placeholder:"Nombre de usuario"}),e(s,{className:"form-error-message",name:"firstName",component:"p"}),e(o,{className:"w-full cursor-pointer md:w-1/2 p-2 border-2 rounded-md border-gray-200 drop-shadow",type:"text",name:"lastName",placeholder:"Apellido de usuario"}),e(s,{className:"form-error-message",name:"lastName",component:"p"}),e(o,{className:"w-full cursor-pointer md:w-1/2 p-2 border-2 rounded-md border-gray-200 drop-shadow",type:"number",name:"phoneNumber",placeholder:"Tel\xE9fono"}),e(s,{className:"form-error-message",name:"phoneNumber",component:"p"}),e(o,{className:"w-full cursor-pointer md:w-1/2 p-2 border-2 rounded-md border-gray-200 drop-shadow",type:"email",name:"email",placeholder:"e-mail"}),e(s,{className:"form-error-message",name:"email",component:"p"}),r("div",{className:" w-full md:w-1/2 flex justify-center gap-4 py-8",children:[e("button",{className:" rounded-md px-4 py-2 cursor-pointer bg-[#3A3A3A]  text-white",type:"submit",disabled:!a.isValid||l,children:"Guardar"}),e("button",{className:" rounded-md px-4 py-2 cursor-pointer bg-[#3A3A3A]  text-white",type:"submit",disabled:!a.isValid||l,children:"Cancelar"})]})]})})})]})]})};export{w as default};
