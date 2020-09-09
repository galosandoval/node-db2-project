exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments();
    table.string("make", 20).notNullable().index();
    table.string("model", 20).notNullable().index();
    table.integer("VIN").notNullable().unique().index();
    table.integer("mileage").notNullable();
    table.string("transmission");
    table.string("title-status");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
