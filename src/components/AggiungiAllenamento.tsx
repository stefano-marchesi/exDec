import { useState } from "react"
import { useDispatch } from "react-redux"
import { Allenamento, aggiungiAllenamento } from "../redux/allenamentiReducer"

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

  const dispatch = useDispatch()
  const [allenamento, cambiaAllenamento] = useState(allenamentoDefault(props.idParte)) 

  const [aperto, cambiaAperto] = useState(false)
  const toggleAperto = () => { cambiaAperto(!aperto) }


  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    cambiaAllenamento({ ...allenamento, data: new Date(e.target.value).getTime() })
  }

  const handleIntensitaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    cambiaAllenamento({ ...allenamento, intensita: Number(e.target.value) })
  }


  const handleClick = () => {
    dispatch(aggiungiAllenamento(allenamento))
    cambiaAllenamento(allenamentoDefault(props.idParte))
    toggleAperto()
  }

  return (
    <>

      <button onClick={toggleAperto}>+</button>
      {aperto && 
        <div>
          <div>
            <div>Intensita</div>
            <input type="number" defaultValue={allenamento.intensita} onChange={handleIntensitaChange} />
          </div>

          <div>
            <div>Data</div>
            <input type="date" defaultValue={new Date(allenamento.data).toISOString().substring(0,10)} onChange={handleDataChange}/>
          </div>

          <button className="ml-3 mt-3 w-20 pl-1 pr-1 text-center inline-block align-text-top border-2 border-black bg-orange-700 text-white font-semibold rounded-full " onClick={handleClick}>INVIA</button>
        </div>

      }
    </>
  )
}
