import { useSelector } from "react-redux"
import { selectPartiCategorizzate } from "../redux/partiReducer"
import { AggiungiParte } from "../components/AggiungiParte"
import './../index.css'

import { DisplayParte } from "../components/DisplayParte";

export const ListaParti = () => {
  const parti = useSelector(selectPartiCategorizzate)
  console.log(parti)
  const categorie = Object.keys(parti)
  return (
    <div className=" ">
      <AggiungiParte />

      {categorie.map((categoria, index) => {
        return (
          <div key={index}>
            <div className=" text-orange-400 pl-3 pt-3 uppercase text-lg font-bold bg-zinc-900/80 mt-3">{categoria}</div>

            <div className="">

              {parti[categoria].map((parte) => {
                return (<DisplayParte key={parte.id} parte={parte} />)
              })
              }
            </div>

          </div>)
      })}

      
    </div>
  )
}
