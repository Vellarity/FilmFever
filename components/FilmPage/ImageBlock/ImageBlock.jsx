import Image from "next/image"
import Poster from "./test.jpg"

export const ImageBlock = ({data}) => {
    const {name, rating, shortLetter, description, country, year, duration, age, imageID, genre, boxWRLD} = data

    return(
        <div className="flex">
            <div className="flex flex-col ">
                <Image width="220px" height="330px" className="rounded-lg" src={`/posters/${imageID}.png`} alt="where"/>
                <div className="flex flex-row justify-between mt-3">
                    <button className="py-2 rounded-md self-start px-3 font-semibold inline whitespace-nowrap bg-mainPunsh">
                        <svg className="mx-3 text-mainBlack fill-current inline-block" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 7v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10m4-6H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"/></svg>
                        <span className="inline-block text-mainBlack">Буду смотреть</span>
                    </button>
                    <button className="rounded-md self-start px-3 ml-3 bg-mainPunsh">
                        <svg className="my-3 text-mainBlack fill-current" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>
                    </button>
                </div>
                <span className={`mt-3 flex-grow w-full self-center ${rating.$numberDecimal > 5 ? (rating.$numberDecimal > 7 ? 'bg-oceanView' : 'bg-mainWarm') : 'bg-mainPunsh'}  rounded-xl text-5xl flex items-center justify-center`}>{rating.$numberDecimal}</span>    
            </div>
            <div className="flex flex-col ml-5 justify-between"> 
                <div className="flex flex-col mb-6 bg-mainWarm rounded-xl px-3 py-3 text-mainBlack">
                    <span className="text-3xl font-bold mb-1">{name}</span>
                    <span className="text-lg font-semibold">{description}</span>
                </div>
                <div className="flex flex-col w-full p-3 bg-oceanView rounded-xl">
                    <div className="flex flex-row">
                        <span className="text-2xl font-bold">О фильме</span>
                    </div>
                    <div className="flex flex-row mt-4 flex-nowrap">
                        <span className=" w-52 text-lg font-semibold">Год производства</span>
                        <span className=" text-lg">{year}</span>
                    </div>
                    <div className="flex flex-row mt-4">
                        <span className=" w-52 text-lg font-semibold">Страна</span>
                        <span className=" text-lg">{country}</span>
                    </div>
                    <div className="flex flex-row mt-4">
                        <span className=" w-52 text-lg font-semibold">Жанр</span>
                        <span className=" text-lg">{genre}</span>
                    </div>
                    <div className="flex flex-row mt-4 justify-start flex-nowrap">
                        <span className=" w-52 text-lg font-semibold">Слоган</span>
                        <span className=" text-lg">«{shortLetter}»</span>
                    </div>
                    <div className="flex flex-row mt-4">
                        <span className=" w-52 text-lg font-semibold">Сборы в мире</span>
                        <span className=" text-lg">{boxWRLD}</span>
                    </div>
                    <div className="flex flex-row mt-4">
                        <span className=" w-52 text-lg font-semibold">Длительность</span>
                        <span className=" text-lg">{duration} мин.</span>
                    </div>
                    <div className="flex flex-row mt-4">
                        <span className=" w-52 text-lg font-semibold">Возрастной рейтинг</span>
                        <span className=" text-lg">{age}+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

