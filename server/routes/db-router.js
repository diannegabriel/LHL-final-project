const express = require("express");
const router = express.Router();
router.use(express.json());

require("dotenv").config({ path: "../.env" });

//Import db helper functions
const dbReadUser = require(".././dbHelpers/users/dbReadUser");
const dbReadGoals = require(".././dbHelpers/goals/dbReadGoals");


//create nessisary routes for db query here
router.get("/db-user", (req, res) => {
  let userId = null;
  dbReadUser("billy@jo.com", "password")
    .then((info) => {
      userId = info;
      console.log(`----\n${info}\n---`);
    })
    .then(() => {
      res.json({ userId });
    });
});

router.get("/daily-goals", (req, res) => {
  let goals = null;
  dbReadGoals("614de5c4646237d2b991f65c", "daily")
    .then((info) => {
      goals = info;
    })
    .then(() => {
      res.json({ goals });
    });
});

router.get("/mission-goals", (req, res) => {
  let goals = null;
  dbReadGoals("614de5c4646237d2b991f65c", "mission")
    .then((info) => {
      goals = info;
    })
    .then(() => {
      res.json({ goals });
    });
});

router.get("/quest-goals", (req, res) => {
  let goals = null;
  dbReadGoals("614de5c4646237d2b991f65c", "quest")
    .then((info) => {
      goals = info;
    })
    .then(() => {
      res.json({ goals });
    });
});

router.post("/new-goal/", (req, res) => {
  console.log(`---\nHit new goal route\n---`)
  console.log(req.body)


  //This needs to change to root ?
  // res.redirect('/dashboard')
})

module.exports = router;
