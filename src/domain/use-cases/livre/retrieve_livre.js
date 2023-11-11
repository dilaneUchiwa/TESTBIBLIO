const Livre = require("../../models/Livre")

exports.retrieve_livre=(req,res)=>{
    Livre.findAll()
     .then((livres)=>{
        res.status(200).send(livres)
     })
     .catch(error=>res.status(500).send({error}))

     
}