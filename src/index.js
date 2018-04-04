import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

//styling
import './css/style/site.css';

//Components
import Navbar from './components/LandingPage/Navbar';
import App from './components/App';
import NotFound from './components/404/NotFound';
import MainPage from './components/MainPage/MainPage';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import OneOnOne from './components/OneOnOne/OneOnOne';
import Shop from './components/Shop/Shop';


const Root = () => {
	return(
		<div>
			<Navbar />
			<BrowserRouter>
				<div>
					<Match exactly pattern='/' component={ MainPage } />
					<Match exactly pattern='/About' component={ About } />
					<Match exactly pattern='/Blog' component={ Blog } />
					<Match exactly pattern='/OneOnOne' component={ OneOnOne } />
					<Match exactly pattern='/Shop' component={ Shop } />
					<Miss component={ NotFound } />
				</div>			
			</BrowserRouter>
		</div>
	)
};

render(<Root />, document.getElementById('main'));