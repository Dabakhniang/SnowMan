import React from 'react';
import {  graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { GRID_CELLS } from "../Grid";


const Bottom = ({ mutate }) => {

  const goBottom = (evt) => {
  	evt.preventDefault();
  	console.log(GRID_CELLS);
  	mutate({
  		variables: {},
  		refetchQueries:[{query: GRID_CELLS}]
  	}).then( () => {
       console.log("SnwMan moved to Bottom");  
      });
  };

	return (
		<button type="button" className="bottom bouton" onClick={goBottom}>Bottom</button>
	  );
};

const moveSouthMutation = gql`
  mutation movePlayerSouth{
    movePlayerSouth {
      value
    }
  }
`;

const MovePlayerSouth = graphql( moveSouthMutation)(Bottom);

export default MovePlayerSouth;
