import Router from "next/router"
import { useState, useContext } from "react"
import { userContext } from "../_app"

function Login(){
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
	const [wrong, setWrong] = useState(false)

  const {setUserInfo} = useContext(userContext)

  async function UserLogin(){

		const body = {
			'userName':userName,
			'password':password
		}
    const req = await fetch('/api/login',{
      method: 'POST',
      body: JSON.stringify(body)
    })
		const res = await req.json()

		if(res.data){
			setWrong(true)
		}
		else{
			const router = Router
      setUserInfo(res.user)
      localStorage.setItem('userToken', res.token)
			router.push('/')
		}
	}
  

  return(
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-mainPunsh p-4 rounded-2xl flex-col flex w-1/4">
        <span className="text-3xl font-bold text-mainGrey mb-3">Авторизация</span>

        <span className="text-xl font-bold text-mainGrey">Username</span>
        <input required type='text' className="h-11 mb-3 mt-1 pl-3 rounded-2xl text-xl focus:outline-mainWarm focus:outline-8" placeholder="Insert your username..." onChange={(event) => {setUserName(event.target.value)}}/>

        <span className="text-xl font-bold text-mainGrey">Password</span>
        <input required type='password' className="h-11 mb-5 mt-1 pl-3 rounded-2xl text-xl focus:outline-mainWarm" placeholder="Insert your password..." onChange={(event) => {setPassword(event.target.value)}}/>

        <button className="self-end bg-mainWarm rounded-xl px-3 py-2 text-mainBlack text-xl font-semibold hover:text-oceanView hover:bg-mainBlack" onClick={() =>{UserLogin()}}>Войти</button>
      </div>
			{wrong ? <div className="text-mainPunsh underline text-lg mt-4"> Неверный логин или пароль. </div> : null} 
    </div>
  )
}

export default Login