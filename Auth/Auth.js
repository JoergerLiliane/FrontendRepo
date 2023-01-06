const bcrypt = require("bcryptjs")
const {store} = require("@/store");

exports.register = async (req, res) => {
    const { userName, passWord } = req.body;


    bcrypt.hash(passWord, 10).then(async (hash) => {
        await store.user.create({
            userName,
            password: hash,
        })
            .then((user) =>
                res.status(200).json({
                    message: "User successfully created",
                    user,
                })
            )
            .catch((error) =>
                res.status(400).json({
                    message: "User not successful created",
                    error: error.message,
                })
            );
    });
};
