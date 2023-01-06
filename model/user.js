// user.js
const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
    },
    passWord: {
        type: String,
        minlength: 6,
        required: true,
    },
    role: {
        type: String,
        default: "Basic",
        required: true,
    },
})

const User = Mongoose.model("user", UserSchema)
module.exports = User
