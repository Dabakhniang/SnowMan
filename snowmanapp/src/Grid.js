import React, {Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Cell from "./Cell";

const GRID_CELLS = gql`
	    	 {
		                cells {
								value
						}
						cellPlayer{
								value
						}
						cellLittleBall{
								value
						}
						cellMiddleBall{
								value
						}
						cellBigBall{
								value
						}
                }
                `;


class Grid extends Component {

	
	constructor(props){
		super(props);
		this.state = {
			mainCells: {}
		} 
	}
	
    render(){

        return (
            <div id="grid">
            <Query query={GRID_CELLS}>
            
		        {({loading, error, data}) => {
		          if (loading) return <p>Loading...</p>;
		          if (error) return <p>Error :(</p>;
		          
				  var CELL_PLAYER = data.cellPlayer[0].value;
				  var CELL_LITTLE_BALL = data.cellLittleBall[0].value;
				  var CELL_MIDDLE_BALL = data.cellMiddleBall[0].value;
				  var CELL_BIG_BALL = data.cellBigBall[0].value;

				  var noneFreeCells = { 
				  									cellPlayer: CELL_PLAYER, 
				  									cellMiddleBall: CELL_MIDDLE_BALL, 
				  									cellLittleBall: CELL_LITTLE_BALL, 
				  									cellBigBall:CELL_BIG_BALL
				  									} ;
		
				  var cells = data.cells.map((cellData) => {return cellData.value}).sort();
				  
		          return cells.map(( value ) => {
		          		return <Cell name={value} noneFreeCells={noneFreeCells} />
		          });
		        }}
            
          </Query>
          </div>
        );
    }
    
    
}

export {GRID_CELLS};
export default Grid;
