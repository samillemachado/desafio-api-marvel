import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '../..';
import marvel from '../../../services/marvel/marvel';

export interface ComicsByChar {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const adapter = createEntityAdapter<ComicsByChar>({
  selectId: (item) => item.id,
});

export const { selectAll, selectById } = adapter.getSelectors<RootState>(
  (state): any => state.comics
);

export const getComicsByCharacter = createAsyncThunk<any>(
  'getComicsByCharacter',
  async (characterId) => {
    const response = await marvel.get(`/characters/${characterId}/comics'`);
    console.log(response.data.results);
    return response.data.results;
  }
);

const comicsByCharSlice = createSlice({
  name: 'comicsByChar',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
    setAll: adapter.setAll,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComicsByCharacter.pending, (state, action) => {
        console.log('loading');
      })
      .addCase(getComicsByCharacter.fulfilled, (state, action) => {
        adapter.setAll(state, action.payload);
      })
      .addCase(getComicsByCharacter.rejected, (state, action) => {
        console.log('deu ruim');
      });
  },
});

export const { addOne, addMany, updateOne } = comicsByCharSlice.actions;
export default comicsByCharSlice.reducer;
