let express = require('express');
let multer = require('multer');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      let fileName = file.originalname.trim();
      let newFileName = fileName.replace(/ /g, '-');
      let fileExtension = fileName.split('.').pop();
      let fileNameWithoutExtension = newFileName.split('.').shift();
      let randomString =Date.now() + '-' + Math.round(Math.random() * 1E9)
      let finalFileName = fileNameWithoutExtension + '-' + randomString + '.' + fileExtension;
      cb(null,finalFileName)
    }
  })
  
const upload = multer({ storage: storage })
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send('Hello World!');
});


app.post('/uploads', upload.array(['images'],10), (req, res) => {
  console.log(req.file);
  res.send('success!');
});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});