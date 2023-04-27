import { configureStore, createSlice, current } from '@reduxjs/toolkit'

export interface basketType {
  category:string,
  color:string,
  count:number,
  id:string,
  imgSrc:string,
  name:string,
  price:number,
  size:string
}

interface stateType {
  basket:basketType[],
  totalPrice:number,
  totalCount:number
}

const basket = createSlice({
  name: 'basket',
  initialState:{
    basket:[],
    totalPrice:0,
    totalCount:0
  },
  reducers: {
    Add:(state:stateType,action) => {
      state.totalPrice = 0
      state.totalCount = 0

      const filteredIndex = state.basket.findIndex(item => item.id === action.payload.productInfo.id && item.size === action.payload.productInfo.size)

      filteredIndex === -1 
      ? state.basket.push(action.payload.productInfo) 
      : state.basket[filteredIndex].count += Number(action.payload.productInfo.count)
      
      state.basket.map(item => state.totalCount += Number(item.count))
      state.basket.map(item => state.totalPrice += item.price * Number(item.count))
    
    },
    Delete:(state:stateType,action)=>{
      state.totalPrice = 0
      state.totalCount = 0

      const filteredIndex = state.basket.findIndex(item => item.id === action.payload.id && item.size === action.payload.size)
      state.basket.splice(filteredIndex,1)

      state.basket.map(item => state.totalCount += Number(item.count))
      state.basket.map(item => state.totalPrice += item.price * Number(item.count))
    
    },
    CountUpdate:(state:stateType,action) => {
      state.totalPrice = 0
      state.totalCount = 0

      const filteredIndex =state.basket.findIndex(item => item.id === action.payload.id)
      state.basket[filteredIndex].count = action.payload.count

      state.basket.map(item => state.totalCount += Number(item.count))
      state.basket.map(item => state.totalPrice += item.price * Number(item.count))
  
    }
  },
})

export const { Add, Delete,CountUpdate } = basket.actions

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer : basket.reducer
})

export default basket