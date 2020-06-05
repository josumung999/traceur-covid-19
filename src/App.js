import React from 'react';

// Import Components
import { Cards, Chart, CountryPicker } from './components';

// Importing Styles
import styles from './App.module.css';

// Importing the API
import { fetchData } from './api';

// Importing the Image
import coronaImage from './images/image.png';

class App extends React.Component {
	state = {
		data: {},
		country: '',
	}

	async componentDidMount() {
		const fetchedData = await fetchData();

		this.setState({ data: fetchedData });
	}

	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);

		this.setState({ data: fetchedData, country: country });

	}

	render() {
		const { data, country } = this.state;

		return (
			<div className={ styles.container }>

				<img className={ styles.image } src={coronaImage} alt="COVID-19"/>
				<Cards data={data}/>
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country}/>
			</div>
		)
	}
}

export default App;