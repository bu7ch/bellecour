const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

const router = require("./routes");
const oursRouter = require("./ours")
app.use(express.json());
app.use(express.urlencoded({ extended:false}))
app.get("/", (req, res) => {
  res.send("Welcome to the Express API");
});
// DRY
// app.get('/sports/tennis', (req, res)=>{
// res.send("c'est de la terre battue")
// })
// app.get('/sports/football', (req, res)=>{
// res.send("Vive le football !!!!")
// })

app.use("/sports", router);
app.use("/ours", oursRouter)

app.listen(port, console.log(`⚡️ [Server is running on port :${port}]`));

