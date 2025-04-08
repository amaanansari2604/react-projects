# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

is project m hum log ne sikha kese hum tailwind css implement krte hain vo h ese - 

importing -

Terminal
npm install tailwindcss @tailwindcss/vite

vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

index.css
@import "tailwindcss";

terminal
npm run dev

how to implement- 

 <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">

uske alawa humne dekha k props kko kese send krte hain components m jese ye mera component import hua h is file m app.jsx m -
<Card username="oyejolly" btnText="click me" someObj={myArr}/>
    <Card username={}/> 
inko mene as a argument bheja h apne card component jo ki in names ko uske props m define krke hum kr skte hain jese agr ek hi variable denge to uske andar sare variables as a object ajayenge or hum usko props.username, props.btntext , ese call krenege otherwise agr variable/argument hi pas kri h to uske liye hume us argument ka name hi dena hoga

 export default function Card({username, btnText="visit me", someObj}) or props k andar jo value di jati h vo default value h  agr koi vlaue nhi mili isko to vo ise use krlega
 or jaha v use krna h {} iske andar use kr skte hain

 
