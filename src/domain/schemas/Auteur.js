const {z}=require('zod');

function addAuteurSchema(){
    return z.object({
        nom:z.string({required_error: "nom is required",invalid_type_error: "nom must be a string",}),
    });
}
function getAuteurSchema(){
    return z.object({
        id:z.string({required_error: "id is required",invalid_type_error: "id must be a string",}).uuid({invalid_type_error:"id must be a valid uuid"}),
    });
}
module.exports={
    addAuteurSchema,
    getAuteurSchema
}