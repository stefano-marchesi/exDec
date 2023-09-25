
import { Link } from "react-router-dom"
import { Parte} from "../redux/partiReducer"

type DisplayParteProps = {
  parte:Parte,
  index: number
}

export const DisplayParte = (props: DisplayParteProps)=>{
  
          return (
            <div className="  ml-3 mr-3 m-2 mb-3 font-semibold text-orange-400 uppercase text-left shadow-md" key={props.index}>
              <Link to={`singolaparte/${props.index}`}>
                <div>{props.parte.nome}</div>
                <div className=" font-normal">Stress: {props.parte.stress}</div>

              </Link>
            </div>
          )
}
