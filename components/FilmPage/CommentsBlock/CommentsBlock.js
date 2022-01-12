import { useRouter } from "next/router"
import Image from "next/image"
import { useEffect, useState } from "react"
import Allah from './allah.png'

function CommentItem({commentar}){
  const {user, like, comment} = commentar

  return(
    <div className={`flex flex-col mt-3 rounded-xl pt-1 px-1 w-4/6 ${like ? 'self-end bg-oceanView' : 'self-start bg-mainPunsh'}`}>
      <div className="flex items-center bg-mainWarm max-w-fit rounded-xl px-3 py-1">
        <Image quality={20} width="50px" height="50px" className='rounded-full' src={user.avatar} alt="where"/>
        <span className="ml-3 text-mainBlack text-lg font-semibold">{user.userName}</span>
      </div>
      <span className="mt-3 rounded-xl text-lg font-medium px-4 mb-3 indent-14 text-mainBlack">
      {comment}
      </span>
    </div>
  )
}

export default function CommentsBlock(){
	const router = useRouter()
  const [list, setList] = useState([])
  const [numbers, setNumbers] = useState([0,3])

  async function getComments(){
    const data = {
      "from":numbers[0],
      "to":3,
      "filmID":router.query
    }

    const req = await fetch('/api/film/comments',{
      method:'POST',
      body:JSON.stringify(data)
    })
    const res = await req.json()
    setList([...list, ...res.comments])
    setNumbers([numbers[0]+3,numbers[1]+3])
  }

  useEffect(async function(){
    getComments()
  },[])

  return(
    list.length > 0 ? 
      <div className="w-full bg-darkBlue rounded-xl mt-6 p-3 text-mainGrey flex-col flex">
        <div className="text-2xl font-bold">Комментарии</div>
        {list.map((item, index) =>{
          return <CommentItem commentar={item} key={index}/>
        })}
				<div className="self-center text-xl font-semibold text-mainWarm cursor-pointer mt-4 hover:text-oceanView duration-150" onClick={() =>{getComments()}}>Ещё...</div>
      </div>
    :
      <div className="mt-6 text-3xl text-mainGrey font-bold">Комментариев ещё нет... Станьте первым!</div>
  )
}
