type GreetProps = {
  name: string
}


export const Greet = (props : GreetProps)=>{
  return (
    <div>
      <p className=" text-lg">Ciao,</p> <p className="n text-3xl"> {props.name} </p>
    </div>
  )
}
