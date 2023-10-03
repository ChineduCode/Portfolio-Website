import mongoose from "mongoose"
const {Schema} = mongoose

const projectSchema = new Schema({
    screenshot : String,
    title : String,
    description : String
})

projectSchema.set('dbName', 'my_portfolio_db')

const Project = mongoose.model('Project', projectSchema)

export default Project;