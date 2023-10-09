const { check, validationResult } = require("express-validator");
const validateResult = require("../../middlewares/validator.middleware");

const createConversationMessageValidator = [
  check("content", "Error con la propiedad content")
    .exists()
    .withMessage("No se incluye el contenido del mensaje")
    .notEmpty()
    .withMessage("No puedes enviar un mensaje vacio"),
  check("senderId", "Error la propiedad senderId")
    .exists()
    .withMessage("No se incluye el id de quien envia el mensaje")
    .notEmpty()
    .withMessage("El senderId no debe estar vacio")
    .isInt()
    .withMessage("El valor de la propiedad senderId debe ser numero entero"),
  validateResult,
];

module.exports = {
  createConversationMessageValidator,
};

// construir una expresion regular para nombres ?
