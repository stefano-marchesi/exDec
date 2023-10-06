import { Outlet } from "react-router-dom"
import './../index.css'
import sfondo from '../assets/abstr01.png'
export const Main = () => {

  return (

    <div>
      <div className=""> < img src={sfondo}></img>
        <div className="flex justify-evenly p-2 ">
          <div className=" bg-gray-700 rounded-full shadow-md text-orange-500 font-bold w-10 h-10  text-xs items-center inline-flex justify-center ">Back</div>
          <div className=" bg-gray-700 rounded-full shadow-md text-orange-500 font-bold w-10 h-10  text-xs items-center inline-flex justify-center ">Home</div>
          <div className=" bg-gray-700 rounded-full shadow-md text-orange-500 font-bold w-10 h-10  text-lg items-center inline-flex justify-center font-serif ">i</div>
        </div>
      </div>
      <Outlet />
      <div className="bg-gray-950 h-screen italic text-orange-600 text-center font-light p-2">Ricordati di bere tanta acqua!</div>
    </div>
  )
}
