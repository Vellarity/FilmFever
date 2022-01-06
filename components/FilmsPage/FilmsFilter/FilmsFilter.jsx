export const FilmsFilter = () => {
  return (
    <div className="flex pl-2 bg-oceanView flex-col rounded-2xl w-72 whitespace-nowrap text-xl h-full mr-7">
        <div className="relative flex flex-col pb-4">
            <span className="pb-3">Страны</span>
            <span>ДРОПДАВМЕНЮ</span>
        </div>
        <div className="relative flex flex-col pb-4">
            <span className="pb-3">Жанры</span>
            <span>ДРОПДАВМЕНЮ</span>
        </div>
        <div className="relative flex flex-col pb-4">
            <span className="pb-3">Годы</span>
            <span>ДРОПДАВМЕНЮ</span>
        </div>
    </div>
  );
};