import React, { useEffect, useState } from 'react';
import './Tiles.css';
const Tile = ({ image, title, description }) => {
	return (
		<div className="tile">
			<img src={image} alt="" />
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
};

const TilesContainer = () => {
	const [news, setNews] = useState([]);
	const getnews = async () => {
		const url = 'https://crypto-news16.p.rapidapi.com/news/top/5';
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '9af052fe70msh52ce9833838bc8ep1d3525jsn9a812639b7b1',
				'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com',
			},
		};

		try {
			const response = await fetch(url, options);
			const result = await response.json();
			setNews(result);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getnews();
	}, []);

	return (
		<div className="tiles">
			{news.slice(0, 2).map((data, index) => (
				<Tile
					key={index}
					title={data.title}
					description={data.description}
					// image={data.image}
				/>
			))}
		</div>
	);
};

export default TilesContainer;
