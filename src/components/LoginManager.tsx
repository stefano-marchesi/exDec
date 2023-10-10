import { useState } from "react"
import { LogIn } from "./LogIn"
import { SignIn } from "./SignIn"

export const LoginManager = ()=>{
  const [logIn, changeLogIn] = useState(true) 
  return ( 
    <div> 
      <div> 
        <button className="ml-3 mt-5 w-20 pl-1 pr-1 text-center inline-block align-text-top border-2 border-black bg-orange-700 text-white font-semibold rounded-full " onClick={()=>changeLogIn(true)}>log in</button>
        <button className="ml-3 mt-5 w-20 pl-1 pr-1 text-center inline-block align-text-top border-2 border-black bg-orange-700 text-white font-semibold rounded-full " onClick={()=>changeLogIn(false)}>sign in</button>
      </div>
      {logIn
        ? <LogIn />
        : <SignIn />}
    </div>
  )
}
