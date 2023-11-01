import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface UtenteState {
  logged: Boolean,
  id:string
  data:user
}

type logInChanged= {
  loggato:boolean,
  id:string
}

// Define the initial state using that type
const initialState: UtenteState = {
  logged:false,
  id:'',
  data: {
    nome:''
  }

} as UtenteState

export const utenteSlice = createSlice({
  name: 'utente',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    cambiaValoreLoggato: (state : UtenteState, action: PayloadAction<logInChanged>) => {
      console.log(action);
      state.logged = action.payload.loggato
      state.id = action.payload.id
    },
  },
})

export const { cambiaValoreLoggato } = utenteSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUtenteLoggato = (state: RootState) => state.utente.logged
export default utenteSlice.reducer
