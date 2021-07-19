const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const commentSchema=new Schema({
   
   username:{
        type:String,
        required:true,
        trim:true,
    },
    userId:{
        type:String,
        required:true,
        trim:true,
    },
    movieId:{
        type:Number,
        required:true,
        trim:true,
    },
    comment:{
        type:String,
        required:true,
        trim:true,
    },
    date:{
        type:String, 
        required:true,
        trim:true,  
    }


});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;