import style from '../style.module.scss';

export const ButtonLink = ({ href, children, target }) => {
	return <a className={style.button} href={href} target={target}>{children}</a>
}