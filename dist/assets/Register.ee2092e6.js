import{F as f}from"./index.esm.50152274.js";import{A as n,a as c}from"./index.esm.c181acd0.js";import{r as h,a as e,j as s,L as w,P as N}from"./index.c574b4f1.js";import{c as b,d as o,e as g,f as v,F,a as y,b as l,E as i}from"./useUser.998bf863.js";import"./iconBase.f45f3860.js";import"./notification.36fc9788.js";import"./sweetalert2.all.1185491a.js";import"./useMutation.esm.a63df038.js";const A=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,E=b({userName:o().min(3,"Debe tener al menos 3 caracteres").max(20,"Debe tener un m\xE1ximo de 20 caracteres").required("Nombre de usuario requerido"),email:o().email("Email inv\xE1lido").required("Email requerido"),password:o().matches(A,"La contrase\xF1a debe tener al menos 8 caracteres e incluir may\xFAsculas, min\xFAsculas, n\xFAmeros y caracteres especiales").required("Contrase\xF1a requerida"),confirmPassword:o().oneOf([g("password")],"Las contrase\xF1as deben coincidir").required("Contrase\xF1a requerida")}),S=()=>{const d={userName:"",email:"",password:"",confirmPassword:""};let m;(r=>{r.text="text",r.password="password"})(m||(m={}));const[a,t]=h.exports.useState({password:"password",confirm:"password"}),{mutate:u,isLoading:p}=v();return e("div",{className:"py-4 mt-4 max-w-[90%] sm:max-w-[70%] md:max-w-2xl md:py-0 lg:max-w-4xl mx-auto md:mt-20 h-fit border rounded-md drop-shadow",children:s("div",{className:"flex items-center justify-center md:h-[700px]",children:[s("div",{className:"flex flex-col sm:w-full  md:mx-auto md:w-[40%] justify-around px-8 h-full",children:[s("div",{className:"w-full text-start",children:[e("h2",{className:"font-semibold text-3xl",children:"Crea tu cuenta"}),e("p",{className:"font-medium text-sm",children:"\xA1Unite a la comunidad de MOVEment!"})]}),e(F,{initialValues:d,validationSchema:E,onSubmit:(r,x)=>{u({...r,confirmPassword:null}),x.resetForm()},validateOnMount:!0,children:r=>s(y,{className:"w-full flex flex-col justify-evenly gap-5",children:[s("div",{className:"w-full flex flex-col items-center gap-3",children:[s("div",{className:"w-full",children:[e(l,{className:"form-inputs",type:"text",name:"userName",placeholder:"Nombre de usuario"}),e(i,{name:"userName",className:"form-error-message",component:"p"})]}),s("div",{className:"w-full",children:[e(l,{className:"form-inputs",type:"email",name:"email",placeholder:"Ingresa tu E-mail"}),e(i,{name:"email",className:"form-error-message",component:"p"})]}),s("div",{className:"w-full",children:[s("div",{className:"flex relative items-center",children:[e(l,{className:"form-inputs",type:a.password,name:"password",placeholder:"Ingresa tu contrase\xF1a"}),a.password==="password"?e(n,{className:"absolute right-5 text-xl cursor-pointer",onClick:()=>t({...a,password:"text"})}):e(c,{className:"absolute right-5 text-xl cursor-pointer",onClick:()=>t({...a,password:"password"})})]}),e(i,{name:"password",className:"form-error-message",component:"p"})]}),s("div",{className:"w-full",children:[s("div",{className:"flex relative items-center",children:[e(l,{className:"form-inputs",type:a.confirm,name:"confirmPassword",placeholder:"Confirma tu contrase\xF1a"}),a.confirm==="password"?e(n,{className:"absolute right-5 text-xl cursor-pointer",onClick:()=>t({...a,confirm:"text"})}):e(c,{className:"absolute right-5 text-xl cursor-pointer",onClick:()=>t({...a,confirm:"password"})})]}),e(i,{name:"confirmPassword",className:"form-error-message",component:"p"})]})]}),s("div",{className:"w-full flex flex-col items-center gap-3",children:[e("button",{className:"form-buttons bg-[#3A3A3A]  text-white",type:"submit",disabled:!r.isValid||p,children:"Crear cuenta"}),s("button",{className:"form-buttons flex items-center justify-center gap-2 bg-transparent border-[3px] border-[#3A3A3A] rounded-md text-[#383838] font-semibold",type:"button",children:[e(f,{className:"text-xl"}),"Registrarse con Google"]})]})]})}),s(w,{to:`/${N.LOGIN}`,children:["\xBFYa ten\xE9s una cuenta?"," ",e("span",{className:"font-semibold text-black",children:"Inicia sesi\xF3n"})]})]}),e("div",{className:"hidden md:block w-[60%] h-full",children:e("div",{className:"rounded-r-md bg-hero-register bg-center bg-cover bg-no-repeat h-full"})})]})})};export{S as default};
