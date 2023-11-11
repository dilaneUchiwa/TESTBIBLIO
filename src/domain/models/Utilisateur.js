// require('dotenv').config()

// const  { DataTypes }=require( 'sequelize');
// const { connection } = require('../utils/connection');
// const Livre = require('./Livre');

// const sequelize=connection();


// const Uilisateur=sequelize.define('utilisateur',
//     {
//         id:{
//             type:DataTypes.UUID,
//             primaryKey:true,
//             defaultValue:DataTypes.UUIDV4            
//         },
//         nom:{
//             type:DataTypes.STRING,
//             allowNull:false
//         },
//     }
// )

// Uilisateur.hasMany(Livre)

// Uilisateur.sync()
// .then(()=>console.log('Uilisateur synchronise'))
// .catch((error)=>console.log(`Echec synchronisation de Uilisateur : ${error}`))


// module.exports=Uilisateur