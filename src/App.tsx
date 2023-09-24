
import {Greet} from  './components/greet'
import './App.css'
import { Person } from './components/Person'

function App() {
  const person = {
    first: 'Stefano',
    last: 'Marchesi'
  }

  return (
    <>
      <Greet name="Stefano"/>
      <Person  name={person}/>
    </>
  )
}

export default App
