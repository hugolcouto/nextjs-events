import style from './style.module.scss';
import Link from 'next/link';

export const Navbar = () => {
	return (
		<nav className={style.navbar}>
			<div className={style.container}>
				<h1 className={style.logo}>NextEvents</h1>
				<Link href="/" passHref>
					<a className={style.allEventsLink}>Mostrar todos os eventos</a>
				</Link>
			</div>
		</nav>
	)
}