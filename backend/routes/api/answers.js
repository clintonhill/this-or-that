const express = require('express');
const asyncHandler = require('express-async-handler');

const { Answer, Vote } = require('../../db/models');
const answer = require('../../db/models/answer');

const router = express.Router();

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

router.get('/:topicId', asyncHandler( async (req, res) => {
  const topicId = +req.params.topicId;
  const answers = await Answer.findAll({
    where: { topicId },
    include: {
      model: Vote,
      attributes: ['ipId']
    }
  })

  return res.json({answers});
}))

module.exports = router;
