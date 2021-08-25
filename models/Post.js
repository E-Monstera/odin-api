const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = require('./Comment');

let PostSchema = new Schema(
    {
        author: {type:Schema.Types.ObjectId, ref:'User', required:true},
        content: {type:String},
        date: {type: Date, required: true},
        // photos: {type:String},   -Add at a later date
        likes: {type:Number, required:true, default:0},
        comments: [{type:Schema.Types.ObjectId, ref:'Comment', default: []}]
    }
)

module.exports = mongoose.model('Post', PostSchema)