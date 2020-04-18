import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

const app = <App />;
const containerElement = document.getElementById('app');

ReactDOM.render(app, containerElement);
