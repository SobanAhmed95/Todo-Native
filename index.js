import { Database } from "./src/db/index.js";
import { app } from "./src/App.js";
import dotenv from "dotenv"

dotenv.config({
    path: "./.env",
})

const Port  = process.env.PORT || 5000

Database()
.then(() => {
    app.listen(Port , () => {
        console.log(`Server Listening on port http://localhost:${Port}`);
    })
})
.catch((err) => {
    console.log(`Database Connection Failed: ${err}`);
})
