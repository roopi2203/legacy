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
        images: {
            type: [String],
            validate: {
                validator: function(v) {
                    return v.length <= 5;
                },
                message: "You can only upload up to 5 images."
            },
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;