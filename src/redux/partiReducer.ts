import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Parte } from '../types'



export type PartiCategorizzate = {
  [key: string]:Parte[]
}
// Define a type for the slice state
interface PartiState {
  value: Parte[]
}

// Define the initial state using that type
const initialState: PartiState = {
  value: [
    {nome: 'Bicipite', stress: 20, categoria: 'Braccia', id:1}, 
    {nome: 'Tricipite', stress: 50, categoria: 'Braccia', id:2},
    
    {nome: 'Addominale Frontale', stress: 12, categoria: 'Torso', id:3},
    {nome: 'Addominale laterale', stress: 100, categoria: 'Torso', id:4},
    {nome: 'Pettorale', stress: 30, categoria: 'Torso', id:5},
    {nome: 'Trapezio Alto', stress: 10, categoria: 'Torso', id:6},
    {nome: 'Trapezio Basso', stress: 3, categoria: 'Torso', id:7},

    {nome: 'Gluteo', stress: 120, categoria: 'Gambe', id:8},
    {nome: 'Adduttori', stress: 3, categoria: 'Gambe', id:9},
    {nome: 'Quadicipite femorale', stress: 3, categoria: 'Gambe', id:10},
  ],
} as PartiState

export const partiSlice = createSlice({
  name: 'parti',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    cambiaValoreStress:(state : PartiState, action: PayloadAction<{idParte:number, nuovoValore:number}>) => {
      const index = state.value.findIndex((elem)=>{
	return elem.id === action.payload.idParte
      })
      state.value[index].stress= action.payload.nuovoValore
    },
 
    aggiungiParte: (state : PartiState, action: PayloadAction<Parte>) => {

      state.value.push({...action.payload, id:(new Date()).getTime()})
    },
  },
})

export const { aggiungiParte, cambiaValoreStress } = partiSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectParti = (state: RootState) => state.parti.value
export const selectPartiCategorizzate = (state: RootState) => {
  return state.parti.value.reduce((acc: PartiCategorizzate, elem: Parte)=>{
    if(acc[elem.categoria] === undefined){
      acc[elem.categoria]=[elem]
    }else{
      acc[elem.categoria].push(elem)
    }
    return acc  
  }, {})
  
}

export default partiSlice.reducer
