import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

 let myArr = [
  1,2,3,4
 ]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>tailwind test</h1>
    <Card username="oyejolly" btnText="click me" someObj={myArr}/>
    <Card username={"amaan ansari"}/>

    </>
  )
}

export default App
