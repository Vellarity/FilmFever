import Image from "next/image";
import { useState } from "react/cjs/react.development";

const TableComponent = ({item, type}) => {
	const {imageID, name, id} = item
	let box

	switch (type) {
		case 'RU':
			box = item.boxRU
		break;
		case 'USA':
			box = item.boxUSA
		break;
		case 'WRLD':
			box = item.boxWRLD
		break;
	}

	return(
		<div className="flex flex-row items-center justify-between py-3 border-b border-darkBlue">
			<Image className="rounded-sm mr-8" width="40px" height="60px" src={`/posters/${imageID}.png`}/>
			<span className="w-48 text-mainBlack font-semibold ml-3">{name}</span>
			<span className="text-mainBlack">{box.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} $</span>
		</div>
	)
}

export const TableRecieved = ({boxUSA, boxRU, boxWRLD}) => {
    return(
        <>
					<span className="px-14 text-3xl text-mainPunsh font-bold py-3 my-3">Кассовые сборы</span>
          <div className="flex flex-row justify-between">
              <div className="flex flex-col bg-oceanView rounded-2xl py-4 px-6 filter shadow-mainSh">
                  <span className="text-lg text-center font-bold">Россия</span>
									{boxRU.map(item => {
										return(
											<TableComponent key={item.id} type='RU' item={item}/>
										)
								})}	
              </div>
              <div className="flex flex-col bg-mainPunsh rounded-2xl py-4 px-6 filter shadow-mainSh">
                  <span className="text-lg text-center font-bold" >США</span>
									{boxUSA.map(item => {
										return(
											<TableComponent key={item.id} type='USA' item={item}/>
										)
								})}	
              </div>
              <div className="flex flex-col bg-mainWarm rounded-2xl py-4 px-6 filter shadow-mainSh">
                  <span className="text-lg text-center font-bold">Весь мир</span>
									{boxWRLD.map(item => {
										return(
											<TableComponent key={item.id} type='WRLD' item={item}/>
										)
								})}	
              </div>
          </div>
        </>
    )
}