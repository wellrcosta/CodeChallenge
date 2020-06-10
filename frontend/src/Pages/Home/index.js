import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';

import './styles.css';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			width: 554,
			paddingTop: '50px',
		},
	},
}));

const ButtonHome = styled(Button)({
	'&:hover': { background: '#F3A126' },
	background: '#F3A126',
	boxShadow: '0px 4px 4px rgba(135, 135, 135, 0.25)',
	borderRadius: '6px',
	width: '514px',
	padding: '0 30px',
	height: 44,
	color: 'white',
});

export default function Home(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className='Header'>
				<h1>Preencha o formulário abaixo para simular</h1>
			</div>
			<div className='Form'>
				<form className='HomeForm' autoComplete='off' autoCapitalize='true'>
					<TextField
						id='outlined-basic'
						label='CPF'
						value=''
						variant='outlined'
						className='sizedContainer'
						color='primary'
					/>
					<TextField
						id='outlined-basic'
						label='UF'
						value=''
						variant='outlined'
						className='sizedContainer'
					/>
					<TextField
						id='outlined-basic'
						label='DATA DE NASCIMENTO'
						value=''
						variant='outlined'
						className='sizedContainer'
					/>
					<TextField
						id='outlined-basic'
						label='VALOR REQUERIDO'
						value=''
						variant='outlined'
						className='sizedContainer'
					/>
					<TextField
						id='outlined-basic'
						label='MESES PARA PAGAR'
						value=''
						variant='outlined'
						className='sizedContainer'
					/>
					<ButtonHome>SIMULAR</ButtonHome>
				</form>
			</div>
		</div>
	);
}
