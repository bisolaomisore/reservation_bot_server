const express = require('express');
const router = express.Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const reservationData = [];

/* GET request */
router.get('/', function(req, res, next) {
  res.json(
    reservationData
  )
})

/* POST create reservations */
router.post('/', function(req, res, next) {
  const twiml = new MessagingResponse();

  // The content of the text message sent to twilio.
  let reservationMessage = req.body.Body.split('/');
  let reservationDate = new Date(reservationMessage[2]);
  let reservationHours = reservationDate.getHours();
  let reservationMin =  (reservationDate.getMinutes() < 10) ? '0' + reservationDate.getMinutes() : reservationDate.getMinutes()

  //  The message we send back after we make a reservation (successfully or
  //  otherwise).
  let message = '';

  const restaurant = {
    opening: 8,
    closing: 22,
    name: 'Hariet'
  };

  if (restaurant.opening < reservationHours && reservationHours < restaurant.closing - 1) {
    message = 'Reservation successful';
    const reservationId = reservationData.length + 1;
    reservationData.push({
      id: reservationId,
      name: `${reservationMessage[0]}
            ${reservationMessage[1]} at
            ${reservationHours}:${reservationMin}`
    });
  } else {
    message = 'Reservation unsucessful';
  }

  twiml.message(message);

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

module.exports = router;
