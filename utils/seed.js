const connection = require('../config/connection');
const  { User, Thought} = require('../models');

const { getName, getThought, getReaction} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Create empty array to hold thoughts
  const thoughts = [];

  // Add users to the users array
  for (let i = 0; i < 5; i++) {
    // Get some random thought objects using a helper function that we imported from ./data
    
    const username = getName(i);
    
    const email = `${username.split(' ')[0]}@gmail.com`;

    const thoughtText = getThought(i);

    const reactions = getReaction(i);

    thoughts.push({
      thoughtText,
      username,
      reactions,

    });

    users.push({
      username,
      email,
      
    });
   
  }

  await Thought.collection.insertMany(thoughts);
  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
