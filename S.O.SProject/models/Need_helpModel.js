// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const Need_helpSchema = new Schema({
    name: String
});


const Need_helpModel = mongoose.model("Needs_help", Need_helpSchema,"Needs_help");

export default Need_helpModel;