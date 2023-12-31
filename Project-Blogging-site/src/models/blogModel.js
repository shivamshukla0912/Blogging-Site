const mongoose = require('mongoose');
const objectId= mongoose.Schema.Types.ObjectId
const blogSchema = new mongoose.Schema( {
    title: {
        type: String,
        required:true,
        trim:true
    },
    body: {
        type:String,
        required:true,
        trim:true
    },
    authorId: {
        type:objectId,
        ref:"author",
        required:true
    },
    tags: {
        type:[String],  
    },
     category:{
         type:String,
         required:true
     },
     subcategory:{
        type:[String]
     },
     deletedAt:{
        type:Date,
        default:null
     },
      isDeleted: {
        type:Boolean,
        default: false
      },
       publishedAt: {
        type:Date,
        default:null
       }, 
       isPublished: {
        type:Boolean,
        default: false
    },
},
 { timestamps: true });

module.exports = mongoose.model('blog', blogSchema)