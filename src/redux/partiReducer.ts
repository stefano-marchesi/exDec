import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


type Parte = {
	nome: string
}

// Define a type for the slice state
interface PartiState {
  value: Parte[]
}

// Define the initial state using that type
const initialState: PartiState = {
  value: [{nome: 'test'}, {nome: 'secondo test'}],
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
