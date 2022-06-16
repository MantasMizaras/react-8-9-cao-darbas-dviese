import css from './Button1.module.css';

const Button1 = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.secondary === true ? css.secondary : css.main}
    >
      {props.children}
    </button>
  );
};

export default Button1;
