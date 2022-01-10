import { FilmsList } from '../../components/FilmsPage/FilmsList/FilmsList';
import { FilmsFilter } from '../../components/FilmsPage/FilmsFilter/FilmsFilter';
import axios from 'axios';

export async function getStaticProps(){
  const res = await fetch('http://localhost:3000/api/films')
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

function Films({data}){
  return(
    <div className="max-w-screen-xl flex flex-row mx-auto h-full pt-5">
      <FilmsFilter />
      <div className='flex flex-col w-full'>
        <FilmsList list={data}/>
      </div>
    </div>
  )
}
export default Films