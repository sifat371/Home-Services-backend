import mongoose from "mongoose"

mongoose.connect('mongodb+srv://mdsifat0371:1234@cluster0.sjf4a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')



//--------------------Schema for User Table---------------------//
const user_table = new mongoose.Schema({
    name: String,
    pass:String
});


export default mongoose.model("user", user_table);

