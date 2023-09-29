import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { selectStoriaPerParte } from '../redux/storiaReducer';


type VisualozzaStoraProps = {
  idParte:number
}

export const VisualizzaStoria = (props:VisualozzaStoraProps)=>{
  const storia = selectStoriaPerParte(props.idParte)


  return (
    <>
      <div className=" text-orange-400 text-lg font-semibold uppercase">VISUALIZZA STORIA</div>
      <LineChart width={300} height={300} data={storia}>
        <Line type="monotone" dataKey="intensita" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="data" />
        <YAxis />
      </LineChart>
    </>
  )

}
