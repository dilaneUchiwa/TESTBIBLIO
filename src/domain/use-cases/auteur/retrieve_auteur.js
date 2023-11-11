const Auteur = require("../../models/Auteur")

exports.retrieve_auteur=(req,res)=>{
    
    Auteur.findAll()
     .then((auteurs)=>{
        res.status(200).send(auteurs)
     })
     .catch(error=>res.status(500).send({error}))

     
}