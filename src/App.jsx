import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
	Navbar,
	Hero,
	About,
	Experience,
	Tech,
	Works,
	Feedbacks,
	Contact,
	StarsCanvas,
	Footer,
} from './components';

const App = () => {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-cover bg-hero-pattern bg-no-repeat bg-center'>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<div className='z-0 relative'>
					<Contact />
					<StarsCanvas />
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
