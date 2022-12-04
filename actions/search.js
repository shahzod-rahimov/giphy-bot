const { bot } = require("../core/bot");
const { req } = require("../helpers");

bot.onText(/\/search/, async (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "You can search by Artist name or GIF title!\n\nWhat do you want search?",
    { reply_markup: { remove_keyboard: true } }
  );
  bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const str = msg.text;
    bot.sendMessage(msg.chat.id, "How many GIFs do you want to show?", {
      // reply_markup: { keyboard: [["1", "3", "5"]], resize_keyboard: true },
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [
            { text: "1", callback_data: "1" },
            { text: "3", callback_data: "2" },
            { text: "5", callback_data: "3" },
          ],
        ],
      }),
    });

    // bot.onText(/'1'/, async (msg) => req(msg, 1));
    // bot.onText(/'3'/, (msg) => req(msg, 3));
    // bot.onText(/'5'/, (msg) => req(msg, 5));
    bot.on("callback_query", function onCallbackQuery(callbackQuery) {
      const action = callbackQuery.data;
      const msg = callbackQuery.message;
      // console.log(msg);

      if (action == "1") req(msg, 1, str);
      else if (action == "2") req(msg, 3, str);
      else req(msg, 5, str);

      // bot.deleteMessage(msg.chat.id, msg.message_id);
    });

    // bot.on("message", (msg) => {
    //   bot.editMessageText("❗Please choose one of the numbers below", {
    //     chat_id,
    //     message_id,
    //   });
    // });
  });
});
