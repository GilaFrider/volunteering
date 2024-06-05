import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FieldSchema = new Schema({
    name: String,
});

const FieldModel = mongoose.model("fields", FieldSchema);
export default FieldModel;