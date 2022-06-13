const { Schema, model } = require('mongoose');
const { stringify } = require('querystring');

const userSchema = newSchema( 
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: 'Username required'
        },

        email: {
            type: String, 
            uniqie: true,
            required: 'Username Required',
            match: [/.+@.+\..+/]
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;