// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String
});


// Compile model from schema
const FieldModel = mongoose.model("fields", StudentSchema);

export default FieldModel;