import React, { Component } from 'react';
import Auxilary from '../../HOC/Auxilary';
import axios from 'axios';
import TournamentsShow from './TournamentsShow';
import styles from './Tournaments.module.css';


class Tournaments extends Component{
    state={
        tournaments:[],
        pageNumber:1
    }

    componentDidMount(){
       // console.log("ninpno");
        
        this.getGamesHandler(1);
    }

    getGamesHandler=(pageNumber)=>{
        console.log(pageNumber);
        
        let path="http://localhost:3000/getGames/"+this.props.match.params.id+"/"+pageNumber
        axios.get(path).then(data=>{
            //console.log(data.data[0]['gameArray'][0]);
            this.setState({tournaments:data.data[0]['gameArray']});
        })
    }

    handlePageChange=(pageNumber)=>{
        //window.location.reload(true);
        this.setState({activePage:pageNumber},this.getGamesHandler.bind(this,pageNumber))
    }

    pageDecrementHandler=()=>{
        if(this.state.pageNumber>=2){
            let pageReduce=this.state.pageNumber-1;
            this.setState({pageNumber:pageReduce},this.getGamesHandler.bind(this,pageReduce));
        }
    }
    pageIncrementHandler=()=>{
        let pageIncrement=this.state.pageNumber+1;
        this.setState({pageNumber:pageIncrement},this.getGamesHandler.bind(this,pageIncrement));
    }
    
    render(){
      return(
            <Auxilary>
                <div className={styles.paginator}>
                    <button className={styles.btn} onClick={this.pageDecrementHandler}>LESS</button>
                     <span>&nbsp;</span> {this.state.pageNumber} <span>&nbsp;</span>
                    <button className={styles.btn} onClick={this.pageIncrementHandler}>MORE</button>
                </div>
              <TournamentsShow names={this.state.tournaments} gameName={this.props.match.params.id}></TournamentsShow>
            </Auxilary>
        )
    }
}

export default Tournaments;