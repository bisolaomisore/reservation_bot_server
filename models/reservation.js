const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  datetime: String
});

module.exports = mongoose.model("Reservation", reservationSchema);
