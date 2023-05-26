import { configureStore } from '@reduxjs/toolkit';

// import { createAction, createReducer } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const initialState = {
//     contacts: {
//       items: [
//         {
//           id: 1,
//           name: "aaasssddd",
//           number: 3806778965412,
//         },
//       ],
//       filter: "",
//     },
// };

// const addContact = createAction('contacts/add', ({ name, number }) => ({
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   }));

// ==================Actions=============================================================

// export const addContacts = createAction(
//   'contacts/add',
//   function prepare(name, number) {
//     return {
//       payload: {
//         name,
//         number,
//         id: nanoid(),
//       },
//     };
//   }
// );
// const deleteContact = createAction('contacts/delete');

// const changeFilter = createAction('contacts/changeFilter');

// export const filterContact = createAction('setFilter', e => ({
//   type: 'setFilter',
//   payload: e.target.value,
// }));

// export const filterReducer = createReducer(initialState.filter, {
//     [filterContact]: (state, { payload }) => ({ ...state, filter: payload }),
// });

// export const deleteContacts = createAction('contacts/delete');

// ==================Reducers=============================================================
// export const contactsReducer = createReducer(initialState.contacts, {
//   [addContacts]: (state, { payload }) => [...state, payload],
//   [deleteContacts]: (state, { payload }) => {
//     state.contacts = state.contacts.filter(contact => contact.id !== payload);
//   },
// });
// console.log(contactsReducer.getInitialState()); // []

// export const filterReducer = createReducer(initialState.filter, {
//   [filterContact]: (state, action) => ({ ...state, filter: action.payload }),
// });
// console.log(filterReducer.getInitialState()); // ''

// ==================================STORE================================================

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { contacts } from './reducers';
import { filterReducer } from './reducers';

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, contacts.reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
