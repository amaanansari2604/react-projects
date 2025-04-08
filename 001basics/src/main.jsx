import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return (
//     <>
//       <h1>this is sastsa react</h1>
//     </>
//   )
// }

// const ReactElement = {
//   type: "a",
//   props: {
//       href: 'https://google.com',
//       target: '_blank' 
//   },
//   children: 'click me to visite google'
// } this is react element which is the official react conversion of function

const AnotherElement = (
  <a href="https;//google.com">visit google</a>
)

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click me to visit google'
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)