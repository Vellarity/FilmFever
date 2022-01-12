import { FilmsList } from '../../components/FilmsPage/FilmsList/FilmsList';
import { FilmsFilter } from '../../components/FilmsPage/FilmsFilter/FilmsFilter';
import { connectDB } from '../../lib/mongodb';

export async function getStaticProps(){
  const db = await connectDB()
  let data = await db.collection('Movie').find({}).toArray()
  data = JSON.parse(JSON.stringify(data))

  return{
    props:{
      data
    }
  }
}

function Films({data}){
  return(
    <div className="max-w-screen-xl flex flex-row mx-auto h-full pt-5">
      <FilmsFilter />
      <div className='flex flex-col w-full'>
        {data ? <FilmsList list={data}/> : null}
      </div>
    </div>
  )
}
export default Films