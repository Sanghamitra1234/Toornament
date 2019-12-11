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

    function rand(limit){
        return Math.floor(Math.random()*limit);
    };
    function createDb() {
        var gamenames = ["PUBG","MLBB","FIFA 20"]
        var gamename = gamenames[rand(gamenames.length)]
        var gamename = "FIFA 20" //Fill with one name 
        var xarr = []
            
        for( var i=1;i<100;i++){  
            var tournamentDescArray = ["Best Game Ever","Too comepetetive","Hard Game play","Hardcore game","Best match you will ever find","fight for life"]
            var tournamentName = gamename + i.toString()
            var tournamentDesc = tournamentDescArray[rand(tournamentDescArray.length)]
            var registrationFees = rand(500)
            var maxPeople = rand(100)
            var creatorId = "C" + (1000 + rand(50)).toString() 
            var x = {
                "tournamentName": tournamentName,
                "tournamentDesc": tournamentDesc,
                "registrationFees": registrationFees,
                "maxPeople": maxPeople,
                "creatorId": creatorId}
            xarr.push(x)
            // Save Note in the database
        }
        var dummydata = {
            "gameName": gamename,
            "gameArray": xarr
            };
           // console.log("dummydata",dummydata);
        return dummydata;
            
    }
   



exports.setupGames=(req,res,next)=> {
    return connection.getCollection().then(model=>{
            games=createDb();
        return model.insertMany(games).then(data=>{
            //console.log("data got inserted ",data);
            //res.send("OK");
            if(data.length>=1){
                return data;
            }
        }).catch(err=>{
            throw err;
        })
    })
}