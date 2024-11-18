const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');
const multer = require('multer');


const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });


router.post('/submit', upload.single('resume'), resumeController.uploadResume);


module.exports = router;
