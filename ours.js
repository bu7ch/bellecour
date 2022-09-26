const express = require("express");
const oursRouter = express.Router();

const stock_ours = [];

oursRouter.get("/", (req, res) => {
  res.json(stock_ours);
});

oursRouter.post("/ajouter", (req, res) => {
  let ours = {
    id: req.body.id,
    name: req.body.name,
    poids: req.body.poids,
  };
  stock_ours.push(ours);
  res.json({ message: "un ours a été ajouté", ours });
});

oursRouter
  .route("/:id")
  .put((req, res) => {
    // for (let index = 0; index < stock_ours.length; index++) {
    //   if (req.params.id === stock_ours[index].id) {
    //      return newOurs = {
    //       name: req.body.name,
    //       id: req.body.id,
    //       poids: req.body.poids,
    //     }
    //   }
    //   res.json({ message: "Ours modifié", newOurs });
    // }
  })

  .delete((req, res) => {
    res.json(`un ours : ${req.params.id} a été suprimé`);
  });

module.exports = oursRouter;
