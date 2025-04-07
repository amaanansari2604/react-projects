# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## react passing props

react m props component to component pas kra jata h jo ki optimised approach nhi h 
isko m ek global file bnakr kr skta hu jo kisi v componenet m call kr skte hain this is called prop drilling.
tbi context api kehte hain isko ye ek library h, iske andar hum redux dekhenge like state management kese krenge isme redux v ek library h ye v ek library h,
redux-toolking (rtk), zustand v ek library h state management k liye,

we will study here useContext hook
context api means ek global variable bnega jisme values store rahengi fr ye values hum kahi v call kr skte hain
