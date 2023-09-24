import { Outlet } from "react-router-dom"
import './../index.css'
import { AggiungiParte } from "../components/AggiungiParte"
export const Main = ()=>{
  return (
    <div>
      <div className="bg-green-900 text-lg text-white font-bold">Main - La mia App figa</div>
      <Outlet />
      <div className="bg-gray-100">footer</div>
    </div>
  )
}
