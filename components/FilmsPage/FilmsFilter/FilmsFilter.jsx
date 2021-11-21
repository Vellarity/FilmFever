export const FilmsFilter = () => {
  return (
    <div className="flex pl-2 flex-col w-56 whitespace-nowrap text-xl h-fulll">
        <div className="FilmsPage__FilmsFilter__container relative flex flex-col pb-4">
            <span className="pb-3">Страны</span>
            <span>ДРОПДАВМЕНЮ</span>
        </div>
        <div className="FilmsPage__FilmsFilter__container relative flex flex-col pb-4">
            <span className="pb-3">Жанры</span>
            <span>ДРОПДАВМЕНЮ</span>
        </div>
        <div className="FilmsPage__FilmsFilter__container relative flex flex-col pb-4">
            <span className="pb-3">Годы</span>
            <span>ДРОПДАВМЕНЮ</span>
        </div>

        <style jsx>{`
          .FilmsPage__FilmsFilter__container::after{
            content: "";
            display: block;
            background: rgba(0,0,0,.08);
            position: absolute;
            height: 1px;
            width: 100%;
            bottom: 0;
            -webkit-transition: opacity .15s ease-out;
            transition: opacity .15s ease-out;
          }
        `}</style>
    </div>
  );
};