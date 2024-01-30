import { gameTicketActions, gameLeaderboardActions, store } from "../store";

export class gameSDK {
  constructor(gameName) {
    this.store = store;
    this.gameName = gameName;
  }

  useLives() {
    this.store.dispatch(gameTicketActions.useLives(this.gameName));
  }

  startGame(callback) {
    const state = this.store.getState();
    if (state.gameTicket.games[this.gameName].numberOfLives > 0) {
      this.store.dispatch(gameTicketActions.setShowTicketWindow(false));
      callback();
    } else {
      this.store.dispatch(gameTicketActions.setShowTicketWindow(true));
    }
  }

  endGame(callback) {
    this.store.dispatch(
      gameLeaderboardActions.toggleSyncPermission({
        gameName: this.gameName,
        allowSync: true,
      }),
    );
    this.store.dispatch(
      gameTicketActions.setShowTicketWindow(true),
    );
    callback();
  }

  updateHighScore(score) {
    this.store.dispatch(
      gameLeaderboardActions.updateGameScore({
        gameName: this.gameName,
        score,
      }),
    );
  }

  resetGameScore() {
    this.store.dispatch(gameLeaderboardActions.resetGameScore(this.gameName))
  }

  getLives() {
    const state = this.store.getState();
    return state.gameTicket.games[this.gameName].numberOfLives;
  }
}

export const createGameSDK = (gameName) => new gameSDK(gameName)
