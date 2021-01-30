const express = require('express');
const asyncHandler = require('express-async-handler');

const { Vote, IP, Answer } = require('../../db/models');
const answer = require('../../db/models/answer');

const router = express.Router();

// Sign up
router.post(
  '',
  asyncHandler(async (req, res) => {
    const { answerId, userId } = req.body;

    const userIP = req.ip.split(':').pop();

    //If we have an IP already, grab it from the table.
    let ip = await IP.findOne({where: {ipAddress:userIP}})

    if(!ip) {
      ip = await IP.create({ipAddress: userIP})
    }

    const ipId = ip.id;

    const vote = await Vote.create({answerId, userId, ipId})

    //const answer = await Answer.create({ topicId, header, body })

    return res.json({
      vote
    });
  }),
);

router.get('/:questionId', asyncHandler(async (req, res) => {
  const id = +req.params.questionId;
  const votes = await Vote.findAll({
    include: {
      model: Answer,
      where: { topicId: id}
    },
  });

  return res.json( {
    votes
  })
}))

module.exports = router;
