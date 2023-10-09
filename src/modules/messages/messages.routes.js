const { Router } = require("express");
const {
  createConversationMessage,
  getConversationMessages,
} = require("./messages.controllers");
const authenticate = require("../../middlewares/auth.middleware");
const { createConversationMessageValidator } = require("./messages.validators");
const router = Router();

router
  .route("/conversation/:id")
  .post(
    createConversationMessageValidator,
    authenticate,
    createConversationMessage
  )
  .get(authenticate, getConversationMessages);

module.exports = router;
