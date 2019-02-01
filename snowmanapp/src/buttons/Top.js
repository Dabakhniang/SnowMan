import React from 'react';
import {  graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Grid, { GRID_CELLS } from "../Grid";

const moveNorthMutation = gql`
  mutation movePlayerNorth{
    movePlayerNorth {
      value
    }
  }
`;


const Top = ({ mutate }) => {

  const goTop = (evt) => {
  	//evt.preventDefault();
  	//console.log(GRID_CELLS);
  	mutate({
  		variables: {},
  		mutation: moveNorthMutation,
  		refetchQueries:[{query: GRID_CELLS}]
  	}).then( () => {
       console.log("SnwMan moved to Top");  
      });
  };

	return (
		<button type="button" className="top bouton" onClick={goTop}>Top</button>
	  );
};


const MovePlayerNorth = graphql( moveNorthMutation)(Top);

export default MovePlayerNorth;
