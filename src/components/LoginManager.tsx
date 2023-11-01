import { useState } from "react"
import { LogIn } from "./LogIn"
import { SignIn } from "./SignIn"
export const LoginManager = () => {
  const [logIn, changeLogIn] = useState(true)
  return (
    <div className=" h-screen bg-[url('assets/bg-intro.png')] ">
      <div className="flex flex-col items-center" >
        <div className=" text-4xl font-bold text-orange-500 drop-shadow-md pb-16"><p className=" mt-32 text-center">Hey There!</p></div>
        <div className="flex flex-col items-center"><div className=" text-white"><p>Hai già un account?</p></div>
          <button className=" text-orange-400 font-bold text-lg mt-2" onClick={() => changeLogIn(true)}>LOG IN</button>

          {logIn
            ? <LogIn />
            : ''}
        </div>
        <div className="flex flex-col items-center mt-10"><div className=" text-white"><p>Sei un nuovo utente?</p></div>
          <button className=" text-orange-400 font-bold text-lg mt-2" onClick={() => changeLogIn(false)}>SIGN IN</button>
          {logIn
            ? ''
            : <SignIn />}
        </div>
      </div>
    </div>
  )
}
