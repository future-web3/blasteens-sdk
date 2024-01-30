import { useDispatch, useSelector } from 'react-redux';

export const useGameDispatch = () => useDispatch();
export const useGameSelector = selector => useSelector(selector);
export * from './src/phaser'
export * from './src/providers'
export * from './src/store'
