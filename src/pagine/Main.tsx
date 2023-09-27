import { Outlet } from "react-router-dom"
import './../index.css'
import logo from '../assets/photo-1503023345310-bd7c1de61c7d.jpeg';
export const Main = () => {
  return (
  
    <div> 
      <div className="flex justify-evenly bg-gray-950 p-2 "> 
        <div className=" bg-gray-700 rounded-full shadow-md text-orange-500 font-bold w-10 h-10  text-xs items-center inline-flex justify-center ">Home</div>
        <div className=" bg-gray-700 rounded-full shadow-md text-orange-500 font-bold w-10 h-10  text-xs items-center inline-flex justify-center ">Back</div>
        <div className=" bg-gray-700 rounded-full shadow-md text-orange-500 font-bold w-10 h-10  text-xs items-center inline-flex justify-center ">Boh</div>
      </div>
      <Outlet />
      <div className="bg-gray-950 h-screen italic text-orange-600 text-center font-light p-2">Ricordati di bere tanta acqua!</div>
    </div>
  )
}
