import { gameSDK } from './src/phaser/gameSDK';
import GameProvider from './src/components/gameProvider/gameProvider.jsx'
import store from './src/store';

import { gameTicketActions }  from './src/store/modules/gameTicketSlice';
import { gameLeaderboardActions } from './src/store/modules/gameLeaderboardSlice';

import { useDispatch, useSelector } from 'react-redux';

export { GameProvider }

export { store };

export { gameTicketActions, gameLeaderboardActions };

export const useGameDispatch = () => useDispatch();
export const useGameSelector = selector => useSelector(selector);



function createGameSDK(gameName) {
    return new gameSDK(gameName);
}

export { createGameSDK };
