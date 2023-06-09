const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


module.exports = {
  // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then(async (thoughts) => {
            const thoughtObj = {
            thoughts,
            
            };
            return res.json(thoughtObj);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    // Get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then(async (thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json({
                thought,
                
                })
        )
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    // // create a new thought
    // createThought(req, res) {
    // Thought.create(req.body)
    //     .then((thought) => res.json(thought))
    //     .catch((err) => res.status(500).json(err));
    // },

};
