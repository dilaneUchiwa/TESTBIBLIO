const express=require('express');
const { add_genre } = require('../../domain/use-cases/genre/add_genre');
const { get_genre } = require('../../domain/use-cases/genre/get_genre');
const { retrieve_genre } = require('../../domain/use-cases/genre/retrieve_genre');
const validateSchema = require('../../domain/middlewares/validate');
const { addGenreSchema, getGenreSchema } = require('../../domain/schemas/Genre');

const router=express.Router();

router.post('',validateSchema(addGenreSchema()),add_genre);
router.get('',validateSchema(getGenreSchema()),get_genre);
router.get('/all',retrieve_genre);

module.exports=router