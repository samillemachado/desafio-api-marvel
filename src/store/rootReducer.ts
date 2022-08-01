import { combineReducers } from '@reduxjs/toolkit';
import characters from './modules/characters/charactersSlice';
import character from './modules/characters/characterSlice';
import comics from './modules/comics/comicsSlice';
import comicsByChar from './modules/comics/comicsByCharSlice';
import favorites from './modules/favorites/favoritesSlice';
import selectCharacter from './modules/characters/selectedCharacterSlice';

export const rootReducer = combineReducers({
  characters,
  character,
  selectCharacter,
  comics,
  comicsByChar,
  favorites,
});
