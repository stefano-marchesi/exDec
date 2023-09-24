import { useSelector } from "react-redux"
import { selectParti } from "../redux/partiReducer"
import { AggiungiParte } from "../components/AggiungiParte"
import './../index.css'
import { Link } from "react-router-dom"


export const ListaParti = () => {
  const parti = useSelector(selectParti)
  console.log(parti)

  return (
    <div className="bg-green-500">
      <AggiungiParte />
      <div className="grid grid-cols-2">
        {parti.map((parte, index: number) => {
          return (
            <div className="bg-white rounded-lg ml-3 mr-3 m-2 font-semibold text-center" key={index}>

              <Link to={`singolaparte/${index}`}> {parte.nome}</Link>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}
