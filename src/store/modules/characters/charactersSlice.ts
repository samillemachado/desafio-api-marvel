import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityId,
} from '@reduxjs/toolkit';
import { RootState } from '../..';
import marvel from '../../../services/marvel/marvel';

export interface Character {
  id: EntityId;
  name?: string;
  description?: string;
  thumbnail?: {
    path: string;
    extension: string;
  };
  comics?: string[];
  favorite?: boolean;
}

const adapter = createEntityAdapter<Character>({
  selectId: (item) => item.id,
});

export const { selectAll, selectById } = adapter.getSelectors<RootState>(
  (state): any => state.characters
);

export const getAllCharacters = createAsyncThunk(
  'getAllCharacters',
  async () => {
    const response = await marvel.get('/characters');
    return response.data.results;
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState: adapter.getInitialState({ loading: false }), // chaves personalizadas(pode qualquer coisa), além do que ele tem como padrão (id e entities)
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
    setAll: adapter.setAll,
    upsertOne: adapter.upsertOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharacters.pending, (state, action) => {
        // state.loading = true;
      })
      .addCase(getAllCharacters.fulfilled, (state, action) => {
        adapter.setAll(state, action.payload);
      })
      .addCase(getAllCharacters.rejected, (state, action) => {
        // state.loading = false;
      });
  },
});

export const { upsertOne } = charactersSlice.actions;
export default charactersSlice.reducer;
