import mongoose from "mongoose";

const connectToDb = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log(`Connected to MongoDb`);
  } catch (error) {
    console.log(`Failed to Connect To MongoDB`);
  }
};

export default connectToDb;
