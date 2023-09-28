

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


export type ItemStoria = {
  data: number,
  intensita: number,
}

// Define a type for the slice state
interface StoriaState {
  [key:string]:ItemStoria[]
}

type PayloadCalcolo = {
  idParte:Number,
  nuovaStoria: ItemStoria[]
}

// Define the initial state using that type
const initialState: StoriaState = {
  value: [
  ],
} as StoriaState

export const storiaSlice = createSlice({
  name: 'parti',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    calcolaStoriaParte: (state : StoriaState, action: PayloadAction<PayloadCalcolo> ) => {
      state[action.payload.idParte.toString()]=action.payload.nuovaStoria
    },
  },
})

export const { calcolaStoriaParte } = storiaSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectItemStoria = (state: RootState) => state.storia

export default storiaSlice.reducer
