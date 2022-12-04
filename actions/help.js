const { bot } = require("../core/bot");

bot.onText(/\/help/, async (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `<b>Bu bot giflarni qidirishda sizga yordam beradi</b>\n\n/start — Botni ishga tushirish\n/help — Information`,
    { parse_mode: "html" }
  );
});
