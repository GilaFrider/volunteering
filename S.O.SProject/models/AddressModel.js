// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    //id : Int32Array,
    city : String,
    street : String,
    //numOfBuild: Int32Array
});


// Compile model from schema
const AddressModel = mongoose.model("addresses", AddressSchema);

export default AddressModel;