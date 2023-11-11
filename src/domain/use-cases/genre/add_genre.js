const Genre = require("../../models/Genre")

exports.add_genre=(req,res)=>{
    Genre.create(
        {
            nom: req.body.nom,
        }
    )
    .then((genre)=>res.status(201).send({genre}))
    .catch(error=>res.status(500).send({error}))
}