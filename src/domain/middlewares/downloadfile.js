const multer = require('multer');
const path=require('path')


const storage = multer.diskStorage({
    destination:function(req,filr,cb){
        cb(null,'uploads')
    },
    filename:function(req,filr,cb){
        cb(null,file.filename+'-'+Date.now()+Path,extnane(file,originalname));
    }
})
const upload = multer({ storage: storage });

module.exports=download_file=(req,res,next)=>{
    upload.single('image')
    next();
}