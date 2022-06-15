import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <img className={css.img} src='../img/hbLog.png' alt='logoNav' />
      <nav className={css['main-nav']}>
        <a className={css['nav-link']} href='#pets'>
          Pets
        </a>
        <a className={css['nav-link']} href='#medication'>
          Medication
        </a>
      </nav>
    </header>
  );
}

export default Header;
