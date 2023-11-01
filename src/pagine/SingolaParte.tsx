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
    <div className="">
      <div className=" pl-3 bg-zinc-900/80 pt-5 mb-3 ">
        <p className=" text-orange-500 text-3xl font-semibold uppercase text-center drop-shadow-md"> {parte.nome}</p>
        <p className=" text-gray-400 text-lg text-center">Stress: {parte.stress}</p>

      

      <VisualizzaStoria idParte={Number(indexParte)} />
      </div>
      
      <div className=" text-orange-500 pl-3 pr-3 bg-zinc-900/80 pt-5 mb-3 font-bold text-lg grid grid-cols-2">
        <div className="pb-4">AGGIUNGI ALLENAMENTO</div>
        <div className=" text-right pr-2"><AggiungiAllenamento idParte={Number(indexParte)||0} /> </div>

      </div>
      <div className="flex flex-col bg-zinc-900/80">
        <ListaAllenamenti idParte={Number(indexParte)} />
      </div>
    </div>
  )
}
