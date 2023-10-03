import mongoose from "mongoose"
const {Schema} = mongoose

const blogSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    likes: Number
});

blogSchema.set('dbName', 'my_portfolio_db')

const Blog = mongoose.model('Blog', blogSchema)

export default Blog;