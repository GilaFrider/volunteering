import mongoose, { Mongoose } from "mongoose";

Mongoose.set("strictQuery",false);

export default async function connectDB(){
    await mongoose.connect("mongodb+srv://g0548457103:tLe5WxN9ge8UAOH9@volunteeringinthecommun.uqm5tby.mongodb.net/");
        console.log("Connected to DB");
}