import Image from "next/image";
import Img from "./allah.png"



const TableComponent = () => {
	return(
		<div className="flex flex-row items-center justify-between py-3  border-b">
			<span className="w-5 text-mainGrey">1</span>
			<Image className="rounded-sm mr-8" width="40px" height="60px" src={Img}/>
			<span className="w-48 text-blue-900 font-semibold">Иди нахуй</span>
			<span className="text-yellow-600">30 коп</span>
		</div>
	)
}


const list = [1,2,3,4,5]


export const TableRecieved = () => {
    return(
        <>
					<span className="px-14 text-2xl font-bold py-3 border-b mb-7 border-mainBlack">Кассовые сборы</span>
          <div className="flex flex-row justify-between py-3 px-14">
              <div className="flex flex-col">
                  <span className="text-lg font-bold">РАССИЯ</span>
									{list.map(item => {
										return(
											<TableComponent/>
										)
								})}	
              </div>
              <div className="flex flex-col">
                  <span className="text-lg font-bold" >ПЕНДОСЫ</span>
									{list.map(item => {
										return(
											<TableComponent/>
										)
								})}	
              </div>
              <div className="flex flex-col">
                  <span className="text-lg font-bold">ВСЕ ОСТАЛЬНЫЕ</span>
									{list.map(item => {
										return(
											<TableComponent/>
										)
								})}	
              </div>
          </div>
        </>
    )
}