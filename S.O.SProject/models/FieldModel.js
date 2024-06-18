// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const FieldSchema = new Schema({
    name: String
});


// Compile model from schema
const FieldModel = mongoose.model("fields", FieldSchema);

export default FieldModel;