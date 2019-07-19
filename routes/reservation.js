const { Router } = require('express');
const cors = require('cors');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const router = Router();

/* GET reservations listing */
router.get('/', cors(), (req, res, next) => {
  res.json([
    {id: 1, name: "Chris, party of 2 @ 8pm"},
    {id: 2, name: "Edward, party of 5 @ 2pm"}
  ])
});

/* create reservations */
router.post('/', (req, res, next) => {
  var twiml = new MessagingResponse();

  // Content of text message to twilio API.
  console.log(req.body.Body);

  // Return message
  twiml.message("We'll have your reservation details very soon!");

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
})

module.exports = router;
