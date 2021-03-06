const express = require('express');
const controller = require('../controllers/entryController');
const protectedRoute = require('../middleware/protected');

const router = express.Router();

router.get('/entries/:id', protectedRoute, controller.getEntry);
router.get('/entries', protectedRoute, controller.listEntries);
router.post('/entries', protectedRoute, controller.saveEntry);
router.delete('/entries/:id', protectedRoute, () => {});
router.patch('/entries/:id', protectedRoute, controller.updateEntry);
router.patch('/entries/:id/activities', protectedRoute, controller.updateEntryActivities);

module.exports = router;
