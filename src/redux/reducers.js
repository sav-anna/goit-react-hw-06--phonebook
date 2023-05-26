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
        state.contacts.push(payload);
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
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});
export const { addContact, deleteContact } = contacts.actions;
export const contactsReducer = contacts.reducer;

export const filter = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filter.reducer;
export const { filterContacts } = filter.actions;

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
