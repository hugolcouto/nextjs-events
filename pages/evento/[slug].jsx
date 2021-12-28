import Head from 'next/head';
import { useState, useEffect } from 'react';
import style from 'styles/single.module.scss';
import { getEventBySlug, getAllEvents } from 'utils/api';

const Single = ({ event }) => {
	const {
		address,
		date,
		description,
		image,
		title,
	} = event[0];

	return (
		<>
			<Head>
				<title>{title} | Next JS Event</title>
			</Head>
			<article className={style.article}>
				<header>
					<img src={image} alt='' />
					<h1>{title}</h1>
					<time>{date}</time>
					<address>{address}</address>
				</header>
				<p>{description}</p>
			</article>
		</>
	)
}

export default Single;

export async function getStaticProps(context) {
	const eventSlug = context.params.slug;

	const event = await getEventBySlug(eventSlug);

	return {
		props: {
			event
		},
		revalidate: 30
	}
}

export async function getStaticPaths() {
	const events = await getAllEvents();

	const paths = events.map(event => ({ params: { slug: event.slug } }))

	return { paths, fallback: 'blocking' }
}