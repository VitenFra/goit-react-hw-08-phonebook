import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import s from './Views.module.css';
import Button from '@mui/material/Button';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInput = evt => {
    switch (evt.currentTarget.id) {
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
    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <h2 className={s.title}>Форма входу</h2>
        <label className={s.label} htmlFor="email">
        е.пошта
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

        <label className={s.label} htmlFor="password">
        пароль
        </label>

        <input
          type="password"
          onChange={handleInput}
          name="password"
          value={password}
          required
          id="password"
          className={s.input}
        />
        <Button
          type="submit"
          variant="contained"
          
          
        >
          Вхід
        </Button>
      </form>
    </>
  );
};

export default LoginView;
