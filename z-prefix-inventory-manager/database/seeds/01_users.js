/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'Airman', last_name: 'Snuffy', username: 'asdf', password: 'asdf'},
    {first_name: 'PFC', last_name: 'Schmuckatelli', username: '1234', password: '1234'},
    {first_name: 'Lieutenant', last_name: 'Butter', username: 'qwerty', password: 'qwerty'}
  ]);
};
