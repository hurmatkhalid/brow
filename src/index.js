import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</>
);

reportWebVitals();
