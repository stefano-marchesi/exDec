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
    <div className=" ml-6 mt-5">
      <div className=" text-orange-400 font-semibold text-lg"> Lista allenamenti </div>
      <div className=" text-gray-400 font-normal mt-3">
        {allenamenti.map((allenamento) => {
          return (
            <div key={allenamento.data} className=" pb-3">
              <div>
                DATA: {formattaData(new Date(allenamento.data))}
              </div>
              <div>
                Intensità: {allenamento.intensita}
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  )


}
