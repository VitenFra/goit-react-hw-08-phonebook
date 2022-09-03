import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import Button from '@mui/material/Button';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  return (
    <>
     
      <div className={s.text}>
      Ласкаво просимо,
        <span className={s.userName}>{userName}</span>
        <Button
          color="inherit"
          type="buttom"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Вийти
        </Button>
      </div>
    </>
  );
};

export default UserMenu;
