import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  const id = nanoid();
  return (
    <div className={css.filter}>
      <h2 className={css.filter__title}>Contacts</h2>
      <label className={css.filter__label}>
        Find contacts by name
        <input
          className={css.filter__input}
          id={id}
          type="text"
          name="filter"
          placeholder="Type name"
          value={value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
