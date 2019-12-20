import React, { Component } from 'react';

import gData from '../Asset/games.json';
import GamesShow from '../Components/Component/GamesShow';
import Auxilary from "../HOC/Auxilary";


class Games extends Component{

    state={
        games:[]
    }

    componentDidMount(){
        //console.log(gData);
        if(gData.length>0){
            this.setState({games:gData});
        }
    }


    render(){
        return (
            <Auxilary>
                <GamesShow games={this.state.games} />
            </Auxilary>
        )
    }
}

export default Games;