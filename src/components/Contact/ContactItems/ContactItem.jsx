import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './ContactItems.module.css';
import { deleteContact } from 'redux/reducers';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contactItem}>
      {name}: {number}
      <button
        className={css.contactItem__btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
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
