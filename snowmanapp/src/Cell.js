import React, {Component } from 'react';


class Cell extends Component {

	constructor() {
		 super();
		this.vari = "";
  	}

    isCellPlayer(){
    	return this.props.name === this.props.noneFreeCells.cellPlayer;
    }
    
    isCellLittleBall(){
    	return this.props.name === this.props.noneFreeCells.cellLittleBall;
    }
    
    isCellMiddleBall(){
    	return this.props.name === this.props.noneFreeCells.cellMiddleBall;
    }
    
     isCellBigBall(){
    	return this.props.name === this.props.noneFreeCells.cellBigBall;
    }
 

    render(){
    
       if(this.isCellPlayer()){
            return (
                <div className="in-grid">
                	<img src="images/player.jpg" alt="Player" />
            	</div>
            );
        }
        else if(this.isCellLittleBall()){
        	return (
                <div className="in-grid">
                	<img src="images/L.jpeg" alt="Little Ball" />
            	</div>
            );
        }
        else if(this.isCellMiddleBall()){
        	return (
                <div className="in-grid">
                	<img src="images/M.jpeg" alt="Middle Ball" />
            	</div>
            );
        }
        else if(this.isCellBigBall()){
        	return (
                <div className="in-grid">
                	<img src="images/B.png" alt="Big Ball" />
            	</div>
            );
        }
        else{
        	return (
                <div className="in-grid">
                	<img src="images/gazon.jpg" alt="Free" />
            	</div>
            );
        }
    }
}

export default Cell;
