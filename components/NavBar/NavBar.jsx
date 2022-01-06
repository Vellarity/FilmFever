import { useRef,useState } from 'react'


export const Navbar = () => {
	const dropDownMenu = useRef(null)
	const [active, setActive] = useState(false)



	const handleMenu = (event) =>{
		if (!active){
			dropDownMenu.current.style.transform=`translateX(0px)`
			/* dropDownMenu.current.style.opacity='1' */
			setTimeout(() => setActive(true),170)
		} else {
			/* dropDownMenu.current.style.opacity='0' */
			dropDownMenu.current.style.transform='translateX(-400px)'
			setActive(false)
		}
	}

	return(
		<div className="h-20 bg-mainWarm px-6 z-50">
			<div className='max-w-screen-xl mx-auto flex items-center h-full justify-between'>
				<div className='flex w-1/2 items-center'>
					<span className='text-4xl font-bold text-oceanView'>Film</span><span className='text-4xl font-bold text-mainPunsh'>Fever</span>
					<input className="bg-mainGrey text-mainWhite outline-none placeholder-mainWhite mx-10 mt-1 w-1/2 h-8 pl-3 rounded-md text-lg mr-8" placeholder="Название фильма, сериала"/>
					<button className="text-mainWhite bg-mainGrey rounded-lg text-lg mt-1 w-24 h-8">Найти</button>
				</div>

				<div className='flex items-center justify-end w-48 ml-14 h-12 rounded-r-2xl'>
					<a href='/'>
						<svg className='cursor-pointer mr-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="36px" height="36px">
							<path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke='#FCFCFC' stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
							<path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke='#FCFCFC' stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
						</svg>
					</a>

					<a href='/lists/films'>
						<svg className='cursor-pointer mr-5' xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill='#FCFCFC'>
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path d="M5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z" />
						</svg>
					</a>

					<a href='/'>
						<svg className='cursor-pointer mr-5' xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill='#FCFCFC'>
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z" />
						</svg>
					</a>
				</div>
			</div>

		</div>
	)
}