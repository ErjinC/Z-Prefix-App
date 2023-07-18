/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('items', table => {
    table.increments('id');
    table.integer('userid').unsigned();
    table.foreign('userid').references(`id`).inTable('users').onDelete('cascade')
    table.string('item_name');
    table.string('description');
    table.string('quantity')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('items', table => {
    table.dropForeign('userid')
  })
  .then(() => {
    return knex.schema.dropTableIfExists('items')
  })
};
