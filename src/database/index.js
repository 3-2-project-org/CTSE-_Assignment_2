import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect('mongodb+srv://thushanV:BejGNb8IGD3oy3Of@cluster0.iwrz5q1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected succesfully"))
    .catch((err) => console.log(err));

  mongoose.connection.on("disconnected", () => {
    console.log("Mongo DB disconnected");
  });
  mongoose.connection.on("connected", () => {
    console.log("Mongo DB connected");
  });
};

export default connectDB;