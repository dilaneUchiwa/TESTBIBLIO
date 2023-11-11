const express=require('express');
const { add_auteur } = require('../../domain/use-cases/auteur/add_auteur');
const { get_auteur } = require('../../domain/use-cases/auteur/get_auteur');
const { retrieve_auteur } = require('../../domain/use-cases/auteur/retrieve_auteur');
const validateSchema = require('../../domain/middlewares/validate');
const { addAuteurSchema, getAuteurSchema } = require('../../domain/schemas/Auteur');

const router=express.Router();

router.post('',validateSchema(addAuteurSchema()),add_auteur);
router.get('',validateSchema(getAuteurSchema()),get_auteur);
router.get('/all',retrieve_auteur);

module.exports=router