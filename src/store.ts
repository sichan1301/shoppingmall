import { configureStore, createSlice } from '@reduxjs/toolkit'

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
      const filteredIndex = state.basket.findIndex(item => item.id === action.payload.productInfo.id && item.size === action.payload.productInfo.size && item.color === action.payload.productInfo.color) 

      filteredIndex === -1 
      ?state.basket.push(action.payload.productInfo) 
      :state.basket[filteredIndex].count += Number(action.payload.productInfo.count)
      
      state.totalCount += Number(action.payload.productInfo.count)
      state.totalPrice += Number(action.payload.productInfo.count) * action.payload.productInfo.price
    },

    Delete:(state:stateType,action)=>{
      const filteredIndex = state.basket.findIndex(item => item.id === action.payload.id && item.size === action.payload.size && item.color === action.payload.color)
      state.totalCount -= Number(state.basket[filteredIndex].count)
      state.totalPrice -= state.basket[filteredIndex].price * Number(state.basket[filteredIndex].count)
      state.basket.splice(filteredIndex,1)
    },

    CountUpdate:(state:stateType,action) => {
      const totalValue = state.basket.reduce((acc,current)=>{
        if(current.id === action.payload.item.id && current.size === action.payload.item.size && current.color === action.payload.item.color){
          current.count = action.payload.currentCount
        }
        acc[0] += current.price * current.count
        acc[1] += current.count
        return acc;
      },[0,0])
      
      state.totalPrice = totalValue[0]
      state.totalCount = totalValue[1]
    } 

  },
})

export const { Add, Delete,CountUpdate } = basket.actions

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer : basket.reducer
})

export default basket