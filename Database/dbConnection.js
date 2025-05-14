import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

const connectToDatabase = async () => {
    try{

        if(DB_URI) {
            await mongoose.connect( DB_URI);
            console.log("Databse Connected");
        } else {
            const error = new Error("URI is not defined.");
            throw error;
        }

    } catch(e) {
        console.log(e.message)
    }
}

export default connectToDatabase;