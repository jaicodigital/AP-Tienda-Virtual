const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user test is successfull");
})

router.post("/userposttest", (req, res) => {
    const username = req.body.username
    res.send("tu nombre de usuario es:" + username)
})

module.exports = router