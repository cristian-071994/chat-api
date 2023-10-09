const { Router } = require("express");
const {
  createConversation,
  createGroupConversation,
  getAllConversations,
} = require("./conversations.controllers");
const authenticate = require("../../middlewares/auth.middleware");
const {
  createConversationValidator,
  createGroupConversationValidatior,
} = require("./conversations.validator");

const router = Router();

//crear conversaciones
//obtener todas las conversaciones
//obetener una conversacion con todos los mensajes

//* /api/v1/conversations/

router.post("/", createConversationValidator, authenticate, createConversation);
router.post(
  "/group",
  createGroupConversationValidatior,
  authenticate,
  createGroupConversation
);
router.get("/:id", authenticate, getAllConversations);

module.exports = router;
