import React from 'react';
import { Filter } from 'components/Filter';
import { CardList } from 'components/CardList';
import { getFeaturedEvents } from 'utils/api';

const index = ({ featuredEvents }) => {
	return (
		<>
			<Filter />
			<CardList listData={featuredEvents} />
		</>
	)
}

export default index;

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: {
			featuredEvents
		},
		revalidate: 600
	}
}
