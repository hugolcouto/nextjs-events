import '../styles/globals.scss';
import Head from 'next/head';
import { Navbar } from 'components/Navbar';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Next JS Events</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600&display=swap" rel="stylesheet" />
			</Head>
			<Navbar />
			<main className="container">
				<Component {...pageProps} />
			</main>
		</>
	)
}

export default MyApp
