import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter';
import ContactList from './Contact/ContactList';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const makeIdContact = id => {
    return (id = nanoid(10));
  };

  const formSubmitHandler = (name, number) => {
    const newContact = {
      id: makeIdContact(),
      name,
      number,
    };
    const includeName = contacts.find(contact => contact.name === name);
    if (includeName) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts(contacts => [newContact, ...contacts]);
  };

  const ChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const onDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ContactForm onSubmit={formSubmitHandler} />
      <Filter value={filter} onChange={ChangeFilter} />

      {contacts.length > 0 ? (
        <ContactList contacts={getVisibleContacts} onClick={onDeleteContact} />
      ) : (
        <p className="app">You don’t have any contacts yet...🥺</p>
      )}
    </div>
  );
}
