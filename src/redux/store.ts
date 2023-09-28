import { configureStore } from '@reduxjs/toolkit'
import partiReducer from './partiReducer'
import allenamentiReducer from './allenamentiReducer'
import storiaReducer from './storiaReducer'
import thunk from 'redux-thunk'
const store = configureStore({
  reducer: {
    parti: partiReducer,
    allenamenti: allenamentiReducer,
    storia: storiaReducer
  },
  middleware:[thunk]
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store
