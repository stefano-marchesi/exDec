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
    toggleAperto()
  }

  const [aperto, cambiaAperto ] = useState(false)
  const toggleAperto = ()=>{cambiaAperto(!aperto)}
  return (

    <>

      <button onClick={toggleAperto}>+</button>
      {aperto && <div className="bg-zinc-50">
        <input className="border-2 border-cyan-300" value={parte.nome}    onChange={e => cambiaParte({nome: e.target.value})} />
        <button className="drop-shadow-md  text-center border-2 border-black" onClick={handleClick}>invia</button>
      </div>

}
          </>
  )
}
