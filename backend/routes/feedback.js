const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST /feedback
router.post('/', async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).send(feedback);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET /feedback
router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 });
        res.send(feedbacks);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
