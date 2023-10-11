import mongoose from "mongoose";

// MongoDB connection URL and options
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export default async function connectDB(){
  // Connect to MongoDB
  mongoose.connect(process.env.MONGODB_URI, mongoOptions)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });

}