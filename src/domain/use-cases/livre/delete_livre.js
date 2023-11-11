const Livre = require("../../models/Livre")

exports.delete_livre=(req,res)=>{
    Livre.destroy({where:{id:req.body.id}})
     .then((livre)=>{
        if(!livre) res.status(404).send({message:'Not Found'})
        else res.status(200).send({message:"successful delete"})
     })
     .catch(error=>res.status(500).send({error}))

     
}