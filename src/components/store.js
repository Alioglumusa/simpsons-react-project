import { configureStore } from '@reduxjs/toolkit'
import listItemReducer from '../redux/listItemSlice'

export default configureStore({
  reducer: {
    list:listItemReducer,
  }
})