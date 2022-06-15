import css from './Button.module.css';

function Button({ text, link }) {
  return (
    <a href={link}>
      <button className={css.btn}>{text}</button>
    </a>
  );
}

export default Button;
