
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'flour tortilla'},
        {name: 'barbacoa'},
        {name: 'onion'},
        {name: 'cilantro'},
        {name: 'ground beef'},
        {name: 'taco shell'},
        {name: 'linguine'},
        {name: 'red wine'},
        {name: 'cream'},
        {name: 'egg noodles'},
        {name: 'butter'},
      ]);
    });
};
