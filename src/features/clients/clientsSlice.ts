import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface State {
  isOpen: boolean;
}

const initialState = { isOpen: false } as State;

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    toggleClients: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleClients } = clientsSlice.actions;

export const selectIsClientsMenuOpen = (state: RootState) => state.clients.isOpen;
