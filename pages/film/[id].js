import Image from "next/image";
import { ImageBlock } from "../../components/FilmPage/ImageBlock/ImageBlock";
import { AboutBlock } from "../../components/FilmPage/AboutBlock/AboutBlock";

const film = () => {
  return (
    <div className="max-w-screen-xl flex flex-col mx-auto h-full z-0 mt-7 rounded-3xl">
      <ImageBlock></ImageBlock>
      <AboutBlock></AboutBlock>
    </div>
  );
};

export default film;
