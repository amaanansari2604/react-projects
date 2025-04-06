# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## layout.jsx file
this file is the outlet of our project in which we stores header and footer in it and outlet component in which the routes will render here nesting will appear

## nesting in main.jsx file
in this file we have done nesting using createdbrowserrouter and createroutesfromelements
head to main.jsx to see the wrapper of router variable in which we have define the routes.
there will two types of ways to create routes in it it will render the routes in router variable.
we can nesting inside other componenets also like this 

<Route path='about' element={<About/>}/> 
    <Route path="amaan" element={<amaan/>}>
</Route>

its route will be like the /about/amaan here we done a nesting in about route

## taking dynamic values from user 
we have used useParams for taking dynamic values in route check out main.jsx and user.jsx file in components

## loader 
we have loader for fastly upload the image and api calls in routes.
