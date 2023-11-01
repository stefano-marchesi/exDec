type GreetProps = {
  name: string
}


export const Greet = (props : GreetProps)=>{
  return (
    <div>
      Ciao {props.name}
    </div>
  )
}
