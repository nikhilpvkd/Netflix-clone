import "../App.css";
import React from "react";
import Banner from "./Banner";
import Row from "./Row";
import request from "../config/requests";
import Nav from "./includes/Nav";

function Home() {
	return (
		<div className="App">
			<Nav />
			<Banner fetch_url={request.fetchNetflixOriginals} />
			<Row
				title="NETFLIX ORIGINALS"
				fetch_url={request.fetchNetflixOriginals}
				isLarge
			/>
			<Row title="Trending Now" fetch_url={request.fetchTrending} />
			<Row title="Top Rated" fetch_url={request.fetchTopRated} />
			<Row title="Action Movies" fetch_url={request.fetchActionMovies} />
			<Row title="Comedy Movies" fetch_url={request.fetchComedyMovies} />
			<Row title="Horror Movies" fetch_url={request.fetchHorrorMovies} />
			<Row
				title="Romance Movies"
				fetch_url={request.fetchRomanceMovies}
			/>
			<Row title="Documentary" fetch_url={request.fetchDocumantaries} />
		</div>
	);
}

export default Home;
