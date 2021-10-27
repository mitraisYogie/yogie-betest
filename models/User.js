// import mongoose 
import mongoose from "mongoose";
 
// Buat Schema
const User = mongoose.Schema({
    userId:{
        type: String,
        required: true,
        unique : true
    },
    userName:{
        type: String,
        required: true
    },
    accountNumber:{
        type: String,
        required: true,
        unique : true
    },
    emailAddress:{
        type: String,
        required: true
    },
    identityNumber:{
        type: String,
        required: true
    },
});
 
// export model
export default mongoose.model('User', User);