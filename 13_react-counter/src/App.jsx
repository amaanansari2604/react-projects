import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(10);

  const addValue = ()=>{
   setCounter(counter + 1)
  }
  const removeValue = ()=>{
    if(counter > 0){
    setCounter(counter - 1)
    }
  }

  const mulvalue = ()=>{
    setCounter((prevCount) =>{
      return prevCount + 1      //this is also upgrade value by one but if we use it multiple times it will increace values that many times but if we use setCounter(counter+1) multiple times it will only increase by one just becausereact executes teh functiono in bundles so setCounter(counter+1) all executes in one bundle and increase only one value but setCount(preCount ()=> prevCount) increase value according to the no. of times it is uses
    })
    // setCounter(prevCount => prevCount + 1) ye v upr wale ki trh same hi h
  }
  return (
    <>
      <h1>chai or code</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
      <p>thisis paragraph</p>
    </>
  )
}

export default App
