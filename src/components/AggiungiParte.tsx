import { useState } from "react"
import { useDispatch } from "react-redux"
import { aggiungiParte } from "../redux/partiReducer"
import "./../index.css"

const parteDefault = {
  nome:''
}

export const AggiungiParte = ()=>{
  const dispatch = useDispatch()
  const [parte, cambiaParte] = useState(parteDefault)
  const handleClick = ()=>{
    dispatch(aggiungiParte(parte))
    cambiaParte(parteDefault)
  }
  return (
    <div className="bg-zinc-50">
      <div className="bg-pink-600">qui aggiungi un nuovo elemento </div>
      <input className="border-2 border-cyan-300" value={parte.nome}    onChange={e => cambiaParte({nome: e.target.value})} />
      <button className="drop-shadow-md  text-center border-2 border-black" onClick={handleClick}>invia</button>
    </div>
  )
}
