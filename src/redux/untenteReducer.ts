import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


// Define a type for the slice state
interface UtenteState {
  logged: Boolean,
  data: {
    id:string,
    nome:string
  }
}


// Define the initial state using that type
const initialState: UtenteState = {
  logged:false,
  data: {
    id:'',
    nome:''
  }
  
} as UtenteState

export const utenteSlice = createSlice({
  name: 'utente',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

    cambiaValoreLoggato: (state : UtenteState, action: PayloadAction<boolean>) => {
      console.log(action);
      
      state.logged = action.payload 
      console.log(state);
      
    },
  },
})

export const { cambiaValoreLoggato } = utenteSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUtenteLoggato = (state: RootState) => state.utente.logged
export default utenteSlice.reducer
