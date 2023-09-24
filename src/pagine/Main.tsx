import { Outlet } from "react-router-dom"
import './../index.css'
import { AggiungiParte } from "../components/AggiungiParte"
export const Main = ()=>{
  return (
    <div>
      <div className=" bg-gray-100 text-red-950 font-bold text-sm">Main - La mia App figa</div>
      <Outlet />
      <div className="bg-gray-100 italic text-orange-600 text-center font-bold">Ricordati di bere tanta acqua!</div>
    </div>
  )
}
