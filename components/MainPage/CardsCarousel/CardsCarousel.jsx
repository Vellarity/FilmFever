import Image from "next/image";
import Cardimg from "./allah.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const Card = ({name,img,date,genre,rate}) => {
    return(
        <div className="flex flex-col items-center mx-9">
            <div className="relative">
                <Image width="160px" height="240px" className="rounded" src={Cardimg}/>
                <div className="w-7 h-4 bg-mainSand text-accentSand text-xs rounded font-bold text-center absolute top-2 -left-1">
                    10
                </div>
            </div>    
            <div className="text-mainBlack text-sm font-semibold py-1">Иди нахуй</div>
            <div className="text-mainGrey text-sm ">2021, хуйня</div>
        </div>
    )
}

const list = [1,2,3,4,5,6,7,8,9,10]

export const CardsCarousel = () => {
	return(
		<>
			<span className='px-14 text-3xl font-bold py-3 mb-3 text-mainGrey'>Билеты в кино</span>
      <div className='bg-mainGrey rounded-2xl pt-5 filter shadow-mainSh flex flex-wrap justify-between mb-8'>
        {list.map(item =>{
          return <Card key={item}/>
        })}
      </div>
		</>
	)
}






