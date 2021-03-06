/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51IPWMzJfLFuQzk822OkC9zEJTr4TgHtMsFfgTi9jdhyN67NlUkATyZuOwz4nOTc0euuCEa6CCh6NqzwsYBZtMmgF00El2BxYPT"
);

/* const runtimeOpts = {
  timeoutSeconds: 300,
  memory: "1GB",
};*/

// -API

// -App config
const app = express();

// -Middlewares
app.use(cors({origin: true}));
app.use(express.json()); // send data n parse in json format

// -API routes
app.get("/", (request, response) => {
  response.status(200).send("hello world");
});

app.get("/raghav", (request, response) => {
  response.status(200).send("what's up!!");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total; // can use request params also
  console.log(
      "Payment request received BOOM!! for this amount ====>>>",
      request,
      total
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr", // usd
  });

  console.log("paymentIntent====> ", paymentIntent);
  console.log("clientSecret", paymentIntent.client_secret);

  // OK- created something
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);

/* exports.api = functions
  .runWith(runtimeOpts)
  .storage.object()
  .onFinalize((object) => {
    // do some complicated things that take a lot of memory and time
    functions.https.onRequest(app);
  });*/

// Example endpoint
// http://localhost:5001/challenge-a297f/us-central1/api
