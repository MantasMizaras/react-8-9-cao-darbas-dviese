import css from './Header.module.css';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={css.header}>
      <NavLink to='/'>
        <img className={css.img} src='../img/hbLog.png' alt='logoNav' />{' '}
      </NavLink>
      <nav>
        <NavLink className={css['nav-link']} to='/'>
          Pets
        </NavLink>
        <NavLink className={css['nav-link']} to='/Medication'>
          Medication
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
