import { doc, onSnapshot } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import state from './../redux/store'
import { aggiornaUtente } from "../redux/untenteReducer";
import { user } from "../types";

const db = getFirestore()

export class UserWatcher  {
  userConnection(){}

  open(idUtente: string){
    this.userConnection = onSnapshot(doc(db, 'utenti', idUtente), (snap)=>{
      console.log(snap.data())

      state.dispatch(aggiornaUtente(snap.data()as user))
    })
  }
  close(){
    this.userConnection()
  }

}
