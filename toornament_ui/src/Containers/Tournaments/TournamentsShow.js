import React, { Component } from 'react';
import Auxilary from '../../HOC/Auxilary';
import styles from './TournamentsShow.module.css';
import axios from 'axios';
import ModalExample from '../Layouts/Modal';
import { withRouter } from "react-router";

class TournamentsShow extends Component{
    state={
        response:"",
        showModal:false,
        maxPeeps:null
    }

    tournamentRegisterHandler=(gameName,tournamentName)=>{
        let path="http://localhost:3000/bookTournaments/"+gameName+"/"+tournamentName+"/";
        axios.get(path).then(data=>{
            console.log(data.data);
            if(data.data.message!=null){
            this.setState({response:data.data.message,showModal:true});
            }
        })
    }
    reRenderToornamentPage=()=>{
      window.location.reload(true);
    }

    closeModal=()=>{
     this.setState({showModal:false},this.reRenderToornamentPage);
    }

    render(){
        let maxPeople=null;
        const tournament=this.props.names.map((tournaments,index)=>{
            if(tournaments.maxPeople<=20){
                console.log(tournaments.maxPeople,index);
                maxPeople="Only "+ tournaments.maxPeople+" seats is Left , Hurry Up !!!" 
            }else{
                maxPeople=null;
            }
            return(
                <div key={index}>{ tournaments.maxPeople?
                <div className={styles.card}>
                                <h5 className={styles.title}>{tournaments.tournamentName}</h5>
                                <h6 className={styles.desc}>{tournaments.tournamentDesc}</h6>
                                <p className={styles.desc}><strong> Fees : </strong>Rs {tournaments.registrationFees} /-</p>
                                <p className={!maxPeople?'padding-bottom:200px':styles.sale}>{maxPeople}</p>
                                <button className={!maxPeople?styles.btn:styles.button} onClick={()=>{this.tournamentRegisterHandler(this.props.gameName,tournaments.tournamentName)}}>Register</button>
                    </div>:null}
                </div>

            );
        })
        
        return(
            <Auxilary >
                <div className={styles.container}> 
                    {tournament}
                    {this.state.response? <ModalExample res={this.state.response} show={this.state.showModal} close={this.closeModal}/>:null}
                </div>
            </Auxilary>
        );
    }
}

export default withRouter(TournamentsShow);