import Image from "next/image";
import Cardimg from "./allah.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const Card = ({name,img,date,genre,rate}) => {
    return(
        <div className="flex flex-col items-center">
            <div className="relative">
                <Image width="140px" height="206px" className="rounded" src={Cardimg}/>
                <div className="w-7 h-4 bg-mainGreen text-mainWhite text-xs rounded font-bold text-center absolute top-1 -left-1">
                    10
                </div>
            </div>    
            <div className="text-mainBlack text-sm font-semibold py-1">Иди нахуй</div>
            <div className="text-mainGrey text-sm ">2021, хуйня</div>
        </div>
    )
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className='absolute h-11 w-11 bg-mainWhite rounded-full right-3 top-20 z-50 filter drop-shadow-3xl cursor-pointer' style={{ display: "block" }} onClick={onClick}>
			<svg className="absolute w-4 h-4 fill text-mainBlack top-1/3 ml-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.8 21.57 2.422 2.43 11.978-12-11.978-12-2.422 2.43 9.547 9.57z"/></svg>
		</div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className='absolute h-11 w-11 bg-mainWhite rounded-full left-3 top-20 z-50 filter drop-shadow-3xl cursor-pointer' style={{ display: "block" }} onClick={onClick}>
			<svg className="absolute w-4 h-4 fill text-mainBlack top-1/3 ml-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m19.2 2.43-2.422-2.43-11.978 12 11.978 12 2.422-2.43-9.547-9.57z"/></svg>
		</div>
  );
}

const list = [1,2,3,4,5,6,7,8,9,10]


export const CardsCarousel = () => {
	const settings = {
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 5,
		infinite:false,
		nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
	};
	return(
		<>
			<span className='px-14 text-3xl font-bold py-3 mb-3'>Билеты в кино</span>
      <div className='bg-mainGrey rounded-2xl pt-3 filter shadow-mainSh'>
        <Slider {...settings}>
          {list.map(item =>{
						return <Card key={item}/>
					})}
        </Slider>
      </div>
		</>
	)
}






