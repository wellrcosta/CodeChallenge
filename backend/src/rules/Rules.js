import knex from 'knex';

class Rules {
	async ProcessData(request, response) {
		const { cpf, uf, dateOfBirth, value, months } = request.body;

		let tax = 0.0;
		switch (uf) {
			case 'MG':
				tax = 1.0;
				break;
			case 'SP':
				tax = 0.8;
				break;
			case 'RJ':
				tax = 0.9;
				break;
			case 'ES':
				tax = 1.11;
				break;
			default:
				break;
		}

		if (value < 30000)
			return response.json({
				error: 'Valor não pode ser menor que R$: 30.000,00',
				fail: true,
			});

		if (months > 360)
			return response.json({ error: 'Não é permitido ultrapassar 360 meses' });

		await knex.create;
	}
}

export default new Rules();
