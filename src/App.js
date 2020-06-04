import React from 'react';

// Import Components
import { Cards, Chart, CountryPicker } from './components';

// Importing Styles
import styles from './App.module.css';

// Importing the API
import { fetchData } from './api';

class App extends React.Component {

	async componentDidMount() {
		const data = await fetchData();

		console.log(data);
	}

	render() {
		return (
			<div className={ styles.container }>
				<Cards />
				<CountryPicker />
				<Chart />
			</div>
		)
	}
}

export default App;