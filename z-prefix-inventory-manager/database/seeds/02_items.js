/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {item_name: 'Monster', description: 'This is a test. ', quantity: '5513'},
    {item_name: 'Bang', description: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. ', quantity: '3135'},
    {item_name: 'C4', description: 'This is a test. This is a test. This is a test. This is a test. ', quantity: '202'},
    {item_name: 'Reign', description: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. ', quantity: '92'},
    {item_name: 'Red Bull', description: 'This is a test. This is a test. This is a test. This is a test. ', quantity: '1'}
  ]);
};
