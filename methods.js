import { BASE_URL } from './config.js';

export async function sendMessage(chatId, text) {
  const url = `${BASE_URL}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;
  await fetch(url);
}

export async function getUpdates(offset = 0) {
  const url = `${BASE_URL}/getUpdates${offset ? `?offset=${offset}` : ''}`;
  const response = await fetch(url);
  return await response.json();
}