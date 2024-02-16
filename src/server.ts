import app from './app';
import mongoose from "mongoose";

const port: Number = 9000;

// database connection
async function connect() {
   try {
      await mongoose.connect('mongodb://127.0.0.1:27017/test');
      console.log("database connection established");

      app.listen(port, () => {
         console.log(`Example app listening on port ${port}`)
      })
   } catch (error) {
      console.log("failed to connect database connection", error);
   }
}
connect();