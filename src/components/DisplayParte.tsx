
import { Link } from "react-router-dom"
import { Parte} from "../redux/partiReducer"

type DisplayParteProps = {
  parte:Parte,
}

export const DisplayParte = (props: DisplayParteProps)=>{
  
          return (
            <div className=" bg-slate-50 border border-orange-600 rounded-lg ml-3 mr-3 m-2 font-semibold text-slate-900 uppercase text-center shadow-md" >
              <Link to={`singolaparte/${props.parte.id}`}>
                <div>{props.parte.nome}</div>
                <div>Stress: {props.parte.stress}</div>

              </Link>
            </div>
          )
}
