import { InteractionResponseType, InteractionType, verifyKey } from 'discord-interactions';
import { handlePollMessage } from './handlers/pollHandler.js';

const HTTP_STATUS_CODE_200 = 200;
const HTTP_STATUS_CODE_401 = 401;

const TRIGGER_POLL = 'poll';

const ackPing = () => ({
  type: InteractionResponseType.PONG,
});

export const main = async (event) => {
  console.log(event);
  if (!process.env.IS_LOCAL) {
    const signature = event.params.header['x-signature-ed25519'];
    const timestamp = event.params.header['x-signature-timestamp'];
    const clientPublicKey = process.env.publicKey;
    const isVerifyKey = await verifyKey(event.rawBody, signature, timestamp, clientPublicKey);
    if (!isVerifyKey) {
      return {
        statusCode: HTTP_STATUS_CODE_401,
        description: '[UNAUTHORIZED] Invalid request signature',
      };
    }
  }

  if (event.body.type === InteractionType.PING) {
    return ackPing();
  }

  console.log(event.body);
  const { name, options } = event.body.data;
  switch (name) {
    case TRIGGER_POLL:
      handlePollMessage(options[0]);
      break;
    default:
      console.log(`Slash command not valid name=${name}`);
  }

  return {
    statusCode: HTTP_STATUS_CODE_200,
  };
};
