import React from 'react';
import Routes from './routes';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
	palette: {
		primary: orange,
		secondary: {
			light: '#21A05F',
			main: '#21AE1E',
			contrastText: '#333333',
		},
	},
	overrier: {
		'@global': {
			html: {
				backgroundColor: '#E5E5E5',
			},
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes />
		</ThemeProvider>
	);
}

export default App;
