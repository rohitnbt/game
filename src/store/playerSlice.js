import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  bull: null,
  cow: null,
  playerOneScore: [],
  playerTowScore: [],
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
    setPlayerOneScore : (state,action) => {
      state.playerOneScore.push(action.payload);
    },
    setPlayerTwoScore : (state,action) => {
      state.playerTowScore.push(action.payload);
    }
  },
})

export const { setUser, setCow, setBull, setPlayerOneScore, setPlayerTwoScore } = playerSlice.actions

export default playerSlice.reducer