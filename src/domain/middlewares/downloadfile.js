const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports=download_file=(req,res,next)=>{
    upload.single('image')
    next();
}