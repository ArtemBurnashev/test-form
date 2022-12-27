import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from './app';

const application = ReactDOM.createRoot(document.getElementById(
	"application"
) as HTMLElement);
application.render(
	<Router>
		<App />
	</Router>,
);
