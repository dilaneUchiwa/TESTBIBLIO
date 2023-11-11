require('dotenv').config()
const express= require('express');
const cors=require('cors')
const {Sequelize} =require('sequelize');
const { connection } = require('./domain/utils/connection');

// nos routeurs pour la redirection des appels
const auteurRouter=require('../src/presentation/routes/auteur_router');
const genreRouteur=require('../src/presentation/routes/genre_router');
const livreRouter=require('../src/presentation/routes/livre_router');

// on cree l'application express et on la parametre
const app=express();

app.use(express.json()); // cors des requetes en json
app.use(cors());         // controle des origines d'appel


// on teste la connexon avec la base de donnee en recuperant notre fonction connection

const sequelize=connection();

sequelize.authenticate()
.then(()=>console.log('connexion a la base de donnee reussiE'))    
.catch((error)=>console.log(`probleme de connexion a la base de donnee ${error}`))


// on definit les endpoints de l'appli express

app.use('/api/livre',livreRouter);
app.use('/api/auteur',auteurRouter);
app.use('/api/genre',genreRouteur);


app.listen(process.env.PORT,()=>console.log(`server is listen on port ${process.env.PORT}`))