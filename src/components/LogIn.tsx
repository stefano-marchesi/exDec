import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { cssBottone } from "../costantiTailwind"

export const LogIn = () => {
  const auth = getAuth()
  const [credential, changeCredential] = useState({ mail: '', pass: '' })
  const handleChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCredential({ ...credential, mail: e.target.value })
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCredential({ ...credential, pass: e.target.value })
  }

  const handleClick = () => {
    signInWithEmailAndPassword(auth, credential.mail, credential.pass).then(() => {

    }).catch((err) => {
      console.log(err);

    })
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 pt-10 pb-10 ">log in
      <div className="flex flex-col items-center">
        <input className="border-2 w-2/3 border-black bg-slate-600 text-gray-300 rounded" value={credential.mail} onChange={handleChangeMail} />
        <input className="border-2 w-2/3 border-black bg-slate-600 text-gray-300 mt-1 rounded" value={credential.pass} onChange={handleChangePassword} />

        <button className="btn-primary" onClick={handleClick}>AVANTI</button>
      </div>
    </div>

  )
}
