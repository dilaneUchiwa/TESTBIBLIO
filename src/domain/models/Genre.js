const  { DataTypes }=require( 'sequelize');
const { connection } = require('../utils/connection');

const sequelize=connection();


const Genre=sequelize.define('genre',
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


//Genre.hasMany(Livre,{foreignKey:'id'})

Genre.sync()
.then(()=>console.log('Genre synchronise'))
.catch((error)=>console.log(`Echec synchronisation de Genre : ${error}`))


module.exports=Genre