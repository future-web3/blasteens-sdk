import { createSlice } from "@reduxjs/toolkit";
import gameTicketState from '../gameConfigs/gameTicketState.json'

const initialState = JSON.parse(gameTicketState)

const gameTicketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTickets(state, action) {
      state.tickets = action.payload;
    },
    setNumberOfLives(state, action) {
      const { gameName, numberOfLives } = action.payload;
      state.games[gameName].numberOfLives = numberOfLives;
    },
    useLives(state, action) {
      const gameName = action.payload;
      if (state.games[gameName.numberOfLives] > 0) {
        state.games[gameName].numberOfLives -= 1;
      }
    },
    setShowTicketWindow(state, action) {
      state.showTicketWindow = action.payload;
    },
  },
});

export default gameTicketSlice.reducer;
export const gameTicketActions = gameTicketSlice.actions;
