import React, { useEffect, useState } from "react";
import axios from "../config/axios";
import request from "../config/requests";
import "../styles/banner.css";

function Banner() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		async function fetchData(fetch_url) {
			const response = await axios.get(request.fetchNetflixOriginals);
			setMovies(
				response.data.results[
					Math.floor(Math.random() * response.data.results.length - 1)
				]
			);
			return response;
		}
		fetchData();
	}, []);

	function truncate(str, n) {
		return str?.length > n ? str.substring(0, n - 1) + "..." : str;
	}

	return (
		<header
			className="banner"
			style={{
				backgroundImage: `url(
					https://image.tmdb.org/t/p/original${movies?.backdrop_path}
				)`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="banner_container">
				<h1 className="banner_title">
					{movies?.name || movies?.tittle || movies?.original_name}
				</h1>
				<div className="banner_buttons">
					<button className="banner_button">Play</button>
					<button className="banner_button">My List</button>
				</div>
				<h1 className="banner_description">
					{truncate(movies?.overview, 150)}
				</h1>
			</div>
			<div className="banner_colorfade"></div>
		</header>
	);
}

export default Banner;
