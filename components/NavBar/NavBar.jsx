import { useContext, useRef,useState } from 'react'
import { userContext } from '../../pages/_app'
import Image from "next/image";

export const Navbar = () => {
	const [active, setActive] = useState(false)
	const {userInfo, setUserInfo} = useContext(userContext)

	const activeMenu = 'absolute z-10 opacity-100 -left-7 top-14 bg-mainWarm w-80 py-3  transition-all duration-300'
	const nonActiveMenu = 'absolute -z-10 opacity-0 -left-7 top-10 bg-mainWarm w-80 py-3  transition-all duration-300'

	return(
		<>
			<div className="h-20 bg-mainWarm px-6 z-10">
				<div className='max-w-screen-xl mx-auto flex items-center h-full justify-between'>
					<div className='flex w-full items-center'>
						<div className='relative'>
							<span className='text-4xl font-bold text-oceanView cursor-pointer select-none' onClick={() =>{active ? setActive(false) : setActive(true)}}>Film</span>
							<span className='text-4xl font-bold text-mainPunsh cursor-pointer select-none' onClick={() =>{active ? setActive(false) : setActive(true)}}>Fever</span>
							<ul className={active ? activeMenu : nonActiveMenu}>
								<li className='mb-3'><a href='/' className='text-2xl font-bold pl-3 text-mainBlack hover:text-mainPunsh'>Домой</a></li>
								<li className='mb-3'><a href='/lists/films' className='text-2xl font-bold pl-3 text-mainBlack hover:text-mainPunsh'>Фильмы</a></li>
								<li><a href='/' className='text-2xl font-bold pl-3 text-mainBlack hover:text-mainPunsh'>Сериалы</a></li>
							</ul>
						</div>
						<input className="bg-mainGrey text-mainWhite outline-none placeholder-mainWhite mx-10 mt-1 w-1/2 h-8 pl-3 rounded-md text-lg mr-8" placeholder="Название фильма, сериала"/>
						<button className="text-mainWhite bg-mainGrey rounded-lg text-lg mt-1 w-24 h-8">Найти</button>
					</div>
					<div className='w-80 flex items-center py-1 justify-center'>
						{userInfo ? 
						<>
							<span className='text-2xl text-mainBlack font-semibold mr-3'>{userInfo.userName}</span>
							<Image className='rounded-full right-3' width='60px' height='60px' src={userInfo.avatar} onClick={() =>{setUserInfo(null)}} />
						</>
						 : 
						<>
							<a href='/login' className='text-2xl font-semibold text-mainPunsh mr-2'>Вход</a>
							<span className='text-2xl font-semibold text-mainBlack'> | </span>
							<a className='text-2xl font-semibold text-oceanView ml-2'>Регистрация</a>
						</>
						}
					</div>
				</div>
			</div>
		</>
	)
}