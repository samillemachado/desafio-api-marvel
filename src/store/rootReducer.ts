import { combineReducers } from '@reduxjs/toolkit';
import characters from './modules/characters/charactersSlice';

export const rootReducer = combineReducers({
  characters,
});
