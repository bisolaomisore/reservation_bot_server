const { Router } = require('express');
const cors = require('cors');

const router = Router();

/* GET reservations listing */
router.get('/', cors(), (req, res, next) => {
  res.json([
    {id: 1, name: "Chris, party of 2 @ 8pm"},
    {id: 2, name: "Edward, party of 5 @ 2pm"}
  ])
});

module.exports = router;
