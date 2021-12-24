import { CardListItem } from './CardListItem';
import style from './style.module.scss';


export const CardList = ({ listData }) => {
	return (
		<ul className={style.list}>
			{
				listData.map(event => (
					<CardListItem
						key={event.id}
						title={event.title}
						description={event.description}
						date={event.date}
						address={event.address}
						slug={event.slug}
					/>
				))
			}
		</ul>
	)
}