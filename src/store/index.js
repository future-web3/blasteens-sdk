import { configureStore } from "@reduxjs/toolkit";
import gameTicketReducer from "./modules/gameTicketSlice";
import gameLeaderboardReducer from "./modules/gameLeaderboardSlice";

export const store = configureStore({
  reducer: {
    gameTicket: gameTicketReducer,
    gameLeaderboard: gameLeaderboardReducer,
  },
  devTools: false,
});

export * from './modules'
