// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter';
import ContactList from './Contact/ContactList';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <div>
      <ContactForm />
      <Filter />

      {contacts?.length > 0 ? (
        <ContactList />
      ) : (
        <p className="app">You don’t have any contacts yet...🥺</p>
      )}
    </div>
  );
}
