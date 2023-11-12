const Livre = require("../../models/Livre")

exports.get_livre=(req,res)=>{
    Livre.findByPk(req.body.id,{include:[
      {model:Auteur},
      {model:Genre}
    ]})
     .then((livre)=>{
        if(!livre) res.status(404).send({message:'Not Found'})
        else res.status(200).send(livre)
     })
     .catch(error=>res.status(500).send({error}))

     
}