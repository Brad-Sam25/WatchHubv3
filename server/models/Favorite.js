const { Schema, model } = require('mongoose');

const favoriteSchema = new Schema({
    profileFrom: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    movieId : {
        type: String
    },
    movieTitle: {
        type: String
    },
});

const Favorite = model('Favorite', favoriteSchema);

module.exports = Favorite;
