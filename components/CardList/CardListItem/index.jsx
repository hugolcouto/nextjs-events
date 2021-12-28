import style from './style.module.scss'
import Link from 'next/link'

export const CardListItem = ({ title, slug, date, address }) => {
	return (
		<li className={style.cardListItem}>
			<img src='http://placekitten.com/g/800/600' alt='' />
			<article>
				<header>
					<h2>{title}</h2>
					<time>{date}</time>
					<address>{address}</address>
				</header>
				<nav>
					<Link passHref href={{ pathname: '/evento/[slug]', query: { slug } }}>
						<a>Ver mais</a>
					</Link>
				</nav>
			</article>
		</li>
	)
}