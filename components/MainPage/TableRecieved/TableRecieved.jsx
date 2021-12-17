import Image from "next/image";
import Img from "./allah.png"



const TableComponent = () => {
	return(
		<div className="flex flex-row items-center justify-between py-3  border-b">
			<span className="w-5 text-mainGrey">1</span>
			<Image className="rounded-sm mr-8" width="40px" height="60px" src={Img}/>
			<span className="w-48 text-blue-900 font-semibold ml-3">Иди нахуй</span>
			<span className="text-yellow-600">30 коп</span>
		</div>
	)
}


const list = [1,2,3,4,5]


export const TableRecieved = () => {
    return(
        <>
					<span className="px-14 text-3xl text-mainGrey font-bold py-3 my-3">Кассовые сборы</span>
          <div className="flex flex-row justify-between">
              <div className="flex flex-col bg-mainGrey rounded-2xl py-4 px-6 filter shadow-mainSh">
                  <span className="text-lg text-center font-bold">Россия</span>
									{list.map(item => {
										return(
											<TableComponent key={item}/>
										)
								})}	
              </div>
              <div className="flex flex-col bg-mainGrey rounded-2xl py-4 px-6 filter shadow-mainSh">
                  <span className="text-lg text-center font-bold" >США</span>
									{list.map(item => {
										return(
											<TableComponent key={item}/>
										)
								})}	
              </div>
              <div className="flex flex-col bg-mainGrey rounded-2xl py-4 px-6 filter shadow-mainSh">
                  <span className="text-lg text-center font-bold">Весь мир</span>
									{list.map(item => {
										return(
											<TableComponent key={item}/>
										)
								})}	
              </div>
          </div>
        </>
    )
}