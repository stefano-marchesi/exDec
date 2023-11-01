import { useState } from "react"
import { useDispatch } from "react-redux"
import { aggiungiParte } from "../redux/partiReducer"

import "./../index.css"
import { Greet } from "./greet"

export const parteDefault = {
  nome: '',
  stress: 0,
  categoria: 'Braccia',
  id: 0
}

export const AggiungiParte = () => {
  const dispatch = useDispatch()
  const [parte, cambiaParte] = useState(parteDefault)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    cambiaParte({ ...parte, nome: e.target.value })
  }
  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    cambiaParte({ ...parte, categoria: e.target.value })
  }

  const handleClick = () => {
    dispatch(aggiungiParte(parte))
    cambiaParte(parteDefault)
    toggleAperto()
  }


  const [aperto, cambiaAperto] = useState(false)
  const toggleAperto = () => { cambiaAperto(!aperto) }
  return (
    <>
<div className=" text-gray-300 ml-3 mb-5 font-bold drop-shadow-md">
<Greet name="Stefano" />
</div>

      <div className="grid grid-cols-2 bg-zinc-900/80">
        <div className=" pl-3 py-3 text-orange-500 font-bold">IL MIO ALLENAMENTO</div>
        <div className=" font-bold text-orange-500 text-right text-3xl pr-3 align-middle ">
          <button onClick={toggleAperto}>+</button>
        </div>
      </div>
      {aperto &&
        <div className="border border-gray-500 bg-gray-900 m-3">
          <div className=" text-orange-400 font-semibold text-center text-lg mt-3 flex justify-center">Quale parte del corpo vuoi allenare? </div>
          <div className="mb-3 p-3 flex flex-col align-middle justify-center items-center">
            <input className="border-2 w-2/3 border-black bg-slate-600 text-gray-300" value={parte.nome} onChange={handleNameChange} />
            <div className="flex-col grid mt-3 justify-center text-left text-orange-400" onChange={handleChangeCategory}>
              <div className=""><input type="radio" value="Braccia" name="gender" /> Braccia </div>
              <div className=""><input type="radio" value="Torso" name="gender" /> Torso </div>
              <div className=""><input type="radio" value="Gambe" name="gender" /> Gambe </div>
            </div>
            <div className="flex justify-center">
              <button className="ml-3 mt-5 w-20 pl-1 pr-1 text-center inline-block align-text-top border-2 border-black bg-orange-700 text-white font-semibold rounded-full " onClick={handleClick}>INVIA</button>
            </div>
          </div>
        </div>



      }


    </>
  )
}
