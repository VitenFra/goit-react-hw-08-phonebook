import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <ul className={s.navList}>
        <li className={s.navListItem}>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? s.navLinkActive : s.navLink
            }
          >
            Зареєструватися
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? s.navLinkActive : s.navLink
            }
          >
            Вхід
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
