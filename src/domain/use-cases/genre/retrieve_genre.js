const Genre = require("../../models/Genre")

exports.retrieve_genre=(req,res)=>{
    Genre.findAll()
     .then((genres)=>{
        res.status(200).send(genres)
     })
     .catch(error=>res.status(500).send({error}))

     
}