import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '../..';
import marvel from '../../../services/marvel/marvel';

export interface Comics {
  id: number;
  title?: string;
  thumbnail?: {
    path: string;
    extension: string;
  };
  favorite?: boolean;
}

const adapter = createEntityAdapter<Comics>({
  selectId: (item) => item.id,
});

export const { selectAll, selectById } = adapter.getSelectors<RootState>(
  (state): any => state.comics
);

export const getAllComics = createAsyncThunk<any>('getAllComics', async () => {
  const response = await marvel.get('/comics');
  return response.data.results;
});

const comicsSlice = createSlice({
  name: 'comics',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
    setAll: adapter.setAll,
    upsertOne: adapter.upsertOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllComics.pending, (state, action) => {
        console.log('loading');
        // state.loading = true;
      })
      .addCase(getAllComics.fulfilled, (state, action) => {
        adapter.setAll(state, action.payload);
      })
      .addCase(getAllComics.rejected, (state, action) => {
        console.log('deu ruim');
        // state.loading = false;
      });
  },
});

export const { upsertOne } = comicsSlice.actions;
export default comicsSlice.reducer;
