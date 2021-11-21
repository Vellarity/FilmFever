import AVATAR  from "./users.png"
import Image from 'next/image'

export const Navbar = () => {
    return(
      <div className="flex h-16 items-center bg-mainBlack px-6">
          <div className="flex w-full justify-center">
              <span className="text-mainWhite font-bold text-3xl -ml-20">КиноДоиск</span>
              <input className="bg-mainGrey text-mainWhite outline-none placeholder-mainWhite mx-10 w-1/3 h-8 pl-3 rounded-md text-lg mt-1 mr-8" placeholder="Название фильма, сериала"/>
              <button className="text-mainWhite bg-mainGrey rounded-lg text-lg mt-1 w-24 h-8">Найти</button>
          </div>
          <Image className="mt-1 ml-auto cursor-pointer" src={AVATAR} />
      </div>
    )
}