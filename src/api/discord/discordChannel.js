/* eslint-disable camelcase */
import axios from 'axios';
import { BASE_DISCORD_URL, BASE_HEADERS } from './discordCommon.js';

// Path Variables
const CHANNEL_ID = '{channel.id}';
const MESSAGE_ID = '{message.id}';

// Paths
const CHANNEL_BASE_PATH = `${BASE_DISCORD_URL}/channels/${CHANNEL_ID}`;
const CHANNEL_CREATE_MESSAGE = `${CHANNEL_BASE_PATH}/messages`;
const CHANNEL_PIN_MESSAGE = `${CHANNEL_BASE_PATH}/pins/${MESSAGE_ID}`;

// https://discord.com/developers/docs/resources/channel#create-message
export const createMessage = (
  channelId, {
    content, nonce, tts, file, embed, payload_json, allowed_mentions, message_reference,
  },
) => axios.post(
  CHANNEL_CREATE_MESSAGE.replace(CHANNEL_ID, channelId), {
    content, nonce, tts, file, embed, payload_json, allowed_mentions, message_reference,
  },
  { headers: BASE_HEADERS },
);

// https://discord.com/developers/docs/resources/channel#add-pinned-channel-message
export const pinMessage = (
  channelId, messageId,
) => axios.put(
  CHANNEL_PIN_MESSAGE.replace(CHANNEL_ID, channelId).replace(MESSAGE_ID, messageId),
  undefined,
  { headers: BASE_HEADERS },
);
