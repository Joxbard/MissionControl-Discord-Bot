# MissionControl-Discord-Bot
A multipurpose Discord bot for managing server interactions

## Prerequisites
Install Node 12.X  
Run the initial repo setup with `npm run setup`  
Create a `.env` file and fill in the required values.  
Fill in the values in `scripts/localVariables.js`

## Local Development
To test certain scenarios, modify `mocks/dev-mock.json` to have the proper data that would be passed into the `event` object.  
Run `npm run dev` to run the mock locally.
To run a specific mock scenario, run `npm run mock <path_to_mock>`.    

## Adding Commands
Create a file in the `scripts` directory with the correct command schema (can model off of `scripts/registerPollCommand.js`).  
Add a npm script in `package.json` in the naming style of `npm run register:<commandName>`  
Fill in the correct values for `scripts/localVariables.js`  
Run `npm run register:<commandName>`  

## Deploying
Make sure the local AWS variables are set properly.  
Run `npm run deploy` to deploy the code and infra to AWS.  

## Resources
[Discord Dev Docs](https://discord.com/developers/docs/intro)