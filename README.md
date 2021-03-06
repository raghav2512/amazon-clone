# Demo App
[https://challenge-a297f.web.app/] (https://challenge-a297f.web.app/)
Click the link to checkout the demo version of the running app hosted on Firebase cloud servers

## Project stack
This amazon clone has been created in js through and through. At the front end React has been used. For state management Context Api has been used.  The backend is inside the functions folder. Backend has been created with node and express.

## [Frontend]

## Available Scripts

In the project directory, you can run:

### `npm install`

This command will load the required dependencies for the front end and backend. You need to run it in the main folder as well as inside the amazonclone/functions folder in the console.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This will help you get started. Run this in the main folder to view frontend at the port 3000.

### `npm run build`

Use this command in the console to build the frontend. This same build will be used to host on the firebase server.

## [Backend]

We use Google firebase for hosting frontend, hosting backend ,and for hosting datastore servers. Firebase provides ease of use and full cloud functionality. First create an account in Firebase. Create a project. The project's  

### `firebase init`

Use this command to get started with firebase for backend functionality.  

Configure firestore, functions and hosting.

### `firebase emulators:start`

This will emulate and start the backend in the localhost. Use the same path in axios file to hit your local services and for debugging prposes,. Change it after deployment

### `firebase deploy --only functions`

This command will deploy your backend services to firebase server. Use the server url in axios file

### `firebase deploy --only hosting`

This will deploy your front end. Use the url which you will see in the firebase console.

## Authentication

The authentication has also been done using firebase

## Payment functionality

For payments you will have to create a Stripe account. Use the keys provided in the functions  


## Changes required in the files to get the app running:

 1) Go to firebase-> app settings. Copy full firebaseConfig json from there and paste in firebase.js

 2) Do [firebase deploy --only functions] to deploy backend and copy the hosted url from the console and put it in axios.js baseUrl. You can also do [firebase emulators:start] to start backend services locally and use the local url in the baseUrl to debug in local

 3) For stripe payment functionality-> for dev environment use the Api keys from stripe homepage. Use publishable key in App.js loadStripe("") as a string. Use the secret key in functions/index.js require("stripe")("") as string 


 *Inspired from Sonny Sangha's project
