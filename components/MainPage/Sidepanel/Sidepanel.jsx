export const Sidepanel = () => {
  return (
    <>
      <div className="flex pl-2 flex-col w-56 whitespace-nowrap text-base font-semibold border-r h-full">
        <a className="text-mainGrey rounded-lg mt-1 min-w-48 h-5 text-sm mr-3 mb-3 flex items-center pr-2" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="20" height="20" className="mr-2">
            <path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
            <path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          </svg>
          Главная
        </a>
        <a className="text-mainGrey rounded-lg mt-1 min-w-48 h-5 text-sm mr-3 mb-3 flex items-center pr-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="20" height="20" className="mr-2">
            <path d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/>
          </svg>
          <script crossorigin src="C:\Users\xard3n\Desktop\KinoDoiskXD\frontend\src\pages\MainPage\MainPage.jsx"></script>
          Онлайн-кинотеатр
        </a>
        <a className="text-mainGrey rounded-lg mt-1 min-w-48 h-5 text-sm mr-3 mb-3 flex items-center pr-2" to="/films">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000" className="fill-current text-mainGrey mr-2">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z" />
          </svg>
          Фильмы
        </a>
        <a className="text-mainGrey rounded-lg mt-1 min-w-48 h-5 text-sm mr-3 mb-3 flex items-center pr-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000" className="fill-current text-mainGrey mr-2">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z" />
          </svg>
          Сериалы
        </a>
        <a className="text-mainGrey rounded-lg mt-1 min-w-48 h-5 text-sm mr-3 mb-3 flex items-center pr-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="20" height="20" className="mr-2">
            <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M366.05 146a46.7 46.7 0 01-2.42-63.42 3.87 3.87 0 00-.22-5.26l-44.13-44.18a3.89 3.89 0 00-5.5 0l-70.34 70.34a23.62 23.62 0 00-5.71 9.24h0a23.66 23.66 0 01-14.95 15h0a23.7 23.7 0 00-9.25 5.71L33.14 313.78a3.89 3.89 0 000 5.5l44.13 44.13a3.87 3.87 0 005.26.22 46.69 46.69 0 0165.84 65.84 3.87 3.87 0 00.22 5.26l44.13 44.13a3.89 3.89 0 005.5 0l180.4-180.39a23.7 23.7 0 005.71-9.25h0a23.66 23.66 0 0114.95-15h0a23.62 23.62 0 009.24-5.71l70.34-70.34a3.89 3.89 0 000-5.5l-44.13-44.13a3.87 3.87 0 00-5.26-.22 46.7 46.7 0 01-63.42-2.32z"/>
            <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" d="M250.5 140.44l-16.51-16.51M294.52 184.46l-11.01-11M338.54 228.49l-11-11.01M388.07 278.01l-16.51-16.51"/>
          </svg>
          Билеты в кино
        </a>
        <a className="text-mainGrey rounded-lg mt-1 min-w-48 h-5 text-sm mr-3 mb-3 flex items-center pr-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="20" height="20" className="mr-2">
            <path d="M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/>
            <path d="M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M240 128h64M240 192h64M112 256h192M112 320h192M112 384h192"/>
            <path d="M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z" />
          </svg>
          Медиа
        </a>
      </div>
    </>
  );
};
