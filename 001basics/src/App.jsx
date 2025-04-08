import Chai from "./chai"

function App() {

  //variable ko inject krne k liye {} k andar variable name dedo bss
  const username = 'anita pujari'
  return (
    <>
    <Chai/> 
    {/* //yaha pr kch v perform nhi kr skte jo v kam krna h upr hi krna h yaha final ooutcome dena hota h {} k andar */}
    <h1>this is chai {username}</h1>
   </>
   
  )
}

export default App
