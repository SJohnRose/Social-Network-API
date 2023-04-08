const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    reactions: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
    },
    ]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = thoughtSchema;