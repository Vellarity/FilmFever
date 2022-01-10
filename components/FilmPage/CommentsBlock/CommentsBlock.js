import Image from "next/image"
import { useEffect } from "react"
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

export default function CommentsBlock({list}){
  return(
    list.length > 0 ? 
      <div className="w-full bg-darkBlue rounded-xl mt-6 p-3 text-mainGrey flex-col flex">
        <div className="text-2xl font-bold">Комментарии</div>
        {list.map((item, index) =>{
          return <CommentItem commentar={item} key={index}/>
        })}
      </div>
    :
      <div className="mt-6 text-3xl text-mainGrey font-bold">Комментариев ещё нет... Станьте первым!</div>
  )
}