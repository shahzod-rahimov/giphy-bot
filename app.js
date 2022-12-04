import fetch from "node-fetch";
import { bot } from "./core/bot.js";
import { start } from "./actions/index";
// import TelegramBot from "node-telegram-bot-api";
// import config from "config";

// const TOKEN = config.get("token");
// import { start } from "./actions";

const url =
  "https://api.giphy.com/v1/gifs/trending?api_key=Wsw6IEDWzTOrcGSuCTvsQP81u5iGGIGI&limit=2&rating=g";

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json"
//   },
// };

// const bot = new TelegramBot(TOKEN, { polling: true });

start();



bot.onText(/\/help/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[0];

  bot.sendMessage(chatId, resp);
});

/*
{
  categories: [],
  created_at: '2020-01-05 13:42:24.40636',
  icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  id: 'J59yH_aHS0iNzKeTgP4n6A',
  updated_at: '2020-01-05 13:42:24.40636',
  url: 'https://api.chucknorris.io/jokes/J59yH_aHS0iNzKeTgP4n6A',
  value: "Chuck Norris don't elect presidents, he select them."
}
*/

bot.onText(/\/joke/, (msg, match) => {
  const chatId = msg.chat.id;

  fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // bot.sendMediaGroup(chatId, [
      //   { type: "photo", media: data.icon_url },
      //   { type: "photo", media: data.icon_url },
      // ]);
      // bot.sendPhoto( chatId,  data.icon_url, {caption: "asnasdkasdj"} );
      // bot.sendMessage(chatId, data.value);
      bot.sendAnimation(chatId, data.data[1].images.original.url);
      // console.log(data.data[0].images.original.url);
    })
    .catch((err) => console.error("error:" + err));
});

// Listen for any kind of message. There are different kinds of
// messages.
// bot.on("message", (msg) => {
//   const chatId = msg.chat.id;
//   // send a message to the chat acknowledging receipt of their message
//   console.log(msg);
//   bot.sendMessage(chatId, msg.text);
// });
