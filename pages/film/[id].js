import { CreateComment } from "../../components/FilmPage/CreateComment/CreateComment";
import { ImageBlock } from "../../components/FilmPage/ImageBlock/ImageBlock";
const CommentsBlock = dynamic(() => import('../../components/FilmPage/CommentsBlock/CommentsBlock'))


import dynamic from 'next/dynamic'
import { connectDB } from "../../lib/mongodb";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(context){
  const {id} = context.query
  const db = await connectDB()

  let data = {}
  const film = await db.collection('Movie').findOne({id:Number(id)})

  data.film = film
  data = JSON.parse(JSON.stringify(data))

  return{
    props:{
      data
    }
  }
}

const film = ({data}) => {

  return (
    <div className="max-w-screen-xl mx-auto h-full z-0 mt-7 rounded-3xl px-20">
      <ImageBlock data={data.film}/>
      <CreateComment filmID={data.film.id}/>
      <CommentsBlock/>
    </div>
  );
};

export default film;
