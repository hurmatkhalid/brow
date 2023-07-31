// this file has use at start therefore its a hook
// WE ARE MAKING A CUSTOM HOOK
import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = 'e0f824d25bcb443fa';

const useGoogleSearch = (term) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			fetch(
				`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
			)
				.then((response) => response.json())
				.then((result) => {
					setData(result);
				});
		};
		fetchData();
	}, [term]);
	return { data };
};

export default useGoogleSearch;
