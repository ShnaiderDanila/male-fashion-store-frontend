import{r as V,o as C,S as U,j as s,J as E,B as l,C as R,L as k}from"./index-Dvj0gR4G.js";import{P as v}from"./PageWrapper-Hks755b-.js";import{z as r,u as z,F as i,t as B}from"./index-BWDRmC-P.js";import{p as L}from"./phoneRegex-CoFneNRh.js";import{p as f}from"./passwordRegex-DF5p1ncg.js";import{C as A}from"./CustomButton-DK0OV67e.js";import{H as g}from"./HiddenPasswordButton-Ch0cu1EH.js";import{a as D}from"./AuthService-Bvge6XMe.js";const M=r.object({firstName:r.string().min(1,"Пожалуйста, заполните обязательное поле").refine(e=>!(e!=null&&e.includes(" ")),"В данном поле не должно быть пробелов"),lastName:r.string().min(1,"Пожалуйста, заполните обязательное поле").refine(e=>!(e!=null&&e.includes(" ")),"В данном поле не должно быть пробелов"),email:r.string().min(1,"Пожалуйста, заполните обязательное поле").email("Некорректный формат электронной почты").refine(e=>!(e!=null&&e.includes(" ")),"В данном поле не должно быть пробелов"),phoneNumber:r.string().regex(L,"Некорректный формат номера телефона").min(11,"Номер телефона должен состоять из 11 цифр"),password:r.string().min(6,"Минимальная длина пароля - 6 символов").max(30,"Максимальная длина пароля - 30 символов").regex(f,`Пароль должен содержать хотя бы:
         одну латинскую букву (a-z), 
         одну цифру (0-9), а также  
         один специальный символ (#?!@$%^&*-).`),confirmPassword:r.string().min(6,"Минимальная длина пароля - 6 символов").max(30,"Максимальная длина пароля - 30 символов").regex(f,`Пароль должен содержать хотя бы:
         одну латинскую букву (a-z), 
         одну цифру (0-9), а также  
         один специальный символ (#?!@$%^&*-).`)}).refine(e=>e.password===e.confirmPassword,{message:"Пароли не совпадают",path:["confirmPassword"]}),$=()=>{var d,p,c,u,x,h;const[e,m]=V.useState({password:!0,confirmPassword:!0}),w=C(),b=U(),[j]=D.useRegistrationMutation(),{register:a,handleSubmit:N,formState:{errors:t,isSubmitting:P,isDirty:I,isValid:S},setValue:n,reset:y}=z({resolver:B(M),mode:"onChange"}),F=async H=>{const{confirmPassword:J,...T}=H;await j(T).unwrap().then(o=>{y(),localStorage.setItem("token",o.token),b(E(o.user)),w("/",{replace:!0}),l.success("Вы успешно зарегистрировались!")}).catch(o=>{o.data?l.error(o.data.message):l.error("Ошибка сервера! Пожалуйста, повторите попытку позже.")})};return s.jsxs("form",{onSubmit:N(F),className:"mx-auto max-w-96",children:[s.jsxs("fieldset",{className:"mx-auto flex flex-col gap-3 w-full mb-2",children:[s.jsx(i,{labelTitle:"Имя*",inputId:"Имя",error:(d=t.firstName)==null?void 0:d.message,placeholder:"Введите имя",...a("firstName"),clearField:()=>n("firstName","",{shouldValidate:!0})}),s.jsx(i,{labelTitle:"Фамилия*",inputId:"Фамилия",error:(p=t.lastName)==null?void 0:p.message,placeholder:"Введите фамилию",...a("lastName"),clearField:()=>n("lastName","",{shouldValidate:!0})}),s.jsx(i,{labelTitle:"Номер телефона*",inputId:"Номер телефона",type:"tel",className:"w-full text-primary pl-5 pr-10 py-2 border border-gray outline-primary rounded-sm flex-1",maxLength:11,error:(c=t.phoneNumber)==null?void 0:c.message,...a("phoneNumber"),clearField:()=>n("phoneNumber","",{shouldValidate:!0}),children:s.jsx("span",{className:"absolute top-[37px] left-3",children:"+"})}),s.jsx(i,{labelTitle:"Email*",inputId:"Email",error:(u=t.email)==null?void 0:u.message,placeholder:"Введите email",...a("email"),clearField:()=>n("email","",{shouldValidate:!0})}),s.jsx(i,{labelTitle:"Пароль*",inputId:"Пароль",type:e.password?"password":"text",error:(x=t.password)==null?void 0:x.message,placeholder:"Придумайте пароль",...a("password"),children:s.jsx(g,{hidden:e.password,setHidden:()=>m({...e,password:!e.password})})}),s.jsx(i,{labelTitle:"Повтор пароля*",inputId:"Повтор пароля",type:e.confirmPassword?"password":"text",error:(h=t.confirmPassword)==null?void 0:h.message,placeholder:"Повторите пароль",...a("confirmPassword"),children:s.jsx(g,{hidden:e.confirmPassword,setHidden:()=>m({...e,confirmPassword:!e.confirmPassword})})})]}),s.jsx("p",{className:"mb-3",children:"* - обязательные поля для заполнения"}),s.jsx(A,{disabled:P||!I||!S,children:s.jsx("span",{children:"Зарегистрироваться"})})]})},Z=()=>s.jsx(v,{children:s.jsx("section",{className:"pt-8 pb-36",children:s.jsxs(R,{children:[s.jsx("h2",{className:"text-center text-2xl mb-5 font-semibold",children:"Добро пожаловать в Male Fashion"}),s.jsxs("p",{className:"text-center mb-8",children:["Уже есть аккаунт?"," ",s.jsx(k,{to:"/signin",className:"underline py-3",children:"Войти"})]}),s.jsx($,{})]})})});export{Z as default};