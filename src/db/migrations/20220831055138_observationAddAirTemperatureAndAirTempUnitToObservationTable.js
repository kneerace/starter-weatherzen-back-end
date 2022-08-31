
exports.up = function(knex) {
  
};

exports.up = function (knex) {
    return knex.schema.table("observations", (table) => {
      table.decimal("air_temperature");  // Add a new column
      table.string("air_temperature_unit")
    });
  };


exports.down = function(knex) {
  
};

exports.down = function (knex) {
    return knex.schema.table("observations", (table) => {
      table.dropColumn("air_temperature");
      table.dropColumn("air_temperature_unit")
    });
  };
  
