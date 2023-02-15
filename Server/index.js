require('dotenv').config();
const express = require('express');
const app = express();
const multer = require('multer');
require('./Database/Conn');
const cors = require('cors');
const controllers = require('./Controllers/Controller');
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
const port = process.env.PORT || 4000;
// storage
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.pdf');
    },
  }),
}).single('image');
app.post('/upload', upload, controllers.Message);
app.post('/message', controllers.Message);
app.post('/Register', upload, controllers.Register);
app.post('/Login', controllers.Login);
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
