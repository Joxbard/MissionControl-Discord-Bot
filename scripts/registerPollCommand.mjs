import axios from 'axios';
import { applicationId, botToken, guildId } from './localVariables.mjs';

const url = `https://discord.com/api/v8/applications/${applicationId}/guilds/${guildId}/commands`;

const data = {
  name: 'poll',
  description: 'Do something with polls!',
  options: [{
    name: 'add',
    description: 'Add an option to a poll',
    type: 1,
    options: [{
      name: 'poll_name',
      description: 'Name of the poll to add to',
      type: 3,
      required: true,
    }, {
      name: 'option',
      description: 'Option to add to the poll',
      type: 3,
      required: true,
    }],
  }, {
    name: 'create',
    description: 'Create a poll',
    type: 1,
    options: [{
      name: 'poll_name',
      description: 'Name of the poll to create',
      type: 3,
      required: true,
    }],
  }, {
    name: 'delete',
    description: 'Delete a poll',
    type: 1,
    options: [{
      name: 'poll_name',
      description: 'Name of the poll to delete',
      type: 3,
      required: true,
    }],
  }, {
    name: 'remove',
    description: 'Remove an option from a poll',
    type: 1,
    options: [{
      name: 'poll_name',
      description: 'Name of the poll to remove from',
      type: 3,
      required: true,
    }, {
      name: 'option',
      description: 'Option to remove from the poll',
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
