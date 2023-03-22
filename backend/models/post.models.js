const mongoose = require("mongoose");
const postSchema = mongoose.Schema(
    {

        Game: {
            type: String,
            required: true
        },

        Board: {
            type: Array,
            required: true
        },

        Who: {
            type: String,
            required: true
        }
    },

    {
        timestamps: true
    }
)

module.exports = mongoose.model('connectfour', postSchema)