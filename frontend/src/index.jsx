import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import App from './components/App/App';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);
const containerElement = document.getElementById('app');

ReactDOM.render(app, containerElement);
