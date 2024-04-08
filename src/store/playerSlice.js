import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  bull: null,
  cow: null,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setUser: (state) => {
      state.value = !state.value
    },
    setCow: (state,action) => {
      state.cow = action.payload
    },
    setBull: (state,action) => {
      state.bull = action.payload
    },
  },
})

export const { setUser, setCow, setBull } = playerSlice.actions

export default playerSlice.reducer