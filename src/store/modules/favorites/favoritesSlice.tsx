import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../..';

interface IFavoriteChar {
  id: number;
  name?: string;
  description?: string;
  thumbnail?: {
    path: string;
    extension: string;
  };
  comics?: string[];
  favorite?: boolean;
}

interface InitialState {
  id: number;
  name?: string;
  description?: string;
  thumbnail?: {
    path: string;
    extension: string;
  };
  comics?: string[];
  favorite?: boolean;
}

const adapter = createEntityAdapter<InitialState>({});

// selectAll e selectById dentro do get selector do adapter
export const { selectAll, selectById } = adapter.getSelectors(
  (state: RootState) => state.favorites
);

const FavoriteSlice = createSlice({
  name: 'favorites',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
  },
});

export const { addOne, addMany, updateOne } = FavoriteSlice.actions;

export default FavoriteSlice.reducer;
