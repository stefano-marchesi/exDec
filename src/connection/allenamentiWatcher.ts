import { doc, setDoc, getDoc, DocumentReference } from 'firebase/firestore'
import store from './../redux/store'
import { AllenamentiState, settaAllenamenti } from '../redux/allenamentiReducer'
import { db } from '../firebaseConfig'

const getRef = ():DocumentReference =>{
  return doc(db, 'allenamenti', store.getState().utente.id)
}

export const syncAllenamenti = ()=>{
    setDoc(getRef(), store.getState().allenamenti)
}

export const AllenamentiGetOnce= ()=>{
  return getDoc(getRef()).then((ret)=>{
    console.log(ret.data())
    store.dispatch(settaAllenamenti(ret.data() as AllenamentiState))})
}
