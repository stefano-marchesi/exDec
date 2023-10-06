import { counter } from "../main"

export const AddToCounter = ()=>{
    const handleClick = ()=>{
      counter.increment_counter()
  }
    return <div>
    <button onClick={handleClick} >aggiungi</button>
  </div>
}

