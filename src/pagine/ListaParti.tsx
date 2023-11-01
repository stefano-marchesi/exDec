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
    <div className=" ">
      <AggiungiParte />

      {categorie.map((categoria, index) => {
        return (
          <div key={index}>
            <div className=" text-orange-400 p-3 uppercase text-lg font-bold">{categoria}</div>

            <div className="">

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
