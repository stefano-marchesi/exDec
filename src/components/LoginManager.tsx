import { useState } from "react"
import { LogIn } from "./LogIn"
import { SignIn } from "./SignIn"
export const LoginManager = () => {
  const [logIn, changeLogIn] = useState(true)
  return (
    <div>
      <div className=" bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 flex flex-col items-center pb-10">
        <div className=" text-4xl font-bold text-orange-500 drop-shadow-md pb-20"><p className=" mt-32 text-center">Hey There!</p></div>
        <div className="flex flex-col items-center"><div className=" text-white"><p>Hai già un account?</p></div>
          <button className="btn-primary" onClick={() => changeLogIn(true)}>LOG IN</button>

      {logIn
        ? <LogIn />
        : ''}
        </div>
        <div className="flex flex-col items-center mt-5"><div className=" text-white"><p>Sei un nuovo utente?</p></div>
          <button className="btn-primary" onClick={() => changeLogIn(false)}>SIGN IN</button>
      {logIn
        ?'' 
        : <SignIn />}
        </div>
      </div>
    </div>
  )
}
