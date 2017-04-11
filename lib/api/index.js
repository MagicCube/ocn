const express = require('express');
const router = express.Router();

router.post('/select/:id', (req, res) => {
  console.log('select', req.params.id);
  res.send('selected');
});

router.post('/deselect/:id', (req, res) => {
  console.log('deselect', req.params.id);
  res.send('deselected');
});

module.exports = router;
