var tree = {};

var addTree = function(aggregateId){
	if(aggregateId){
		var 
			aggregateIdSplit = aggregateId.split('|'),
			// id = aggregateId.split('|')[0],
			remainder = aggregateId.split('|').slice(1).join('|');
		aggregateIdSplit.reduce(function(node,id){
			return node[id] || (node[id] = {});
		}, tree);
	}
};


addTree('1|100376|100377|100378');
addTree('1|100376|100377|100379|100380');

console.log(
	JSON.stringify(tree, null, ' ')
	);

// tree.addTree('1|100376');