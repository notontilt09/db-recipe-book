
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          name: 'barbacoa tacos',
          dish_id: 1,
          instructions: 'make barbacoa tacos'
        },
        {
          name: 'taco salad',
          dish_id: 1,
          instructions: 'make taco salad'
        },
        {
          name: 'bolognese',
          dish_id: 2,
          instructions: 'make bolognese pasta'
        },
        {
          name: 'butter noodles',
          dish_id: 2,
          instructions: 'make butter noodles'
        },

      ]);
    });
};
