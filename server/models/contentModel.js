const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const contentSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "Please insert the title"]
        },
        story: {
            type: String,
            require: [true, "Please insert the story"]
        },
        image: {
            type: String,
            require: false,
        }
    },
    {
        timestamps: true
    }
)

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;