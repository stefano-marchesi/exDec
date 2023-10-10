import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

export const LogIn = ()=>{
  const auth = getAuth()
  const [credential, changeCredential] = useState({mail:'', pass:''})
  const handleChangeMail  = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCredential({ ...credential, mail: e.target.value })
  }

  const handleChangePassword  = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCredential({ ...credential, pass: e.target.value })
  }

const handleClick =()=>{
    signInWithEmailAndPassword(auth, credential.mail, credential.pass).then(()=>{
      
    }).catch((err)=>{
    console.log(err);
    
      })
    }

  return (
    <div>log in
            <input className="border-2 w-2/3 border-black bg-slate-600 text-gray-300" value={credential.mail} onChange={handleChangeMail} />
            <input className="border-2 w-2/3 border-black bg-slate-600 text-gray-300" value={credential.pass} onChange={handleChangePassword} />

              <button className="ml-3 mt-5 w-20 pl-1 pr-1 text-center inline-block align-text-top border-2 border-black bg-orange-700 text-white font-semibold rounded-full " onClick={handleClick}>log in</button>
    </div>
    
  )
}
