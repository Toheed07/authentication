const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  //   res.json({
  //     posts: {
  //       title: "First Post",
  //       description: "This is my first post",
  //     },
  //   });
  res.send(req.user);
});

module.exports = router;
