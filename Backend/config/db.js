import mongoose from 'mongoose';

export async function connectToDB() {
    try {
        console.log("Connecting to Mongo DB :|");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Mongo DB :)");
    }
    catch (error) {
        console.log("Unable to connect to DB T_T");
        console.log(error)
    }
}