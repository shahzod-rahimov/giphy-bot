const { bot } = require("../core/bot");

bot.onText(/\/start/, async (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Hello ${msg.chat.first_name}`);
});

// bot.getUserProfilePhotos(chatId).then((photo) => {
//   console.log(photo.photos[0][2].file_unique_id);
//   bot.sendPhoto(chatId, photo.photos[0][2].file_id);
// });

// bot.sendMessage(msg.chat.id, "Welcome", {
//   reply_markup: {
//     keyboard: [["Sample text", "Second sample"], ["Keyboard"], ["I'm robot"]],
//   },
// });

// bot.sendPoll(chatId, "Select gender", ["Man", "Woman"]);
