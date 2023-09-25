import { useState } from "react"
import { useDispatch } from "react-redux"
import { aggiungiParte } from "../redux/partiReducer"
import "./../index.css"

const parteDefault = {
  nome: '',
  stress:0,
  categoria: 'Braccia'
}

export const AggiungiParte = () => {
  const dispatch = useDispatch()
  const [parte, cambiaParte] = useState(parteDefault)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    cambiaParte({...parte, nome:e.target.value})
  }
  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>)=>{
    cambiaParte({...parte, categoria:e.target.value})
    console.log(e.target.value);
    
    console.log(parte);
    
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


      <div className="grid grid-cols-2 bg-gradient-to-t from-orange-800 to-orange-600 ">
        <div className=" pl-3 py-3 text-white font-bold">IL MIO ALLENAMENTO</div>
        <div className=" font-bold text-white text-right text-3xl pr-3 align-middle ">
          <button onClick={toggleAperto}>+</button>
        </div>
      </div>
      {aperto &&
        <div className="border border-black rounded-lg bg-slate-50 m-3">
          <div className=" text-orange-600 font-semibold text-center text-lg mt-3">Quale parte del corpo vuoi allenare? </div>
          <div className=" flex justify-center mb-3 p-3">
            <input className="border-2 border-black shadow-md  " value={parte.nome} onChange={handleNameChange} />
            <div onChange={handleChangeCategory}>
              <input type="radio" value="Braccia" name="gender" /> Braccia
              <input type="radio" value="Torso" name="gender" /> Torso
              <input type="radio" value="Gambe" name="gender" /> Gambe
            </div>
            <button className="ml-3 pl-1 pr-1 text-center border-2 border-black shadow-md " onClick={handleClick}>invia</button>

          </div>
        </div>



      }


    </>
  )
}
