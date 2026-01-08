const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema ({

    name : String,
    email : String,
    mobile_no : Number,
    location: String,
    username:String,
    password:String,
    
},


 {
    timestamps: true 
  }

)

 const usersModel = mongoose.model('users' , usersSchema);
 module.exports = usersModel
 