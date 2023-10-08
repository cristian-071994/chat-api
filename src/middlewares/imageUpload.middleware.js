const multer = require("multer");
const path = require("node:path");

//crear una instancia de multer
const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(__dirname, "../../public"),
    filename: (req, file, cb) => {
      const date = Date.now();
      cb(null, `${date}-${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 500 * 1024, //500 kb
  },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.includes("image")) {
      //devuelve true or false
      return cb({
        status: 400,
        error: "Flie not accepted",
        message: "Only images files are allowed",
      });
    }
    cb(null, true);
  },
});

module.exports = upload;
