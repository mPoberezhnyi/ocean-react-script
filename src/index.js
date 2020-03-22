import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreService from './services/store-service'
import { StoreServiceProvider } from './components/StoreServiceContext'
import App from './components/App';

const storeService = new StoreService();

ReactDOM.render(
	<StoreServiceProvider value={storeService}>
		<Router>
			<App />
		</Router>
	</StoreServiceProvider>,
  document.getElementById('root')
);
