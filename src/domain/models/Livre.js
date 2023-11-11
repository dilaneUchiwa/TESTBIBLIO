const  { DataTypes }=require( 'sequelize');
const { connection } = require('../utils/connection');
const Auteur = require('./Auteur');
const Genre = require('./Genre');

const sequelize=connection();


const Livre=sequelize.define('livre',
    {
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4            
        },
        titre:{
            type:DataTypes.STRING,
            unique:true,
            allowNull:false
        },
        image:{
            type:DataTypes.STRING,
        },
        annee:{
            type:DataTypes.INTEGER,
        },
        edition:{
            type:DataTypes.STRING,
        }
    }
);

// Genre.hasMany(Livre);
// Auteur.hasMany(Livre);

Livre.belongsTo(Auteur)
Livre.belongsTo(Genre)

Livre.sync()
.then(()=>console.log('Livre synchronise'))
.catch((error)=>console.log(`Echec synchronisation de Livre : ${error}`))


module.exports=Livre