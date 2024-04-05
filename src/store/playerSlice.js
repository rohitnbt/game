import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setUser: (state) => {
      state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = playerSlice.actions

export default playerSlice.reducer