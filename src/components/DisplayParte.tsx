
import { Link } from "react-router-dom"
import { Parte } from "../redux/partiReducer"
import speed from '../assets/speedo.png'

type DisplayParteProps = {
  parte: Parte,
}

export const DisplayParte = (props: DisplayParteProps) => {

  return (
    <div className=" flex flex-row justify-between">
      <div className="ml-6 mr-3 m-2 mb-3 font-semibold text-gray-400 uppercase text-left" >
        <Link to={`singolaparte/${props.parte.id}`}>
          <div>{props.parte.nome}</div>
          <div className=" font-normal text-gray-400 normal-case">Stress: {props.parte.stress}</div>

        </Link>
      </div>
      <div className="mr-3"><img src={speed}></img></div>
      </div>
  )
}
