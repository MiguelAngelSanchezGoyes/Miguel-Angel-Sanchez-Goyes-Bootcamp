import { createSlice } from '@reduxjs/toolkit';

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState: {
    value: [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ],
  },
  reducers: {
    addHero: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeHero: (state, action) => {
      state.value = state.value.filter((hero) => hero.id !== +action.payload);
    },
    updateHero: (state, action) => {
      state.value = state.value.map((hero) => {
        if (hero.id === action.payload.currentHero) {
          return { id: hero.id, name: action.payload.newName };
        }
        return hero;
      });
    },
  },
});

export const { addHero, removeHero, updateHero } = heroesSlice.actions;

export default heroesSlice.reducer;
