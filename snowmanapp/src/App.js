import React from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Grid from "./Grid";
import Controller from "./Controller";


//to connect to the graphQl back-end
const client = new ApolloClient({
  uri: "http://localhost:3002/graphql"
});

const App = () => (
    <ApolloProvider client={client}>
        <Grid client={client}/>
        <div id="info-controller">
        	<Controller />
        	<div id="info">
        		<div>
				  <img style={{verticalAlign:'middle'}}  src="/images/L.jpeg" alt="Littleball" />
				  <span >Little ball</span>
				</div>
				<div>
				  <img style={{verticalAlign:'middle'}}  src="/images/M.jpeg" alt="Middleball" />
				  <span >Middle ball</span>
				</div>
				<div>
				  <img style={{verticalAlign:'middle'}}  src="/images/B.png" alt="Bigball" />
				  <span >Big ball</span>
				</div>
        	</div>
        </div>
    </ApolloProvider>
);

export default App;
