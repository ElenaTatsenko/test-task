
# About project
The project includes pages of users in the social network and from dynamic data.

# Using
Create React App, React, JS, npm, html, emotion for styles

# Technical task

1. According to the layout (https://www.figma.com/file/zun1op6nms2lmgbcj6e1ig/test?node-id=0%3a1) you need to implement the user card.

2. When click on the follow button - its text changes to following. The color of the button also changes. And to the number of followers is added. That is, the initial number is 100,500 followers. When click on the button will be 100.501.

3. When updated pages, the end result of the user's actions should be fixed. That is, if you click on the button and update the page - then the button still remains in the state of following with the appropriate color, and the number of followers does not decrease to the original value.

4. When the click is repeated, its text and color change to its original state. The number of followers also changes. It decreases by 1 (100,500).

5. In the code, the figure of 100,500 must be prescribed one value (100500). In UI - derived through a coma (100,500).

# Additionally

1. You can create a local database (separate JSON file) with the following
Fields: ID, User, Tweets, Followers, Avatar (see code below).
2. Avatars' Images should be prescribed by individual URL in property
“Avatar”. You can pick them up yourself.
3. There should be 3 to 10 users with various data (at your discretion) in the database.
4. According to the database you need to generate the appropriate number of cards on
Front particle application.
5. Each card must be independent functionally from each other.
6. The rest of the requirements are similar to the above technical task.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

