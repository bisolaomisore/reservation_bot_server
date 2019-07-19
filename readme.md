# Reservation Bot (Server Side)

An app that allows you to make reservations at your
favorite restaurant through text message.

TEXT FORMAT: first_name/last_name/datetime (please use military time in the datetime portion)
e.g. `Chris/Myers/January 17, 2019 14:31:00`

## Requirements
- [Twilio account](https://www.twilio.com/) - a communications API we use for text messaging
- [ngrok](https://ngrok.com/) - a tool we use to communicate with the Twilio API when we're doing our local development.

## Setup
- enter the server directory in your terminal and run `npm install` to get setup.
- add a .env file to your root folder with the following variables

   `TWILIO_ACCOUNT_SID - comes w/ twilio account` <br/>
   `TWILIO_AUTH_TOKEN - comes w/ twilio account` <br/>
   `TWILIO_NUMBER - get through twilio` <br/>
   `TEST_NUMBER - your phone number`

- to start up the server run `npm start` and you should be running on [http://localhost:3001](http://localhost:3001)

- also start your ngrok proxy and point it to the server with this command `ngrok http 30001`

- last, but not least you need to configure your ngrok proxy with your `TWILIO_NUMBER`, here's a [tutorial](https://www.twilio.com/blog/2013/10/test-your-webhooks-locally-with-ngrok.html) to get that setup.

- **the route you want to hit locally must be matched when giving twilio the ngrok proxy route. <br />e.g.( localhost:3001/reservations -> foobar.ngrok.io/reservations)**
