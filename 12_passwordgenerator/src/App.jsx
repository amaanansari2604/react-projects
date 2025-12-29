import { useCallback, useEffect, useRef, useState } from "react"


function App() {

  const [pass, setPass] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [characterAllow, setCharacterAllow] = useState(false)

  const passwrodRef = useRef(null)

  const passwrodGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuuvwxyz"

    if(numberAllow){
      str += "1234567890"
    }
    if(characterAllow){
      str += "!@#$%^&*()"
    }

    for (let i = 0; i < length; i++) {
      let  char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPass(pass)

  } , [length, numberAllow, characterAllow, setPass])

  const copyPasswordToClicpboard = useCallback(()=>{
    passwrodRef.current?.select()
    // passwrodRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(pass)
  },[pass])

  useEffect(()=>{
    passwrodGenerator()
  },[length, numberAllow, characterAllow,passwrodGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 text-center">
        <h1 className="text-white text-center my-3">Password generator</h1>
       <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white-300">
        <input 
          type="text"
          value={pass}
          className="outline-none w-full py-1 px-3 text-white"
          placeholder="password"
          readOnly
          ref={passwrodRef}
        />
        <button onClick={copyPasswordToClicpboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
      </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) =>{
                setLength(e.target.value)
              }}
            />
            <label> Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={()=>{
                setNumberAllow((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
              defaultChecked={characterAllow}
              id="characterInput"
              onChange={()=>{
                setCharacterAllow((prev) => !prev);
              }}
            />
            <label>characters</label>
          </div>
        </div>
       </div>
    </>
  )
}

export default App
