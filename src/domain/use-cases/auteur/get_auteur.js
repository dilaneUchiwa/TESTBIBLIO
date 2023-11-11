const Auteur = require("../../models/Auteur")

exports.get_auteur=(req,res)=>{
    Auteur.findByPk(req.body.id)
     .then((auteur)=>{
        if(!auteur) res.status(404).send({message:'Not Found'})
        else res.status(200).send(auteur)
     })
     .catch(error=>res.status(500).send({error}))

     
}