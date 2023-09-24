import { useState } from "react"
import { useDispatch } from "react-redux"
import { aggiungiParte } from "../redux/partiReducer"
import "./../index.css"

const parteDefault = {
  nome: ''
}

export const AggiungiParte = () => {
  const dispatch = useDispatch()
  const [parte, cambiaParte] = useState(parteDefault)
  const handleClick = () => {
    dispatch(aggiungiParte(parte))
    cambiaParte(parteDefault)
  }
  return (
    <div className="">
      <div className="bg-pink-600">qui aggiungi un nuovo elemento </div>
      <div className="border-2 border-dotted rounded-lg border-cyan-800 m-4 p-3">
        <input className="border-2 border-cyan-300" value={parte.nome} onChange={e => cambiaParte({ nome: e.target.value })} />
        <button className="drop-shadow-md ml-3 pl-1 pr-1 text-center border-2 border-black" onClick={handleClick}>invia</button>
        <div className="box-border w-5 h-5 bg-red-500"></div>
      </div>
    </div>
  )
}
