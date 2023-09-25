import { Outlet } from "react-router-dom"
import './../index.css'
export const Main = () => {
  return (
    <div>
      <div className=" bg-gray-700 flex justify-evenly p-2">
        <div className=" bg-gray-900 rounded-full shadow-md text-orange-500 font-bold w-10 h-10 text-center text-xs items-center inline-flex ">Home</div>
        <div className=" bg-gray-900 rounded-full shadow-md text-orange-500 font-bold w-10 h-10 text-center text-xs items-center inline-flex ">Rome</div>
        <div className=" bg-gray-900 rounded-full shadow-md text-orange-500 font-bold w-10 h-10 text-center text-xs items-center inline-flex ">Dome</div>
      </div>
      <Outlet />
      <div className="bg-gray-100 italic text-orange-600 text-center font-bold">Ricordati di bere tanta acqua!</div>
    </div>
  )
}
