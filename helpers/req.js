const { bot } = require("../core/bot");
const fetch = require("node-fetch");
const config = require("config");

const req = (msg, limit, searchStr = "") => {
  const chatID = msg.chat.id;
  const offset = (Math.random() * 1000).toFixed(0);

  let url = `${config.get("url")}&limit=${limit}&offset=${1}`;
  

  // if (searchStr) url += `&q=${searchStr}`;

  // console.log(url);

  fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      for (let i = 0; i < limit; i++) {
        let gif = data.data[i];
        let gifImg = gif.images.fixed_height.url;
        let user = data.data[0].user;

        let caption = {
          caption: `<b>GIF title:</b> ${gif.title}`,
          parse_mode: "HTML",
        };

        if (limit == 1) caption.reply_markup = { remove_keyboard: true };

        if (user) {
          caption.caption += `<b>\nCreated by:</b> <a href="${user.profile_url}">${user.username}</a>`;

          bot.sendAnimation(chatID, gifImg, caption);
        } else {
          bot.sendAnimation(chatID, gifImg, caption);
        }
      }
    })
    .catch((error) => console.log(error));
};

module.exports = { req };
