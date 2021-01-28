const express = require('express');
const asyncHandler = require('express-async-handler');

const { Answer } = require('../../db/models');

const router = express.Router();

// Sign up
router.post(
  '',
  asyncHandler(async (req, res) => {
    const { topicId, header, body } = req.body;
    const answer = await Answer.create({ topicId, header, body })

    return res.json({
      answer
    });
  }),
);

module.exports = router;
