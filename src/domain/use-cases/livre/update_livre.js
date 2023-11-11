const Livre = require("../../models/Livre");

exports.update_livre=(req,res)=>{
    const {id}=req.body;
    delete req.body.id;
    console.log(id)
    Livre.update(req.body, { where :{id:id} } )
    .then((livre)=>res.status(200).send({livre}))
    .catch(error=>{
        
        if(error.name==='SequelizeUniqueConstraintError')res.status(409).send({error})
        else res.status(500).send({error})

    })
}