import style from './style.module.scss';

export const Button = ({ onClick, children }) => {
	return <button className={style.button} onClick={onClick}>{children}</button>
}