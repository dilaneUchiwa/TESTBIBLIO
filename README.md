
#### create a databse and .env file at  like

PORT=
DATABASE_HOST=
DATABASE_NAME=
DATABASE_USER=
DATABASE_PASSWORD=

### 
src/prensentation/routes   ==> nos differentes routes

###
src/domain/models ==> modele de donnee avec l'ORM sequelize
src/domain/middleware ==> les differents middleware du serveur
src/domain/utils ==> les outils que j'utilise
src/domain/schema ==> les differents schema utilise par le middleware de schema

# Note 
Le front-end a besoin des auteurs , genres pour la creation des livres .

il faudra les cree via les endpoints :

POST    /api/auteur    {nom:nom}
POST    /api/genre    {nom:nom}


# Docs Api 

