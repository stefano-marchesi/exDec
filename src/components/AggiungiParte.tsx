import { useState } from "react"
import { useDispatch } from "react-redux"
import { aggiungiParte } from "../redux/partiReducer"
import "./../index.css"

const parteDefault = {
  nome: '',
  stress: 0,
  categoria: 'Braccia'
}

export const AggiungiParte = () => {
  const dispatch = useDispatch()
  const [parte, cambiaParte] = useState(parteDefault)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    cambiaParte({ ...parte, nome: e.target.value })
  }
  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    cambiaParte({ ...parte, categoria: e.target.value })
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
        <div className="border border-gray-500 rounded-lg bg-gray-800 m-3">
          <div className=" text-orange-400 font-semibold text-center text-lg mt-3 flex justify-center">Quale parte del corpo vuoi allenare? </div>
          <div className="mb-3 p-3 flex flex-col align-middle">
            <input className="border-2 border-black bg-slate-400 flex justify-center" value={parte.nome} onChange={handleNameChange} />
            <div className="flex-col grid mt-3 justify-items-center m-2 text-orange-400" onChange={handleChangeCategory}>
              <div className=""><input type="radio" value="Braccia" name="gender" /> Braccia </div>
              <div className=""><input type="radio" value="Torso" name="gender" /> Torso </div>
              <div className=""><input type="radio" value="Gambe" name="gender" /> Gambe </div>
            </div>
            <div className="flex justify-center">
            <button className="ml-3 mt-3 w-20 pl-1 pr-1 text-center inline-block align-text-top border-2 border-black bg-orange-700 text-white font-semibold rounded-full " onClick={handleClick}>INVIA</button>
            </div>
          </div>
        </div>



      }


    </>
  )
}
