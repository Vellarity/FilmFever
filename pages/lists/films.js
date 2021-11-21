import { FilmsList } from '../../components/FilmsPage/FilmsList/FilmsList';
import { FilmsFilter } from '../../components/FilmsPage/FilmsFilter/FilmsFilter';

const Films = () =>{
  return(
    <div className="max-w-screen-xl flex flex-row mx-auto h-full">
      {/* <Sidepanel /> */}
      <FilmsFilter />
      
      <div className='flex flex-col w-full'>
        <FilmsList />
      </div>
    </div>
  )
}

export default Films