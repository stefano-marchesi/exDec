import { DocumentReference, getDoc,  setDoc, doc } from "firebase/firestore";
import store from './../redux/store'
import { db } from "../firebaseConfig";
import { PartiState, settaParti } from "../redux/partiReducer";

const getRef = ():DocumentReference=>{
  return doc(db, 'parti', store.getState().utente.id)
}


export const syncParti = ()=>{
    setDoc(getRef(), store.getState().parti)
}


export const getPartiOnce = async()=>{
  return getDoc(getRef()).then((ret)=>{
    store.dispatch(settaParti(ret.data()as PartiState))
  })
}
