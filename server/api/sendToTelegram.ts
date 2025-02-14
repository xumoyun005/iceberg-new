import { defineEventHandler, readBody } from "h3";
import dotenv from "dotenv";

dotenv.config();

export default defineEventHandler(async (event) => {
  const { name, phone, category } = await readBody(event);

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const message = `🆕 Новый лид:

👤 Имя: ${name}
  
📞 Телефон номер: ${phone}
  
⚙️ Категория: ${category}
`;

  try {
    const response = await $fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        body: {
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        },
      }
    );
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
});
