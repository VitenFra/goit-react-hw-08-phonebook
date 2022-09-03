import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import s from './Views.module.css';
import Button from '@mui/material/Button';


const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInput = evt => {
    switch (evt.currentTarget.id) {
      case 'name':
        setName(evt.currentTarget.value);
        break;
      case 'email':
        setEmail(evt.currentTarget.value);
        break;
      case 'password':
        setPassword(evt.currentTarget.value);
        break;
      default:
        console.log('щось пішло не так');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <h2 className={s.title}>Форма реєстрації</h2>
      <label htmlFor="name" className={s.label}>
      ім'я
      </label>
      <input
        type="text"
        onChange={handleInput}
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Назва може містити лише літери, апостроф, тире та пробіли. Наприклад Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id="name"
        className={s.input}
      />

      <label htmlFor="email" className={s.label}>
      електронна пошта
      </label>
      <input
        type="email"
        onChange={handleInput}
        name="email"
        value={email}
        required
        id="email"
        className={s.input}
      />

      <label htmlFor="password" className={s.label}>
       пароль
      </label>
      <input
        type="password"
        onChange={handleInput}
        name="password"
        value={password}
        required
        id="password"
        minLength={4}
        className={s.input}
      />

      <Button
        type="submit"
        variant="contained"

      >
        Зареєструватися
      </Button>
    </form>
  );
};

export default RegisterView;
