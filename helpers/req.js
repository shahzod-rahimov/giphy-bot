const { bot } = require("../core/bot");
const fetch = require("node-fetch");
const config = require("config");

const req = (msg, limit) => {
  const chatID = msg.chat.id;
  const offset = (Math.random() * 500).toFixed(0);
  const url = `${config.get("url")}&limit=${limit}&offset=${offset}`;

  fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.data[0].user);
      /*
      {
  avatar_url: 'https://media4.giphy.com/avatars/cybermarian/OaeLsFh4s1Oe.gif',
  banner_image: '',
  banner_url: '',
  profile_url: 'https://giphy.com/channel/cybermarian/',
  username: 'cybermarian',
  display_name: 'Cyber Marian',
  description: 'Polish YouTuber',
  instagram_url: 'https://instagram.com/cybermarianpl',
  website_url: 'https://www.youtube.com/user/Cybermarianpl',
  is_verified: false
}
      */
      for (let i = 0; i < limit; i++) {
        let gif = data.data[i];
        let gifImg = gif.images.fixed_height.url;
        let user = data.data[0].user;
        let caption = {
          caption: `GIF title: ${gif.title}\nCreated by <a href="${user.profile_url}">${user.username}</a>`,
          parse_mode: "HTML",
        };
        if (user) {
          bot.sendAnimation(chatID, gifImg);
        } else {
          console.log("Yo'q");
          bot.sendAnimation(chatID, gifImg);
        }
      }
    })
    .catch((error) => console.log(error));
};

module.exports = { req };
