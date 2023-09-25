import { useSelector } from "react-redux"
import { selectPartiCategorizzate } from "../redux/partiReducer"
import { AggiungiParte } from "../components/AggiungiParte"
import './../index.css'
import logo from '../assets/photo-1503023345310-bd7c1de61c7d.jpeg';
import { DisplayParte } from "../components/DisplayParte";

export const ListaParti = () => {
  const parti = useSelector(selectPartiCategorizzate)
  console.log(parti)
  const categorie = Object.keys(parti)
  return (
    <div className=" bg-slate-950 ">
      <AggiungiParte />

      {categorie.map((categoria, index) => {
        return (
          <div key={index}>
            <div className=" bg-gradient-to-t from-slate-800 to-gray-900 text-center text-orange-400 font-semibold text-lg">{categoria}</div>

            <div className="grid grid-cols-2">

              {parti[categoria].map((parte) => {
                return (<DisplayParte key={parte.id} parte={parte} />)
              })
              }
            </div>

          </div>)
      })}

      <img src={logo} />
    </div>
  )
}
