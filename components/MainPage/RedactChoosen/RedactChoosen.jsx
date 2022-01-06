import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const Card = ({index}) => {
    return(
        <div className="flex flex-col items-center pb-5 mx-9 cursor-pointer">
            <Image width="220px" height="220px" className="rounded-2xl" src={`/vr/${index}.png`}/>
        </div>
    )
}

const list = [1,2,3,4,5,6,7,8]

export const RedactCarousel = () => {
	return(
		<>
			<span className='px-14 text-3xl text-mainPunsh font-bold py-3 my-3 ml-auto'>Выбор редакции</span>
			<div className='bg-oceanView rounded-2xl pt-5 filter shadow-mainSh mb-8 flex flex-wrap justify-between'>
				{list.map(item =>{
					return <Card key={item} index={item}/>
				})}
			</div>
		</>
	)
}






