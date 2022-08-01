import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityId,
} from '@reduxjs/toolkit';
import { Character } from './charactersSlice';
import { RootState } from '../..';
import marvel from '../../../services/marvel/marvel';

const adapter = createEntityAdapter<Character>({
  selectId: (item) => item.id,
});

export const { selectAll, selectById } = adapter.getSelectors<RootState>(
  (state): any => state.character
);

export const getCharacterById = createAsyncThunk(
  'getCharacterById',
  async (id: EntityId) => {
    const response = await marvel.get(`/characters/${id}`);
    return response.data.results[0];
  }
);

const characterSlice = createSlice({
  name: 'character',
  initialState: adapter.getInitialState(),
  reducers: {
    clear() {
      return adapter.getInitialState();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacterById.pending, (state, action) => {
        // state.loading = true;
      })
      .addCase(getCharacterById.fulfilled, (state, action) => {
        adapter.setOne(state, action.payload);
      })
      .addCase(getCharacterById.rejected, (state, action) => {
        // state.loading = false;
      });
  },
});

export const clear = characterSlice.actions;
export default characterSlice.reducer;
