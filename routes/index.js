var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hola!",
    user: "Luis",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Lxxs Chat", messages: messages })
});

router.get("/new", function(req,res,next){
  res.render("form", {title: "Nuevo Mensaje"})
})

router.post("/new", function(req,res,next){
  const newobj = {
    text: req.body.messagetext,
    user: req.body.messageauthor,
    added: new Date()
  }
  messages.push(newobj)
  res.redirect('/');
})

module.exports = router;
