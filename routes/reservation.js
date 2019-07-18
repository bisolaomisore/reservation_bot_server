const { Router } = require('express');

const router = Router();

/* GET reservations listing */
router.get('/', (req, res) => {
  res.json([
    {id: 1, name: "Chris, party of 2 @ 8pm"},
    {id: 2, name: "Edward, party of 5 @ 2pm"}
  ])
});

module.exports = router;
