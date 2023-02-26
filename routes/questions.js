const express = require('express');
const router = express.Router();


router.get('', async (req, res) => {
  let l1 = ["Tell Me about yourself", "Why are you interested in working for this company?", "Tell me about your education.", "Why have you chosen this particular field?", "Describe your best/worst boss.", "In a job, what interests you most/least?", "What is your major weakness?", "Give an example of how you solved a problem in the past.", "What are your strengths?",
  "What do you consider your best accomplishment in your last job?",
      "Where do you see yourself in three years?",
      "Think about something you consider a failure in your life, and tell me why you think it happened",
      "How do you think you will fit into this operation?",
      "If you were hired, what ideas/talents could you contribute to the position or our company?",
      "Give an example where you showed leadership and initiative.",
      "Give an example of when you were able to contribute to a team project",
      "What have you done to develop or change in the last few years?",
      "Do you have any questions for me?"]
      function getRandom() {
        return Math.random() - 0.5;
      }
      
      // Use the sort() method to shuffle the array in place
      l1.sort(getRandom);
  res.render('pages/questions',{questions:true, listz: l1});

});

module.exports = router;
