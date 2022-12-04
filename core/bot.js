const TelegramBot = require("node-telegram-bot-api");
const config = require("config");

const TOKEN = config.get("token");

const bot = new TelegramBot(TOKEN, { polling: true });

bot.setMyCommands([
  { command: "/help", description: "Information" },
  { command: "/get", description: "Get random GIF" },
  { command: "/trends", description: "Trending GIFs" },
  { command: "/search", description: "Search by Artist name or GIFs title" },
]);

module.exports = { bot };
