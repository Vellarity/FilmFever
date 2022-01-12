import { CardsCarousel } from '../components/MainPage/CardsCarousel/CardsCarousel';
import { RedactCarousel } from '../components/MainPage/RedactChoosen/RedactChoosen';
import { TableRecieved } from '../components/MainPage/TableRecieved/TableRecieved';

import { connectDB } from '../lib/mongodb';

export async function getStaticProps(){
  const req = await connectDB()
  let data = {}
  const bestTop = await req.collection('Movie').find({}).sort({'rating':-1}).limit(10).toArray()
  const boxUSA = await req.collection('Movie').find().sort({'boxUSA':-1}).limit(5).toArray()
  const boxRU = await req.collection('Movie').find().sort({'boxRU':-1}).limit(5).toArray()
  const boxWRLD = await req.collection('Movie').find().sort({'boxWRLD':-1}).limit(5).toArray()

  data.bestTop = bestTop
  data.boxUSA = boxUSA
  data.boxRU = boxRU
  data.boxWRLD = boxWRLD
  data = JSON.parse(JSON.stringify(data))
  
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