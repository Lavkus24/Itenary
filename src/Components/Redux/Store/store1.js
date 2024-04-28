import { configureStore } from '@reduxjs/toolkit'
import Authentication from '../Authetication/AuthContextState'

const store = configureStore({
  reducer: {
      auth : Authentication,
  },
})

export default store