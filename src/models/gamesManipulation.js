const connection=require('../utilities/connection');

let gamesArr={};

gamesArr.addGames=(req,res,next)=>{
    connection.getCollection().then(model=>{
       /// console.log("req",req.tournamentDesc);
        
        var obj={
            "gameName":req.gameName,
            "gameArray":[
                    {   
                        
                        "tournamentName":req.tournamentName,
                        "tournamentDesc":req.tournamentDesc,
                        "registrationFees":req.registrationFees,
                        "maxPeople":req.maxPeople,
                        "creatorId":req.creatorId
                    }
            ]
        }
        model.insertMany(obj).then(data=>{
            if(data.length>=1){
                console.log(data);
                //res.json({message:"Data is successfully added !!"})
            }
        }).catch(err=>{
            throw err;
        })
    })
}
gamesArr.getGamesonNames=(gameName)=>{
    return connection.getCollection().then(model=>{
        return model.find({'gameName':gameName}).then(data=>{
            if(data.length>=1){
                console.log(data);
                return data;
            }
        }).catch(err=>{
            throw err;
        })
    })
}

gamesArr.bookTournaments=(gameName,tournamentName)=>{
    return connection.getCollection().then(model=>{
        return model.findOne({"gameArray.tournamentName":tournamentName}).then(data=>{
            //console.log("data",data['gameArray'][0]['maxPeople']);
            if(data['gameArray'][0]['maxPeople']>=1){
                let newNo=data['gameArray'][0]['maxPeople']-1;
                //grades: { $elemMatch: { grade: { $lte: 90 }, mean: { $gt: 80 } }
                return model.update({gameArray:{$elemMatch:{tournamentName:tournamentName}}},{ $set: { "gameArray.$.maxPeople" : newNo } }).then(data=>{
                    console.log("adac",data);
                    if(data.nModified==1){
                        return {"message":"You have registered successfully!!"};
                    }
                })
            }else{
                let err=new Error("Sorry the game is already full !! ");
                throw err;
            }
        })
    })
}

module.exports=gamesArr;