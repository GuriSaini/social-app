const express = require("express");
const app = express();
require('dotenv').config()
const { default: connection } = require("./config/db");
const cors = require("cors");
const routes = require("./router/routes");
const PORT = process.env.PORT || 3002
app.use(cors())
app.use(express.json())

app.use("/api",routes)


app.listen(PORT,()=>{
    connection.on("error", (error) => {
        console.log(error);
      });
      connection.once("connected", () => {
        console.log("Database Connected");
        console.log(`Server start on ${PORT}`)
      });
    
})