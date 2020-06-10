import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	pallete: {
		primary: {
			main: '#F3A126',
		},
		secondary: {
			light: '#21A05F',
			main: '#21AE1E',
			// dark: será calculada com base palette.secondary.main,
			contrastText: '#333333',
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
});

export default theme;
