require('dotenv').config();
require('./config/database');

const Puppy = require('./models/puppy');

(async function() {
  await Puppy.deleteMany({});
  const puppies = await Puppy.create([
    {name: 'Bell', age: 4, breed: 'Dobermann'},
  ]);
  console.log(puppies)
  process.exit();
  
})();