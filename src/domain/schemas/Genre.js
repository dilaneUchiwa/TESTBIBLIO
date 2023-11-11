const {z}=require('zod');

function addGenreSchema(){
    return z.object({
        nom:z.string({required_error: "nom is required",invalid_type_error: "nom must be a string",}),
    });
}
function getGenreSchema(){
    return z.object({
        id:z.string({required_error: "id is required",invalid_type_error: "id must be a string",}).uuid({invalid_type_error:"id must be a valid uuid"}),
    });
}
module.exports={
    addGenreSchema,
    getGenreSchema
}