import { allenamentiPerParte} from "../redux/allenamentiReducer"

type ListaAllenamentiProps = {
  idParte: number
}

const formattaData = (data: Date) => {
  return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
}

export const ListaAllenamenti = (props: ListaAllenamentiProps) => {
  const allenamenti = allenamentiPerParte(props.idParte)
  return (
    <div className=" bg-gray-950 ml-3">
      <div className=" text-orange-500 font-semibold text-lg text-center"> Lista allenamenti </div>
      <div className=" text-gray-400 font-normal mt-3">
        {allenamenti.map((allenamento) => {
          return (
            <div key={allenamento.data} className=" pb-3">
              <div>
                Intensità: {allenamento.intensita}
              </div>
              <div>
                data: {formattaData(new Date(allenamento.data))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )


}
