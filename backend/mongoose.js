const mongoose = require("mongoose");

const Trip = require("./models/trip");

const dbRoute =
  "mongodb+srv://travel_team:Travel4545!@cluster0-0wz6h.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// check if database connection successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const createTrip = async (req, res, next) => {
  const createdTrip = new Trip({
    destination: req.body.destination,
    activities: req.body.activities
  });
  const result = await createdTrip.save();

  res.json(result);
};

exports.createTrip = createTrip;
