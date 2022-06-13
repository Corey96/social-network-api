const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Thought required',
            minlength: 1,
            maxlength: 280,
        },

        createdAt: {
            type: Date,
            default : Date.now,
        },

        username: {
            type: String,
            required: true,
        },

        reactions: [ReactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;