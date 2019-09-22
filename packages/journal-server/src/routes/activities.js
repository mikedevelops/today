const express = require('express');
const protectedRoute = require('../middleware/protected');
const controller = require('../controllers/activityController');

const router = express.Router();

router.get('/activities', protectedRoute, controller.getActivitiesForUser);
router.post('/activities', protectedRoute, controller.saveActivity);

module.exports = router;
