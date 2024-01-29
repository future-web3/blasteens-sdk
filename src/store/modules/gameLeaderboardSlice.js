import { createSlice } from "@reduxjs/toolkit";
import gameLeaderboardState from '../gameConfigs/gameLeaderboardState.json'

const initialState = gameLeaderboardState

const gameLeaderboardSlice = createSlice({
  name: "leaderboards",
  initialState,
  reducers: {
    updateGameScore(state, action) {
      const { gameName, score } = action.payload;
      state[gameName].score = score;
    },
    toggleSyncPermission(state, action) {
      const { gameName, allowSync } = action.payload;
      state[gameName].allowSync = allowSync;
    },
  },
});

export default gameLeaderboardSlice.reducer;
export const gameLeaderboardActions = gameLeaderboardSlice.actions;
