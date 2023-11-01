import { useState } from "react"
import { useDispatch } from "react-redux"
import { Allenamento, aggiungiAllenamento } from "../redux/allenamentiReducer"
import { aggiuntaAllenamento } from "./../redux/azioni"

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
        <div id="defaultModal" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative w-full max-w-2xl max-h-full">

            <div className="relative rounded-lg shadow bg-gray-800">

              <div className="flex items-start justify-between p-4 ">
                <h3 className="text-xl font-semibold text-gray-900">
                  Intensità
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleAperto} data-modal-hide="defaultModal">
                  <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className=" sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-3 space-y-3">
                <div className=" flex flex-col justify-self-stretch mb-10 bg-gray-800">
                  <div>
                    <div className="flex-col grid mt-3 justify-center text-left m-2 text-orange-400" onChange={handleIntensitaChange}>
                      <div className="mt-3"><input type="radio" value="10" name="gender" /> Meh </div>
                      <div className="mt-3"><input type="radio" value="30" name="gender" /> Qualcosa </div>
                      <div className="mt-3"><input type="radio" value="60" name="gender" /> Qualcosa di piu </div>
                      <div className="mt-3"><input type="radio" value="80" name="gender" /> Abbastanza </div>
                      <div className="mt-3"><input type="radio" value="100" name="gender" /> Perfetto </div>
                      <div className="mt-3"><input type="radio" value="120" name="gender" /> Troppo </div>
                    </div>
                  </div>

                  <div className=" mt-3 flex flex-col place-items-center">
                    <div className="flex flex-row">
                      <div className=" mr-4 font-bold text-lg">Data:</div>
                      <input className=" bg-slate-600 text-gray-200 pl-1"  type="date" defaultValue={new Date(allenamento.data).toISOString().substring(0, 10)} onChange={handleDataChange} />
                    </div>
                  </div>
                  <div className=" flex flex-col place-items-center mt-5" >
                    <button className="ml-3 mt-3 w-20 p-1 text-center inline-block align-text-top border-2 border-black bg-orange-700 text-gray-200 font-semibold rounded-full " onClick={handleClick}>INVIA</button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>




      }
    </>
  )
}
