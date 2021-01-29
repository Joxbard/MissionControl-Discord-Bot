// Command Words
const COMMAND_WORD_ADD = 'add';
const COMMAND_WORD_CREATE = 'create';
const COMMAND_WORD_DELETE = 'delete';
const COMMAND_WORD_REMOVE = 'remove';
const COMMAND_WORD_VIEW = 'view';

// Options
const OPTION_POLL_NAME = 'poll_name';
const OPTION_OPTION = 'option';

const handleAdd = (name, option) => {
  console.log(COMMAND_WORD_ADD, name, option);
};

const handleCreate = (name) => {
  console.log(COMMAND_WORD_CREATE, name);
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

export const handlePollMessage = (applicationCommandOption) => {
  const { name, options } = applicationCommandOption;
  console.log(options);
  const extraOptions = parseOptions(options);
  console.log(extraOptions);

  switch (name) {
    case COMMAND_WORD_ADD:
      handleAdd(extraOptions[OPTION_POLL_NAME], extraOptions[OPTION_OPTION]);
      break;
    case COMMAND_WORD_CREATE:
      handleCreate(extraOptions[OPTION_POLL_NAME]);
      break;
    case COMMAND_WORD_DELETE:
      handleDelete(extraOptions[OPTION_POLL_NAME]);
      break;
    case COMMAND_WORD_REMOVE:
      handleRemove(extraOptions[OPTION_POLL_NAME], extraOptions[OPTION_OPTION]);
      break;
    case COMMAND_WORD_VIEW:
      handleView();
      break;
    default:
      console.log(`Provided sub command is not valid name=${name}`);
  }
};
