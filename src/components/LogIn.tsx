import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

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
    <div className="pt-3 ">
      <div className="flex flex-col items-center">
        <input className="border-2 border-black bg-slate-600 text-gray-300 rounded" value={credential.mail} onChange={handleChangeMail} />
        <input className="border-2 border-black bg-slate-600 text-gray-300 mt-3 rounded" value={credential.pass} onChange={handleChangePassword} />

        <button className="btn-primary mt-3" onClick={handleClick}>AVANTI</button>
      </div>
    </div>

  )
}
