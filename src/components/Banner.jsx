import React from "react";

const Banner = ({ movie }) => {
	console.log("movie가 Banner들어왔나?", movie);
	return (
		<div
			className="banner"
			style={{
				backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`,
			}}
		>
			<div className="banner-info">
				<h1>{movie.title}</h1>
				<p>{movie.overview}</p>
			</div>
		</div>
	);
};

export default Banner;
