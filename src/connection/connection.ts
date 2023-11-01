import { getAuth, onAuthStateChanged } from "firebase/auth";
import state from './../redux/store'
import { cambiaValoreLoggato } from "../redux/untenteReducer";
import { UserWatcher } from "./userWatcher";

const auth = getAuth();


export class connection {
  userId:string
  constructor() {
    this.userId = ''
    const userWatcher = new UserWatcher
    console.log('connessione attiva')
    onAuthStateChanged(auth, (user) => {
      if (user) {
        state.dispatch(cambiaValoreLoggato({loggato:true, id:user.uid}))
        console.log(user.uid)
        console.log('utente loggato');
        this.userId = user.uid
        userWatcher.open(user.uid)

      } else {
        state.dispatch(cambiaValoreLoggato({loggato:false, id:''}))
        console.log('utente non loggato');
        if(this.userId!==''){
        userWatcher.close()}
      }
    });

    

  }



} 


export const firebase = new connection()
