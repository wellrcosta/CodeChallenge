exports.up = function (knex) {
	return knex.schema.createTable('Lending', (table) => {
		table.increments().primary();
		table.string('cpf', 12).notNullable();
		table.string('uf', 3).notNullable();
		table.string('dateOfBirth', 9).notNullable();
		table.integer('value').notNullable();
		table.decimal('months').notNullable();
		table.decimal('tax').notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('Lending');
};
