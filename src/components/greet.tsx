type GreetProps = {
  name: string
}


export const Greet = (props : GreetProps)=>{
  return (
    <div>
      ciao {props.name}
    </div>
  )
}
