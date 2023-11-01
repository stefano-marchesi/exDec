import { useState } from "react"
import { useDispatch } from "react-redux"
import {  aggiungiAllenamento } from "../redux/allenamentiReducer"
import { aggiuntaAllenamento } from "./../redux/azioni"
import { Allenamento } from "../types"
import { syncAllenamenti } from "../connection/allenamentiWatcher"

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
    syncAllenamenti()
    toggleAperto()
  }

  return (
    <>

      <button className="font-semibold text-3xl text-top" onClick={toggleAperto}>+</button>
      {aperto &&
        <div id="defaultModal" aria-hidden="true" className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-md z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] ">
          <div className="absolute inset-0 flex justify-center items-center max-h-full ">

            <div className="relative rounded-lg shadow bg-zinc-900 border-2 border-black pl-5 pr-5 w-full m-3 max-w-md">

              <div className="flex items-start justify-between pt-10 ">
                <h3 className="text-xl font-semibold text-orange-400 uppercase">
                  Intensità
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleAperto} data-modal-hide="defaultModal">
                  <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className=" sr-only">Close modal</span>
                </button>
              </div>

              <div className=" pb-3 space-y-3">
                <div className=" flex flex-col justify-self-stretch mb-5 text-base">
                  <div>
                    <div className="flex-col grid justify-center text-left m-2 text-orange-400" onChange={handleIntensitaChange}>
                      <div className="mt-3"><input type="radio" value="10" name="gender" /> Meh </div>
                      <div className="mt-3"><input type="radio" value="30" name="gender" /> Qualcosa </div>
                      <div className="mt-3"><input type="radio" value="60" name="gender" /> Qualcosa di più </div>
                      <div className="mt-3"><input type="radio" value="80" name="gender" /> Abbastanza </div>
                      <div className="mt-3"><input type="radio" value="100" name="gender" /> Perfetto </div>
                      <div className="mt-3"><input type="radio" value="120" name="gender" /> Troppo </div>
                    </div>
                  </div>

                  <div className=" mt-5 flex flex-col place-items-center">
                    <div className="flex flex-row">
                      <div className=" mr-4 text-lg text-gray-400 ">Data:</div>
                      <input className=" bg-slate-600 text-gray-200 pl-1"  type="date" defaultValue={new Date(allenamento.data).toISOString().substring(0, 10)} onChange={handleDataChange} />
                    </div>
                  </div>
                  <div className=" flex flex-col place-items-center mt-5" >
                    <button className="btn-primary" onClick={handleClick}>INVIA</button>
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
