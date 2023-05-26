import PropTypes from 'prop-types';
import ContactItem from '../ContactItems/ContactItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};
export default ContactList;
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};
