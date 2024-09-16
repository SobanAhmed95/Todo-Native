import mongoose from "mongoose";
import { DBName } from "../Constants.js";

const Database  = async () => {
    try {
       const dbConnection = await mongoose.connect(`${process.env.DB_URI}/${DBName}`)
       console.log(`DB Connection Successfully Connected !! DB Host: ${dbConnection.connection.host}`)
    } catch (error) {
      console.log(`Errorr ${error.massage}`);
        
    } 
}

export { Database }