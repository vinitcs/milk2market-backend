import dotenv from 'dotenv';
import { app } from "./app.js";
import connectDB from "./db/db.js";

const port = process.env.PORT || 4000;

dotenv.config({
  path: "./.env"
})

connectDB().then(()=>{
  app.on("error", (error)=>{
    console.log("ERR: ", error);
    throw error;
    
  })
})


app.listen(port, () => {
  console.log(`Server is running at port": ${port}`);
});
