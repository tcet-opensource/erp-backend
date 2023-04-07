var express = require('express');
const authenticateToken = require('../middleware/auth');
const { asyncPlaceholders } = require('../util');
const user = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let temp = await asyncPlaceholders([1,2,3], 1000)
  res.send('welcome user: '+req.user+" "+temp);
});

router.post("/add", async function(req, res, next){
  const {name,password,emailId,uid,userType} = req.body;
  let newUser = await user.createUser(name,password,emailId,uid,userType);
  if(newUser.id!=null)
  	res.send({"res":"added user "+newUser.id});
  else
  	res.send({err:newUser.err});
})

module.exports = router;
