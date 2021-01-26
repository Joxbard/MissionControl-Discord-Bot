import { parseNameWithOptions } from '../utils/stringUtils.js';

// Command Words
const COMMAND_WORD_ADD = 'add';
const COMMAND_WORD_CREATE = 'create';
const COMMAND_WORD_DELETE = 'delete';
const COMMAND_WORD_HELP = 'help';
const COMMAND_WORD_REMOVE = 'remove';
const COMMAND_WORD_VIEW = 'view';

const handleAdd = (name, options) => {
  console.log(COMMAND_WORD_ADD, name, options);
};

const handleCreate = (name, options) => {
  console.log(COMMAND_WORD_CREATE, name, options);
};

const handleDelete = (name) => {
  console.log(COMMAND_WORD_DELETE, name);
};

const handleHelp = () => {
  console.log(COMMAND_WORD_HELP);
};

const handleRemove = (name, options) => {
  console.log(COMMAND_WORD_REMOVE, name, options);
};

const handleView = () => {
  console.log(COMMAND_WORD_VIEW);
};

export const handlePollMessage = (commandText) => {
  const commandWord = commandText.split(' ', 1)[0];
  const commandOptions = commandText.substring(commandWord.length + 1);

  switch (commandWord.toLowerCase()) {
    case COMMAND_WORD_ADD: {
      const [name, ...options] = parseNameWithOptions(commandOptions);
      handleAdd(name, options);
      break; }
    case COMMAND_WORD_CREATE: {
      const [name, ...options] = parseNameWithOptions(commandOptions);
      handleCreate(name, options);
      break; }
    case COMMAND_WORD_DELETE:
      handleDelete(commandOptions.trim());
      break;
    case COMMAND_WORD_HELP:
      handleHelp();
      break;
    case COMMAND_WORD_REMOVE: {
      const [name, ...options] = parseNameWithOptions(commandOptions);
      handleRemove(name, options);
      break; }
    case COMMAND_WORD_VIEW:
      handleView();
      break;
    default:
      console.log(`Provided command word is not valid commandWord=${commandWord}`);
  }
};
