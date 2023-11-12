const Auteur = require("../../models/Auteur")
const Genre = require("../../models/Genre")
const Livre = require("../../models/Livre")

exports.retrieve_livre=(req,res)=>{
    Livre.findAll({include:[
      {model:Auteur},
      {model:Genre}
    ]})
     .then((livres)=>{
        res.status(200).send(livres)
     })
     .catch(error=>res.status(500).send({error}))

     
}