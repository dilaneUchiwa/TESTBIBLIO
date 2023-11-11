const Auteur = require("../../models/Auteur")

exports.add_auteur=(req,res)=>{
    Auteur.create(
        {
            nom: req.body.nom,
        }
    )
    .then((auteur)=>res.status(201).send({auteur}))
    .catch(error=>res.status(500).send({error}))
}