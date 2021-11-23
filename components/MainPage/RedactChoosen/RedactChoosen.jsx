import Image from "next/image";
import Redactimg from "./test.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const Card = ({name,img,date,genre,rate}) => {
    return(
        <div className="flex flex-col items-center w-full">
            <Image width="220px" height="220px" className="rounded" src={Redactimg}/>
        </div>
    )
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className='absolute h-11 w-11 bg-mainWhite rounded-full right-6 top-20 z-50 filter drop-shadow-3xl cursor-pointer' style={{ display: "block" }} onClick={onClick}>
			<svg className="absolute w-4 h-4 fill text-mainBlack top-1/3 ml-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.8 21.57 2.422 2.43 11.978-12-11.978-12-2.422 2.43 9.547 9.57z"/></svg>
		</div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className='absolute h-11 w-11 bg-mainWhite rounded-full left-6 top-20 z-50 filter drop-shadow-3xl cursor-pointer' style={{ display: "block" }} onClick={onClick}>
			<svg className="absolute w-4 h-4 fill text-mainBlack top-1/3 ml-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m19.2 2.43-2.422-2.43-11.978 12 11.978 12 2.422-2.43-9.547-9.57z"/></svg>
		</div>
  );
}

const list = [1,2,3,4,5,6,7,8,9,10]

export const RedactCarousel = () => {
	const settings = {
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 3,
		infinite:false,
		nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
	};
	return(
		<>
			<span className='px-14 text-3xl font-bold py-3 my-3 ml-auto'>Выбор редакции</span>
			<div className='bg-mainGrey rounded-2xl py-4 filter shadow-mainSh'>
				<Slider {...settings}>
					{list.map(item =>{
						return <Card key={item}/>
					})}
      	</Slider>
			</div>
		</>
	)
}






