const Livre = require("../../models/Livre")

exports.add_livre=(req,res)=>{
    Livre.create(
        {
            titre: req.body.titre,
            //image: req.body.image,
            annee:req.body.annee,
            edition:req.body.edition,
            auteurId:req.body.auteurId,
            genreId: req.body.genreId
        }
    )
    .then((livre)=>res.status(201).send({livre}))
    .catch(error=>{
        
        if(error.name==='SequelizeUniqueConstraintError')res.status(409).send({error})
        else res.status(500).send({error})

    })
}