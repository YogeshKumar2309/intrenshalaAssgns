import mongoose from "mongoose";

declare const process: {
    env: { MONGODB_URI?: string };
    exit: () => never;
};

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("MONGO_DB Connected successfully");
    } catch (error) {
        console.error("MONGO_DB connection failed : ", error);
        process.exit();
    }
}