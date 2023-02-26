const express = require('express');
const router = express.Router();


router.get('', async (req, res) => {

  res.render('pages/transportation',{transportation:true});

});

module.exports = router;