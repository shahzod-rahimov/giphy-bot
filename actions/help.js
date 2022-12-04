const { bot } = require("../core/bot");

bot.onText(/\/help/, async (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `
<b>Bu bot giflarni qidirishda sizga yordam beradi</b>\n
/help — Information
/get — Get random GIF
/trends — Get GIF trends
`,
    { parse_mode: "html", reply_markup: { remove_keyboard: true } }
  );
});
