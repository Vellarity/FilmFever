import { createContext, useState, useMemo, useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import {BasicLayout} from '../components/Layouts/BasicLayout'
import '../public/App.css'

export const userContext = createContext({
  userInfo:null,
  setUserInfo:() => {}
})

/* export async function getStaticProps(){
  const token = localStorage.getItem("userToken")

  if (token){
    const req = await fetch('http://localhost:3000/api/login',{
      method: 'POST',
      headers: {
        authorization:'Bearer ' + token
      }
    })
    const user = await req.json()
    console.log(user)
    return{
      props:{
        user
      }
    }
  }
} */

function App({ Component, pageProps, user }) {
  const [userInfo, setUserInfo] = useState(user ? user : null)

  useEffect(async() =>{
    const token = localStorage.getItem("userToken")
    if (token){
      const req = await fetch('http://localhost:3000/api/login',{
        method: 'POST',
        headers: {
          authorization:'Bearer ' + token
        }
      })
      const res = await req.json()

      setUserInfo(res.user)
    }
  },[])

  return (
    <div className='body'>
      <userContext.Provider value={{userInfo, setUserInfo}}>
        <BasicLayout>
          <Component {...pageProps} />
        </BasicLayout>
      </userContext.Provider>
    </div>
    )
    
}

export default App