import {
  DynamoDBClient, GetItemCommand, PutItemCommand, UpdateItemCommand,
} from '@aws-sdk/client-dynamodb';
import { now } from '../utils/dateUtils.js';

const BASE_POLL_PARAMS = {
  TableName: process.env.TABLE_NAME_POLL,
};

// const mapToCreatePoll = ({
//   pollName, channelId, messageId, description = '',
// }) => ({
//   ...BASE_POLL_PARAMS,
//   Key: {
//     pollName: { S: pollName },
//     channelId: { S: channelId },
//   },
//   ExpressionAttributeValues: {
//     ':messageId': { S: messageId },
//     ':description': { S: description },
//     ':createdOn': { S: now() },
//     ':modifiedOn': { S: now() },
//   },
//   UpdateExpression: 'SET messageId=:messageId, description=:description, createdOn=if_not_exists(createdOn,:createdOn), modifiedOn=:modifiedOn',
// });

const mapToCreatePoll = ({
  pollName, channelId, messageId, description = '',
}) => ({
  ...BASE_POLL_PARAMS,
  Item: {
    pollName: { S: pollName },
    channelId: { S: channelId },
    messageId: { S: messageId },
    description: { S: description },
    createdOn: { S: now() },
    modifiedOn: { S: now() },
  },
});

const mapToGetPoll = ({
  pollName, channelId,
}) => ({
  ...BASE_POLL_PARAMS,
  Key: {
    pollName: { S: pollName },
    channelId: { S: channelId },
  },
  ConsistentRead: true,
});

export const createPoll = async (poll) => {
  const client = new DynamoDBClient({ region: 'us-east-1' });
  const command = new PutItemCommand(mapToCreatePoll(poll));
  console.log(command);
  try {
    const data = await client.send(command);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

export const getPoll = async (poll) => {
  const client = new DynamoDBClient({ region: 'us-east-1' });
  const command = new GetItemCommand(mapToGetPoll(poll));
  console.log(command);
  try {
    const data = await client.send(command);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

export const updatePoll = async (poll) => {

};

export const deletePoll = async (poll) => {

};
