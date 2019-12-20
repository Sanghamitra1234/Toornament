import React,{Component} from 'react';
import styles from './GamesShow.module.css';
import { withRouter } from "react-router";

class gamesShow extends Component {
    gameNameHandler=(gameName)=>{
        //console.log(gameName,this.props);
        
        let path='/Tournament/'+gameName+'/';
        //const { history } = this.props;
         this.props.history.push(path);
    }

    render(){
   
    

   return(
       <div className={styles.Container}>
            
           {this.props.games.map((games,index)=>{
                return (
                    <div className={styles.card} key={index}>
                            <h5 className={styles.cardTitle}>{games.gameName}</h5>
                            <hr/>
                            <p className={styles.cardText}>{games.gameDesc}</p>
                        <button className={styles.btn} onClick={()=>{this.gameNameHandler(games.gameName)}}>Open Me</button>
                    </div>
                )
            })}
      
       </div>
   )
    
}

}
export default withRouter(gamesShow);