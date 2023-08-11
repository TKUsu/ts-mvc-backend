import mongoose from "mongoose";
import config from "../config";

const connectDB = async () => {
  // const connection = await mongoose.connect(config.MONGO_URI);
  // console.log(`🟢 Mongo db connected:`, connection.connection.host);
  // return connection
  console.log(`${config.DB_USER}@${config.DB_DOMAIN} -P=${config.DB_PORT}`);
  
};

export default connectDB;