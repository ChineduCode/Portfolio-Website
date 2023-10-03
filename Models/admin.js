import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    firstname : {
        type : String, 
        required : true
    },
    lastname : {
        type : String, required : true
    },
    email : {
        type : String, 
        required : true
    },
    password: {
        type : [], 
        required : true
    }
},
{
    timestamps: true
})

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema)

export default Admin;