import { getAuth, onAuthStateChanged } from "firebase/auth";
import state from './../redux/store'
import { cambiaValoreLoggato } from "../redux/untenteReducer";
import { UserWatcher } from "./userWatcher";
import { AllenamentiGetOnce } from "./allenamentiWatcher";
import { getPartiOnce } from "./PartiConnessione";
import { aggiuntaAllenamento } from "../redux/azioni";

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
        this.userId = user.uid
        userWatcher.open(user.uid)
        this.inizializza()
      } else {
        state.dispatch(cambiaValoreLoggato({loggato:false, id:''}))
        console.log('utente non loggato');
        if(this.userId!==''){
          userWatcher.close()}
      }
    });



  }


  inizializza(){
    Promise.all([
      getPartiOnce(),
      AllenamentiGetOnce()
    ]).then(()=>{
        state.getState().parti.value.forEach(parte=>{
          aggiuntaAllenamento(parte.id)
        })
      })

  }



} 


export const firebase = new connection()
