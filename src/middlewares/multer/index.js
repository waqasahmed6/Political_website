import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
  cloud_name: 'dcooqqwpf', 
  api_key: '872317684584484', 
  api_secret: 'KTHSSBNn4D3iPTq3_OK-FtM7FiY' 
});

const getFolder = (folderName) => {
  return folderName.toUpperCase(); 
};
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: (req, file) => getFolder(req.params.folderName), 
    format: async (req, file) => file.originalname.split('.').pop(), 
    public_id: (req, file) => `${file.fieldname}_${Date.now()}${file.originalname}`, 
  },
});
const upload = multer({
  storage
});

export default upload



  // const storage = multer.memoryStorage({
  //     destination: "./upload/images",
  //     filename: async (req, file, cb) => {
  //        return cb(null,file.fieldname+"-"+Date.now()+"-"+file.originalname);
  //     }
      
  // });
  


