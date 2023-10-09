const { check, validationResult } = require("express-validator");
const validateResult = require("../../middlewares/validator.middleware");

const createConversationValidator = [
  check("userId", "Error en la propiedad userId")
    .exists()
    .withMessage("No se incluye el id del creador de la conversacion")
    .notEmpty()
    .withMessage("El id del usuario no debe estar vacio")
    .isInt()
    .withMessage("El id del usuario debe ser un numero entero"),
  check("participantId", "Error en la propiedad participantId")
    .exists()
    .withMessage("No se incluye el id del participante de la conversacion")
    .notEmpty()
    .withMessage("El id del participante no debe estar vacio")
    .isInt()
    .withMessage("El id del participante debe ser un numero entero"),
  validateResult,
];

const createGroupConversationValidatior = [
  check("userId", "Error en la propiedad userId")
    .exists()
    .withMessage("No se incluye el id del creador de la conversacion")
    .notEmpty()
    .withMessage("El id del usuario no debe estar vacio")
    .isInt()
    .withMessage("El id del usuario debe ser un numero entero"),
  check("participantsIds", "Error en la propiedad participantsIds")
    .exists()
    .withMessage("No se incluye los ids de los particiantes de la conversacion")
    .notEmpty()
    .withMessage("La propiedad Ids de los participantes no debe estar vacio")
    .isArray({ min: 0 })
    .withMessage("la informacion debe ser un arreglo con longitud mayor a 0"),
  check("title", "Error en el titulo de la conversacion")
    .exists()
    .withMessage("No se incluye el titulo de la conversacion")
    .notEmpty()
    .withMessage("El titulo no debe estar vacio")
    .isString()
    .withMessage("El valor del titulo debe ser string")
    .isLength({ min: 1, max: 30 })
    .withMessage("La longitud del titulo debe ser entre 1 y 30 caracteres"),
  validateResult,
];

module.exports = {
  createConversationValidator,
  createGroupConversationValidatior,
};
