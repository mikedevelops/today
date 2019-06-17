const express = require('express');
const controller = require('../controllers/activityController');
const protectedRoute = require('../middleware/protected');

const router = express.Router();

router.get('/activity', protectedRoute, controller.getActivities);

module.exports = router;
