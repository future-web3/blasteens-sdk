import { gameSDK } from './phaser/GameSDK';
import store from '../src/store';

import { gameTicketActions }  from './store/modules/gameTicketSlice';
import { gameLeaderboardActions } from './store/modules/gameLeaderboardSlice';

export { store };

export { gameTicketActions, gameLeaderboardActions };

function createGameSDK(store) {
    return new gameSDK(store);
}

export { createGameSDK };
