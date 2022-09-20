# Tracking App

The tracking app allows you to connect some sensors to view their values in real time.


To run the app in development mode, you need to have [Node.js](https://nodejs.org/en/) installed on your machine, also its recommended to have [yarn](https://yarnpkg.com/) installed for the front end project. To setup and run the WS server follow these steps:

- move to the `server` folder
- run `npm install`
- run `npm start`

After running this you'll have the WS server running on port 5000.

To setup and run the front project, move to the `web` folder. If you want it without `yarn` take the following path:

- run `npm install`
- run `npm start`

With `yarn` is pretty similar:

- run `yarn install` or simply `yarn`
- run `yarn start`

Once you have run `yarn start` you can go to `http://localhost:8080/` and see the page running.

## FE. Unit testing

Move to the web folder, and to run unit tests use the `yarn test` or if you want to watch them run `yarn test:watch`

## Reflection
- ### What aspect of this	exercise did you find most interesting?

> I think that the best part for me was trying to figure out how to improve perfomance and avoid React's many re-renders, since I'm not used to facing this kind of issues and work with web sockets.

- ### What did you find most cumbersome?

> I'd say that boilerplate code, it's a common thing in Front End projects.
- ### Notes about performace

>A throttling approach was implemented to improve React's performance and try to avoid tons of re-renders in the page. This technique was applied in a custom hook wich is in charge of connect to the WS and update a state with all the senors on it. 

>The good part of this is that it works, you can limit the number of times the state is updated per sensor with a throttle limit, this means that the state will be updated only each "throttle limit" times, hence this will cause fewer re-renders. Now the downside of this approach is that we may lose some important amount data if we have a large "throttle limit" and if the number of sensors grow more, throttling may not be enough, we will need another approach such as pagination or lazy loading the cards components for the sensors.
