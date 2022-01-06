import { GetStaticProps } from 'next';
import Head from 'next/head'
import { CardsCarousel } from '../components/MainPage/CardsCarousel/CardsCarousel';
import { RedactCarousel } from '../components/MainPage/RedactChoosen/RedactChoosen';
import { TableRecieved } from '../components/MainPage/TableRecieved/TableRecieved';

export async function getStaticProps(){
  const res = await fetch('http://localhost:3000/api/main')
  const data = await res.json()
  if (!data) {
    return {
      redirect: {
        destination: '/api/main',
        permanent: false,
      },
    }
  }
  return{
    props:{
      data
    }
  }
}

function Home({data}) {

  return (
    <div className="max-w-screen-xl flex flex-row mx-auto h-full z-0 mt-7 rounded-3xl">
      
      <div className='flex flex-col w-full'>
        <CardsCarousel list={data.bestTop}/>
        <RedactCarousel/>
        <TableRecieved boxRU={data.boxRU} boxUSA={data.boxUSA} boxWRLD={data.boxWRLD}/>
      </div>
    </div>
  )
}

export default Home