import React from 'react';
import Bottom from './buttons/Bottom';
import Top from './buttons/Top';
import Right from './buttons/Right';
import Left from './buttons/Left';



const Controller = () => {

		return(
			<div className="controller">
				 	<form>
						 <Top /> 
						 <Left  /> 
					   	 <Right /> 
					   	 <Bottom  /> 
				   	</form>
			</div>
		
		);
	

}

export default Controller;
