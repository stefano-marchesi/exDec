import { useParams } from "react-router-dom"
import { selectParti } from "../redux/partiReducer"
import { useSelector } from "react-redux"
import { parteDefault } from "../components/AggiungiParte";
import { AggiungiAllenamento } from "../components/AggiungiAllenamento";
import { ListaAllenamenti } from "../components/ListaAllenamenti";
import { VisualizzaStoria } from "../components/VisualizzaStoria";

type MyParams = {
  indexParte: string;
}

export const SingolaParte = () => {
  const { indexParte } = useParams<MyParams>()

  const parte = useSelector(selectParti)
    .find((elem) => { return elem.id === Number(indexParte || 0) }) || parteDefault

  return (
    <div className="bg-gray-950 pt-5">
      <div className=" ml-3">
        <p className=" text-gray-400">Parte</p>
        <p className=" text-orange-400 text-lg font-semibold uppercase"> {parte.nome}</p>
        <p className=" text-orange-600">Stress: {parte.stress}</p>

      </div>

      <VisualizzaStoria idParte={Number(indexParte)} />
      <div className=" text-gray-400 ml-3 mr-3 grid grid-cols-2">
        <div className="pb-4"> <p> Aggiungi allenamento </p> </div>
        <div className=" text-right pr-2"><AggiungiAllenamento idParte={Number(indexParte)||0} /> </div>

      </div>
      <div className="flex flex-col">
        <ListaAllenamenti idParte={Number(indexParte)} />
      </div>
    </div>
  )
}
