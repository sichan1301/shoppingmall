import { configureStore, createSlice } from '@reduxjs/toolkit'


interface CounterState {
  value: number
}

const initialState = { value: 0 } as CounterState

const basket = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = basket.actions

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer : basket.reducer
})

export default basket