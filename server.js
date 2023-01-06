const express = require("express")
const app = express()
const PORT = 2002//npm run dev to start the server
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

//function connects to MongoDB and imports
const connectDB = require("./db");

//Connecting the Database
connectDB();

//error handler that catches every unhandledRejection error
//If an unhandledRejection error occurs, it logs out the error and closes the server with an exit code of 1.

const server = app.listen(PORT, () =>
    console.log(`Server Connected to port ${PORT}`)
)
// Handling Error
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))

    // Express middleware function that will grant access to the user's data from the body

    const app = express()
    app.use(express.json())
})

app.use("/api/auth", require("./Auth/route"))
