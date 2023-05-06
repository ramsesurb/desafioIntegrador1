import { Router } from "express";
import ChatManager from "../Controllers/ChatManager.js";
const chat = new ChatManager("../Data/Chat.json");

const realTimeChat = Router();

//vista home productos
realTimeChat.get("/", async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
  const chats = await chat.getChat();
  res.render("chat", { productos: chats });
});
export default realTimeChat;
