const express = require('express');
const asyncHandler = require('express-async-handler');

const { Topic, Answer, Vote } = require('../../db/models');
const vote = require('../../db/models/vote');

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

router.get('/:id', asyncHandler(async (req, res) => {
    const id = +req.params.id;
    const question = await Topic.findOne({
      where: id,
      include: {
        model: Answer,
        include: {
          model: Vote,
          attributes: ['ipId']
        }
      }
    })
    res.json({question});
  })
);

module.exports = router;
