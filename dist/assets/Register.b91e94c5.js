import{c,a as s,f as d,g as u,F as f,b as p,d as r,E as l,e as x}from"./useUser.233e0888.js";import{a as e,j as a,L as h,P as N}from"./index.dceea42a.js";import"./iconBase.e7e7a3f9.js";import"./axios.91e25212.js";import"./notification.defc0a48.js";const b=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,w=c({userName:s().min(3,"Debe tener al menos 3 caracteres").max(20,"Debe tener un m\xE1ximo de 20 caracteres").required("Nombre de usuario requerido"),email:s().email("Email inv\xE1lido").required("Email requerido"),password:s().matches(b,"La contrase\xF1a debe tener al menos 8 caracteres e incluir may\xFAsculas, min\xFAsculas, n\xFAmeros y caracteres especiales").required("Contrase\xF1a requerida"),confirmPassword:s().oneOf([d("password")],"Las contrase\xF1as deben coincidir").required("Contrase\xF1a requerida")}),q=()=>{const t={userName:"",email:"",password:"",confirmPassword:""},{mutate:o,isLoading:n}=u();return e("div",{className:"py-4 mt-4 max-w-[90%] sm:max-w-[70%] md:max-w-2xl md:py-0 lg:max-w-4xl mx-auto md:mt-20 h-fit border rounded-md drop-shadow",children:a("div",{className:"flex items-center justify-center md:h-[700px]",children:[a("div",{className:"flex flex-col sm:w-full  md:mx-auto md:w-[40%] justify-around px-8 h-full",children:[a("div",{className:"w-full text-start",children:[e("h2",{className:"font-semibold text-3xl",children:"Crea tu cuenta"}),e("p",{className:"font-medium text-sm",children:"\xA1Unite a la comunidad de MOVEment!"})]}),e(f,{initialValues:t,validationSchema:w,onSubmit:(m,i)=>{o({...m,confirmPassword:null}),i.resetForm()},validateOnMount:!0,children:m=>a(p,{className:"w-full flex flex-col justify-evenly gap-5",children:[a("div",{className:"w-full flex flex-col items-center gap-3",children:[a("div",{className:"w-full",children:[e(r,{className:"form-inputs",type:"text",name:"userName",placeholder:"Nombre de usuario"}),e(l,{name:"userName",className:"form-error-message",component:"p"})]}),a("div",{className:"w-full",children:[e(r,{className:"form-inputs",type:"email",name:"email",placeholder:"Ingresa tu E-mail"}),e(l,{name:"email",className:"form-error-message",component:"p"})]}),a("div",{className:"w-full",children:[e(r,{className:"form-inputs",type:"password",name:"password",placeholder:"Ingresa tu contrase\xF1a"}),e(l,{name:"password",className:"form-error-message",component:"p"})]}),a("div",{className:"w-full",children:[e(r,{className:"form-inputs",type:"password",name:"confirmPassword",placeholder:"Confirma tu contrase\xF1a"}),e(l,{name:"confirmPassword",className:"form-error-message",component:"p"})]})]}),a("div",{className:"w-full flex flex-col items-center gap-3",children:[e("button",{className:"form-buttons bg-[#3A3A3A]  text-white",type:"submit",disabled:!m.isValid||n,children:"Crear cuenta"}),a("button",{className:"form-buttons flex items-center justify-center gap-2 bg-transparent border-[3px] border-[#3A3A3A] rounded-md text-[#383838] font-semibold",type:"button",children:[e(x,{className:"text-xl"}),"Registrarse con Google"]})]})]})}),a(h,{to:`/${N.LOGIN}`,children:["\xBFYa ten\xE9s una cuenta?"," ",e("span",{className:"font-semibold text-black",children:"Inicia sesi\xF3n"})]})]}),e("div",{className:"hidden md:block w-[60%] h-full",children:e("div",{className:"rounded-r-md bg-hero-register bg-center bg-cover bg-no-repeat h-full"})})]})})};export{q as default};
