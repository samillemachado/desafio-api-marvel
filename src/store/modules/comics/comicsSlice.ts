import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '../..';
import marvel from '../../../services/marvel/marvel';

export interface Comics {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const adapter = createEntityAdapter<Comics>({
  selectId: (item) => item.id,
});

export const { selectAll, selectById } = adapter.getSelectors<RootState>(
  (state): any => state.comics
);

export const getAllComics = createAsyncThunk<any>('getAllComics', async () => {
  const { data } = await marvel.get('/characters/{charactersId}/comics');
  console.log(data);
  const parse = JSON.parse(data);
  console.log(data.parse.code);
  if (parse.code === 200) {
    console.log(parse.data.results);
    return parse.data.results;
  }
  return [];
});

const comicsSlice = createSlice({
  name: 'comics',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
    setAll: adapter.setAll,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllComics.pending, (state, action) => {
        console.log('loading');
      })
      .addCase(getAllComics.fulfilled, (state, action) => {
        adapter.setAll(state, action.payload);
      })
      .addCase(getAllComics.rejected, (state, action) => {
        console.log('deu ruim');
      });
  },
});

export const { addOne, addMany, updateOne } = comicsSlice.actions;
export default comicsSlice.reducer;
