import { doc, onSnapshot } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
const db = getFirestore()

export class UserWatcher  {
  userConnection(){}

  open(idUtente: string){
    this.userConnection = onSnapshot(doc(db, 'utenti', idUtente), (snap)=>{
      console.log(snap.data())
    })
  }
  close(){
    this.userConnection()
  }

}
