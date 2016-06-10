var tree = {};

var addTree = function(aggregateId){
	if(aggregateId){
		var arr = aggregateId.split('|'),
			remainder = aggregateId.split('|').slice(1).join('|');
		arr.reduce(function(node,id){
			return node[id] || (node[id] = {});
		}, tree);
	}
};

addTree('1|100376|100377|100378');
addTree('1|100376|100377|100379|100380');

console.log('----addTree function----')
console.log(
	JSON.stringify(tree, null, ' ')
);