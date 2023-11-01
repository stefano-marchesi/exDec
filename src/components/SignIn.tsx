import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { user } from "../types";


const defaultUser: user = {
  nome: ''
}

export const SignIn = () => {
  const auth = getAuth();
  const [credential, changeCredential] = useState({ mail: '', pass: '' })
  const handleChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCredential({ ...credential, mail: e.target.value })
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCredential({ ...credential, pass: e.target.value })
  }

  const handleClick = () => {
    createUserWithEmailAndPassword(auth, credential.mail, credential.pass).then((userCredential) => {
      console.log(userCredential)
      let uid = userCredential.user.uid
      setDoc(doc(db, 'utenti', uid), defaultUser)


    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="pt-3 ">
      <div className="flex flex-col items-center">
        <input className="border-2 border-black bg-slate-600 text-gray-300 rounded" value={credential.mail} onChange={handleChangeMail} />
        <input className="border-2 border-black bg-slate-600 text-gray-300 rounded mt-1" value={credential.pass} onChange={handleChangePassword} />

        <button className="btn-primary" onClick={handleClick}>AVANTI</button>

      </div>
    </div>

  )
}
