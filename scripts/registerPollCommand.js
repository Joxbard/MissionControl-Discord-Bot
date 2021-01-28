import axios from 'axios';
import { applicationId, botToken, guildId } from './localVariables.js';

const url = `https://discord.com/api/v8/applications/${applicationId}/guilds/${guildId}/commands`;

const data = {
  name: 'poll',
  description: 'Do something with polls!',
  options: [{
    name: 'add',
    description: 'Add an option to a poll',
    type: 1,
    options: [{
      name: 'add_options',
      description: 'Format "<name_of_poll>" "<option1>" "<option2?>" ...',
      type: 3,
      required: true,
    }],
  }, {
    name: 'create',
    description: 'Create a poll',
    type: 1,
    options: [{
      name: 'create_options',
      description: 'Format "<name_of_poll>" "<option1?>" "<option2?>" ...',
      type: 3,
      required: true,
    }],
  }, {
    name: 'delete',
    description: 'Delete a poll',
    type: 1,
    options: [{
      name: 'delete_options',
      description: 'Format "<name_of_poll>"',
      type: 3,
      required: true,
    }],
  }, {
    name: 'help',
    description: 'Display all options available',
    type: 1,
  }, {
    name: 'remove',
    description: 'Remove an option from a poll',
    type: 1,
    options: [{
      name: 'remove_options',
      description: 'Format "<name_of_poll>" "<option1>" "<option2?>" ...',
      type: 3,
      required: true,
    }],
  }, {
    name: 'view',
    description: 'Display all available poll names',
    type: 1,
  }],
};

const headers = {
  Authorization: `Bot ${botToken}`,
};

axios.post(url, data, {
  headers,
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(`Some error occurred error=${error}`);
  });
