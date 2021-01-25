import Discord from 'discord.js';
import { localToken } from './utils/localToken.js';

const client = new Discord.Client();
const token = process.env.TOKEN || localToken;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(token);
