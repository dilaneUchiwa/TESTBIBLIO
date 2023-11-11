const  { DataTypes }=require( 'sequelize');
const { connection } = require('../utils/connection');

const sequelize=connection();


const Auteur=sequelize.define('auteur',
    {
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4            
        },
        nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
    }
);

// Auteur.hasMany(Livre,{foreignKey:'id'})

Auteur.sync()
.then(()=>console.log('Auteur synchronise'))
.catch((error)=>console.log(`Echec synchronisation de Auteur : ${error}`))


module.exports=Auteur