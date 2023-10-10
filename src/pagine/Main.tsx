import { Link, Outlet } from "react-router-dom"
import './../index.css'
import sfondo from '../assets/abstr01.png'
import { selectUtenteLoggato } from "../redux/untenteReducer"
import { useSelector } from "react-redux"
import { LoginManager } from "../components/LoginManager"
import { getAuth } from "firebase/auth"
export const Main = () => {

  const loggato = useSelector(selectUtenteLoggato)
  console.log(loggato);
  
  const logOut = ()=>{
    const auth = getAuth()
    auth.signOut()
  }


  if(loggato){
  return (
    <div>
      <div className=""> <img src={sfondo}></img>
        <div className="flex justify-evenly bg-slate-950 p-2 ">
          <Link to={'../profilo'}>
          <div className=" bg-gray-700 rounded-full shadow-md text-orange-500 font-bold w-10 h-10  text-xs items-center inline-flex justify-center ">Back</div>
          </Link>
          <Link to={'../'}>

          <div className=" bg-gray-700 rounded-full shadow-md text-orange-500 font-bold w-10 h-10  text-xs items-center inline-flex justify-center ">Home</div>
          </Link>
          <div onClick={logOut} className=" bg-gray-700 rounded-full shadow-md text-orange-500 font-bold w-10 h-10  text-lg items-center inline-flex justify-center font-serif ">i</div>
        </div>
      </div>
      <Outlet />
      <div className="bg-gray-950 h-screen italic text-orange-600 text-center font-light p-2">Ricordati di bere tanta acqua!</div>
    </div>
  )
  }else{
    return (
      <LoginManager />
    )
  }
}
