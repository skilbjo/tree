function makeTree(tree) {
  if (!tree) return [];
  return Object.keys(tree) . map(function(key) {
      return { id: key, children: makeTree(tree[key]) };
  });
}

function addTree(tree, input) {
  function addNodes(node, ids) {
    if (!ids.length) return;                  // exit recursion when done
    var id = ids.shift();                     // pick off next id
    var subnode = node[id] = node[id] || { }; // find or create node
    addNodes(subnode, ids);                   // recursively update 
  }
  addNodes(tree, input.split('|'));
}

var input1 = '1|100376|100377|100378';
var input2 = '1|100376|100377|100380';
var input3 = '1|100376|100377|100380|100381';
var input4 = '1|100376|100377|100378|100390';
var tree = {};


addTree(tree, input1);
addTree(tree, input2);
addTree(tree, input3);
addTree(tree, input4);

function makeTree(tree){
	if(!tree) return [];
	return Object.keys(tree).map(function(key){
		return { id: key, children: makeTree(tree[key])};
	})
}

console.log(JSON.stringify(
	makeTree(tree)
	),null,' '
);

console.log(
JSON.stringify(tree,null,' ')
);