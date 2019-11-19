const mongoose=require('mongoose');
const {Schema}=require('mongoose');

const url="mongodb://localhost:27017/toornament";

mongoose.Promise=global.Promise;

const gamesSchema=Schema({
    gameName:String,
    gameArray:[
        {   
            
            tournamentName:{type:String,required:true},
            tournamentDesc:String,
            registrationFees:{type:Number,required:true},
            maxPeople:Number,
            creatorId:String
        }
    ]
},{collection : 'games',timestamps:true});

let connection={};

connection.getCollection=()=>{
    return mongoose.connect(url).then(database=>{
        return database.model('games',gamesSchema)
    }).catch(error=>{
        let err=new Error(error+" Could not connect to the database ");
        err.status=500;
        throw err;
    });
}

module.exports=connection;
