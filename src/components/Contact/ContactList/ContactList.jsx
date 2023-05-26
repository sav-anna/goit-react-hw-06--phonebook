import css from './ContactList.module.css';
import ContactItem from '../ContactItems';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const getVisibleContacts = () => {
    if (!filter) {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
export default ContactList;
