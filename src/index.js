import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreService from './services/store-service'
import { StoreServiceProvider } from './components/StoreServiceContext'
import ErrorBoundary from './components/ErrorBoundary';
import store from './store'
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const storeService = new StoreService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<StoreServiceProvider value={storeService}>
				<Router>
					<App />
				</Router>
			</StoreServiceProvider>
		</ErrorBoundary>
	</Provider>,
  document.getElementById('root')
);
