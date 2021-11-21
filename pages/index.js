import Head from 'next/head'
import { Sidepanel } from '../components/MainPage/Sidepanel/Sidepanel';
import { CardsCarousel } from '../components/MainPage/CardsCarousel/CardsCarousel';
import { RedactCarousel } from '../components/MainPage/RedactChoosen/RedactChoosen';
import { TableRecieved } from '../components/MainPage/TableRecieved/TableRecieved';


export default function Home() {
  return (
    <div className="max-w-screen-xl flex flex-row mx-auto h-full">
      <Sidepanel />
      
      <div className='flex flex-col w-full'>
        <CardsCarousel/>
        <RedactCarousel/>
        <TableRecieved/>
      </div>
    </div>
  )
}
