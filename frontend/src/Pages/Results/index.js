import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';

import './styles.css';

import api from '../../Services/api';
const ButtonHome = styled(Button)({
	'&:hover': { background: '#21AE1E' },
	background: '#21AE1E',
	boxShadow: '0px 4px 4px rgba(135, 135, 135, 0.25)',
	borderRadius: '6px',
	width: '514px',
	padding: '0 30px',
	height: 44,
	color: 'white',
});

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			width: 554,
			paddingTop: '50px',
		},
	},
}));

export default function Home(props) {
	const history = useHistory();
	const classes = useStyles();
	const [data, setData] = useState({});

	useEffect(() => {
		localStorage.setItem('idTransacao', 'HEY'); /// REMOVER ISSO EM PROD
		let local = localStorage.getItem('idTransacao');
		if (!local) {
			history.push('/');
		}
		api.get('transacao/' + local).then((response) => {
			setData(response.data);
		});
	}, [data, history]);

	return (
		<div className={classes.root}>
			<div className='Header'>
				<h1>Veja a simulação para o seu empréstimo antes de efetivar</h1>
			</div>
			<div className='Form'>
				<div className='ValorRequerido'>
					<h1>VALOR REQUERIDO:</h1>
					<h2>{data.value}</h2>
				</div>
				<div className='TaxaDeJuros'>
					<h1>TAXA DE JUROS</h1>
					<h2>{data.tax}</h2>
				</div>
				<div className='PagarEm'>
					<h1>PAGAR EM:</h1>
					<h2>{data.months}</h2>
				</div>
				<div className='ProjecaoDasParcelas'>
					<h1>PROJEÇÃO DAS PARCELAS</h1>
					<h2>{data.parcelas}</h2>
				</div>
				<ButtonHome>EFETIVAR O EMPRÉSTIMO -></ButtonHome>
			</div>
		</div>
	);
}
