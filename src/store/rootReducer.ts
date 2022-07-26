import { combineReducers } from '@reduxjs/toolkit';
import characters from './modules/characters/charactersSlice';
import comics from './modules/comics/comicsSlice';

export const rootReducer = combineReducers({
  characters,
  comics,
});
