import mongoose from 'mongoose'

const subscriberSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    }
},
{
    timestamps: true
})

const Subscriber = mongoose.models.Subscriber || mongoose.model('Subscriber', subscriberSchema)
export default Subscriber;