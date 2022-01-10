/* import { CommentsBlock } from ""; */
import { CreateComment } from "../../components/FilmPage/CreateComment/CreateComment";
import { ImageBlock } from "../../components/FilmPage/ImageBlock/ImageBlock";
import dynamic from 'next/dynamic'
const CommentsBlock = dynamic(() => import('../../components/FilmPage/CommentsBlock/CommentsBlock'))

export async function getServerSideProps(context){
  const {id} = context.query
  const req = await fetch('http://localhost:3000/api/film/' + id)
  const data = await req.json()
  return{
    props:{
      data
    }
  }
}

const film = ({data}) => {
  return (
    <div className="max-w-screen-xl mx-auto h-full z-0 mt-7 rounded-3xl px-20 ">
      <ImageBlock data={data.film}/>
      <CreateComment filmID={data.film.id}/>
      <CommentsBlock list={data.comments}/>
    </div>
  );
};

export default film;
