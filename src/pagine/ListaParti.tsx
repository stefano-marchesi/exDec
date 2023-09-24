import { useSelector } from "react-redux"
import { selectParti } from "../redux/partiReducer"
import { AggiungiParte } from "../components/AggiungiParte"
import './../index.css'
import { Link } from "react-router-dom"


export const ListaParti = ()=>{
  const parti = useSelector(selectParti)
  console.log(parti)
  
  return (<div className="w bg-blue-300">
    <AggiungiParte />
    <div className="grid grid-cols-2 ">
    {parti.map((parte, index: number)=>{
      return (
        <div key={index}>
            
          <Link to={`singolaparte/${index}`}> {parte.nome}</Link>
          </div>
      )
    })
    }
    </div>
    </div>
  )
}
