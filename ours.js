const express = require("express");
const oursRouter = express.Router();

const stock_ours = []

oursRouter.get("/", (req, res) => {
  res.json(stock_ours);
});

oursRouter.post("/ajouter", (req, res) => {
  let ours = { 
    name : req.body.name,
    poids: req.body.poids
  }
  stock_ours.push( ours );
  res.json({message :"un ours a été ajouté", ours});
});

oursRouter
  .route("/:id")
  .put((req, res) => {
    res.json(`un ours ${req.params.id} a été modifié`);
  })

  .delete((req, res) => {
    res.json(`un ours : ${req.params.id} a été suprimé`);
  });

module.exports = oursRouter;
