import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
	if(!confirmed) {
		return 'Chargement ... ';
	}

	return (
		<div className={ styles.container }>
			<Grid container spacing={3} justify="center">
					<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>Personnes Infectées</Typography>
							<Typography variant="h5">
								<CountUp start={0} end={ confirmed.value } duration={4} separator="." />
							</Typography>
							<Typography color="textSecondary" gutterBottom>{ new Date(lastUpdate).toDateString() }</Typography>
							<Typography variant="body2">Nombre de cas actifs du Covid-19</Typography>
						</CardContent>
					</Grid>

					<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>Guerries</Typography>
							<Typography variant="h5">
								<CountUp start={0} end={ recovered.value } duration={4} separator="." />
							</Typography>
							<Typography color="textSecondary" gutterBottom>{ new Date(lastUpdate).toDateString() }</Typography>							<Typography variant="body2">Nombre de personnes guerries du Covid-19</Typography>
						</CardContent>
					</Grid>

					<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>Décès</Typography>
							<Typography variant="h5">
								<CountUp start={0} end={ deaths.value } duration={4} separator="." />
							</Typography>
							<Typography color="textSecondary" gutterBottom>{ new Date(lastUpdate).toDateString() }</Typography>
							<Typography variant="body2">Nombre de personnes décedées suite au Covid-19</Typography>
						</CardContent>
					</Grid>
			</Grid>
		</div>
	);
}

export default Cards