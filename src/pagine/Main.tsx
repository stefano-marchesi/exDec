import { Outlet } from "react-router-dom"
import './../index.css'
export const Main = ()=>{
  return (
    <div>
      <div className="bg-green-900 text-lg text-white font-bold">Main - Il mio bel logo</div>
      <Outlet />
      <div className="bg-gray-100">footer</div>
    </div>
  )
}
