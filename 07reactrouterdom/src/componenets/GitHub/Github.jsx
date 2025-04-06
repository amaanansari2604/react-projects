import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/amaanansari2604`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data,"---data---")
    //         setData(data)
    //     })
    // },[])
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github username : {data?.login}
        <img className='' src={data?.avatar_url} alt="git profile" width={300}/>
        </div>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data?.followers}

    </div>
    </>
  )
}

export default Github

export const githubInfoLoader  = async () => {
    const response = await fetch(`https://api.github.com/users/amaanansari2604`)
    return response.json()
}
