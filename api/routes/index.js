const express = require("express");

const Flights = require("../db/Flights");
const Airports = require("../db/Airports");
const User = require("../db/User");

const router = express.Router();

router.get("/flights", (req, res) => {
  Flights.find({})
    .then((flights) => res.send(flights))
    .catch((error) => res.status(500).send(error));
});

router.get("/airports", (req, res) => {
  Airports.find({})
    .then((airports) => res.send(airports))
    .catch((error) => res.status(500).send(error));
});

router.post("/login", (req, res) => {
  User.findOne({ name: "Tom Hanks" })
    .populate("favorites")
    .then((user) => res.send(user))
    .catch((error) => res.status(500).send(error));
});

router.put("/favorites", (req, res) => {
  const { userId, flightId } = req.body;
  User.findOneAndUpdate({ _id: userId }, { $push: { favorites: flightId } })
    .then((user) => res.send(user))
    .catch((error) => res.status(500).send(error));
});

router.delete("/favorites", (req, res) => {
  const { userId, flightId } = req.body;
  User.findOneAndUpdate({ _id: userId }, { $pull: { favorites: flightId } })
    .then((user) => res.send(user))
    .catch((error) => res.status(500).send(error));
});

module.exports = router;
