const express=require('express');
const { add_livre } = require('../../domain/use-cases/livre/add_livre');
const { get_livre } = require('../../domain/use-cases/livre/get_livre');
const { retrieve_livre } = require('../../domain/use-cases/livre/retrieve_livre');
const validateSchema = require('../../domain/middlewares/validate');
const { addLivreSchema, getLivreSchema, deleteLivreSchema, searchLivreSchema, updateLivreSchema } = require('../../domain/schemas/Livre');
const { delete_livre } = require('../../domain/use-cases/livre/delete_livre');
const { search_livre } = require('../../domain/use-cases/livre/search_livre');
const { update_livre } = require('../../domain/use-cases/livre/update_livre');
const downloadfile = require('../../domain/middlewares/downloadfile');

const router=express.Router();

// on place un middleware pour verifier le corps des requetes en utilisant le schema du cas d'utiliation
// un autre pour telecharger les fichiers sur le serveur

router.post('',validateSchema(addLivreSchema()),add_livre);
router.get('',validateSchema(getLivreSchema()),get_livre);
router.get('/search',validateSchema(searchLivreSchema()),search_livre)
router.get('/all',retrieve_livre);
router.put('',validateSchema(updateLivreSchema()),update_livre)
router.delete('',validateSchema(deleteLivreSchema()),delete_livre)

module.exports=router