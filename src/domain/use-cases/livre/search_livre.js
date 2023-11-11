const Auteur = require("../../models/Auteur");
const Genre = require("../../models/Genre");
const Livre = require("../../models/Livre");
const {Op} = require ('sequelize');

exports.search_livre=(req,res)=>{
   const {key , value} = req.body;
   
    key==='titre' && Livre.findAll({where:{titre:{[Op.like]:`%${value}%`}}})
      .then((livres)=>{
         if(!livres) res.status(404).send({message:'Not Found'})
         else res.status(200).send(livres)
      })
      .catch(error=>res.status(500).send({error}))

   key==='auteur' && Auteur.findAll({where :{nom:{[Op.like]:`%${value}%`}}})
      .then((auteurs)=>{

         const promises = auteurs.map((auteur) => {
            return Livre.findAll({ where: { auteurId: auteur.id } });
          });
  
          Promise.all(promises)
            .then((results) => {
              const livres = results.flat(); 
              res.status(200).send(livres);
            })
            .catch((error) => res.status(500).send({ error }));
        

      })
      .catch(error=>res.status(500).send({error}))
     

   key==='genre' && Genre.findAll({where :{nom:{[Op.like]:`%${value}%`}}})
   .then((genres)=>{

      const promises = genres.map((genre) => {
         return Livre.findAll({ where: { genrerId: genre.id } });
       });

       Promise.all(promises)
         .then((results) => {
           const livres = results.flat(); 
           res.status(200).send(livres);
         })
         .catch((error) => res.status(500).send({ error }));
     

   })
   .catch(error=>res.status(500).send({error}))
  
}