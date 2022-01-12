import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Registration(){
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [fileName, setFileName] = useState(null)

  async function UserReg(){
    const reader = new FileReader()

    reader.readAsDataURL(fileName)
    let avatar
    reader.onload = function(event) {
      avatar = event.target.result
    };
    
		const body = {
			'userName':userName,
			'password':password,
      'avatar':avatar
		}
    const req = await fetch('/api/registration',{
      method: 'POST',
      body: JSON.stringify(body)
    })
		const res = await req.json()
    
    if(res.data){
      const router = useRouter()
      router.push('/')
    }
    else{
      alert(res.error)
    }
  }

  function playEgg(){
    const audio = new Audio('/egg/cursed.wav')
    audio.play()
  }

  return(
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="bg-mainPunsh p-4 rounded-2xl flex-col flex w-1/4">
          <span className="text-3xl font-bold text-mainGrey mb-3">Регистрация</span>
          <span className="text-xl font-bold text-mainGrey">Image</span>
          {fileName ? <img className="my-3 rounded-xl" src={URL.createObjectURL(fileName)} width={256} height={256} alt="where"/> : <div className="w-32 h-32 border-4 border-dotted my-3 flex justify-center items-center text-8xl font-bold text-mainGrey pb-5">+</div>}
          <input required type='file' className="h-11 mb-3 mt-1 text-xl focus:outline-mainWarm focus:outline-8" onChange={(event) => {setFileName(event.target.files[0]); console.log(event.target)}}/>
    

          <span className="text-xl font-bold text-mainGrey">Username</span>
          <input required type='text' className="h-11 mb-3 mt-1 pl-3 rounded-2xl text-xl focus:outline-mainWarm focus:outline-8" placeholder="Insert your username..." onChange={(event) => {setUserName(event.target.value)}}/>

          <span className="text-xl font-bold text-mainGrey">Password</span>
          <input required type='password' className="h-11 mb-5 mt-1 pl-3 rounded-2xl text-xl focus:outline-mainWarm" placeholder="Insert your password..." onChange={(event) => {setPassword(event.target.value)}}/>

          <button className="self-end bg-mainWarm rounded-xl px-3 py-2 text-mainBlack text-xl font-semibold hover:text-oceanView hover:bg-mainBlack" onClick={() =>{UserReg()}}>Регистрация</button>
        </div>
      </div>
      <img src='/egg/egg.jpg' width={50} height={50} layout="fixed" onClick={() =>{playEgg()}} className="rounded-full absolute bottom-6 right-6 cursor-pointer"/>
    </>
  )
}