import{k as r,y as i,j as a,w as n,D as l}from"./index-C0iluDBm.js";const o=({product:t})=>{const s=r(),e=i();if(e.pathname.includes("catalog"))return a.jsxs("div",{className:"bg-gray w-full h-16 flex justify-between items-center rounded-md",children:[a.jsx("button",{className:"text-2xl bg-transparent h-full px-6 transition-all duration-200 lg:hover:bg-primary-light rounded-md",onClick:()=>s(n(t)),children:"+"}),a.jsxs("span",{className:"flex flex-col items-center justify-center lg:flex-row gap-1",children:["Количество",a.jsxs("span",{className:"truncate max-w-24",children:[t.count," шт."]})]}),a.jsx("button",{onClick:()=>s(l(t)),className:"text-3xl bg-transparent h-full px-6 transition-all duration-200 lg:hover:bg-primary-light rounded-md",children:"-"})]});if(e.pathname.includes("cart"))return a.jsxs("div",{className:"bg-transparent w-full flex gap-3 sm:gap-4 items-center justify-center sm:justify-start rounded-md",children:[a.jsx("button",{className:"text-xl h-[36px] px-6 transition-all duration-200 bg-gray lg:hover:bg-primary-light rounded-md",onClick:()=>s(n(t)),children:"+"}),a.jsxs("span",{className:"flex gap-1",children:[a.jsx("span",{className:"truncate max-w-16 sm:max-w-24",children:t.count}),"шт."]}),a.jsx("button",{onClick:()=>s(l(t)),className:"text-3xl h-[36px] px-6 transition-all duration-200 bg-gray lg:hover:bg-primary-light rounded-md",children:"-"})]})};export{o as Q};
