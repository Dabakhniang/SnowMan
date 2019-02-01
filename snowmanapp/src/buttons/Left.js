import React from 'react';
import {  graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Left = ({ mutate }) => {

  const goLeft = (evt) => {
  	evt.preventDefault();
  	mutate().then( () => {
       console.log("SnwMan moved to Left");  
      });
  };

	return (
		<button type="button" className="left bouton" onClick={goLeft}>Left</button>
	  );
};

const moveLeftMutation = gql`
  mutation movePlayerWest{
    movePlayerWest {
      value
    }
  }
`;

const MovePlayerWest = graphql(moveLeftMutation)(Left);

export default MovePlayerWest;
