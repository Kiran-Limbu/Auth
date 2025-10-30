import mongoose from "mongoose";

async function connectToDB() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB Connection Sucessfully ✅");
    } catch (error) {
        console.error(`Something went wrong ${error.message}`);
        process.exit(1);
    }
}

export default connectToDB;