require('dotenv').config()
const {Sequelize}=require('sequelize')

exports.connection=()=>{
    return new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USER,process.env.DATABASE_PASSWORD,{
        host:process.env.DATABASE_HOST,
        dialect:'mysql',
        port:3306
    });
}