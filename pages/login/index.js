

function Login(){
  return(
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-mainPunsh p-4 rounded-2xl flex-col flex w-1/4">
        <span className="text-3xl font-bold text-mainGrey mb-3">Авторизация</span>
        <span className="text-xl font-bold text-mainGrey">Username</span>
        <input className="h-11 mb-3 mt-1 pl-3 rounded-2xl text-xl focus:outline-mainWarm focus:outline-8" placeholder="Insert your username..."/>
        <span className="text-xl font-bold text-mainGrey">Password</span>
        <input className="h-11 mb-5 mt-1 pl-3 rounded-2xl text-xl focus:outline-mainWarm" placeholder="Insert your password..."/>
        <button className="self-end bg-mainWarm rounded-xl px-3 py-2 text-mainBlack text-xl font-semibold hover:text-oceanView hover:bg-mainBlack">Войти</button>
      </div> 
    </div>
  )
}

export default Login