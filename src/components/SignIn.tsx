import {  useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../firebaseConfig";
import { user } from "../types";


const defaultUser: user = {
  nome:''
}

export const SignIn = ()=>{
  const auth = getAuth();
  const [credential, changeCredential] = useState({mail:'', pass:''})
  const handleChangeMail  = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCredential({ ...credential, mail: e.target.value })
  }

  const handleChangePassword  = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCredential({ ...credential, pass: e.target.value })
  }

  const handleClick =()=>{
    createUserWithEmailAndPassword(auth, credential.mail, credential.pass).then((userCredential)=>{
      console.log(userCredential)
      let uid = userCredential.user.uid
      setDoc(doc(db, 'utenti', uid),defaultUser) 


    }).catch((err)=>{
        console.log(err)
      })
  }

  return (
    <div>sign in
      <input className="border-2 w-2/3 border-black bg-slate-600 text-gray-300" value={credential.mail} onChange={handleChangeMail} />
      <input className="border-2 w-2/3 border-black bg-slate-600 text-gray-300" value={credential.pass} onChange={handleChangePassword} />

      <button className="ml-3 mt-5 w-20 pl-1 pr-1 text-center inline-block align-text-top border-2 border-black bg-orange-700 text-white font-semibold rounded-full " onClick={handleClick}>sign in</button>
    </div>

  )
}
