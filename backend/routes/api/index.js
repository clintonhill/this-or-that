const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const questionRouter = require('./questions.js');
const answersRouter = require('./answers.js')
const votesRouter = require('./votes.js');
const ipRouter = require('./ip.js')

const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/questions', questionRouter);

router.use('/answers', answersRouter)

router.use('/votes', votesRouter)

router.use('/ip', ipRouter);

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;
