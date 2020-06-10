module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './lending.db3',
		},
		migrations: {
			directory: './migrations',
		},
	},
};
