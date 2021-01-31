const express = require('express');
const asyncHandler = require('express-async-handler');

const { IP } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {

    const userIP = req.ip.split(':').pop();

    //If we have an IP already, grab it from the table.
    let ip = await IP.findOne({where: {ipAddress:userIP}})

    if(!ip) {
      ip = await IP.create({ipAddress: userIP})
    }

    const ipId = ip.id;

  return res.json( {
    ipId
  })
}))

module.exports = router;
