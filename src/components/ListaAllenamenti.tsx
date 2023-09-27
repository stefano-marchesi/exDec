import { useSelector } from "react-redux"
import { selectAllenamento } from "../redux/allenamentiReducer"

type ListaAllenamentiProps = {
  idParte: number
}

const formattaData = (data: Date) => {
  return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
}

export const ListaAllenamenti = (props: ListaAllenamentiProps) => {
  const allenamenti = useSelector(selectAllenamento).filter((elem) => {
    return elem.idParte === props.idParte
  })
  return (
    <div className=" bg-gray-950 ml-2">
      <div className=" text-orange-500 font-semibold text-lg text-center"> Lista allenamenti </div>
      <div className=" text-gray-400 font-normal mt-2">
        {allenamenti.map((allenamento) => {
          return (
            <div className=" pb-3">
              <div>
                intensita: {allenamento.intensita}
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
