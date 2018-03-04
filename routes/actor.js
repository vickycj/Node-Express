var express = require('express');
var router = express.Router();
var models = require('../models');
// Routes related to actor.
const Model = require('../models')
var eventslog = Model.events


router.get('/',(req,res)=>{


  var val = [{
    id:3661723,
    login:"sw",
    avatar_url:"https://avatars.githubusercontent.com/u/3661723"
  }]

  res.statusCode = 200
  res.json(val)

});


router.put('/', function (req, res) {
  
  var obj = req.body;
  
  var actor_id = obj.id;
  var avatar_url = obj.avatar_url;

  console.log(obj);
  try{


    eventslog.findAll({ where: { actor_id: actor_id } }).then((events)=>{

      

      if (events.length > 0) {


        for(var i=0; i< events.length; i++){

            var event = events[i];
            event.updateAttributes({
              avatar_url: avatar_url
            })
            .then(function () {
              res.statusCode = 200
              res.send("updated")
      
            })

        }


       
       
      }else {
        res.statusCode = 400
        res.send("Not found")
      }
    })

  }catch(e){
    res.statusCode = 400
    res.send("Not found")
  }
  
  })
 
    


module.exports = router;