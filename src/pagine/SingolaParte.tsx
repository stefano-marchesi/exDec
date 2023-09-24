import { useParams } from "react-router-dom"
import { selectParti } from "../redux/partiReducer"
import { useSelector } from "react-redux"

type MyParams = {
    indexParte: string;
}

export const SingolaParte = ()=>{
  const {indexParte} = useParams<MyParams>()

  const parte = useSelector(selectParti)[parseInt(indexParte|| '0')]
  console.log(parte);

  return (
    <div>singola Parte {indexParte}
      {parte.nome}
    </div>
  )
}
