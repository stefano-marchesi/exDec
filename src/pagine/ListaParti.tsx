import { useSelector } from "react-redux"
import {  selectParti } from "../redux/partiReducer"
import { AggiungiParte } from "../components/AggiungiParte"
import './../index.css'
import logo from '../assets/photo-1503023345310-bd7c1de61c7d.jpeg';
import { DisplayParte } from "../components/DisplayParte";

export const ListaParti = () => {
  const parti = useSelector(selectParti)
  console.log(parti)

  return (
    <div className=" bg-gradient-to-t from-slate-500 to-slate-900 ">
      <AggiungiParte />
      <div className="grid grid-cols-2">
        {parti.map((parte, index: number) => {
          return ( <DisplayParte parte={parte} index={index} />)
        })
        }
      </div>
      <img src={logo} />
    </div>
  )
}
