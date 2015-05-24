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


var desiredTree = {
	id:"1",
	children: {
		id:"100376",
		children: {
			id:"100377",
			children: {
				id:"100378",
				children: {},
				id: "100379",
				children: {
					id:"100380",
					children: {}
			}
			}
		}
	}
};

console.log('\r\n----desired tree-----');
console.log(
	JSON.stringify(desiredTree,null,' ')
);