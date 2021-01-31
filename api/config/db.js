import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI_DEV, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

export default connectDB;
