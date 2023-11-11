const Genre = require("../../models/Genre")

exports.get_genre=(req,res)=>{
    Genre.findByPk(req.body.id)
     .then((genre)=>{
        if(!genre) res.status(404).send({message:'Not Found'})
        else res.status(200).send(genre)
     })
     .catch(error=>res.status(500).send({error}))

     
}