var Tree = function(id) {
	this.Id 			= id;
	this.children = {};
};

Tree.prototype.addTree = function(aggregateId) {
	if(aggregateId){
		var id = aggregateId.split('|')[0],
			remainder = aggregateId.split('|').slice(1).join('|');
		if(!this.Id[id]){
			this.Id = new Tree(id);
			// this.children = new;
		}
		// this.children = { Id: '100376', children: {} } 
		if(remainder) {
			this.children = new Tree(remainder.split('|')[0]);
			// this.children.addTree(remainder.split('|').slice(1).join('|'));
		}
	} else {
		// this.children['end'] = '*';
	}
}

var tree = new Tree('1');

tree.addTree('1|100376|100377');
// tree.addTree('1|100376|100377|100378');
// tree.addTree('1|100376|100377|100379');
// tree.addTree('1|100376');

console.log(JSON.stringify(tree, null, ' '));