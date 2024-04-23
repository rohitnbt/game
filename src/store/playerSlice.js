import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  bull: null,
  cow: null,
  isSinglePlayer : false,
  playerOneScore: [],
  playerTowScore: [],
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setUser: (state) => {
      state.value = !state.value;
    },
    setCow: (state,action) => {
      state.cow = action.payload;
    },
    setBull: (state,action) => {
      state.bull = action.payload;
    },
    setPlayerOneScore : (state,action) => {
      state.playerOneScore.push(action.payload);
    },
    setPlayerTwoScore : (state,action) => {
      state.playerTowScore.push(action.payload);
    },
    setIsSinglePlayer : (state,action) => {
      state.isSinglePlayer = action.payload;
    }
  },
})

export const { setUser, setCow, setBull, setPlayerOneScore, setPlayerTwoScore, setIsSinglePlayer } = playerSlice.actions

export default playerSlice.reducer