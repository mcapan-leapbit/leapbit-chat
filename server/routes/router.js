const express = require("express");
const router = express.Router();
const { connectToDB } = require("../utils/mongo-logic");

let connection;

(async () => {
  connection = await connectToDB();
})();

router.get("/conversation/:id", async (req, res) => {
  const conversation_id = req.params.id;
  const messages = await connection.db("leapbitChat").collection("messages_2");
  res.send(await messages.findOne({ conversation_id: conversation_id }));
});

router.get("/conversations", async (req, res) => {
  const messages = await connection.db("leapbitChat").collection("messages_2");
  res.send(await messages.find({}).toArray());
});

router.post("/conversation", async (req, res) => {
  const messages = await connection.db("leapbitChat").collection("messages");
  await messages.insertOne(req.body);
  res.status(201).send();
});

router.post("/message", async (req, res) => {
  const messages = await connection.db("leapbitChat").collection("messages_2");
  await messages.updateOne(
    { conversation_id: req.body.conversation_id },
    req.body.values,
    { upsert: true }
  );
  res.status(201).send();
});

module.exports = router;
