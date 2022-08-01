import { createSlice, EntityId } from '@reduxjs/toolkit';

const selectedCharacterSlice = createSlice({
  name: 'selectedCharacter',
  initialState: 0 as EntityId,
  reducers: {
    selectCharacter(state, { payload }) {
      return payload;
    },
  },
});

export const { selectCharacter } = selectedCharacterSlice.actions;
export default selectedCharacterSlice.reducer;
