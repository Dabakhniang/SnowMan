var exec = require('child-process-promise').exec;
const util = require('util');
const fs = require('fs');

const { Connection, query } = require('stardog');

const conn = new Connection({
  username: 'admin',
  password: 'admin',
  endpoint: 'http://localhost:5820',
});

var cells;
var cellPlayer;
var cellLittleBall;
var cellMiddleBall;
var cellBigBall;

query.execute(conn, 'SnowMan', 'select ?cell where { ?cell a :Cell }', 'application/sparql-results+json', {
  }).then(({ body }) => {
    cells = rewriteList(body.results.bindings);
  });

query.execute(
            conn,
            'SnowMan',
            'select ?cell where { ?cell a :Cell. ?cell :contains :snowMan }',
            'application/sparql-results+json',
            {
  }).then(({ body }) => {	
    cellPlayer = rewriteList(body.results.bindings);
  });

query.execute(
    conn,
    'SnowMan',
    'select ?cell where { ?cell a :Cell. ?cell :contains :littleBall }',
    'application/sparql-results+json',
    {
}).then(({ body }) => {
    cellLittleBall = rewriteList(body.results.bindings);
});

query.execute(
    conn,
    'SnowMan',
    'select ?cell where { ?cell a :Cell. ?cell :contains :middleBall }',
    'application/sparql-results+json',
    {
}).then(({ body }) => {
    cellMiddleBall = rewriteList(body.results.bindings);
});

query.execute(
    conn,
    'SnowMan',
    'select ?cell where { ?cell a :Cell. ?cell :contains :bigBall }',
    'application/sparql-results+json',
    {
}).then(({ body }) => {
    cellBigBall = rewriteList(body.results.bindings);
});

//const readFile = util.promisify(fs.readFile)
//const testJsonPath = 'testTwit.json';

function rewriteList(l){
    var res = []
    for (var element in l) {
        res.push(l[element].cell);
    }
    return res;
}

const resolvers = {
    MyQueryType: {
        cells(root, args, context){
            return cells;
        },
        cellPlayer(root, args, context){
            return cellPlayer;
        },
        cellLittleBall(root, args, context){
            return cellLittleBall;
        },
        cellMiddleBall(root, args, context){
            return cellMiddleBall;
        },
        cellBigBall(root, args, context){
            return cellBigBall;
        }
    },
    Mutation:{
    	movePlayerNorth(root){
      		query.execute(
				conn,
				'SnowMan',
				'DELETE {?positionObj :contains ?object} INSERT {?c :contains ?object} WHERE {?positionObj :contains ?object. ?positionObj :hasWest ?c. ?positionObj :hasEast ?position. ?position :contains :snowMan FILTER (?c != :wall ) FILTER NOT EXISTS {?c :contains ?object}}; DELETE {?position :contains :snowMan} INSERT { ?cell :contains :snowMan.} WHERE { ?position :contains :snowMan. ?position :hasWest  ?cell FILTER (?cell != :wall) FILTER NOT EXISTS {?cell :contains ?object}}',
				'application/sparql-results+json',
				{
			});
      		return cellPlayer;
        },
        movePlayerSouth(root){
      		query.execute(
				conn,
				'SnowMan',
				'DELETE {?positionObj :contains ?object} INSERT {?c :contains ?object} WHERE {?positionObj :contains ?object. ?positionObj :hasEast ?c. ?positionObj :hasWest ?position. ?position :contains :snowMan FILTER (?c != :wall ) FILTER NOT EXISTS {?c :contains ?object}}; DELETE {?position :contains :snowMan} INSERT { ?cell :contains :snowMan.} WHERE { ?position :contains :snowMan. ?position :hasEast  ?cell FILTER (?cell != :wall) FILTER NOT EXISTS {?cell :contains ?object}}',
				'application/sparql-results+json',
				{
			});
      		return cellPlayer;
        },
        movePlayerEast(root){
      		query.execute(
				conn,
				'SnowMan',
				'DELETE {?positionObj :contains ?object} INSERT {?c :contains ?object} WHERE {?positionObj :contains ?object. ?positionObj :hasNorth ?c. ?positionObj :hasSouth ?position. ?position :contains :snowMan FILTER (?c != :wall ) FILTER NOT EXISTS {?c :contains ?object}}; DELETE {?position :contains :snowMan} INSERT { ?cell :contains :snowMan.} WHERE { ?position :contains :snowMan. ?position :hasNorth  ?cell FILTER (?cell != :wall) FILTER NOT EXISTS {?cell :contains ?object}}',
				'application/sparql-results+json',
				{
			});
      		return cellPlayer;
        },
        movePlayerWest(root){
      		query.execute(
				conn,
				'SnowMan',
				'DELETE {?positionObj :contains ?object} INSERT {?c :contains ?object} WHERE {?positionObj :contains ?object. ?positionObj :hasSouth ?c. ?positionObj :hasNorth ?position. ?position :contains :snowMan FILTER (?c != :wall ) FILTER NOT EXISTS {?c :contains ?object}}; DELETE {?position :contains :snowMan} INSERT { ?cell :contains :snowMan.} WHERE { ?position :contains :snowMan. ?position :hasSouth  ?cell FILTER (?cell != :wall) FILTER NOT EXISTS {?cell :contains ?object}}',
				'application/sparql-results+json',
				{
			});
      		return cellPlayer;
        }
    }
}

export default resolvers;
