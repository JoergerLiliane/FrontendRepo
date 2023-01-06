// db.js function connects to MongoDB and exports
const Mongoose = require("mongoose")
const localDB = `mongodb://localhost:27017/role_auth`
const connectDB = async () => {
    await Mongoose.connect(localDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("MongoDB Connected")
}
module.exports = connectDB

/*
*The function connectDB awaits for the connection, which contains the URI and options as a second parameter.
*If it connects without errors, it will log out MongoDB Connected.
* Error issues will be fixed while connecting to the database.
* After this, it exported the function for use in the server.

*/
