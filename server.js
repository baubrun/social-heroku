import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from 'dotenv'
import postRoutes from "./routes/posts.js"



const app = express()
dotenv.config();

const PORT = process.env.PORT || 5000
const options = {
    dbName: "Social",
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

/* =======================
Middleware
=========================*/


app.use(express.json({
    limit: "30mb",
    extended: true
}))
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())

app.use("/posts", postRoutes)


app.use("/", express.static("build"))


/* =======================
Mongoose

=========================*/



mongoose.connect(process.env.MONGODB_URI, options)
    .then(app.listen(PORT, () => {
        console.log("\nConnected to DB!\n")
        console.log("\nServer running on port:", PORT, "\n")
    }))
    .catch((err) => console.error(err))

mongoose.set('useFindAndModify', false);