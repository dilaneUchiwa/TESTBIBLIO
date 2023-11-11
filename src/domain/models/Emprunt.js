// require('dotenv').config()

// const  { DataTypes }=require( 'sequelize');
// const { connection } = require('../utils/connection');

// const Livre = require('./Livre');
// const Utilisateur = require("./Utilisateur"

// )
// const sequelize=connection();


// const Emprunt=sequelize.define('emprunt',
//     {
//         LivreID:{
//             type:DataTypes.UUID,
//             references :{
//                 model: Livre,
//                 key: 'id'
//             }
//         },
//         utilisateurID:{
//             type:DataTypes.UUID,
//             references :{
//                 model:Utilisateur,
//                 key:'id'
//             }
//         },
//         status : DataTypes.STRING,
//         returnAt: DataTypes.DATE,
        
//     }
// )

// Emprunt.belongsToMany(Livre)
// Emprunt.belongsToMany(Utilisateur)

// Emprunt.sync()
// .then(()=>console.log('Emprunt synchronise'))
// .catch((error)=>console.log(`Echec synchronisation de Emprunt : ${error}`))


// module.exports=Emprunt