import PropTypes from 'prop-types';
import css from './ContactItems.module.css';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li className={css.contactItem}>
      {name}: {number}
      <button
        className={css.contactItem__btn}
        type="button"
        onClick={() => onClick(id)}
      >
        delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
};

export default ContactItem;
