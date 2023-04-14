const names = [
    'Ashlin Brown',
    'Lynda Wilson',
    'David Lynch',
    'Mark Lister',
    'Peta Hills',
    'John Harrowfield',
    'Brian Clark',
    'Rachel Wills',
];

const thoughts = [
    'I think that is beautiful!',
    'I think that is awesome',
    'I think that is great',
    'What a wonderful world!',
    'I like the sunshine',
];

const reactions = [
    'Great',
    'Love it',
    'Like',
    'Sweet',
    'Clap',
];


// Returns a username from array
const getName = (ind) => {
    return names[ind];
}

// Returns a thought from array
// const getThoughts = (ind) => {
//     const thoughtList = [];
//     for (let i = 0; i < ind; i++) {
//         thoughtList.push({
//           thoughtText: thoughts[Math.floor(Math.random() * thoughts.length)],
//           username: names[Math.floor(Math.random() * names.length)],
//           reactions: getReactions(i),
//         });
//       }
//       return thoughtList;
    
// }


// Returns a reaction from array
// const getReactions = (ind) => {
//     const reactionList = [];
//     for (let i = 0; i < ind; i++) {
//         reactionList.push({
//           reactionBody: reactions[Math.floor(Math.random() * reactions.length)],
//           username: names[Math.floor(Math.random() * names.length)],
//         });
//       }
//       return reactionList;
    
// }

const getThought = (ind) => {
  return(thoughts[Math.floor(Math.random() * thoughts.length)])
}

const getReaction = (ind) => {
  return(reactions[Math.floor(Math.random() * reactions.length)])
}

// Export the functions for use in seed.js
module.exports = { getName, getThought, getReaction };
