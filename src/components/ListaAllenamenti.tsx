import { useSelector } from "react-redux"
import { selectAllenamento } from "../redux/allenamentiReducer"

type ListaAllenamentiProps = {
  idParte:number
}

const formattaData = (data : Date)=>{
  return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
}

export const ListaAllenamenti = (props : ListaAllenamentiProps)=>{
  const allenamenti = useSelector(selectAllenamento).filter((elem)=>{
    return elem.idParte===props.idParte
  })
  return(
    <div>
     <div> Lista allenamenti </div> 
      <div>
        {allenamenti.map((allenamento)=>{
          return (
            <div>
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
