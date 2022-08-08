import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../constants/constants';
import Youtube from "react-youtube";

function RowPost(props) {
	const [movies, setMovies] = useState([]);
	const [urlId, setUrlId] = useState();

	useEffect(() => {
		axios.get(props.url).then(response => {
			setMovies(response.data.results)

		})
	}, []);

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	const handleMovieTrailer = (id) => {
		console.log(id);
		axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
			if (response.data.results.length !== 0) {
				setUrlId(response.data.results[0])
			}
		})
	}
	return (
		<div className='row'>
			<h2>{props.title}</h2>
			<div className='posters'>
				{movies.map((movie) =>

					<img onClick={() => handleMovieTrailer(movie.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + movie.backdrop_path}`} />
				)}
			</div>
			{urlId && <Youtube opts={opts} videoId={urlId.key} />}

		</div>
	)
}

export default RowPost