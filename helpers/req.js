const { bot } = require("../core/bot");
const fetch = require("node-fetch");
const config = require("config");

const req = (msg, limit, searchStr = "") => {
  const chatID = msg.chat.id;
  const offset = (Math.random() * 500).toFixed(0);

  let url = `${config.get("url")}&limit=${limit}&offset=${offset}`;

  if (!searchStr) url += `&q=${searchStr}`;

  fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < limit; i++) {
        let gif = data.data[i];
        let gifImg = gif.images.fixed_height.url;
        let user = data.data[0].user;

        let caption = {
          caption: `<b>GIF title:</b> ${gif.title}\n`,
          parse_mode: "HTML",
        };

        if (limit == 1) caption.reply_markup = { remove_keyboard: true };

        if (user) {
          caption.caption += `<b>Created by:</b> <a href="${user.profile_url}">${user.username}</a>`;

          bot.sendAnimation(chatID, gifImg, caption);
        } else {
          bot.sendAnimation(chatID, gifImg, caption);
        }
      }
    })
    .catch((error) => console.log(error));
};

module.exports = { req };
