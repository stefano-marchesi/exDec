import { Link, Outlet } from "react-router-dom"
import './../index.css'
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
      <div className="bg-[url('assets/bg-main.png')] bg-fixed">

        <div className="fixed top-0 left-0 right-0 flex justify-between pl-3 pr-3 pt-3 mb-3 ">
          <Link to={'../'}>
            <div><img src={home}></img></div>
          </Link>
          <Link to={'../profilo'}>

            <div><img src={profilo}></img></div>
          </Link>
          <div onClick={logOut}><img src={logout}></img></div>
        </div>

        <Outlet />
        
      </div>
    )
  } else {
    return (
      <LoginManager />
    )
  }
}
