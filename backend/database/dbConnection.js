import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URL, {
    dbName: "RESTAURANT",
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database successfully');
  })
  .catch((err) => {
    console.log(`Database connection error: ${err}`);
  });
};
