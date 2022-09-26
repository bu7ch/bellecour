const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

const router = require("./routes");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the Express API");
});
app.get("/bonjour/:name", (req, res) => {
  res.send("bonjour " + req.params.name);
});
// DRY
// app.get('/sports/tennis', (req, res)=>{
// res.send("c'est de la terre battue")
// })
// app.get('/sports/football', (req, res)=>{
// res.send("Vive le football !!!!")
// })

app.use("/sports", router);

app.listen(port, console.log(`⚡️ [Server is running on port :${port}]`));

