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
      const filteredIndex = state.basket.findIndex(item => item.id === action.payload.productInfo.id && item.size === action.payload.productInfo.size)

      filteredIndex === -1 
      ? state.basket.push(action.payload.productInfo) 
      : state.basket[filteredIndex].count += Number(action.payload.productInfo.count)

      for(let i =0;i<state.basket.length;i++){
        state.totalCount += state.basket[i].count
      }
      
      for(let i = 0;i<state.basket.length;i++){
        state.totalPrice +=  state.basket[i].price * state.basket[i].count
      }
    
    },
    Delete:(state:stateType,action)=>{
      const filteredIndex = state.basket.findIndex(item => item.id === action.payload.id && item.size === action.payload.size)
      state.basket.splice(filteredIndex,1)

      for(let i = 0;i<state.basket.length;i++){
        state.totalPrice +=  state.basket[i].price *  state.basket[i].count
      }
    },
    CountUpdate:(state:stateType,action) => {
      const index = state.basket.findIndex(item => item.id === action.payload.id)
      state.basket[index].count = action.payload.count

      for(let i = 0;i<state.basket.length;i++){
        state.totalPrice +=  state.basket[i].price *  state.basket[i].count
      }
    }
  },
})

export const { Add, Delete,CountUpdate } = basket.actions

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer : basket.reducer
})

export default basket