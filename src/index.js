import { gameSDK } from './phaser/gameSDK';
import GameProvider from './components/gameProvider/gameProvider.jsx'
import store from '../src/store';

import { gameTicketActions }  from './store/modules/gameTicketSlice';
import { gameLeaderboardActions } from './store/modules/gameLeaderboardSlice';

import { useDispatch as useGameDispatch, useSelector as useGameSelector} from "react-redux";

export { GameProvider }

export { store };

export { gameTicketActions, gameLeaderboardActions };

export { useGameDispatch, useGameSelector };


function createGameSDK(gameName) {
    return new gameSDK(gameName);
}

export { createGameSDK };
