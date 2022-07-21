import React, { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import axios from "../config/axios";
import "../styles/Row.css";
import YouTube from "react-youtube";
const baseurl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetch_url, isLarge }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrilerUrl] = useState("");
	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(fetch_url);
			setMovies(response.data.results);
		}
		fetchData();
	}, [fetch_url]);
	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};
	function handleClick(movie) {
		console.log(movie.original_title);

		if (trailerUrl) {
			setTrilerUrl("");
		} else {
			movieTrailer(movie.original_title || "")
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					console.log(urlParams.get("v"));
					setTrilerUrl(urlParams.get("v"));
				})
				.catch((err) => {
					console.log("no tariler");
				});
		}
	}

	return (
		<div className="row">
			<h1>{title}</h1>
			<div className="row_posters">
				{movies.map((movie) =>
					movie.backdrop_path ? (
						<img
							key={movie.id}
							onClick={() => handleClick(movie)}
							className={`row_poster ${
								isLarge && "large_poster"
							}`}
							src={`${baseurl}${
								isLarge
									? movie.poster_path
									: movie.backdrop_path
							}`}
							alt={movie.name}
						/>
					) : null
				)}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	);
}

export default Row;
