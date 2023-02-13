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
        state.productos = state.productos.map((item)=> item.id === payload.id ? {...item, qty: item.qty +1} : item);
        return;
      }else{
        state.productos.push(payload);
      }
    },
    disminuir: (state, {payload}) => {
      const exist = state.productos.find((item)=> item.id === payload.id);
      if (exist.qty ===1) {
        return;
      }
      state.productos = state.productos.map((item)=> item.id === payload.id ? {...item, qty: item.qty-1}: item);
      
    },
    deleting: (state, {payload})=>{
      const exist = state.productos.find((item)=> item.id === payload.id);
      if (!exist) {
        return state;
      }
      state.productos = state.productos.filter((item)=> item.id !== payload.id);
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, disminuir, deleting } = itemSlice.actions