const mongoose = require('mongoose');

let BlogSchema = mongoose.Schema({
    model:{
      type:Number,
      required:true
    },
    make:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true,
        default:"white"
    },
    registration:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true,
        default:"anonymous"
    },
    previous_owners:{
        type:Array,
        required:false,
        default:"anonymous"
    },
    address:{
        type:String,
        required:true,
        default:"unknown"
    },
    date_created:{
        type: Date,
        required:false,
        default: Date.now
    }
});

module.exports = mongoose.model('Blogs', BlogSchema);