const express = require('express');
const router = express.Router();


router.get('', async (req, res) => {

  res.render('pages/questions',{questions:true});

});

module.exports = router;
