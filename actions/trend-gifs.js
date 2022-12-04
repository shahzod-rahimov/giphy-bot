const { bot } = require("../core/bot");
const { req } = require("../helpers");

bot.onText(/\/trends/, async (msg) => {
  bot.sendMessage(msg.chat.id, "Choose sending GIF's limit", {
    reply_markup: {
      keyboard: [["Most 3", "Most 5"]],
      resize_keyboard: true,
    },
  });

  bot.onText(/Most 3/, async (msg) => req(msg, 3));
  bot.onText(/Most 5/, async (msg) => req(msg, 5));
});

/*
https://api.giphy.com/v1/gifs/trending?api_key=Wsw6IEDWzTOrcGSuCTvsQP81u5iGGIGI&limit=3&rating=g

https://api.giphy.com/v1/gifs/search?api_key=Wsw6IEDWzTOrcGSuCTvsQP81u5iGGIGI&q=tree&limit=3&offset=3&rating=g&lang=en
*/
