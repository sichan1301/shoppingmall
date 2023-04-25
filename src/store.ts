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
  basket:basketType[]
}

const basket = createSlice({
  name: 'basket',
  initialState:{
    basket:[]
  },
  reducers: {
    ADD:(state:stateType,action) => {
      state.basket.push(action.payload.productInfo)
    },
    DELETE:(state:stateType,action)=>{

    }
  },
})

export const { ADD, DELETE } = basket.actions

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer : basket.reducer
})

export default basket