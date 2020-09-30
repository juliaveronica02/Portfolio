const FilmSchema = require("../models/Filmschema")

module.exports = ({
    createMovie: (req,res) => {
        FilmSchema.create
    }
})