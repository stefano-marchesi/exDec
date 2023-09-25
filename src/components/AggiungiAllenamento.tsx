import { useState } from "react"
import { Allenamento } from "../redux/allenamentiReducer"

const allenamentoDefault = (id: number)=>{
  return {
    data: (new Date()).getTime(),
    intensita: 0,
    idParte: id
  }as Allenamento
}

type AggiungiAllenamentoProps = {
  idParte:number
}

export const AggiungiAllenamento = (props : AggiungiAllenamentoProps)=>{

  const [allenamento, cambiaAllenamento] = useState(allenamentoDefault(props.idParte)) 
  return (
    <div>Aggiungi Allenamento</div>
  )
}
