const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user")
const authRouter = require("./routes/auth")

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
    ).then(()=>console.log("Connected to MongoDB"))
    .catch((error) => {
        console.log(error)
    });

app.use(express.json());
app.use("/api/auth", authRouter) 
app.use("/api/users", userRouter) 


app.listen(process.env.PORT || 3001, () => {
    console.log("Backend Server is running!");
})