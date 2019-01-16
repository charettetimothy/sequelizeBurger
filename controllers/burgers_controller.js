var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var db = require("../models");
router.get("/", (req, res) => {
  db.burgers.findAll().then(burgerData => {
    console.log(burgerData);
    res.render("index", { burger_data: burgerData });
  });
});

router.post("/burgers/create", (req, res) => {
  db.burgers.create({ burger_name: req.body.burger_name }).then(() => {
    res.redirect("/");
  });
});
router.put("/api/burgers/:id", (req, res) => {
  // var condition = "id = " + req.params.id;
  console.log(req.body.devoured);
  db.burgers
    .update(
      {
        devoured: "true"
      },
      {
        where: { id: req.params.id }
      }
    )
    .then(() => {
      res.redirect("/");
    });
});
// router.delete("/api/burgers/:id", (req, res) => {
//   let condition = "id = " + req.params.id;

//   burger.delete(condition, function (result) {
//     if (result.affectedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });
module.exports = router;
