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

export const handlePollMessage = (applicationCommandOption) => {
  const { name, options } = applicationCommandOption;
  const optionString = options && options[0].value;

  switch (name) {
    case COMMAND_WORD_ADD: {
      const [pollName, ...otherOptions] = parseNameWithOptions(optionString);
      handleAdd(pollName, otherOptions);
      break; }
    case COMMAND_WORD_CREATE: {
      const [pollName, ...otherOptions] = parseNameWithOptions(optionString);
      handleCreate(pollName, otherOptions);
      break; }
    case COMMAND_WORD_DELETE:
      handleDelete(optionString.trim());
      break;
    case COMMAND_WORD_HELP:
      handleHelp();
      break;
    case COMMAND_WORD_REMOVE: {
      const [pollName, ...otherOptions] = parseNameWithOptions(optionString);
      handleRemove(pollName, otherOptions);
      break; }
    case COMMAND_WORD_VIEW:
      handleView();
      break;
    default:
      console.log(`Provided sub command is not valid name=${name}`);
  }
};
