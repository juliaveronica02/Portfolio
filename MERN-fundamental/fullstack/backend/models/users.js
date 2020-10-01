const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")
const saltRounds = 12;

const UserModels = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
UserModels.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds)
    next();
})