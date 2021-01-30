import { createMessage, pinMessage } from '../api/discord/discordChannel.js';
import { createPoll, getPoll } from '../dao/pollDao.js';

// Command Words
const COMMAND_WORD_ADD = 'add';
const COMMAND_WORD_CREATE = 'create';
const COMMAND_WORD_DELETE = 'delete';
const COMMAND_WORD_REMOVE = 'remove';
const COMMAND_WORD_VIEW = 'view';

// Options
const OPTION_POLL_NAME = 'poll_name';
const OPTION_OPTION = 'option';
const OPTION_DESCRIPTION = 'description';

const handleAdd = (name, option) => {
  console.log(COMMAND_WORD_ADD, name, option);
};

const handleCreate = async (name, description, channelId) => {
  console.log(COMMAND_WORD_CREATE, `name=${name}`, `description=${description}`, `channelId=${channelId}`);
  try {
    const getPollResponse = await getPoll({ pollName: name, channelId });
    const isPollExistant = !!(getPollResponse && getPollResponse.Item);
    let messageId = isPollExistant ? getPollResponse.Item.messageId.S : '';

    if (!isPollExistant) {
      const createMessageResponse = await createMessage(channelId, {
        embed: {
          title: name,
          color: 14596161,
          description,
        },
      });
      const { data } = createMessageResponse;
      console.log(data);
      messageId = data.id;
      await createPoll({
        messageId, pollName: name, description, channelId,
      });
    }
    await pinMessage(channelId, messageId);
  } catch (error) {
    console.log(error);
  }
};

const handleDelete = (name) => {
  console.log(COMMAND_WORD_DELETE, name);
};

const handleRemove = (name, option) => {
  console.log(COMMAND_WORD_REMOVE, name, option);
};

const handleView = () => {
  console.log(COMMAND_WORD_VIEW);
};

const parseOptions = (options) => options.reduce((o, curr) => {
  // eslint-disable-next-line no-param-reassign
  o[curr.name] = curr.value;
  return o;
}, {});

export const handlePollMessage = async (applicationCommandOption, body) => {
  const { name, options } = applicationCommandOption;
  const { channel_id: channelId, guild_id: guildId } = body;
  const extraOptions = parseOptions(options);

  switch (name) {
    case COMMAND_WORD_ADD:
      await handleAdd(extraOptions[OPTION_POLL_NAME], extraOptions[OPTION_OPTION]);
      break;
    case COMMAND_WORD_CREATE:
      await handleCreate(extraOptions[OPTION_POLL_NAME], extraOptions[OPTION_DESCRIPTION], channelId);
      break;
    case COMMAND_WORD_DELETE:
      await handleDelete(extraOptions[OPTION_POLL_NAME]);
      break;
    case COMMAND_WORD_REMOVE:
      await handleRemove(extraOptions[OPTION_POLL_NAME], extraOptions[OPTION_OPTION]);
      break;
    case COMMAND_WORD_VIEW:
      await handleView();
      break;
    default:
      console.log(`Provided sub command is not valid name=${name}`);
  }
};
