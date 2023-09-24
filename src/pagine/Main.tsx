import { Outlet } from "react-router-dom"
import './../index.css'
export const Main = ()=>{
  return (
    <div>
      <div className="bg-green-300">Main</div>
      <Outlet />
      <div className="bg-gray-100">footer</div>
    </div>
  )
}
