import Image from "next/image"
import { useState } from "react"

const FilmItem = ({item, index}) => {
    const {name, imageID, year, genre, rating, id} = item
    const [color, setColor] = useState(setRandom())

    function setRandom(){
        let colors = ['bg-oceanView', 'bg-mainWarm','bg-darkBlue']
        let color = Math.round(Math.random() * 2);
        return colors[color]
    }

    return(
        <div className={`flex px-10 py-4 items-start relative rounded-lg ${color} my-2 cursor-pointer items-center`}>
            <div className="text-black text-xl font-bold py-1 mr-10">{index + 1}</div>
            <div className="relative">
                <Image width="92px" height="140px" className="rounded" src={`/posters/${imageID}.png`}/>
            </div>
            <div className="flex w-full items-center">
                <div className="flex flex-col px-3">
                    <div className="text-black text-xl font-semibold py-1">{name}</div>
                    <div className="text-black text-lg ">{year}, {genre.split(',')[0]}</div>
                </div>
                <div className="ml-auto font-semibold pt-1 mr-24">{rating.$numberDecimal}</div>  
                <button className="py-2 bg-mainPunsh rounded-md px-3 font-semibold inline whitespace-nowrap">
                        <svg className="mx-3 text-black fill-current inline-block" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 7v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10m4-6H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"/></svg>
                        <span className="inline-block">Буду смотреть</span>
                </button>
                <button className="bg-mainPunsh rounded-md px-3 ml-3">
                        <svg className="my-3 text-black fill-current" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>
                </button>
                <button className="ml-3 bg-mainPunsh rounded-md px-3 ">
                        <svg className="my-3 text-black fill-current" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                </button>
            </div>
        </div>
    )
}

export const FilmsList= ({list}) => {

    return(
        <div className="flex flex-col bg-mainPunsh p-3 rounded-2xl">
            {list.map((item, index) =>{
                return <FilmItem item={item} index={index} key={index}/>
            })}
        </div>
    )
}