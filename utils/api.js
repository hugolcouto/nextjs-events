/**
 * Função que retorna todos os eventos
 * @returns {array} - Array com todos os eventos
 */
export async function getAllEvents() {
	const response = await fetch(process.env.API);
	const data = await response.json();

	const events = [];

	for (const key in data) {
		events.push({
			id: key,
			...data[key]
		})
	}

	return events;
}

/**
 * Array que retorna apenas os eventos marcados como isFeatured
 * @returns {array} - Array com eventos marcados como isFeatured
 */
export async function getFeaturedEvents() {
	const allEvents = await getAllEvents();
	return allEvents.filter(event => event.isFeatured);
}

/**
 * Retorna evento com determinado ID
 * @param {string} slug
 * @returns {object} - Objeto contendo dados de um determinado slug
 */
export async function getEventBySlug(slug) {
	const allEvents = await getAllEvents();
	return allEvents.filter(event => event.slug === slug);
}