// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const Need_helpSchema = new Schema({
    name: String
});


// Compile model from schema
const Need_helpModel = mongoose.model("Needs_help", Need_helpSchema);

export default Need_helpModel;