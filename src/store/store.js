import { configureStore } from '@reduxjs/toolkit'
import records from '../slices/main-slices'

export const store = configureStore({
  'reducer': { records },
  'devTools': process.env.NODE_ENV !== 'production',
})
