const express = require('express');
const asyncHandler = require('express-async-handler');

const { Topic } = require('../../db/models');

const router = express.Router();

// Sign up
router.post(
  '',
  asyncHandler(async (req, res) => {
    const { title, body, ownerId, slug } = req.body;
    const question = await Topic.create({ title, body, ownerId, slug})

    return res.json({
      question
    });
  }),
);

module.exports = router;
