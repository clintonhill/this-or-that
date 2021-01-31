const express = require('express');
const asyncHandler = require('express-async-handler');

const { Answer } = require('../../db/models');
const answer = require('../../db/models/answer');

const router = express.Router();

// Sign up
router.post(
  '',
  asyncHandler(async (req, res) => {
    const { answers, topicId } = req.body;

    for(let answer of answers) {
      answer.topicId = topicId;
    }

    const answerResponse = await Answer.bulkCreate(answers);

    //const answer = await Answer.create({ topicId, header, body })

    return res.json({
      answerResponse
    });
  }),
);

module.exports = router;
