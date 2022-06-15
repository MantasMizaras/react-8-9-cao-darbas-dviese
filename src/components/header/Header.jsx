import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <nav className={css['main-nav']}>
        <img src='../img/hbLog.png' alt='logoNav' />
        <a className={css['nav-link']} href='#home'>
          Home
        </a>
        <a className={css['nav-link']} href='#about'>
          About
        </a>
        <a className={css['nav-link']} href='#contact'>
          Contact
        </a>
      </nav>
      <a className={css['nav-link']} href='#search'>
        Search
      </a>
    </header>
  );
}

export default Header;
