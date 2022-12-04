const TelegramBot = require("node-telegram-bot-api");
const config = require("config");

const TOKEN = config.get("token");

const bot = new TelegramBot(TOKEN, { polling: true });

bot.setMyCommands([
  { command: "/help", description: "Information" },
  { command: "/trends", description: "Trending GIFs" },
  { command: "/get", description: "Get random GIF" },
  { command: "/search", description: "Search GIFs" },
]);

module.exports = { bot };
