import { messages } from './texts.js';
import { getUpdates, sendMessage } from './methods.js';

async function handleUpdates() {
  const updates = await getUpdates();
  
  if (!updates.ok || !updates.result.length) {
    return;
  }

  for (const update of updates.result) {
    const chatId = update.message?.chat.id;
    const text = update.message?.text;

    if (text === "/start") {
      await sendMessage(chatId, messages.welcome);
    }

    await getUpdates(update.update_id + 1);
  }
}

setInterval(handleUpdates, 3000);
console.log("bot is running.");
