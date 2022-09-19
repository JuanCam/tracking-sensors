# Tracking App

The tracking app allows you to connect some sensors to view their values in real time.


To run the app in development mode, you need to have [Node.js](https://nodejs.org/en/) installed on your machine, also its recommended to have [yarn](https://yarnpkg.com/) installed for the front end project. To setup and run the WS server follow these steps:

- move to the `server` folder
- run `npm install`
- run `npm start`

To setup and run the front project, move to the `web` folder. If you want it without `yarn` take the following path:

- run `npm install`
- run `npm start`

With `yarn` is pretty similar:

- run `yarn install` or simply `yarn`
- run `yarn start`

## Notes about performace

A throttling approach was implemented to improve React's performance and try to avoid tons of re-renders in the page. This technique was applied in a custom hook wich is in charge of connect to the WS and update a state with all the senors on it. 

The good part of this is that it works, you can limit the number of times the state is updated per sensor with a throttle limit, this means that the state will be updated only each "throttle limit" times, hence this will cause fewer re-renders. Now the downside of this approach is that we may lose some important amount data if we have a large "throttle limit" and if the number of sensors grow more, throttling may not be enough, we will need another approach such as pagination or lazy loading the cards components for the sensors.
