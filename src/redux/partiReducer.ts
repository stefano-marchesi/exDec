import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


type Parte = {
	nome: string,
	stress: number,
	categoria: string
}

// Define a type for the slice state
interface PartiState {
  value: Parte[]
}

// Define the initial state using that type
const initialState: PartiState = {
  value: [
    {nome: 'Bicipite', stress: 20, categoria: 'Braccia'}, 
    {nome: 'Tricipite', stress: 50, categoria: 'Braccia'},
    
    {nome: 'Addominale Frontale', stress: 12, categoria: 'Torso'},
    {nome: 'Addominale laterale', stress: 100, categoria: 'Torso'},
    {nome: 'Pettorale', stress: 30, categoria: 'Torso'},
    {nome: 'Trapezio Alto', stress: 10, categoria: 'Torso'},
    {nome: 'Trapezio Basso', stress: 3, categoria: 'Torso'},

    {nome: 'Gluteo', stress: 120, categoria: 'Gambe'},
    {nome: 'Adduttori', stress: 3, categoria: 'Gambe'},
    {nome: 'Quadicipite femorale', stress: 3, categoria: 'Gambe'},
  ],
} as PartiState

export const partiSlice = createSlice({
  name: 'parti',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

    aggiungiParte: (state : PartiState, action: PayloadAction<Parte>) => {
      state.value.push(action.payload)
    },
  },
})

export const { aggiungiParte } = partiSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectParti = (state: RootState) => state.parti.value

export default partiSlice.reducer
