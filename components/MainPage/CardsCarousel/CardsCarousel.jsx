import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const Card = ({item}) => {
  const {name, genre, rating, imageID, year, id} = item

  return(
    <a className="flex flex-col items-center mx-9 mb-3 w-40 no-underline" href={`/film/${id}`}>
      <div className="relative">
        <Image width="160px" height="240px" className="rounded" src={`/posters/${imageID}.png`}/>
        <div className="w-7 h-4 bg-mainPunsh text-mainGrey text-xs rounded font-bold text-center absolute top-2 -left-1">
          {rating.$numberDecimal}
        </div>
      </div>    
      <div className="text-mainBlack text-sm font-semibold py-1 whitespace-normal text-center">{name}</div>
      <div className="text-mainBlack text-bt">{year}, {genre.split(',')[0]}</div>
    </a>
  )
}

export const CardsCarousel = ({list}) => {
	return(
		<>
			<span className='px-14 text-3xl font-bold py-3 mb-3 text-mainPunsh'>Лучшее из лучшего</span>
      <div className='bg-oceanView rounded-2xl py-5 filter shadow-mainSh flex flex-wrap justify-between mb-8'>
        {list.map(item =>{
          return <Card key={item.id} item={item}/>
        })}
      </div>
		</>
	)
}






