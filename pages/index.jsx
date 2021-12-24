import React from 'react'
import { Filter } from 'components/Filter'
import { CardList } from 'components/CardList'

const index = ({ events }) => {
	return (
		<>
			<Filter />
			<CardList listData={events} />
		</>
	)
}

export default index;

export async function getServerSideProps(context) {
	const events = [
		{
			id: 1,
			title: 'Evento muito legal',
			slug: 'evento-muito-legal',
			date: '01/02/2022',
			address: 'Casa do papai'
		},
		{
			id: 2,
			title: 'Evento melhor ainda',
			slug: 'evento-melhor-ainda',
			date: '02/03/2023',
			address: 'Casa da mamãe'
		}
	]

	return {
		props: {
			events
		}
	}
}
