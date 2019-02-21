
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients-recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients-recipes').insert([
        {
          ingredient_id: 1,
          recipe_id: 1,
          quantity: 1,
        },
        {
          ingredient_id: 2,
          recipe_id: 1,
          quantity: 1,
        },
        {
          ingredient_id: 3,
          recipe_id: 1,
          quantity: 1,
        },
        {
          ingredient_id: 4,
          recipe_id: 1,
          quantity: 1,
        },
        {
          ingredient_id: 5,
          recipe_id: 2,
          quantity: 1,
        },
        {
          ingredient_id: 6,
          recipe_id: 2,
          quantity: 1,
        },
        {
          ingredient_id: 7,
          recipe_id: 3,
          quantity: 1,
        },
        {
          ingredient_id: 8,
          recipe_id: 3,
          quantity: 1,
        },
        {
          ingredient_id: 9,
          recipe_id: 3,
          quantity: 1,
        },
        {
          ingredient_id: 5,
          recipe_id: 3,
          quantity: 1,
        },
        {
          ingredient_id: 9,
          recipe_id: 4,
          quantity: 1,
        },
        {
          ingredient_id: 10,
          recipe_id: 4,
          quantity: 1,
        },
        {
          ingredient_id: 11,
          recipe_id: 4,
          quantity: 1,
        },
      ]);
    });
};
