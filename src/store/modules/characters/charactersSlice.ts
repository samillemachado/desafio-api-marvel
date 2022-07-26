import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '../..';
import marvel from '../../../services/marvel/marvel';

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const adapter = createEntityAdapter<Character>({
  selectId: (item) => item.id,
});

export const { selectAll, selectById } = adapter.getSelectors<RootState>(
  (state) => state.characters
);

export const getAll = createAsyncThunk<any>('getAllCharacters', async () => {
  const { data } = await marvel.get('/characters');
  const parse = JSON.parse(data);
  if (parse.code === 200) {
    return parse.data.results;
  }
  return [];
});

const charactersSlice = createSlice({
  name: 'characters',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
    setAll: adapter.setAll,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state, action) => {
        console.log('loading');
      })
      .addCase(getAll.fulfilled, (state, action) => {
        adapter.setAll(state, action.payload);
      })
      .addCase(getAll.rejected, (state, action) => {
        console.log('deu ruim');
      });
  },
});

export const { addOne, addMany, updateOne } = charactersSlice.actions;
export default charactersSlice.reducer;
