const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51OjoEmED3oAo7kMAN7fIlTg037Q7xicnYouTwg2Rmt2FVzRkzNGXKnFxeuX7FBn7O8SRpBF2IiOuZfPJxTuAXOiY00SSqt0Tgo");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payment/create", async (request, response) => {
  const total = Math.round(request.query.total * 100);
  console.log("Payment Request Recieved >>>> ", total);

  if (total <= 0) {
    return response.status(400).send({ error: "Invalid amount." });
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
  console.log("This is the client secret", paymentIntent.client_secret);
});

exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-c2959/us-central1/api
