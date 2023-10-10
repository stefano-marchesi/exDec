
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { useSelector } from 'react-redux'

export type Allenamento = {
  data: number,
  intensita: number,
  idParte: number
}

// Define a type for the slice state
interface AllenamentiState {
  value: Allenamento[]
}

// Define the initial state using that type
const initialState: AllenamentiState = {
  value: [
  ],
} as AllenamentiState

export const allenamentiSlice = createSlice({
  name: 'allenamenti',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

    aggiungiAllenamento: (state : AllenamentiState, action: PayloadAction<Allenamento>) => {
      state.value.push(action.payload)
    },
  },
})

export const selectAllenamento = (state: RootState) => state.allenamenti.value
export const allenamentiPerParte = (idParte:number)=>{
  return useSelector(selectAllenamento).filter((elem: Allenamento) => {
    return elem.idParte === idParte
  })}
export const { aggiungiAllenamento } = allenamentiSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default allenamentiSlice.reducer
