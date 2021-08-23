const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for the comments
let CommentSchema = new Schema(
    {
        author: {type: Schema.Types.ObjectId, ref: 'User', default: null},
        content: {type: String, required: true, maxLength: 300},
        date: {type: Date, required: true},
        img: {type: String},
        likes: {type: Number, default: 0},
        comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
    }
)

module.exports = mongoose.model('Comment', CommentSchema);