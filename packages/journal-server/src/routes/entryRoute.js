const express = require('express');
const router = express.Router();
const controller = require('../controllers/entryController');

router.get('/entries/:id', controller.getEntry);
router.get('/entries', controller.listEntries);
router.post('/entries', controller.saveEntry);
router.delete('/entries/:id', controller.deleteEntry);

module.exports = router;
