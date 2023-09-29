import { useState } from "react"
import { useDispatch } from "react-redux"
import { Allenamento, aggiungiAllenamento } from "../redux/allenamentiReducer"
import { aggiuntaAllenamento} from "./../redux/azioni"

const allenamentoDefault = (id: number) => {
  return {
    data: (new Date()).getTime(),
    intensita: 0,
    idParte: id
  } as Allenamento
}

type AggiungiAllenamentoProps = {
  idParte: number
}

export const AggiungiAllenamento = (props: AggiungiAllenamentoProps) => {

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
    aggiuntaAllenamento(props.idParte)
    toggleAperto()
  }

  return (
    <>

      <button className="font-semibold text-xl w-10 h-10 text-right items-center align-text-top inline-flex justify-center rounded-full bg-gray-800 " onClick={toggleAperto}>+</button>
      {aperto &&
        <div className=" flex flex-col justify-self-stretch mb-10 bg-rose-400">
          <div>
            <div>Intensità</div>
            <div className="flex-col grid mt-3 justify-items-center m-2 text-orange-400" onChange={handleIntensitaChange}>
              <div className=""><input type="radio" value="10" name="gender" /> Meh </div>
              <div className=""><input type="radio" value="30" name="gender" /> Qualcosa </div>
              <div className=""><input type="radio" value="60" name="gender" /> Qualcosa di piu </div>
              <div className=""><input type="radio" value="80" name="gender" /> abbastanza </div>
              <div className=""><input type="radio" value="100" name="gender" /> Perfetto </div>
              <div className=""><input type="radio" value="120" name="gender" /> troppo </div>
            </div>
          </div>

          <div>
            <div>Data</div>
            <input className=" bg-slate-500 text-gray-300" type="date" defaultValue={new Date(allenamento.data).toISOString().substring(0, 10)} onChange={handleDataChange} />
          </div>

          <button className="ml-3 mt-3 w-20 p-1 text-center inline-block align-text-top border-2 border-black bg-orange-700 text-gray-200 font-semibold rounded-full " onClick={handleClick}>INVIA</button>
        </div>

      }
    </>
  )
}
