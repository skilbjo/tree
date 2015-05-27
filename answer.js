var tree = [];

var addTree = function(aggregateId,name) {
	if (aggregateId) {
		var arr = aggregateId.split('|'),
			child = aggregateId.split('|').reverse()[0];
		arr.reduce(function(children, id) {
			var node, i;
			for (i = 0; i < children.length; i++) {
				// console.log(children.length, children);
							// console.log(children[i]);
				if (children[i].id == id) {
					node = children[i];
					break;
				}
			}
				if (!node) {
					children.push(node = {
					id: id,
					children: []
				});
			}
			if (node.id == child) {
				node.name = name;
			}
			return node.children;
		}, tree);
	}
};



addTree('1|100376|100377|100378', 'child property1');
addTree('1|100376|100377|100379|100380', 'child2');
addTree('1|100376|100377|100379|100381|100385', 'child2');
console.log('----addTree function----');
console.log(
	JSON.stringify(tree, null, ' ')
);