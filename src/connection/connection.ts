import { getAuth, onAuthStateChanged } from "firebase/auth";
import state from './../redux/store'
import { cambiaValoreLoggato } from "../redux/untenteReducer";
const auth = getAuth();



export class connection {
  constructor() {
console.log('connessione attiva')
    onAuthStateChanged(auth, (user) => {
      if (user) {
        state.dispatch(cambiaValoreLoggato(true))
        console.log('utente loggato');
        
      } else {
        state.dispatch(cambiaValoreLoggato(false))
        console.log('utente non loggato');
      }
    });
  }



} 


export const firebase = new connection()
