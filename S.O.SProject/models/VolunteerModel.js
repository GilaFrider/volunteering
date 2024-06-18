
import mongoose from "mongoose";


const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
    name: String



});


const VolunteerModel = mongoose.model("volunteers", VolunteerSchema, 'volunteers');

export default VolunteerModel;