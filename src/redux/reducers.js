import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { combineReducers } from 'redux';

const initialState = {
  contacts: [],
  filter: '',
};

export const contacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        const includeName = state.contacts.find(
          contact => contact.name.toLowerCase() === payload.name.toLowerCase()
        );
        if (includeName) {
          alert(`${payload.name} is already in contacts.`);
          return;
        }
        state.contacts = [...state.contacts, payload];
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
  },
});

export const filter = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact } = contacts.actions;
export const contactsReducer = contacts.reducer;
export const filterReducer = filter.reducer;
export const { filterContacts } = filter.actions;

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
