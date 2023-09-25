import { useParams } from "react-router-dom"
import { selectParti } from "../redux/partiReducer"
import { useSelector } from "react-redux"
import { parteDefault } from "../components/AggiungiParte";
import { AggiungiAllenamento } from "../components/AggiungiAllenamento";

type MyParams = {
  indexParte: string;
}

export const SingolaParte = ()=>{
  const {indexParte} = useParams<MyParams>()

  const parte = useSelector(selectParti)
    .find((elem)=>{return elem.id === Number(indexParte||0)})|| parteDefault

  return (
    <div>
      <div>
        <p>Parte</p>
        <p>Nome :{parte.nome}</p>
        <p>Stress: {parte.stress}</p>

      </div>

      <div>
        <p>Allenamenti</p>
        <AggiungiAllenamento idParte={Number(indexParte)}/>
      </div>
    </div>
  )
}
