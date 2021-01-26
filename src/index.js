import Discord from 'discord.js';
import { handlePollMessage } from './handlers/pollHandler.js';
import { localToken } from './utils/localToken.js';

const client = new Discord.Client();
const token = process.env.TOKEN || localToken;

const TRIGGER_POLL = '!poll';

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', (message) => {
  const { content } = message;

  if (!content) {
    return;
  }

  const triggerWord = content.split(' ', 1)[0];
  const commandText = content.substring(triggerWord.length + 1);

  switch (triggerWord.toLowerCase()) {
    case TRIGGER_POLL:
      handlePollMessage(commandText);
      break;
    default:
      console.log(`Provided trigger word is not valid triggerWord=${triggerWord}`);
  }
});

client.login(token);
