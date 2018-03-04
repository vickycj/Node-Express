var express = require('express');
var router = express.Router();

const Model = require('../models')
var eventslog = Model.events

router.delete('/', function (req, res) {
  try{
    eventslog.destroy({ where: {}}).then(()=>{
        res.statusCode =200
        res.send("successfully deleted all")
    })
  }catch(e){
      console.log(e);
  }

    


   
  })


module.exports = router;