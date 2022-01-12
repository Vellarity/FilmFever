import { useContext, useState } from "react"
import { userContext } from "../../../pages/_app"

export function CreateComment({filmID}){
  const {userInfo} = useContext(userContext)
  const [like, setLike] = useState(false)
  const [text, setText] = useState('')

  async function sendComment(){
    const body = {
      "like":like,
      "comment":text,
      "userID":userInfo.id,
      "filmID":filmID,
    }
    const req = await fetch('/api/film/createComment', {
      method:'POST',
      body:JSON.stringify(body)
    })
    const res = await req.json()
    console.log(res)
  }

  return(
    <div className="w-full h-96 bg-mainWarm rounded-xl mt-6 p-3 text-mainBlack flex flex-col">
      <div className="text-2xl font-bold">Оставьте комментарий</div>
      <div className="text-xl font-semibold mt-2">Понравился ли вам фильм: 
        <span onClick={() =>{setLike(true)}} className={`${like ? 'bg-oceanView' : 'bg-zinc-500'} ml-2 py-1 px-2 rounded-xl cursor-pointer`}>Да</span>
        <span onClick={() =>{setLike(false)}} className={`${!like ? 'bg-mainPunsh' : 'bg-zinc-500'} ml-2 py-1 px-2 rounded-xl cursor-pointer`}>Нет</span>
      </div>
      <textarea className="w-full h-5/6 px-3 py-1 rounded-xl mt-3 resize-none" placeholder="Оставьте комментарий" readOnly={userInfo ? false : true} onChange={(event) =>{setText(event.target.value)}}></textarea>
      <div className="flex justify-between items-end">
        <span>{userInfo ? "" : "Вам нужно зарегистрироваться или авторизоваться, чтобы оставлять комментарии!"}</span>
        <button onClick={() =>{sendComment()}} disabled={userInfo ? false : true} className="bg-mainBlack mt-3 px-3 py-2 text-lg text-oceanView rounded-xl font-semibold duration-150 hover:text-mainBlack hover:bg-oceanView">Отправить</button>
      </div>
    </div>
  )
}