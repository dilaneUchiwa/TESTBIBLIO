const {z}=require('zod');

function validateSchema(schema){

    return (req,res,next)=>{
        try{
            schema.parse(req.body);
            next();
        }catch(error){
            res.status(400).json({error});
        }
    }

}
module.exports=validateSchema