var express = require('express');
var router = express.Router();
const Model = require('../models')
var eventslog = Model.events
// Routes related to actor.

Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
 }

function convertDate(d){
    
      return  dformat = [ d.getFullYear(),
          (d.getMonth()+1).padLeft(),
                   d.getDate().padLeft()].join('-')+
                    ' ' +
                  [ d.getHours().padLeft(),
                    d.getMinutes().padLeft(),
                    d.getSeconds().padLeft()].join(':');
}



router.post('/', function (req, res) {
    try{
        var obj = req.body;

        var query = {};

        query.where = {
            id : obj.id
        }
        
        eventslog.findOne(query).then((event)=>{

            console.log(event);

                if(!event){
                    eventslog.create({
                        id: obj.id,
                      typo: obj.type,
                      actor_id: obj.actor.id,
                      actor_login: obj.actor.login,
                      avatar_url: obj.actor.avatar_url,
                      repo_id: obj.repo.id,
                      repo_name: obj.repo.name,
                      repo_url:  obj.repo.url,
                      created_at:  obj.created_at
        
        
                }).then(()=>{
                    res.statusCode =201
                    res.send("inserted");
                });
                }else{
                    res.statusCode =400
                    res.send("error");
                }
        })
        
    
    }catch(e){
       res.statusCode =400
       res.send("error");
    }
  
     });



     router.get('/',(req,res)=>{

            try{
                var resultArray = []
                eventslog.findAll({order: [
                    ['id', 'ASC']
                ]}).then((events)=>{
                    for(var i = 0; i < events.length; i++) {
                        var obj = events[i];
                        var returnJson = {
                            id:1000547873,
                            type:"PushEvent",
                            actor:{
                              id:3661723,
                              login:"sw",
                              avatar_url:"https://avatars.githubusercontent.com/u/3661723"
                            },
                            repo:{
                              id:418002,
                              name:"sw/quia-ex",
                              url:"https://api.github.com/repos/sw/quia-ex"
                            },
                            created_at:"2013-01-01 01:13:31"
                          }
                        returnJson.id = obj.id 
                        returnJson.type = obj.typo
                        returnJson.actor.id =obj.actor_id
                        returnJson.actor.login =obj.actor_login
                        returnJson.actor.avatar_url =obj.avatar_url
                        returnJson.repo.id =obj.repo_id
                        returnJson.repo.name= obj.repo_name
                        returnJson.repo.url =obj.repo_url
                        returnJson.created_at =convertDate(obj.created_at)
                        resultArray.push(returnJson)
                    }


                    res.json(resultArray);
                    res.statusCode = 200
                })
            }catch(e){

            }

     }) ;  



     router.get('/actors/:id',(req,res)=>{
            var actor_id = req.params.id;


            try{
                var resultArray = []
                eventslog.findAll({ where : {actor_id:actor_id },order: [
                    ['actor_id', 'ASC']
                ]}).then((events)=>{
                       
                    if(events.length > 0){
                        for(var i = 0; i < events.length; i++) {
                            var obj = events[i];
                            var returnJson = {
                                id:1000547873,
                                type:"PushEvent",
                                actor:{
                                  id:3661723,
                                  login:"sw",
                                  avatar_url:"https://avatars.githubusercontent.com/u/3661723"
                                },
                                repo:{
                                  id:418002,
                                  name:"sw/quia-ex",
                                  url:"https://api.github.com/repos/sw/quia-ex"
                                },
                                created_at:"2013-01-01 01:13:31"
                              }
                            returnJson.id = obj.id 
                            returnJson.type = obj.typo
                            returnJson.actor.id =obj.actor_id
                            returnJson.actor.login =obj.actor_login
                            returnJson.actor.avatar_url =obj.avatar_url
                            returnJson.repo.id =obj.repo_id
                            returnJson.repo.name= obj.repo_name
                            returnJson.repo.url =obj.repo_url
                            returnJson.created_at =convertDate(obj.created_at)
                            resultArray.push(returnJson)
                        }
    
    
                        res.json(resultArray);
                        res.statusCode = 200
                    }else{
                        res.statusCode = 404
                        res.send("Not found");
                    }

                   
                })
            }catch(e){
                res.statusCode = 404
                res.send("Not found");
            }
            
     });

module.exports = router;