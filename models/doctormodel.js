import mongoose from "mongoose"

mongoose.connect('mongodb+srv://mdsifat0371:1234@cluster0.sjf4a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


const doctor_table = new mongoose.Schema({
    name: String,
    pass:String,
    doc_name:String,
    exp:String,
    about:String,
    speciality:String

});


export default mongoose.model("doctor", doctor_table);

