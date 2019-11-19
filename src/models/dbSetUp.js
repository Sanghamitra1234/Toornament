//import connection from '../utilities/connection';
const connection=require('../utilities/connection')
var game={
"gameName":"Pubg",
"gameArray":[
        {   
            
            "tournamentName":"Pubg 1",
            "tournamentDesc":"Best Game Ever",
            "registrationFees":120,
            "creatorId":"C1001"
        }
    ]
}

exports.setupGames=(req,res,next)=> {
    return connection.getCollection().then(model=>{
        console.log("model",model);
        
       return model.insertMany(game).then(data=>{
            console.log("data got inserted ",data);
            //res.send("OK");
        })
    })
}