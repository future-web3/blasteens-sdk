import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store/index';

const GameProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default GameProvider;