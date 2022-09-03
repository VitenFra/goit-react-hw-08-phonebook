import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';
import s from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className={s.title}>Список контактів</h2>
      <label className={s.label}>
      Знайти контакти за іменем
        <input
          type="text"
          onChange={evt =>
            dispatch(contactsActions.setFilter(evt.currentTarget.value))
          }
          name="filter"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Назва може містити лише літери, апостроф, тире та пробіли. Наприклад Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={s.input}
        />
      </label>
    </>
  );
};

export default Filter;
