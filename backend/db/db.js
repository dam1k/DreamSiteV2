
import mongoose, { connect } from "mongoose";

const connectDB = async () => {
     try {
          const connection = await mongoose.connect(process.env.MONGO_URI, {
               useUnifiedTopology: true,
               useNewUrlParser: true
          })
          console.log(`MongoDB connected: ${connection.connection.host}`)
     }
      catch (error){
          console.log(error);
          process.exit(1);
     }
     }

export default connectDB