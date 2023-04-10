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
]


// Gets a random element from array
const getRandomItem = (arr) => arr[Math.floor(Math.random()*arr.length)];

// Gets a random username
const getRandomName = () => {
    return getRandomItem(names);
}

// Gets a random thought
const getRandomThoughts = () => {
    return getRandomItem(thoughts)
}

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts };
