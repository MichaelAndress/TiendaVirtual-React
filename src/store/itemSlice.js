import { createSlice } from '@reduxjs/toolkit'


export const itemSlice = createSlice({
  name: 'item',
  initialState:{
    productos:[],
  },
  reducers: {
    add: (state, {payload}) => {
      const exist = state.productos.find((item)=> item.id === payload.id);
      if (exist) {
        // incrementar el item
        state.productos.map((item)=> item.id === payload.id ? {...item, qty: item.qty +1} : item);
      }else{
        state.productos.push(payload);
      }
    },
    deleteing: (state, {payload}) => {
      const exist = state.productos.find((item)=> item.id === payload.id);
      if (exist.qty ===1) {
        state.productos = state.productos.filter((item)=> item.id !== exist.id);
      }else{
        state.productos = state.productos.map((item)=> item.id === payload.id ? {...item,qty: item.qry-1}: item);
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, deleting } = itemSlice.actions