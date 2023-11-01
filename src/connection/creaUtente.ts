import { doc, getFirestore, setDoc } from "firebase/firestore"
import { user } from "../types"

const partiDefault = {
  value: [
    {nome: 'Bicipite', stress: 0, categoria: 'Braccia', id:1}, 
    {nome: 'Tricipite', stress: 0, categoria: 'Braccia', id:2},

    {nome: 'Addominale Frontale', stress: 0, categoria: 'Torso', id:3},
    {nome: 'Addominale laterale', stress: 0, categoria: 'Torso', id:4},
    {nome: 'Pettorale', stress: 0, categoria: 'Torso', id:5},
    {nome: 'Trapezio Alto', stress: 0, categoria: 'Torso', id:6},
    {nome: 'Trapezio Basso', stress: 0, categoria: 'Torso', id:7},

    {nome: 'Gluteo', stress: 0, categoria: 'Gambe', id:8},
    {nome: 'Adduttori', stress: 0, categoria: 'Gambe', id:9},
    {nome: 'Quadicipite femorale', stress: 0, categoria: 'Gambe', id:10},
  ],
}
const allenamentiDefault = {
  value: [
  ],
}

const defaultUser: user= {
  nome:''
}

export const creaUtente = (uid:string)=>{
  const db = getFirestore()
  setDoc(doc( db, 'utenti', uid),defaultUser)
  setDoc(doc( db, 'parti', uid),partiDefault)
  setDoc(doc( db, 'allenamenti', uid),allenamentiDefault)
}
