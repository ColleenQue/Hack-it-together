const express = require('express');
const router = express.Router();


router.get('', async (req, res) => {

  res.render('pages/home',{homePage:true});

});

module.exports = router;

