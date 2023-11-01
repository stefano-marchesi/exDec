import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { selectStoriaPerParte } from '../redux/storiaReducer';


type VisualozzaStoraProps = {
  idParte:number
}

export const VisualizzaStoria = (props:VisualozzaStoraProps)=>{
  const storia = selectStoriaPerParte(props.idParte)


  return (
    <>
      <div className=" text-orange-400 text-lg font-semibold uppercase mt-5">STORIA</div>
      <div className=' mr-5'>
      <ResponsiveContainer height={400}>
      <LineChart data={storia}>
        <Line type="monotone" dataKey="intensita" stroke="#f97316" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="data" />
        <YAxis />
      </LineChart>
      </ResponsiveContainer>
      </div>
    </>
  )

}
