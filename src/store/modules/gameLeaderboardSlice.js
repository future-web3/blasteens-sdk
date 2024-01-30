import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const gameLeaderboardSlice = createSlice({
  name: "leaderboards",
  initialState,
  reducers: {
    updateGameScore(state, action) {
      const { gameName, score } = action.payload;
      state[gameName].score = score;
    },
    resetGameScore(state, action) {
      state[action.payload].score = 0
    },
    toggleSyncPermission(state, action) {
      const { gameName, allowSync } = action.payload;
      state[gameName].allowSync = allowSync;
    },
    addGame(state, action) {
      state[action.payload] = { score: 0, allowSync: false };
    },
  },
});

export default gameLeaderboardSlice.reducer;
export const gameLeaderboardActions = gameLeaderboardSlice.actions;
