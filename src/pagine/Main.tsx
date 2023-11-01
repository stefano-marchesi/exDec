import { Link, Outlet } from "react-router-dom"
import './../index.css'
import sfondo from '../assets/abstr01.png'
import profilo from '../assets/icon_profile.png'
import home from '../assets/icon_back.png'
import logout from '../assets/icon _logout_.png'
import { selectUtenteLoggato } from "../redux/untenteReducer"
import { useSelector } from "react-redux"
import { LoginManager } from "../components/LoginManager"
import { getAuth } from "firebase/auth"
export const Main = () => {

  const loggato = useSelector(selectUtenteLoggato)
  console.log(loggato);

  const logOut = () => {
    const auth = getAuth()
    auth.signOut()
  }


  if (loggato) {
    return (
      <div className="bg-gradient-to-r from-slate-700 via-gray-800 to-orange-500">
        <div className=""> <img src={sfondo}></img>
          <div className="flex justify-between  p-5 ">
            <Link to={'../'}>
              <div className="shadow-md"><img src={home}></img></div>
            </Link>
            <Link to={'../profilo'}>

              <div className="shadow-md"><img src={profilo}></img></div>
            </Link>
            <div onClick={logOut} className="shadow-lg"><img src={logout}></img></div>
          </div>
        </div>
        <Outlet />
        <div className="bg-gray-950 h-screen italic text-orange-600 text-center font-light p-2">Ricordati di bere tanta acqua!</div>
      </div>
    )
  } else {
    return (
      <LoginManager />
    )
  }
}
