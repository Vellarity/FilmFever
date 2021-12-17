import Image from "next/image";
import Redactimg from "./test.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const Card = ({name,img,date,genre,rate}) => {
    return(
        <div className="flex flex-col items-center pb-5 mx-9 cursor-pointer">
            <Image width="220px" height="220px" className="rounded" src={Redactimg}/>
        </div>
    )
}

const list = [1,2,3,4,5,6,7,8]

export const RedactCarousel = () => {
	return(
		<>
			<span className='px-14 text-3xl text-mainGrey font-bold py-3 my-3 ml-auto'>Выбор редакции</span>
			<div className='bg-mainGrey rounded-2xl pt-5 filter shadow-mainSh mb-8 flex flex-wrap justify-between'>
				{list.map(item =>{
					return <Card key={item}/>
				})}
			</div>
		</>
	)
}






