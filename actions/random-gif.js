const { req } = require("../helpers");
const { bot } = require("../core/bot");

bot.onText(/\/get/, async (msg) => req(msg, 1));
