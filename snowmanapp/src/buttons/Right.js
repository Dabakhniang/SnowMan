import React from 'react';
import {  graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Right = ({ mutate }) => {

  const goRight = (evt) => {
  	evt.preventDefault();
  	mutate().then( () => {
       console.log("SnwMan moved to Right");  
      });
  };

	return (
		<button type="button" className="right bouton" onClick={goRight}>Right</button>
	  );
};

const moveRightMutation = gql`
  mutation movePlayerEast{
    movePlayerEast {
      value
    }
  }
`;

const MovePlayerEast = graphql(moveRightMutation)(Right);

export default MovePlayerEast;
