const express = require('express');
const router = express.Router();

 const infos = []
router.get('/tennis', (req, res) => {
  res.send('Merci Roger !!')
})
router.get('/football', (req,res) => {
  res.send('Encore la coupe du monde ?!')
})

router.post('/ajouter/:sport', (req, res) => {
  infos.push(req.params.sport)
  res.send(`la liste des sports : ${infos}`)
})

router.get('/', (req, res) => {
  res.json(infos)
})

module.exports = router