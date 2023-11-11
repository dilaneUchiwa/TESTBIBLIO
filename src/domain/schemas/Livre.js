const {z}=require('zod');

function addLivreSchema(){
    return z.object({
        titre:z.string({required_error: "nom is required",invalid_type_error: "nom must be a string",}),
        image:z.string({invalid_type_error: "image must be a string",}).optional(),
        annee:z.string({invalid_type_error: "annee must be a number",}).optional(),
        edition:z.string({invalid_type_error: "edition must be a string",}).optional(),
        auteurId:z.string({required_error: "auteurId is required",invalid_type_error: "auteurId must be a string",}).uuid({invalid_type_error:"auteurId must be a valid uuid"}),
        genreId:z.string({required_error: "genderId is required",invalid_type_error: "genderId must be a string",}).uuid({invalid_type_error:"genreId must be a valid uuid"}),
    });
}
function getLivreSchema(){
    return z.object({
        id:z.string({required_error: "id is required",invalid_type_error: "id must be a string",}).uuid({invalid_type_error:"id must be a valid uuid"}),
    });
}
function deleteLivreSchema(){
    return z.object({
        id:z.string({required_error: "id is required",invalid_type_error: "id must be a string",}).uuid({invalid_type_error:"id must be a valid uuid"}),
    });
}
function searchLivreSchema(){
    return z.object({
        key:z.enum(["titre","auteur","genre"],{invalid_type_error :"keymust be titre, auteur or genre"}),
        value:z.string({required_error: "value is required",invalid_type_error: "value must be a string",})
    })
}
function updateLivreSchema(){
    return z.object({
        id:z.string({required_error: "id is required",invalid_type_error: "id must be a string",}).uuid({invalid_type_error:"id must be a valid uuid"}),
        auteurId:z.string({invalid_type_error: "auteurId must be a string",}).uuid({invalid_type_error:"auteurId must be a valid uuid"}).optional(),
        genreId:z.string({invalid_type_error: "genderId must be a string",}).uuid({invalid_type_error:"genreId must be a valid uuid"}).optional(),
        titre:z.string({invalid_type_error: "nom must be a string",}).optional(),
        image:z.string({invalid_type_error: "image must be a string",}).optional(),
        annee:z.string({invalid_type_error: "annee must be a number",}).optional(),
        edition:z.string({invalid_type_error: "edition must be a string",}).optional(),
    });
}

module.exports={
    addLivreSchema,
    getLivreSchema,
    deleteLivreSchema,
    searchLivreSchema,
    updateLivreSchema
}