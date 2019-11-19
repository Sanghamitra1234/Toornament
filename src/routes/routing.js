const express = require('express');
const routing = express.Router();
const setup = require('../models/dbSetUp');
const games=require('../models/gamesManipulation');


routing.get('/setup', (req, res) => {
        setup.setupGames();
});

// {
//     "gameName":"Fifa",
//     "tournamentDesc":"sab khelte hai",
//     "registrationFees":200,
//     "creatorId":"C1001",
//     "tournamentName":"Fifa 1"
//  }

routing.post('/addGames',(req,res,next)=>{
    //console.log("data from req",req.body.tournamentName);
    
    games.addGames(req.body).then(data=>{
            if(data){
                res.send(data);
            }
    }).catch(err=>{
        throw err;
    })
});
routing.get('/getGames/:gameName',(req,res,next)=>{
    console.log("gameName",req.params.gameName);
    
    games.getGamesonNames(req.params.gameName).then(data=>{
        if(data){
            res.send(data);
        }
    }).catch(err=>{
        throw err;
    })
})

routing.get('/bookTournaments/:gameName/:tournamentName',(req,res,next)=>{
    console.log(req.params.gameName, req.params.tournamentName);
    games.bookTournaments(req.params.gameName,req.params.tournamentName).then(data=>{
        if(data){
            res.send(data);
        }
    }).catch(err=>{
        throw err;
    })
    
})

module.exports=routing;